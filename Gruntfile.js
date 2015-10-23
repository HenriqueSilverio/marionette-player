module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var options = {
    config: {
      src: 'tasks/*.js'
    },

    paths: {
      jscsrc   : '.jscsrc',
      jshintrc : '.jshintrc',

      src: {
        base : 'src'
      },

      dist: {
        base : 'dist'
      }
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', [
    'copy:dist',
    'sass:dist',
    'jshint:dist',
    'jscs:dist',
    'browserify:dist',
    'browserSync:dist',
    'watch'
  ]);
};
