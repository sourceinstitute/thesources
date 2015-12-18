Template.masterlayout.helpers({
    answers: function() {
        if (Meteor.user()) {
            return Meteor.user().profile.answers;
        }
    },
    answer: function(question) {
        lesson = Router.current().route.path(this);
        console.log('getting answer for ', lesson, question);
        if (Meteor.user()) {
            if (Meteor.user().profile.answers) {
                var answers = _.filter(Meteor.user().profile.answers, function (item) {
                    return item.lesson== lesson && item.question == question;
                });
                /*
                var answers = _.sortBy(answers, function (item) {
                    return item.createDate;
                });
                */
                return answers.pop();
            }
        }
    }
});

Template.masterlayout.events({
    "submit .answerform": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      console.log("answerform");

      var question = event.target.question.value;
      var answer = event.target.answer.value;
      
        Meteor.call('saveAnswer', {question: question, answer: answer}, function(error, response){
          if (error) {
            console.log("Something went wrong " + error);
            sweetAlert("Sorry, something went wrong. Try Again");
          } else{
            console.log('good');
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

