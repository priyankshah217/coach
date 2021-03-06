(function() {
  'use strict';
  var url = document.URL;
  var connectionType = util.getConnectionType();
  var score = 100;
  var message = '';
  if (url.indexOf('https://') > -1 && connectionType.indexOf('h2') === -1)  {
    score = 0;
    message = 'The page is using HTTPS but not HTTP/2. Change to HTTP/2 to follow new best practice and make the site faster.';
  }

  return {
    id: 'httpsH2',
    title: 'Serve your content using HTTP/2',
    description: 'Using HTTP/2 together with HTTPS is the new best practice. If you use HTTPS (you should), you should also use HTTP/2.',
    advice: message,
    score: score,
    weight: 2,
    offending: [],
    tags: ['bestpractice']
  };
})();
