var sendgrid  = require('sendgrid')('YOUR_SENDGRID_API_KEY');
sendgrid.send({
 to:       username + '@' + domain,
 from:     'admin@collabowrite.co',
 subject:  'I\'ve checked out your story!',
 text:     'Wassup!'
}, function(err, json) {
 if (err) { return console.error(err); }
 console.log(json);
});
