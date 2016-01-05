LessonsAnswers = new Mongo.Collection('lessonsAnswers');

//collection rules
LessonsAnswers.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Answer = new SimpleSchema({
  question: {
    type: String,
    label: 'Question'
  },
  questionNumber: {
    type: Number,
    label: 'Question number'
  },
  answerType: {
    type: String
  },
  answer: {
    type: String,
    label: 'Answer'
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    }
  }
});


LessonAnswersSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  userId: {
    type: String,
    label: 'UserId',
    autoValue: function() {
      return this.userId;
    }
  },
  userEmail: {
    type: String,
    label: 'User Email'
  },
  answers: {
    type: [Answer],
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  }
});
// Attach schema to collection
LessonsAnswers.attachSchema(LessonAnswersSchema);