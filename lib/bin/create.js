"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const config_1 = require("../utils/config");
const path_1 = __importDefault(require("path"));
const download = (0, util_1.promisify)(download_git_repo_1.default);
// TODO 支持不同模板，拉取不同仓库的代码
async function createMicroApp(appName = 'subApp', templateType = 'Vue') {
    const { result, success } = (0, config_1.getTemplateUrl)(templateType);
    if (success) {
        await download(`direct:${result}`, path_1.default.join(process.cwd(), appName), { clone: true });
    }
    else {
    }
}
exports.default = createMicroApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYmluL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFpQztBQUNqQywwRUFBMkM7QUFDM0MsNENBQWdEO0FBQ2hELGdEQUF1QjtBQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFBLGdCQUFTLEVBQUMsMkJBQVcsQ0FBQyxDQUFBO0FBRXZDLHdCQUF3QjtBQUN2QixLQUFLLFVBQVUsY0FBYyxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQUUsWUFBWSxHQUFHLEtBQUs7SUFDbkUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFBLHVCQUFjLEVBQUMsWUFBWSxDQUFDLENBQUE7SUFDeEQsSUFBSSxPQUFPLEVBQUU7UUFDVCxNQUFNLFFBQVEsQ0FBQyxVQUFVLE1BQU0sRUFBRSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7S0FDekY7U0FBTTtLQUVOO0FBQ0wsQ0FBQztBQUVELGtCQUFlLGNBQWMsQ0FBQSJ9