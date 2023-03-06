import inquirer from 'inquirer'
import downloadFromGit from '../utils/down'
import ora from 'ora'
import fse from 'fs-extra'
import path from 'path'
import { green, red } from "chalk"
import { createRouteConfig, createViteConfig } from '../dynicConfig/index'

const NAME: any = '微应用名'
const TYPE: any = '微应用类别'
const spinner = ora('开始下载...')
spinner.color = 'blue'

function getUrlPort(url){
    var protocolReg = /^\w+:\/\//;
    if(!protocolReg.test(url)){
        url = "http://"+url
    }
    return new URL(url).port
};

const updateMainAppMicronConfig = (appName: string, appType: string) => {
    const newConfig = {
        name: appName,
        type: appType,
        devEntry: '',
        entry: '',   
        container: '#subapp-container',   
        activeRule: `/${appName}/`,
        props: {}
    }
    const configPath = path.join(process.cwd(), 'packages', 'main', 'micro.config.json')
    const configObj = fse.readJSONSync(configPath)
    const { apps } = configObj
    const ports = apps.map(app => {
        return getUrlPort(app.entry)
    })
    const newPort = Number(ports.sort().pop()) + 1
    const newEntry = `http://localhost:${newPort}`
    newConfig.devEntry = newEntry
    newConfig.entry = newEntry
    apps.push(newConfig)
    fse.writeJSONSync(configPath, apps)
    return newConfig
}

const dynicGenerationMicroConfig = (appName: string, appPort: number | string) => {
    try {
        const cwd = process.cwd()
        const viteConfig = createViteConfig(appName, appPort)
        const routConfig = createRouteConfig(appName)
        const viteConfigPath = path.join(cwd,'packages', appName, 'vite.config.ts')
        const routConfigPath = path.join(cwd, 'packages', appName, 'src', 'router', 'index.ts')
        const packagePath = path.join(cwd, 'packages', appName, 'package.json')
        fse.writeFileSync(viteConfigPath, viteConfig)
        fse.writeFileSync(routConfigPath, routConfig)
        const packageObj = fse.readJSONSync(packagePath)
        packageObj.name = appName
        fse.writeJSONSync(packagePath, packageObj)
        console.log(green('配置修改完成'))
    } catch (error) {
        console.log(red(error))
    }
}

const createMicroApp = () => {
    inquirer.prompt([
        {
            name: TYPE,
            type: 'list',
            message: '请选择创建微应用的类别',
            choices: ['vue']
        },
        {
        name: NAME,
        type: 'input',
        message: '请输入微应用名称(以Uni开头，大驼峰命名):',
        validate: function(input: string){
          return new RegExp(/^Uni[A-Z][a-z A-Z]+/g).test(input)
        }
      },]).then((input: string) => {
        const appName = input[NAME]
        const appType = input[TYPE]
        spinner.start()
        downloadFromGit(appName, appType).then(() => {
            spinner.succeed('下载成功^^')
            const newConfig = updateMainAppMicronConfig(appName, appType)
            const port = getUrlPort(newConfig.entry)
            dynicGenerationMicroConfig(appName, port)
        }).catch((err) => {
            spinner.fail(`下载失败:${err}`)
        })
    });
}

export default createMicroApp
