module.exports = function (grunt) {
  // Load in grunt-retro
  grunt = require('../tasks/retro')(grunt);

  // Load in common config
  grunt = require('./grunt.common.js')(grunt);

  // Set up grunt 0.4 specific tests


  // Add nodeunit config
  grunt.config.set('nodeunit', {
    common: 'retro_test.js',
    '0.4': '0.4_test.js'
  });

  // Load in grunt-contrib-nodeunit
  process.chdir('..');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  process.chdir(__dirname);

  // Set up 0.4 tasks
  grunt.registerTask('0.4-test', '');

  // Run project task then tests.
  // TEST: We can actually run single string of queries
  grunt.registerTask('default', 'test-setup 0.4-test nodeunit');
};