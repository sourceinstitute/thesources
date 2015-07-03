Meteor.methods({
  saveResponse: function (options) {
    if (options){
      QuestionResponses.insert(options);
      return "Saved successfully";
    } else{
      throw new Meteor.Error (404, "Please define the required options field");
    }
  }
});