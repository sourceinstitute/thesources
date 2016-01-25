UI.registerHelper('shareOnFacebookLink', function() {
  return 'https://www.facebook.com/sharer/sharer.php?&appId=707931656006995&u=' + Meteor.absoluteUrl(FlowRouter.current().path.replace(/^\//, ''));
});

UI.registerHelper('shareOnTwitterLink', function(lessonTitle) {
  return 'https://twitter.com/intent/tweet?url=' + Meteor.absoluteUrl(FlowRouter.current().path.replace(/^\//, '')) + '&text=' + lessonTitle + '&via=sourceinst';
});

UI.registerHelper('shareOnGooglePlusLink', function() {
  return 'https://plus.google.com/share?url=' + Meteor.absoluteUrl(FlowRouter.current().path.replace(/^\//, ''));
});

UI.registerHelper('shareLink', function() {
  return Meteor.absoluteUrl(FlowRouter.current().path.replace(/^\//, ''));
});

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
    return (answers[index].questionNumber === answers[index-1].questionNumber) ? true : false;
  },
  lessonAnswers: function(lessonTitle) {
    return LessonsAnswers.find({title: lessonTitle, userId: Meteor.userId()}, {sort: {createdAt: -1}, limit: 1}).fetch();
    //need to play now with it
  }
});

Template.questionAndAnswer.onRendered(function() { 

  //more custom validations http://meteortips.com/second-meteor-tutorial/validation/
});

Template.questionAndAnswer.events({
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

Template.questionAndAnswerTwo.helpers({
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

Template.questionAndAnswerTwo.onRendered(function() { 
  //more custom validations http://meteortips.com/second-meteor-tutorial/validation/
});

Template.questionAndAnswerTwo.events({
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