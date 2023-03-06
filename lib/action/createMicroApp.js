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
    const newPort = Number(ports.sort().pop()) + 1;
    const newEntry = `http://localhost:${newPort}`;
    newConfig.devEntry = newEntry;
    newConfig.entry = newEntry;
    apps.push(newConfig);
    fs_extra_1.default.writeJSONSync(configPath, apps);
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
        }).catch((err) => {
            spinner.fail(`下载失败:${err}`);
        });
    });
};
exports.default = createMicroApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTWljcm9BcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hY3Rpb24vY3JlYXRlTWljcm9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBK0I7QUFDL0IseURBQTJDO0FBQzNDLDhDQUFxQjtBQUNyQix3REFBMEI7QUFDMUIsZ0RBQXVCO0FBQ3ZCLGlDQUFrQztBQUNsQyxnREFBMEU7QUFFMUUsTUFBTSxJQUFJLEdBQVEsTUFBTSxDQUFBO0FBQ3hCLE1BQU0sSUFBSSxHQUFRLE9BQU8sQ0FBQTtBQUN6QixNQUFNLE9BQU8sR0FBRyxJQUFBLGFBQUcsRUFBQyxTQUFTLENBQUMsQ0FBQTtBQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQTtBQUV0QixTQUFTLFVBQVUsQ0FBQyxHQUFHO0lBQ25CLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUM5QixJQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQztRQUN0QixHQUFHLEdBQUcsU0FBUyxHQUFDLEdBQUcsQ0FBQTtLQUN0QjtJQUNELE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFBO0FBQzVCLENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUNuRSxNQUFNLFNBQVMsR0FBRztRQUNkLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO1FBQ1QsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixVQUFVLEVBQUUsSUFBSSxPQUFPLEdBQUc7UUFDMUIsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFBO0lBQ0QsTUFBTSxVQUFVLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFF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