"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTemplateUrl = exports.getTemplateUrl = void 0;
const fse = require('fs-extra');
const path = require('path');
function isUrl(url) {
    return /^https?:\/\/.+/.test(url);
}
const getTemplateTypes = (configObj) => {
    return Object.keys(configObj).map(config => config.replace('_GIT_TEMPLATE_URL', '').toLocaleLowerCase());
};
const getTemplateUrl = (template) => {
    template = template.toLocaleLowerCase();
    const configObj = fse.readJSONSync(path.join(__dirname, '../bin/config.json'));
    const templateTypes = getTemplateTypes(configObj);
    if (!templateTypes.includes(template)) {
        return { success: false, message: `仅支持${templateTypes.join('、')}类型模板` };
    }
    let result = '';
    switch (template) {
        case 'vue':
            result = configObj['VUE_GIT_TEMPLATE_URL'];
            break;
        case 'react':
            result = configObj['React_GIT_TEMPLATE_URL'];
            break;
        default:
            break;
    }
    return { success: true, result, message: `${template}模板url获取成功` };
};
exports.getTemplateUrl = getTemplateUrl;
const setTemplateUrl = (template, url) => {
    template = template.toLocaleLowerCase();
    if (!isUrl(url)) {
        return { success: false, message: `URL: ${url} 不合法` };
    }
    const configObj = fse.readJSONSync(path.join(__dirname, '../bin/config.json'));
    const templateTypes = getTemplateTypes(configObj);
    if (!templateTypes.includes(template)) {
        return { success: false, message: `仅支持${templateTypes.join('、')}类型模板` };
    }
    switch (template) {
        case 'vue':
            configObj['VUE_GIT_TEMPLATE_URL'] = url;
            break;
        case 'react':
            configObj['REACT_GIT_TEMPLATE_URL'] = url;
            break;
    }
    fse.writeJSONSync(path.join(__dirname, '../lib/config.json'), configObj);
    return { success: true, message: `${template}模板url设置成功` };
};
exports.setTemplateUrl = setTemplateUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMvQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFNUIsU0FBUyxLQUFLLENBQUUsR0FBVztJQUN6QixPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNuQyxDQUFDO0FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFNBQWMsRUFBRSxFQUFFO0lBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQTtBQUMxRyxDQUFDLENBQUE7QUFFRCxNQUFNLGNBQWMsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtJQUMxQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDdkMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDOUUsTUFBTSxhQUFhLEdBQUksZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDckMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUE7S0FDdkU7SUFDRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDZixRQUFRLFFBQVEsRUFBRTtRQUNoQixLQUFLLEtBQUs7WUFDUixNQUFNLEdBQUcsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDMUMsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLE1BQU0sR0FBRyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUM1QyxNQUFLO1FBQ1A7WUFDRSxNQUFNO0tBQ1Q7SUFDRCxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxXQUFXLEVBQUUsQ0FBQTtBQUNuRSxDQUFDLENBQUE7QUE0QkMsd0NBQWM7QUExQmhCLE1BQU0sY0FBYyxHQUFHLENBQUMsUUFBZ0IsRUFBRyxHQUFXLEVBQUUsRUFBRTtJQUN4RCxRQUFRLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFFdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEdBQUcsTUFBTSxFQUFDLENBQUE7S0FDckQ7SUFFRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtJQUM5RSxNQUFNLGFBQWEsR0FBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQTtLQUN2RTtJQUVELFFBQU8sUUFBUSxFQUFFO1FBQ2YsS0FBSyxLQUFLO1lBQ1IsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsR0FBRyxDQUFBO1lBQ3ZDLE1BQUs7UUFDUCxLQUFLLE9BQU87WUFDVixTQUFTLENBQUMsd0JBQXdCLENBQUMsR0FBRyxHQUFHLENBQUE7WUFDekMsTUFBSztLQUNSO0lBQ0QsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsV0FBVyxFQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFBO0FBSUMsd0NBQWMifQ==