QuestionResponses = new Meteor.Collection('questionResponses');

Schemas.QuestionResponses = new SimpleSchema({
  // userId: {
  //   type: String,
  //   regEx: SimpleSchema.RegEx.Id,
  //   optional: true,
  //   autoValue: function(){
  //     if (this.isInsert) {
  //       Meteor.userId()
  //     }
  //   }
  // },
  questions: {
    type: [Object]
  },
  "questions.$.questionId": {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  "questions.$.answerGiven": {
    type: String,
    label: 'User response'
  },
  user:{
    type: String,
    optional: true
  }

});

QuestionResponses.attachSchema(Schemas.QuestionResponses);