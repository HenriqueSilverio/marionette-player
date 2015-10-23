module.exports = function() {
  return {
    sass: {
      files: ['<%= paths.src.base %>/**/*.scss'],
      tasks: ['sass:dist']
    },

    scripts: {
      files: ['<%= paths.src.base %>/**/*.js'],
      tasks: ['jscs:dist', 'jshint:dist', 'browserify:dist']
    }
  };
};
