const twitter = require('twitter');
const KEYS = require('./secret');

var T = new twitter({
  consumer_key: KEYS.CKEY,
  consumer_secret: KEYS.CSECRET,
  access_token_key: KEYS.AKEY,
  access_token_secret: KEYS.ASECRET
  //,
  //timeout_ms:           60*1000//,  // optional HTTP request timeout to apply to all requests.
  //strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

T.get('search/tweets', { q: '_youhadonejob1 filter:images', count: 100 }, function(err, data, response) {
  //console.log(data.statuses.map(x=>x.text))
 console.log(data.statuses.map(x=>x.entities).filter(e=>Object.keys(e).includes('media')).map(e=>e.media.map(m=>m.media_url_https)))
});

console.log('Twitter bot started');
