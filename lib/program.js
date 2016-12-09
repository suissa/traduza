var transl = require('./transl.js');
var flags = require('./flags.js').flags;

var Program = {
  formatCliArguments: function(language, arguments, callback) {
    // Get multiple words without ''
    var keyword = arguments[2].rawArgs.splice(3, arguments[2].rawArgs.length).join(' ');

    // check if exist a source language
    if (language.indexOf(':') > -1) {
      var sourceLanguage = language.split(':')[0];
      var translateLanguage = language.split(':')[1];
    } else { // If not exist a source language set auto
      var sourceLanguage = 'auto';
      var translateLanguage = language;
    }

    return {
      sourceLanguage: sourceLanguage,
      translateLanguage: translateLanguage,
      keyword: keyword
    }
  },

  help: function() {
    return '\
< en | pt-br:en > <keyword>\n\
  Examples: \n\n\
    transl pt Hello World!\n\
    transl pt-br:en Olá mundo!\n\n\
  Supported Languages: \n\n' +
    this.getHelpFlags();
  },

  // Mount the list of supported languages
  getHelpFlags: function() {
    var itemsPerLine = 5;
    var content = '    ';
    var cont = 0;

    for (var flag in flags) {
      content += '' + flags[flag] + '  ' + flag + ((flag.length === 2) ? '     ' : '  ');

      cont++;
      if (cont % itemsPerLine === 0) content += '\n    ';
    }

    return content;
  }
};

module.exports = Program;
