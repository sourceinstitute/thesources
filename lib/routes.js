FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('mainLayout', {main: "videoList"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/1', {
  name: 'lesson-1',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-1'});
    GAnalytics.pageview();
  }
});