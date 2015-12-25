Answers = new Meteor.Collection('answers');

AnswerSchema = new SimpleSchema({
  lesson: {
    type: String,
    label: 'Lesson'
  },
  question: {
    type: String,
    label: 'Question'
  },
  questionNumber: {
    type: Number,
    label: 'Question number'
  },
  answer: {
    type: String,
    label: 'Answer'
  },
  userId: {
    type: String,
    label: 'User',
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    }
  }
});

// Attach schema to collection
Answers.attachSchema(AnswerSchema);