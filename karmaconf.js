module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'node_modules/requirejs/require.js',
            'node_modules/karma-requirejs/lib/adapter.js',
            {pattern: 'js/tests/*Spec.js', included: false},
            {pattern: 'js/gol/*.js', included: false},
            'js/tests/main.js'
        ]
    });
};