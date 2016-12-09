#!/usr/bin/env node
var commander = require('commander');
var program = require('./lib/program.js');
var transl = require('./lib/transl.js');

var SaySomehting = require('say-something');
    saySomething = new SaySomehting({ language: 'pt-br' });
 
 //Say something 
 // saySomething.now('Eu estou falando!');
 
 //When start talking 
 // saySomething.on('talking', function (text) {
 //   console.log('Comecei a falar: ' + text);
 // });
 
 //After stop talking 
 // saySomething.on('done', function () {
 //   console.log('Terminei de falar');
 // });
commander
  .arguments('<language> <keyword>')
  .usage(program.help())
  .action(function(language) {
    var argumentsFormatted = program.formatCliArguments(language, arguments);

    transl.translate(
      argumentsFormatted.sourceLanguage,
      argumentsFormatted.translateLanguage,
      argumentsFormatted.keyword,
      true,
      function(result) {
        let _r = result.split(' ')
        let word = _r[_r.length-1]
        saySomething.now(word);
        console.log(result);
      }
    );
  })
  .parse(process.argv);
