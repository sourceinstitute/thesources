Router.configure({
  layoutTemplate: 'masterlayout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    data: function(){
      return {
        question: Questions.find().fetch()
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
  this.render("home");
},
{ 
  name: "signout",
  data: function(){
    return Meteor.logout();
  }
});