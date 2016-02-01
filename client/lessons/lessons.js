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

Template.lessonAnswers.helpers({
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