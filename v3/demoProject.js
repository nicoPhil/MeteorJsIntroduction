if (Meteor.isClient) {

    Template.personList.persons = function() {
        return [{
            firstName: 'John',
            lastName: 'Doe',
            age: '46'
        }, {
            firstName: 'Jean',
            lastName: 'Dupont',
            age: '32'
        }, {
            firstName: 'Henri',
            lastName: 'Lebel'
        }];
    }

    Template.person.events({
        'click a': function(target, item) {
            alert('you clicked:' + item.data.firstName + ' ' + item.data.lastName);
        }
    });
}