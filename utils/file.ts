
const fse = require('fs-extra')
const path = require('path')

const writeFile = (filePath: string, content: any) => {
  if (fse.existsSync(filePath)) {
    return { success: false, message: `${filePath}已经存在`}
  }
  fse.ensureFileSync(filePath)
  fse.writeFileSync(filePath, content)
  return { success: true, message: `${filePath}创建成功`}
}


module.exports = {
  writeFile
}