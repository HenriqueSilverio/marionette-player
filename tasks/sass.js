module.exports = function() {
  return {
    dist: {
      options: {
        outputStyle: 'compressed'
      },

      files: {
        '<%= paths.dist.base %>/bundle.css': '<%= paths.src.base %>/main.scss'
      }
    }
  };
};
