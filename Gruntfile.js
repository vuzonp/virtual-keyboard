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
                    sourceMapName: "keyboard.js.map",
                    //wrap: true,
                    enclose: true
                },
                files: {
                    "keyboard.min.js":
                    [
                        "src/js/keymap.js",
                        "src/js/handlers/KeyboardHandler.js",
                        "src/js/handlers/KeyHandler.js",
                        "src/js/handlers/keyboard.js"
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
            },
            css: {
                files: "src/css/*.css",
                tasks: ["cssmin"]
            }
        }

    });

    grunt.registerTask("build", ["cssmin", "uglify", "jsdoc"]);
    grunt.registerTask("default", ["build", "watch"]);

};
