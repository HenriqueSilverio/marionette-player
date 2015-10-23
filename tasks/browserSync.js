module.exports = function() {
  return {
    dist: {
      options: {
        watchTask: true,
        server: '<%= paths.dist.base %>'
      },

      bsFiles: {
        src: [
          '<%= paths.dist.base %>/*.js',
          '<%= paths.dist.base %>/*.css',
          '<%= paths.dist.base %>/*.html'
        ]
      }
    }
  };
};
