module.exports = (grunt) => {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['./js/bootstrap-datetimepicker.js']
      }
    },
    versioncheck: {
      target: {
        options: {
          hideUpToDate: true
        }
      }
    },
    uglify: {
        dist: {
            options: {
                sourceMap: true,
            },
            files: {
                'js/bootstrap-datetimepicker.min.js': ['js/bootstrap-datetimepicker.js'],
            }
        }
    },
    cssmin: {
        dist: {
            options: {
            },
            files: {
                'css/bootstrap-datetimepicker.min.css': ['css/bootstrap-datetimepicker.css']
            }
        }
    }
  })

  grunt.registerTask('default', ['jshint', 'versioncheck', 'uglify','cssmin'])
}
