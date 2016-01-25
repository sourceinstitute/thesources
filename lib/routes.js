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
    BlazeLayout.render('mainLayout', {main: 'lesson-3', title: 'Getting Grants: Show Me How'});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/getting-to-investment', {
  name: 'lesson-2',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-2', title: 'Getting To Investment'});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/power-distance', {
  name: 'lesson-1',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-1', title: 'Overcoming Power Distance'});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/prototype-to-product', {
  name: 'prototype-to-product',
  action: function() {
    BlazeLayout.render('mainLayout', {main: 'lesson-4'});
    GAnalytics.pageview();
  }
});
