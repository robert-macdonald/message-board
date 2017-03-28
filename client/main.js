
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

            //prevents reload
            event.preventDefault();

            //selects the text area with message
            var m = event.target.querySelector('#content').value;

            //writes data to database
            Messages.insert({content: m, date: new Date()});

            //resets form
            event.target.reset();
        }
    });
}