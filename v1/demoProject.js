if (Meteor.isClient) {
  Template.person.firstName = function() {
    return "John";
  };
  Template.person.lastName = function() {
    return "Doe";
  };
  Template.person.age = function() {
    return "46";
  };
}
