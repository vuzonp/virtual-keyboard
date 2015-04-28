module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: 5
            },
            target: {
                files: {
                    'makeup.min.css': ['src/css/makeup.css']
                }
            }
        },

        jsdoc: {
            dist: {
                src: ["src/js/*.js", "README.md"],
                options: {
                    destination: "rtfm",
                    //template : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
                    //configure : "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template/jsdoc.conf.json"
                }
            }
        },

        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %> | http://opensource.org/licenses/MIT */\n',
                    footer: "\n",
                    beautify: {
                        beautify: true,
                        width: 80,
                        quote_style: 2
                    },
                    sourceMap: true,
                    sourceMapName: "keyboard.map",
                    //wrap: true
                },
                files: {
                    "keyboard.js":
                    [
                        "src/js/KeyboardHandler.js",
                        "src/js/KeyHandler.js",
                        "src/js/keyboard.js"
                    ]
                }
            }
        },

        watch: {
            grunt: {
                options: {
                    reload: true
                },
                files: ["Gruntfile.js"]
            },
            js: {
                files: "src/js/*.js",
                tasks: ["uglify", "jsdoc"]
            }
        }

    });

    grunt.registerTask("build", ["cssmin", "uglify", "jsdoc"]);
    grunt.registerTask("default", ["build", "watch"]);

};
