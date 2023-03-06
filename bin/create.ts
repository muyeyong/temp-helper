import  { promisify } from 'util'
import downloadGit from 'download-git-repo'
import { getTemplateUrl } from '../utils/config'
import path from 'path'
const download = promisify(downloadGit)

// TODO 支持不同模板，拉取不同仓库的代码
 async function createMicroApp(appName = 'subApp', templateType = 'Vue') {
    const { result, success } = getTemplateUrl(templateType)
    if (success) {
        await download(`direct:${result}`, path.join(process.cwd(), appName), { clone: true })
    } else {

    }
}

export default createMicroApp

