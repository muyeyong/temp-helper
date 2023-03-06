"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTemplateUrl = exports.getTemplateUrl = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const templateGitSuffix = '_GIT_TEMPLATE_URL';
function isUrl(url) {
    return /^https?:\/\/.+/.test(url);
}
const getTemplateTypes = (configObj) => {
    return Object.keys(configObj).map(config => config.replace(templateGitSuffix, '').toLocaleLowerCase());
};
const getTemplateUrl = (template) => {
    template = template.toLocaleLowerCase();
    const configObj = fs_extra_1.default.readJSONSync(path_1.default.join(__dirname, '../bin/config.json'));
    const templateTypes = getTemplateTypes(configObj);
    if (!templateTypes.includes(template)) {
        return { success: false, message: `暂不支持${template}类型模板` };
    }
    let result = configObj[`${template.toUpperCase()}${templateGitSuffix}`] || '';
    return { success: result === '' ? false : true, result, message: result === '' ? `${template}模板url获取失败` : `${template}模板url获取成功` };
};
exports.getTemplateUrl = getTemplateUrl;
const setTemplateUrl = (template, url) => {
    template = template.toLocaleLowerCase();
    if (!isUrl(url)) {
        return { success: false, message: `URL: ${url} 不合法` };
    }
    const configObj = fs_extra_1.default.readJSONSync(path_1.default.join(__dirname, '../bin/config.json'));
    const templateTypes = getTemplateTypes(configObj);
    if (!templateTypes.includes(template)) {
        return { success: false, message: `仅支持${templateTypes.join('、')}类型模板` };
    }
    const key = `${template.toUpperCase()}${templateGitSuffix}`;
    if (key in configObj) {
        configObj[key] = url;
        fs_extra_1.default.writeJSONSync(path_1.default.join(__dirname, '../lib/config.json'), configObj);
        return { success: true, message: `${template}模板url设置成功` };
    }
    else {
        return { success: false, message: `${template}模板url设置失败` };
    }
};
exports.setTemplateUrl = setTemplateUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUEwQjtBQUMxQixnREFBd0I7QUFFeEIsTUFBTSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQTtBQUU3QyxTQUFTLEtBQUssQ0FBRSxHQUFXO0lBQ3pCLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ25DLENBQUM7QUFFRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsU0FBYyxFQUFFLEVBQUU7SUFDMUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO0FBQ3hHLENBQUMsQ0FBQTtBQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFO0lBQzFDLFFBQVEsR0FBRyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUN2QyxNQUFNLFNBQVMsR0FBRyxrQkFBRyxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDOUUsTUFBTSxhQUFhLEdBQUksZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sUUFBUSxNQUFNLEVBQUMsQ0FBQTtLQUN6RDtJQUVELElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxpQkFBaUIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsV0FBVyxFQUFFLENBQUE7QUFDcEksQ0FBQyxDQUFBO0FBeUJDLHdDQUFjO0FBdkJoQixNQUFNLGNBQWMsR0FBRyxDQUFDLFFBQWdCLEVBQUcsR0FBVyxFQUFFLEVBQUU7SUFDeEQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDZixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxHQUFHLE1BQU0sRUFBQyxDQUFBO0tBQ3JEO0lBRUQsTUFBTSxTQUFTLEdBQUcsa0JBQUcsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0lBQzlFLE1BQU0sYUFBYSxHQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFBO0tBQ3ZFO0lBQ0QsTUFBTSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQTtJQUMzRCxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7UUFDcEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtRQUNwQixrQkFBRyxDQUFDLGFBQWEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsV0FBVyxFQUFDLENBQUE7S0FDekQ7U0FBTTtRQUNMLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsV0FBVyxFQUFDLENBQUE7S0FDMUQ7QUFDSCxDQUFDLENBQUE7QUFJQyx3Q0FBYyJ9