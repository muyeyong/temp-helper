"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { getTemplateUrl } = require('../utils/config');
const path = require('path');
// TODO 支持不同模板，拉取不同仓库的代码
async function createMicroApp(appName = 'subApp', templateType = 'Vue') {
    const { result, success } = getTemplateUrl(templateType);
    if (success) {
        await download(`direct:${result}`, path.join(process.cwd(), appName), { clone: true });
    }
    else {
    }
}
exports.default = createMicroApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYmluL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDckMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7QUFDeEQsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUU1Qix3QkFBd0I7QUFDdkIsS0FBSyxVQUFVLGNBQWMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxFQUFFLFlBQVksR0FBRyxLQUFLO0lBQ25FLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3hELElBQUksT0FBTyxFQUFFO1FBQ1QsTUFBTSxRQUFRLENBQUMsVUFBVSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0tBQ3pGO1NBQU07S0FFTjtBQUNMLENBQUM7QUFFRCxrQkFBZSxjQUFjLENBQUEifQ==