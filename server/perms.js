  Meteor.users.allow({
    'update': function (userId,doc) {
        //if (userId == Meteor.userId())
          return true; 
    }
  });
