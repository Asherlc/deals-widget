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
          'dist/<%= pkg.name %>.wdgt/<%= pkg.name %>.min.css': ['src/css/*.css', 'tmp/_bower.css']
        }
      }
    },
    bower_concat: {
      all: {
        dest: 'tmp/_bower.js',
        cssDest: 'tmp/_bower.css'
      }
    },
    concat: {
      options: {
        seperator: ';'
      },
      dist: {
        src: ['tmp/_bower.js', 'src/js/retreiver.js', 'src/js/data.js', 'src/js/deals.js'],
        dest: 'dist/<%= pkg.name %>.wdgt/<%= pkg.name %>.js'
      }
    },
    jshint: {
      beforeconcat: ['src/js/*.js'],
      afterconcat: ['<%= concat.dist.dest %>']
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
      all: ['tmp/*'],
      js:  ['dist/<%= pkg.name %>.wdgt/*.js'],
      css: ['dist/<%= pkg.name %>.wdgt/*.css']
    },
    inline: {
      dist: {
        src: [ 'dist/<%= pkg.name %>.wdgt/index.html' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-inline');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'bower_concat', 'cssmin', 'concat', 'uglify', 'inline', 'clean']);
  

}
