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

  user: {
    type: String,
    optional: true
  },
  questions: {
    type: [Object]
  },
  "questions.$.questionContent": {
    type: String
  },
  "questions.$.answerGiven": {
    type: String
  }

});

QuestionResponses.attachSchema(Schemas.QuestionResponses);