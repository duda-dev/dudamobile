module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      combine: {
        files: {
          'css/min/foundation.min.css': ['css/normalize.css', 'css/foundation.css', 'css/main.css', 'css/extra-queries.css']
        }
      }
    },

    concat: {
      dist: {
        src: [
          'js/foundation.min.js',
          'js/jquery.validate.js',
          'js/jquery.stellar.min.js',
          'js/waypoints.min.js',
          'js/common.js',
          'js/staging-helpers.js',
          'js/login.js',
          'js/price-testing.js',
          'js/splitscreen.js',
          'js/landing.js',
          'js/d1-reg.js',
          'js/dudaone-convert.js'
        ],
        dest: 'js/production.js'
      }
    },

    uglify: {
      build: {
        src: 'js/production.js',
        dest: 'js/min/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },

    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['js'],
      },
      css: {
        files: ['css/*.css'],
        tasks: ['css'],
      },
      imagemin: {
        files: ['img/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Default Task is basically a rebuild
  grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'imagemin']);
  grunt.registerTask('js', ['concat', 'uglify']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('img', ['imagemin']);

};