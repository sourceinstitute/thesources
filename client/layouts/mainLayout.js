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

Template.mainLayout.rendered = function(){
  if (!this.rendered){
    // run my code
    if (typeof this.data.title !== 'undefined') {
    SEO.set({
      title: this.data.title(),
      description: 'Description for this template',
      meta: {
        'name="twitter:image"' : (typeof this.data.slug !== 'undefined')? Meteor.absoluteUrl()+'images/thumbnails/'+this.data.slug()+'.jpg': Meteor.absoluteUrl()+'images/thumbnails/default.jpg',
        'property="og:title"' : this.data.title(),
        'property="og:image"': (typeof this.data.slug !== 'undefined')? Meteor.absoluteUrl()+'images/thumbnails/'+this.data.slug()+'.jpg': Meteor.absoluteUrl()+'images/thumbnails/default.jpg'
      }
    });
  }
    this.rendered = true;
  }
};

Template.mainLayout.onCreated(function() {
  //check if this.data.lesson() exists and then change seo
  
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