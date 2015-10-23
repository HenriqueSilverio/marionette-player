module.exports = function() {
  return {
    options: {
      jshintrc: '<%= paths.jshintrc %>'
    },

    dev: {
      src: [
        'Gruntfile.js',
        'tasks/*.js'
      ]
    },

    dist: {
      src: [
        '<%= paths.src.base %>/**/*.js'
      ]
    }
  };
};
