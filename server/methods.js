Meteor.methods({
  saveResponse: function (options) {
    console.log(options.questions.length);
    if (options){
      QuestionResponses.insert(options);
      return "Saved successfully";
    } else{
      throw new Meteor.Error (404, "Please define the required options field");
    }
    // for (var i = 0; i < options.questions.length; i++) {
    //   var value = options.questions[i];
    //   QuestionResponses.insert({
    //     user: value.currentUserId,
    //     questionId: value.questionId,
    //     answerGiven: value.answerGiven
    //   }, function(error, result){
    //     if (error) {
    //       console.log(error);
    //     }
    //     else {
    //       console.log(result);
    //     }
    //   });
    // };
  },
  saveAnswer: function (options) {
      console.log('saveAnswer');
      console.log(Meteor.user());
      console.log(options);

      var affected = Meteor.users.update(
      {
        _id: Meteor.userId()
      },{
        $addToSet: {'profile.answers': options}
      });

      console.log(affected);
      console.log(Meteor.user());

      return affected;
  }

 });
