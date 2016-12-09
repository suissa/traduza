var request = require('request');
var flags = require('./flags.js').flags;

var Transl = {
  // Get the translation in Google
  translate: function(sourceLanguage, translateLanguage, keyword, format, callback) {
    var baseURL = 'https://translate.google.com/translate_a/single?client=gtx&ie=UTF-8&oe=UTF-8&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at';
    var self = this;

    request.get(baseURL + '&sl=' + sourceLanguage + '&tl=' + translateLanguage + '&q=' + encodeURIComponent(keyword), function (error, response, body) {
      if (!error && response.statusCode === 200) {
        if (format) {
          callback(self.formatResult(
            sourceLanguage,
            translateLanguage,
            keyword,
            body.split('"')[1]
          ));
        } else {
          callback(body.split('"')[1]);
        }
      } else {
        callback(error)
      }
    });
  },

  // Format the display result
  formatResult: function(sourceLanguage, translateLanguage, keyword, result) {
    var message = this.getFlag(translateLanguage) + ' ' + result;

    // check if exist a source language
    if (sourceLanguage !== 'auto') {
      message = this.getFlag(sourceLanguage) + ' ' + keyword + '\n' + message;
    }

    return message;
  },

  // Get the language emoji flag
  getFlag: function(language) {
    return (flags[language] === undefined) ? '⚡ ' : flags[language] + ' ';
  }
};

module.exports = Transl;
