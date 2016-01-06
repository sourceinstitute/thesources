FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('mainLayout', {main: "videoList"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/getting-grants', {
  name: 'lesson-3',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-3'});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/getting-to-investment', {
  name: 'lesson-2',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-2'});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/power-distance', {
  name: 'lesson-1',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-1'});
    GAnalytics.pageview();
  }
});
