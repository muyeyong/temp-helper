// const { promisify } = require('util')
// const download = promisify(require('download-git-repo'))
// const { getTemplateUrl } = require('../utils/config')

// // TODO 支持不同模板，拉取不同仓库的代码
//  async function createMicroApp(appName = 'subApp', templateType = 'Vue') {
//     const { result, success, message } = getTemplateUrl(templateType)
//     console.log(result)
//     if (success) {
       
//         // await download(`direct:${result}`, path.join(process.cwd(), projectName), { clone: true })
//     } else {

//     }
// }

// export default createMicroApp

const createMicroApp  = (appName: string) => {
    console.log('MicroApp', appName)
}

export default createMicroApp
