import fse from 'fs-extra'
import  path from 'path'

const templateGitSuffix = '_GIT_TEMPLATE_URL'

function isUrl (url: string) {
  return /^https?:\/\/.+/.test(url)
}

const getTemplateTypes = (configObj: any) => {
  return Object.keys(configObj).map(config => config.replace(templateGitSuffix, '').toLocaleLowerCase())
}

const getTemplateUrl = (template: string) => {
  template = template.toLocaleLowerCase()
  const configObj = fse.readJSONSync(path.join(__dirname, '../bin/config.json'))
  const templateTypes =  getTemplateTypes(configObj)
  if (!templateTypes.includes(template)) {
    return { success: false, message: `暂不支持${template}类型模板`}
  }

  let result = configObj[`${template.toUpperCase()}${templateGitSuffix}`] || ''
  return { success: result === '' ? false : true, result, message: result === '' ? `${template}模板url获取失败` : `${template}模板url获取成功` }
}

const setTemplateUrl = (template: string,  url: string) => {
  template = template.toLocaleLowerCase()

  if (!isUrl(url)) {
    return { success: false, message: `URL: ${url} 不合法`}
  }

  const configObj = fse.readJSONSync(path.join(__dirname, '../bin/config.json'))
  const templateTypes =  getTemplateTypes(configObj)
  if (!templateTypes.includes(template)) {
    return { success: false, message: `仅支持${templateTypes.join('、')}类型模板`}
  }
  const key = `${template.toUpperCase()}${templateGitSuffix}`
  if (key in configObj) {
    configObj[key] = url
    fse.writeJSONSync(path.join(__dirname, '../lib/config.json'), configObj)
    return { success: true, message: `${template}模板url设置成功`}
  } else {
    return { success: false, message: `${template}模板url设置失败`}
  }
}

export {
  getTemplateUrl,
  setTemplateUrl
}