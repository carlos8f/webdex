// Compatibility shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

requirejs.config({
  paths: {
    'jquery': 'vendor/jquery.min',
    'bootstrap': 'vendor/bootstrap.min',
    'peer': 'vendor/peer.min',
    'react': 'vendor/react.min',
    'JSXTransformer': 'vendor/JSXTransformer',
    'menu': 'modules/menu'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'bootstrap': {
      exports: 'Bootstrap',
      deps: ['jquery']
    },
    'peer': {
      exports: 'Peer'
    },
    'react': {
      exports: 'React',
      deps: ['JSXTransformer']
    }
  }
});

require('client');
