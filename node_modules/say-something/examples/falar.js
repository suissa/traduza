var SaySomehting = require('say-something');
    saySomething = new SaySomehting({ language: 'pt-br' });

//Fala alguma coisa
saySomething.now('Eu estou falando!');

//Quando começar a falr
saySomething.on('talking', function (text) {
  console.log('Estou falando: ' + text);
});

//Quando terminar de falar
saySomething.on('done', function () {
  console.log('Eu terminei de falar');
});
