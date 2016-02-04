Template.mainLayout.helpers({
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
    return (answers[index].questionNumber === answers[index-1].questionNumber) ? true : false;
  },
  lessonAnswers: function(lessonTitle) {
    return LessonsAnswers.find({title: lessonTitle, userId: Meteor.userId()}, {sort: {createdAt: -1}, limit: 1}).fetch();
    //need to play now with it
  }
});

Template.mainLayout.onCreated(function() {
  //check if this.data.lesson() exists and then change seo
  /*
  SEO.set({
    title: lessonTitle,
    description: 'Description for this template',
    meta: {
      'property="og:image"': 'http://locationofimage.com/image.png'
    }
  });*/
  
});

Template.mainLayout.events({
  "submit .questionForm, blur textarea, change input": function (e) {
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

      var formData = $(".questionForm").serializeArray();

      var answerList = $.map(formData, function(a) {
        console.log(a);
        var label = $('label[for="'+a.name+'"]');
        var questionType = document.getElementsByName(a.name)[0].type;
        var questionNumber = a.name.substring(a.name.indexOf("n")+1);
        return {
          question: label.text(),
          questionNumber: questionNumber,
          questionType: questionType,
          answer: a.value || "Nothing",
          version: 1
        };
      });

      Meteor.call('submitAnswer', lessonTitle, answerList);

      e.preventDefault();
  }
});