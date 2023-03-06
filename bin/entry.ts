
import  {program } from"commander"
import { blue } from "chalk" 


import { createMicroApp } from '../action/index'


program.command("addMicroApp").
description(blue("创建一个微应用")).
action(createMicroApp)


program.parse(process.argv)