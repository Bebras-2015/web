$(function() {

    $('.ani').each(function(i,el) {
        var $this = $(this);
        setTimeout(function() {
            $this.addClass('flipInX').removeClass('hidden');
        }, i * 100);
    });

});
