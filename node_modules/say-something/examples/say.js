var SaySomehting = require('say-something');
    saySomething = new SaySomehting();

//Say something
saySomething.now('I am talking to you!');

//When start talking
saySomething.on('talking', function (text) {
  console.log("I'm saying: " + text);
});

//After stop talking
saySomething.on('done', function () {
  console.log("I'm done talking");
});
