Meteor.methods({
  saveAnswer: function (options) {
      console.log('saveAnswer');
      console.log(Meteor.user());
      console.log(options);

      var affected = Meteor.users.update(
      {
        _id: Meteor.userId()
      },{
        $addToSet: {'profile.answers': options}
      });

      console.log(affected);
      console.log(Meteor.user());

      return affected;
  }

 });
