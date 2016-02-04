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
    BlazeLayout.render('mainLayout', {main: 'lesson-3', title: 'Getting Grants: Show Me How', lesson: "lesson-3"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/getting-to-investment', {
  name: 'lesson-2',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-2', title: 'Getting To Investment', lesson: "lesson-2"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/power-distance', {
  name: 'lesson1',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson1', title: 'Overcoming Power Distance', lesson: "lesson-1"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/prototype-to-product', {
  name: 'prototype-to-product',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-4', title: 'Prototype To Product', lesson: "lesson-1"});
    GAnalytics.pageview();
  }
});
