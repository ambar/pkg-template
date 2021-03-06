const {execSync} = require('child_process')
const sh = (cmd) => execSync(cmd).toString().trim()

module.exports = async (
  {src, dest, pipeline, template},
  {name, install, gitInit}
) => {
  const username = sh('git config user.name')
  await pipeline(src('template/**'), template({name, username}), dest())
  await install()
  await gitInit()
}
