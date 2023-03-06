"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = require("chalk");
const index_1 = require("../action/index");
commander_1.program.command("addMicroApp").
    description((0, chalk_1.blue)("创建一个微应用")).
    action(index_1.createMicroApp);
commander_1.program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iaW4vZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5Q0FBa0M7QUFDbEMsaUNBQTRCO0FBRzVCLDJDQUFnRDtBQUdoRCxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDOUIsV0FBVyxDQUFDLElBQUEsWUFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxzQkFBYyxDQUFDLENBQUE7QUFHdEIsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBIn0=