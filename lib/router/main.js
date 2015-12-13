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

// Router.route("/", function(){
//   this.render("home");
// },
// { 
//   name: "home"
//   data: function(){
//   }
// });

Router.route("/signout", function(){
  Meteor.logout();
  this.redirect('/');
});
