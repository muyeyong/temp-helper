"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const down_1 = __importDefault(require("../utils/down"));
const ora_1 = __importDefault(require("ora"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = require("chalk");
const child_process_1 = require("child_process");
const index_1 = require("../dynicConfig/index");
const NAME = '微应用名';
const TYPE = '微应用类别';
const spinner = (0, ora_1.default)('开始下载...');
spinner.color = 'blue';
function getUrlPort(url) {
    var protocolReg = /^\w+:\/\//;
    if (!protocolReg.test(url)) {
        url = "http://" + url;
    }
    return new URL(url).port;
}
;
const updateMainAppMicronConfig = (appName, appType) => {
    const newConfig = {
        name: appName,
        type: appType,
        devEntry: '',
        entry: '',
        container: '#subapp-container',
        activeRule: `/${appName}/`,
        props: {}
    };
    const configPath = path_1.default.join(process.cwd(), 'packages', 'main', 'micro.config.json');
    const configObj = fs_extra_1.default.readJSONSync(configPath);
    const { apps } = configObj;
    const ports = apps.map(app => {
        return getUrlPort(app.entry);
    });
    const newPort = ports.length > 0 ? Number(ports.sort().pop()) + 1 : 8000;
    const newEntry = `http://localhost:${newPort}`;
    newConfig.devEntry = newEntry;
    newConfig.entry = newEntry;
    apps.push(newConfig);
    fs_extra_1.default.writeJSONSync(configPath, { apps });
    return newConfig;
};
const dynicGenerationMicroConfig = (appName, appPort) => {
    try {
        const cwd = process.cwd();
        const viteConfig = (0, index_1.createViteConfig)(appName, appPort);
        const routConfig = (0, index_1.createRouteConfig)(appName);
        const viteConfigPath = path_1.default.join(cwd, 'packages', appName, 'vite.config.ts');
        const routConfigPath = path_1.default.join(cwd, 'packages', appName, 'src', 'router', 'index.ts');
        const packagePath = path_1.default.join(cwd, 'packages', appName, 'package.json');
        fs_extra_1.default.mkdirSync(path_1.default.join(cwd, 'packages', appName, 'src', 'router'));
        fs_extra_1.default.writeFileSync(viteConfigPath, viteConfig);
        fs_extra_1.default.writeFileSync(routConfigPath, routConfig);
        const packageObj = fs_extra_1.default.readJSONSync(packagePath);
        packageObj.name = appName;
        fs_extra_1.default.writeJSONSync(packagePath, packageObj);
        console.log((0, chalk_1.green)('配置修改完成'));
    }
    catch (error) {
        console.log((0, chalk_1.red)(error));
    }
};
const beautiful = (appName) => {
    const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
    const child1 = (0, child_process_1.spawn)(command, ['install'], { stdio: 'inherit', cwd: process.cwd() });
    const child2 = (0, child_process_1.spawn)(command, ['run', 'prettier'], { stdio: 'inherit', cwd: process.cwd() });
    child1.on('close', () => {
        console.log((0, chalk_1.green)(`${appName}依赖下载完成`));
    });
    child2.on('close', () => {
        console.log((0, chalk_1.green)('格式化代码完成'));
    });
};
const createMicroApp = () => {
    inquirer_1.default.prompt([
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
            validate: function (input) {
                return new RegExp(/^Uni[A-Z][a-z A-Z]+/g).test(input);
            }
        },
    ]).then((input) => {
        const appName = input[NAME];
        const appType = input[TYPE];
        spinner.start();
        (0, down_1.default)(appName, appType).then(() => {
            spinner.succeed('下载成功^^');
            const newConfig = updateMainAppMicronConfig(appName, appType);
            const port = getUrlPort(newConfig.entry);
            dynicGenerationMicroConfig(appName, port);
            beautiful(appName);
        }).catch((err) => {
            spinner.fail(err);
        });
    });
};
exports.default = createMicroApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTWljcm9BcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hY3Rpb24vY3JlYXRlTWljcm9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBK0I7QUFDL0IseURBQTJDO0FBQzNDLDhDQUFxQjtBQUNyQix3REFBMEI7QUFDMUIsZ0RBQXVCO0FBQ3ZCLGlDQUFrQztBQUNsQyxpREFBcUM7QUFDckMsZ0RBQTBFO0FBRTFFLE1BQU0sSUFBSSxHQUFRLE1BQU0sQ0FBQTtBQUN4QixNQUFNLElBQUksR0FBUSxPQUFPLENBQUE7QUFDekIsTUFBTSxPQUFPLEdBQUcsSUFBQSxhQUFHLEVBQUMsU0FBUyxDQUFDLENBQUE7QUFDOUIsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7QUFFdEIsU0FBUyxVQUFVLENBQUMsR0FBRztJQUNuQixJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDOUIsSUFBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDdEIsR0FBRyxHQUFHLFNBQVMsR0FBQyxHQUFHLENBQUE7S0FDdEI7SUFDRCxPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQTtBQUM1QixDQUFDO0FBQUEsQ0FBQztBQUVGLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLEVBQUU7SUFDbkUsTUFBTSxTQUFTLEdBQUc7UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULFNBQVMsRUFBRSxtQkFBbUI7UUFDOUIsVUFBVSxFQUFFLElBQUksT0FBTyxHQUFHO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1osQ0FBQTtJQUNELE1BQU0sVUFBVSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxF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