FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('mainLayout', {main: "videoList"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/2', {
  name: 'lesson-2',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-2'});
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
