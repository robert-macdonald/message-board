
Messages = new Mongo.Collection('messages');

if (Meteor.isClient){
    Template.listing.helpers({
       entries: function () {
           return Messages.find();
       },
        formattedDate: function () {
            if (this.date){
                return moment(this.date).format("ddd, h:mm:ss a");
            } else {
                return "";
            }
        }
    });

    Template.newMessage.events({
        'submit #entryForm': function (event) {
            event.preventDefault();

            var m = event.target.querySelector('#content').value;

            Messages.insert({content: m, date: new Date()});

            event.target.reset();
        }
    });
}