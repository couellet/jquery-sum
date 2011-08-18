(function($) {
    $.fn.sum = function(callback) {
        var sum = 0;
        $(this).each(function() {
            var val = $(this).val();

            if (!val || isNaN(val)) {
                val = $(this).text();
            }

            if (val != "" && !isNaN(val)) {
                sum += parseFloat(val);
            }
        });

        if (callback) {
            callback(sum);
        }

        return sum;
    }
})(jQuery);