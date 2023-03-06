"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const config_1 = require("../utils/config");
const path_1 = __importDefault(require("path"));
const template_1 = require("../type/template");
const download = (0, util_1.promisify)(download_git_repo_1.default);
async function downloadFromGit(appName, templateType) {
    if (templateType === 'vue')
        templateType = template_1.TemplateType.vueMicro;
    else if (templateType === 'react')
        templateType = template_1.TemplateType.reactMicro;
    const { result, success, message } = (0, config_1.getTemplateUrl)(templateType);
    if (success) {
        return await download(`direct:${result}`, path_1.default.join(process.cwd(), 'packages', appName), { clone: true });
    }
    else {
        return Promise.reject(new Error(message));
    }
}
exports.default = downloadFromGit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBaUM7QUFDakMsMEVBQTJDO0FBQzNDLDRDQUFnRDtBQUNoRCxnREFBdUI7QUFDdkIsK0NBQStDO0FBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUEsZ0JBQVMsRUFBQywyQkFBVyxDQUFDLENBQUE7QUFFdkMsS0FBSyxVQUFVLGVBQWUsQ0FBQyxPQUFlLEVBQUUsWUFBb0I7SUFDaEUsSUFBSSxZQUFZLEtBQUssS0FBSztRQUFFLFlBQVksR0FBRyx1QkFBWSxDQUFDLFFBQVEsQ0FBQTtTQUMzRCxJQUFHLFlBQVksS0FBSyxPQUFPO1FBQUUsWUFBWSxHQUFHLHVCQUFZLENBQUMsVUFBVSxDQUFBO0lBQ3hFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUEsdUJBQWMsRUFBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRSxJQUFJLE9BQU8sRUFBRTtRQUNULE9BQU8sTUFBTSxRQUFRLENBQUMsVUFBVSxNQUFNLEVBQUUsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtLQUMzRztTQUFNO1FBQ0gsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7S0FDNUM7QUFDTCxDQUFDO0FBRUQsa0JBQWUsZUFBZSxDQUFBIn0=