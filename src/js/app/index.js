require(['jquery', 'handlebars'], function($, hanlebars) {
    $.ajax({
        url: '/list',
        dataType: 'json',
        success: function(data) {
            var tpl = $('#tpl').html();
            var template = hanlebars.compile(tpl);
            var html = template(data);
            $('.wrap').append(html)
        },
        error: function() {
            console.warn('error!')
        }
    })
})