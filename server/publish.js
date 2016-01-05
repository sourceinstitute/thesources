Meteor.publish('lessonsAnswers', function() {
  return LessonsAnswers.find({userId: this.userId});
});