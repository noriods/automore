'use strict';

System.register('noriods/auto-more/main', ['flarum/app'], function (_export, _context) {
    "use strict";

    var app;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }],
        execute: function () {

            app.initializers.add('noriods/auto-more', function () {
                // console.log('Hello, admin!');
            });
        }
    };
});