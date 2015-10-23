module.exports = function() {
  return {
    options: {
      browserifyOptions: {
        debug: true
      }
    },

    dist: {
      options: {
        transform: [
          'hbsfy',
          'babelify',
          ['uglifyify', { global: true }]
        ]
      },

      files: {
        '<%= paths.dist.base %>/bundle.js': [
          '<%= paths.src.base %>/main.js'
        ]
      }
    }
  };
};
