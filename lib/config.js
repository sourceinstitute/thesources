AdminConfig = {
  name: 'The Sources',
  adminEmails: ['nemanja.cerovac@gmail.com', 'salim@source.institute'],
  collections: {
    LessonsAnswers: {}
  }
};

SEO = new FlowRouterSEO();

SEO.setDefaults({
  title: 'fdsfdsf',
  description: 'Learn from the sources',
  meta: {
    'property="og:type"': 'website',
    'property="og:site_name"': 'dfsd',
    'name="twitter:card"': 'summary',
    'name="twitter:site"': '@TwitterUsername'
  }
});