#!/usr/bin/env node
const commander = require('commander')
const program = require('./lib/program.js')
const transl = require('./lib/transl.js')

const SaySomehting = require('say-something')
 
commander
  .arguments('<language> <keyword>')
  .usage(program.help())
  .action(function(language) {
    const argumentsFormatted = program.formatCliArguments(language, arguments)

    saySomething = new SaySomehting({language})
    transl.translate(
      argumentsFormatted.sourceLanguage,
      argumentsFormatted.translateLanguage,
      argumentsFormatted.keyword,
      true,
      function(result) {
        let _r = result.split(' ')
        let word = _r.slice(1).join(' ')
        saySomething.now(word)
        console.log(word, result)
      }
    )
  })
  .parse(process.argv)
