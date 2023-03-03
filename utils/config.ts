const fse = require('fs-extra')
const path = require('path')

function isUrl (url: string) {
  return /^https?:\/\/.+/.test(url)
}

const getTemplateTypes = (configObj: any) => {
  return Object.keys(configObj).map(config => config.replace('_GIT_TEMPLATE_URL', '').toLocaleLowerCase())
}

const getTemplateUrl = (template: string) => {
  template = template.toLocaleLowerCase()
  const configObj = fse.readJSONSync(path.join(__dirname, '../bin/config.json'))
  const templateTypes =  getTemplateTypes(configObj)
  if (!templateTypes.includes(template)) {
    return { success: false, message: `仅支持${templateTypes.join('、')}类型模板`}
  }
  let result = ''
  switch (template) {
    case 'vue':
      result = configObj['VUE_GIT_TEMPLATE_URL']
      break;
    case 'react':
      result = configObj['React_GIT_TEMPLATE_URL']
      break
    default:
      break;
  }
  return { success: true, result, message: `${template}模板url获取成功` }
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
 
  switch(template) {
    case 'vue': 
      configObj['VUE_GIT_TEMPLATE_URL'] = url
      break
    case 'react': 
      configObj['REACT_GIT_TEMPLATE_URL'] = url
      break
  }
  fse.writeJSONSync(path.join(__dirname, '../lib/config.json'), configObj)
  return { success: true, message: `${template}模板url设置成功`}
}

export {
  getTemplateUrl,
  setTemplateUrl
}