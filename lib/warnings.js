var chalk = require('chalk')

module.exports = {
  v2SuffixTemplatesDeprecated: function (template, name) {
    var initCommand = 'cooky init ' + template.replace('-2.0', '') + ' ' + name

    console.log(chalk.red('  This template is deprecated, as the original template now uses cooky 2.0 by default.'))
    console.log()
    console.log(chalk.yellow('  Please use this command instead: ') + chalk.green(initCommand))
    console.log()
  },
  v2BranchIsNowDefault: function (template, name) {
    var cooky1InitCommand = 'cooky init ' + template + '#1.0' + ' ' + name

    console.log(chalk.green('  This will install cooky 2.x version of the template.'))
    console.log()
    console.log(chalk.yellow('  For cooky 1.x use: ') + chalk.green(cooky1InitCommand))
    console.log()
  }
}
