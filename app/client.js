require('modules/menu');
require('vendor/peer.min');

var carlos = new Peer('carlos', {
  host: 's8f.org',
  key: 's8f'
});

var brian = new Peer('brian', {
  host: 's8f.org',
  key: 's8f'
});

var talktoBrian = carlos.connect('brian');
talktoBrian.on('open', function () {
  talktoBrian.send('hi!');
  console.log('said hi to brian');
});

brian.on('connection', function (conn) {
  conn.on('data', function (data) {
    console.log(data);
  });
});
