module.exports = function() {
  return {
    dist: {
      src: '<%= paths.src.base %>/index.html',
      dest: '<%= paths.dist.base %>/index.html'
    }
  };
};
