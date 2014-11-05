module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      html: {
        src: ['src/html/index.html'],
        dest: 'dist/<%= pkg.name %>.wdgt/index.html'
      },
      img: {
        files: [
          {
            src: ['src/img/Default.png'],
            dest: 'dist/<%= pkg.name %>.wdgt/Default.png',
          },
          {
            src: ['src/img/Icon.png'],
            dest: 'dist/<%= pkg.name %>.wdgt/Icon.png',
          }
        ]
      },
      plist: {
        src: ['Info.plist'],
        dest: 'dist/<%= pkg.name %>.wdgt/Info.plist'
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/<%= pkg.name %>.wdgt/<%= pkg.name %>.min.css': ['src/css/*.css']
        }
      }
    },
    concat: {
      options: {
        seperator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.wdgt/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    clean: {
      js: ['dist/<%= pkg.name %>.wdgt/*.js'],
      css: ['dist/<%= pkg.name %>.wdgt/*.css']
    },
    inline: {
      dist: {
        src: [ 'dist/<%= pkg.name %>.wdgt/index.html' ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-inline');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'cssmin', 'concat', 'uglify', 'inline', 'clean']);
  

}
