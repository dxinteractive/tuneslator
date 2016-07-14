module.exports = function(grunt) {
    grunt.initConfig({
        jsdoc : {
            dist : {
                src: 'lib/**/*.js',
                options: {
                    destination : 'doc',
                    plugins: ["plugins/markdown"]
                }
            }
        },
    watch: {
        scripts: {
            files: ['src/**/*.js'],
            tasks: ['jsdoc'],
            options: {
                spawn: false
              } 
            }
         }
    })
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jsdoc']);
}