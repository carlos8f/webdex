var crypto = require('crypto');

exports.id = crypto.createHash('sha1')
  .update(crypto.randomBytes(16))
  .digest('hex');

require('../vendor/peer.min');

exports.peer = new Peer(exports.id, {
  host: 's8f.org',
  key: 's8f'
});

exports.peer.on('open', function (id) {
  console.log('opened peer', id);
});
