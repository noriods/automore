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
                $.fn.isInViewport = function () {
                    var elementTop = $(this).offset().top;
                    var elementBottom = elementTop + $(this).outerHeight();

                    var viewportTop = $(window).scrollTop();
                    var viewportBottom = viewportTop + $(window).height();

                    return elementBottom > viewportTop && elementTop < viewportBottom;
                };

                $(window).on('resize scroll', function () {
                    $('.DiscussionList-loadMore button').each(function () {
                        if ($(this).isInViewport()) {
                            $(this).click();
                        }
                    });
                });
            });
        }
    };
});