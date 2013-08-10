personList = new Meteor.Collection('personList');

if (Meteor.isClient) {

    personList.insert({
        firstName: 'John',
        lastName: 'Doe',
        age: '46'
    });

    personList.insert({
        firstName: 'Jean',
        lastName: 'Dupont',
        age: '32'
    });

    personList.insert({
        firstName: 'Henri',
        lastName: 'Lebel'
    });

    Template.personList.persons = function() {
        return personList.find();
    }

    Template.person.events({
        'click a': function(target, item) {
            alert('you clicked: ' + item.data.firstName + ' ' + item.data.lastName);
        }
    });
}