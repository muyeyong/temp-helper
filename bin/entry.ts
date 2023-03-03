
import  {program } from"commander" // 配置命令
import { blue } from "chalk" // 彩色字体
import inquirer from "inquirer"
import createMicroApp from "./create"
// import ora from 'ora' // loading效果
// import figlet from 'figlet' // 艺术字
// const  createMicroApp  from'./create')

// 获取传入的路径，在哪里创建微应用
program.parse(process.argv)
console.log(blue('lvHelper'))
const NAME: any = '微应用名'

inquirer.prompt([ {
    name: NAME,
    type: "input",
    message: "请输入微应用名称(以Uni开头，大驼峰命名):",
    validate: function(input: string){
      return new RegExp(/^Uni[A-Z][a-z A-Z]+/g).test(input)
    }
  },]).then((input: string) => {
    const appName = input[NAME]
    console.log(appName)
    // 本地创建子应用
    createMicroApp(appName)
    // 拉去代码库
    // 修改主应用配置
  });

//   program.version(`lv-helper ${require("../package.json").version}`);