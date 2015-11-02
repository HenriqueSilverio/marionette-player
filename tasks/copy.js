module.exports = function() {
  return {
    dist: {
      files: [
        {
          src: '<%= paths.src.base %>/index.html',
          dest: '<%= paths.dist.base %>/index.html'
        },

        {
          expand: true,
          flatten: true,
          src: '<%= paths.src.base %>/player/fonts/*',
          dest: '<%= paths.dist.base %>/fonts'
        },

        {
          expand: true,
          flatten: true,
          src: '<%= paths.src.base %>/player/images/*',
          dest: '<%= paths.dist.base %>/images'
        },

        {
          expand: true,
          flatten: true,
          src: '<%= paths.src.base %>/player/audio/*',
          dest: '<%= paths.dist.base %>/audio'
        }
      ]
    }
  };
};
