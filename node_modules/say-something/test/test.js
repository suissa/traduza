var should   = require('should'),
    events   = require('events'),
    SaySomething = require('../lib/say-something'),
    saySometing;

beforeEach(function () {
  saySometing = new SaySomething();
});

describe('SaySomething class', function () {
  it('should be an instance of SaySomething class', function () {
    var saySomethingInstance    = SaySomething(),
        newSaySomethingInstance = new SaySomething();

    saySomethingInstance.should.be.an.instanceOf(SaySomething);
    newSaySomethingInstance.should.be.an.instanceOf(SaySomething);
  });

  it('should be an instance of EventEmitter', function () {
    saySometing.should.be.an.instanceOf(events.EventEmitter);
  });
});


describe('SaySomething method', function () {
  it('now should be a function', function () {
    saySometing.now.should.be.instanceof(Function);
  });

  it('_getUrl should be a function', function () {
    saySometing._getUrl.should.be.instanceof(Function);
  });
});

