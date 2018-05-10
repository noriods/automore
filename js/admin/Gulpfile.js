var gulp = require('flarum-gulp');

gulp({
  modules: {
    'noriods/auto-more': [
      'src/**/*.js',
    ]
  }
});
