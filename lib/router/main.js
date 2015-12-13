Router.configure({
  layoutTemplate: 'masterlayout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    data: function(){
      var currentUserId = Meteor.userId();
  
      return {
        question: Questions.find().fetch(),
        user: Meteor.user()
      }     
    }
  })
})

Router.route('/lesson/:_id', function () {
  lesson = this.params._id;
  console.log(typeof Template.lesson === 'object');
  this.render(lesson);
});

Router.route("/signout", function(){
  Meteor.logout();
  this.redirect('/');
});
