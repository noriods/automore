import app from 'flarum/app';

app.initializers.add('noriods/auto-more', () => {
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('.DiscussionList-loadMore button, .PostsUserPage-loadMore button').each(function () {
      if ($(this).isInViewport()) {
        $(this).click();
      }
    });
  });
});
