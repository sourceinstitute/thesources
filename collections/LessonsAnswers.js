LessonsAnswers = new Mongo.Collection('lessonsAnswers');


//collection rules
LessonsAnswers.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
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
  questionType: {
    type: String
  },
  answer: {
    type: String,
    label: 'Answer'
  },
  version: {
    type: Number,
    label: 'version'
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    },
    denyUpdate: true
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
  history: {
    type: [{
      createdAt: {
        type: Date,
        autoValue: function() {
          if (this.isInsert) {
            return new Date();
          } else if (this.isUpsert) {
            return {$setOnInsert: new Date()};
          } else {
            this.unset();
          }
        },
        denyUpdate: true
      },
      answers: [Answer]
    }],
    optional: true,
    blackbox: true
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  }
});
// Attach schema to collection
LessonsAnswers.attachSchema(LessonAnswersSchema);