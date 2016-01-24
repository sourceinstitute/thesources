Meteor.methods({
submitAnswer: function (lessonTitle, answerList) {
    var previousAnswer = LessonsAnswers.findOne({
      title: lessonTitle,
      userId: Meteor.userId()
    }, {
      createdAt: true, // TODO Make this work
      answers: true,
      history: true
    });
    
    var history = [];
    if (previousAnswer) {
      history = previousAnswer.history || [];
      history.push({
        createdAt: previousAnswer.createdAt,
        answers: previousAnswer.answers
      });
    }
    //todo make history write data in lessonsAnswers

    LessonsAnswers.update({
      title: lessonTitle,
      userId: Meteor.userId()
    }, {
      $set: {
        title: lessonTitle,
        userId: Meteor.userId(),
        userEmail: Meteor.user().emails[0].address,
        answers: answerList,
        history: history
      }
    }, {
      upsert: true
    });
  }
});
