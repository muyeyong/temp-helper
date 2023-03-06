"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander"); // 配置命令
const chalk_1 = require("chalk"); // 彩色字体
// import inquirer from "inquirer"
const index_1 = require("../action/index");
// import ora from 'ora' // loading效果
// import figlet from 'figlet' // 艺术字
commander_1.program.command("addMicroApp").
    description((0, chalk_1.blue)("创建一个微应用")).
    action(index_1.createMicroApp);
commander_1.program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBa0MsQ0FBQyxPQUFPO0FBQzFDLGlDQUE0QixDQUFDLE9BQU87QUFDcEMsa0NBQWtDO0FBRWxDLDJDQUFnRDtBQUNoRCxxQ0FBcUM7QUFDckMscUNBQXFDO0FBRXJDLG1CQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM5QixXQUFXLENBQUMsSUFBQSxZQUFJLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsTUFBTSxDQUFDLHNCQUFjLENBQUMsQ0FBQTtBQUd0QixtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEifQ==