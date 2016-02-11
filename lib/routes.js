FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('mainLayout', {main: "videoList"});
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/power-distance', {
  name: 'lesson1',
  action: function() {
    BlazeLayout.render('mainLayout', {
      main: 'lesson1', 
      title: 'Overcoming Power Distance', 
      lesson: "lesson-1",
      slug: "power-distance"
    });
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/getting-to-investment', {
  name: 'lesson-2',
  action: function() {
    BlazeLayout.render('mainLayout', {
      main: 'lesson-2', 
      title: 'Getting To Investment', 
      lesson: "lesson-2",
      slug: "getting-to-investment"
    });
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/getting-grants', {
  name: 'lesson-3',
  action: function() {
    BlazeLayout.render('mainLayout', 
      {
        main: 'lesson-3', 
        title: 'Getting Grants: Show Me How', 
        lesson: "lesson-3",
        slug: "getting-grants"
      });
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/prototype-to-product', {
  name: 'prototype-to-product',
  action: function() {
    BlazeLayout.render('mainLayout', {
      main: 'lesson-4', 
      title: 'Prototype To Product', 
      lesson: "lesson-4", 
      slug: "prototype-to-product"
    });
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/trust', {
  name: 'trust',
  action: function() {
    BlazeLayout.render('mainLayout', {
      main: 'lesson-5', 
      title: 'Trust', 
      lesson: "lesson-5", 
      slug: "trust"
    });
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/risk', {
  name: 'risk',
  action: function() {
    BlazeLayout.render('mainLayout', {
      main: 'lesson-6', 
      title: 'Risk', 
      lesson: "lesson-6", 
      slug: "risk"
    });
    GAnalytics.pageview();
  }
});

FlowRouter.route('/lessons/first-customer-contact', {
  name: 'first-customer-contact',
  action: function() {
    BlazeLayout.render('mainLayout', {
      main: 'lesson-7', 
      title: 'First Customer Contact', 
      lesson: "lesson-7", 
      slug: "first-customer-contact"
    });
    GAnalytics.pageview();
  }
});
