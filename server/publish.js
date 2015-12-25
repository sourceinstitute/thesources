Meteor.publish('answers', function() {
  return Answers.find({userId: this.userId});
});