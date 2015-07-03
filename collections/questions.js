Questions = new Meteor.Collection('questions');

Schemas.Questions = new SimpleSchema({
  question: {
    type: String,
    label: 'Enter your question'
  }
});

Questions.attachSchema(Schemas.Questions);