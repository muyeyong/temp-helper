import  { promisify } from 'util'
import downloadGit from 'download-git-repo'
import { getTemplateUrl } from '../utils/config'
import path from 'path'
import { TemplateType } from '../type/template'
const download = promisify(downloadGit)

async function downloadFromGit(appName: string, templateType: string) {
    if (templateType === 'vue') templateType = TemplateType.vueMicro
    else if(templateType === 'react') templateType = TemplateType.reactMicro
    const { result, success, message } = getTemplateUrl(templateType)
    if (success) {
        return await download(`direct:${result}`, path.join(process.cwd(),'packages', appName), { clone: true })
    } else {
        return Promise.reject(new Error(message))
    }
}

export default downloadFromGit

