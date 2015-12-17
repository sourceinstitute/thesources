  Meteor.users.allow({
    'update': function (userId,doc) {
        //Todo: should check if the user is updating their own profile
        //if (userId == Meteor.userId())
          return true; 
    }
  });
