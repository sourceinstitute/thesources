Template.questionAndAnswer.helpers({

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
        lesson = lesson.getAttribute('data-lesson');
      } else {
        //todo handle no lesson name
      }

      if(Meteor.userId()) {
        userId = Meteor.userId();
      } else {
        //todo handle no userID
      }

      var currentLessonsAnswersId = LessonsAnswers.insert({
        title: lesson,
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
                answer: this.value
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