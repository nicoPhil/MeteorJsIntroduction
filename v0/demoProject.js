console.log('hello from both');

if (Meteor.isClient) {
  console.log('hello from client');
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    console.log('hello from server');
  });
}