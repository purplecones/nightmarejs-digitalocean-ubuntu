var CronJob = require('cron').CronJob;
var Nightmare = require('nightmare');

new CronJob('* * * * *', function() {
  console.log('starting nightmarejs');
  var nightmare = Nightmare({
    show: false,
    webPreferences: {
      partition: 'nopersist'
    }
  });

  nightmare
    .goto('http://yahoo.com')
    .type('form[action*="/search"] [name=p]', 'github nightmare')
    .click('form[action*="/search"] [type=submit]')
    .wait('#main')
    .evaluate(function () {
      console.log('evaluate');
      return document.querySelector('#main .searchCenterMiddle li a').href;
    })
    .end()
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });
}, null, true, 'America/Los_Angeles');
