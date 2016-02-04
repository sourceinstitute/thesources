Meteor.startup(function() {
  process.env.MAIL_URL = 'smtp://ncerovac:sergio1101@smtp.sendgrid.net:587';

  //setup custom email template
  Accounts.emailTemplates.from = 'no-reply@whateverdomain.com'
  Accounts.emailTemplates.sitename = 'The Sources'

  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address'
  };

  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Click on the following link to verify your email address: ' + url
  };

  //same thing for recovery email

  Accounts.emailTemplates.resetPassword.subject = function(user) {
    return 'Reset your password'
  };

  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    return 'Click on the following link to reset your password: ' + url
  };

  Accounts.config({
    sendVerificationEmail: true
  });
});