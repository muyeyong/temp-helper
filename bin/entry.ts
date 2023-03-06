
import  {program } from"commander" // 配置命令
import { blue } from "chalk" // 彩色字体
// import inquirer from "inquirer"

import { createMicroApp } from '../action/index'
// import ora from 'ora' // loading效果
// import figlet from 'figlet' // 艺术字

program.command("addMicroApp").
description(blue("创建一个微应用")).
action(createMicroApp)


program.parse(process.argv)