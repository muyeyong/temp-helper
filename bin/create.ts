const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { getTemplateUrl } = require('../utils/config')
const path = require('path')

// TODO 支持不同模板，拉取不同仓库的代码
 async function createMicroApp(appName = 'subApp', templateType = 'Vue') {
    const { result, success } = getTemplateUrl(templateType)
    if (success) {
        await download(`direct:${result}`, path.join(process.cwd(), appName), { clone: true })
    } else {

    }
}

export default createMicroApp

