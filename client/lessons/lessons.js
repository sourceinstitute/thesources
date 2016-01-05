Template.questionAndAnswer.helpers({

});

Template.questionAndAnswer.onRendered(function() { 
  console.log(Meteor.user());
  console.log(Meteor.userId());

  $('.questionForm').validate({
    submitHandler: function (form, event) {
      var o = {};
      var res = [];
      var userId;
      var lesson = document.getElementsByClassName("lesson-title")[0];

      if(lesson.getAttribute('data-lesson')) {
        lesson = lesson.getAttribute('data-lesson');
      } else {
        //todo handle no lesson name
      }

      //check user
      if(Meteor.userId()) {
        userId = Meteor.userId();
      } else {
        //todo handle no userID
      }

      //make lessonAnswers
      var currentLessonsAnswersId = LessonsAnswers.insert({
        title: lesson,
        userId: userId,
        userEmail: Meteor.user().emails[0].address
      });

      console.log('collection added with id: ');
      console.log(blah);
      var formData = $(".questionForm").serializeArray();
      $.each(formData, function(index) {
        var label = $('label[for="'+this.name+'"]');
        var questionType = document.getElementsByName(this.name)[0].type;
        o.questionString = label.text();
        o.questionNumber = this.name.substring(this.name.indexOf("n")+1);
        o.questionName = this.name;
        o.questionType = questionType;
        o.answer = this.value;

        res.push(o);
        o = {};

        //todo add answers in array
        //smth like
        /*
          LessonsAnswers.update({
            _id: currentLessonsAnswersId,
            title: lesson
          },
           $push{
            blah blah blah blah
           });
        */
      });
      var result = JSON.stringify(res);
      console.log(result);
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