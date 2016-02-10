AdminConfig = {
  name: 'The Sources',
  adminEmails: ['nemanja.cerovac@gmail.com', 'salim@source.institute'],
  collections: {
    LessonsAnswers: {}
  }
};

SEO = new FlowRouterSEO();

SEO.setDefaults({
  title: 'The Sources',
  description: 'Learn from the sources',
  meta: {
    'property="og:type"': 'website',
    'property="og:site_name"': 'thesources.co',
    'property="og:description"': 'thesources.co - learn from the source',
    'name="twitter:card"': 'summary_large_image',
    'name="twitter:site"': '@sourceinst',
    'name="twitter:description"': '@sourceinst - learn from the sources'
  }
});
