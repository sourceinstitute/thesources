Template.home.events({
  'submit form#questionsForm': function (e, t) {
    e.preventDefault();

    var currentUserId = Meteor.userId();

    var textareas= $('form textarea.answer');

    var array = [];

    console.log(textareas);
    _.each(textareas, function(textarea) {
      questionId = textarea.dataset.questionid;

      // console.log('questionId: ' + questionId);      
      // console.log('Answer: ' + textarea.value);

      question = Questions.findOne(questionId).question;
      
      if (currentUserId) {
        array.push(
        {
          currentUserId: currentUserId,
          questionContent: question,
          answerGiven: textarea.value
        })

      } else{
        array.push(
        {
          questionContent: question,
          answerGiven: textarea.value
        })
        Router.go('signup');
      };
    });


    console.log(array);
    Meteor.call('saveResponse', {questions: array}, function(error, response){
      if (error) {
        console.log("Something went wrong " + error);
        sweetAlert("Sorry, something went wrong. Try Again");
      } else{
        sweetAlert("Thanks, your answers have been recorded");
        document.getElementById('questionsForm').reset();

      }
    })
  },
  "keyup .answer": function(e,t){
    var value = e.currentTarget.value;
    if (value.length > 1) {
      $('#saveBtn').removeAttr("disabled");
    };
    if (value.length <= 1) {
      document.getElementById("saveBtn").disabled = true;
    };
  }
});

Template.registerHelper("getEmailAddress", function(){
  return Meteor.user().emails[0].address;
});

