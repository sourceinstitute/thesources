Template.questionAndAnswer.helpers({
  // todo fetch answers and fill form, pay attention how to work with radio/checkbox
  // this can happen when we have userId so if logedin user maybe no need to pay attention on that, we will see
  isAnswered: function(lessonTitle) {
    var isAnswered = LessonsAnswers.findOne({title: lessonTitle, userId: Meteor.userId()});
    if(typeof isAnswered === 'undefined'){
      return false;
    } else {
      return true;
    }
  },
  equal: function(string1, string2) {
    return string1 === string2;
  },
  equalPrevious: function(index, parent) {
    var answers = parent.answers;
    console.log(answers[index]);
    return (answers[index].questionNumber === answers[index-1].questionNumber) ? true : false;
  },
  lessonAnswers: function(lessonTitle) {
    console.log(lessonTitle);
    return LessonsAnswers.find({title: lessonTitle, userId: Meteor.userId()}, {sort: {createdAt: -1}, limit: 1}).fetch();
    //need to play now with it
  }
});

Template.questionAndAnswer.onRendered(function() { 
  console.log(Meteor.user());
  console.log(Meteor.userId());

  $('.questionForm').validate({
    submitHandler: function (form, event) {
      //todo if user submited answers already aka lessonsAnswers already exists, reject insert

      var userId;
      var lesson = document.getElementsByClassName("lesson-title")[0];

      if(lesson.getAttribute('data-lesson')) {
        var lessonTitle = lesson.getAttribute('data-lesson');
      } else {
        //todo handle no lesson name
      }

      if(Meteor.userId()) {
        userId = Meteor.userId();
      } else {
        //todo handle no userID
      }

      var currentLessonsAnswersId = LessonsAnswers.insert({
        title: lessonTitle,
        userId: userId,
        userEmail: Meteor.user().emails[0].address
      });
      
      var formData = $(".questionForm").serializeArray();

      $.each(formData, function(index) {
        var label = $('label[for="'+this.name+'"]');
        var questionType = document.getElementsByName(this.name)[0].type;
        var questionNumber = this.name.substring(this.name.indexOf("n")+1);
        
        LessonsAnswers.update(
          {
            _id: currentLessonsAnswersId
          },
          {
            $push: {
              answers : {
                question: label.text(),
                questionNumber: questionNumber,
                questionType: questionType,
                answer: this.value,
                version: 1
              }
            }
          },
          { validationContext: "updateForm" }
        );
      });
      event.preventDefault();
    }
  });
  //more custom validations http://meteortips.com/second-meteor-tutorial/validation/
});

Template.questionAndAnswer.events({
  /*
  "submit .questionForm": function (e) {
    
  }*/
});