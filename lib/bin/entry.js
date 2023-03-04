"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import  {program } from"commander" // 配置命令
// import { blue } from "chalk" // 彩色字体
// import inquirer from "inquirer"
const create_1 = require("./create");
const inquirer = require('inquirer');
// import ora from 'ora' // loading效果
// import figlet from 'figlet' // 艺术字
// const  createMicroApp  from'./create')
// 获取传入的路径，在哪里创建微应用
const NAME = '微应用名';
inquirer.prompt([{
        name: NAME,
        type: "input",
        message: "请输入微应用名称(以Uni开头，大驼峰命名):",
        validate: function (input) {
            return new RegExp(/^Uni[A-Z][a-z A-Z]+/g).test(input);
        }
    },]).then((input) => {
    const appName = input[NAME];
    // 本地创建子应用
    (0, create_1.default)(appName);
    // 拉去代码库
    // 修改主应用配置
});
//   program.version(`lv-helper ${require("../package.json").version}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBNkM7QUFDN0MsdUNBQXVDO0FBQ3ZDLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3BDLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMseUNBQXlDO0FBRXpDLG1CQUFtQjtBQUNuQixNQUFNLElBQUksR0FBUSxNQUFNLENBQUE7QUFFeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFFO1FBQ2QsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsUUFBUSxFQUFFLFVBQVMsS0FBYTtZQUM5QixPQUFPLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3ZELENBQUM7S0FDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUMxQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsVUFBVTtJQUNWLElBQUEsZ0JBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUN2QixRQUFRO0lBQ1IsVUFBVTtBQUNaLENBQUMsQ0FBQyxDQUFDO0FBRUwsd0VBQXdFIn0=