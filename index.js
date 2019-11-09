const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://8d1617ec973f42eca855d55f43c2f565@sentry.io/1814050' });

Sentry.configureScope(function(scope) {
 scope.setTag("5835512013", "Kanapong Bunlaor");
 scope.setUser({
   email: "zpiderx.knp@gmail.com",
   username: "knpblo"
 });
});

myUndefinedFunction();