personList = new Meteor.Collection('personList');

if (Meteor.isClient) {


    Template.addPerson.events({
        "click button": function(target, templ) {
            var firstName, lastName, age;
            firstName = templ.find(".firstname").value;
            lastName = templ.find(".lastname").value;
            age = templ.find(".age").value;

            personList.insert({
                firstName: firstName,
                lastName: lastName,
                age: age
            });
        }
    });

    Template.personList.persons = function() {
        return personList.find();
    }

    Template.person.events({
        'click button': function(target, templ) {
            console.log(templ.data._id);
            personList.remove({
                _id: templ.data._id
            });
        }
    });
}