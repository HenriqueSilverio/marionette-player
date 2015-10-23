module.exports = function() {
  return {
    options: {
      config: '<%= paths.jscsrc %>'
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
