$(document).ready(function() {
    function startNumbersAnimation(duration) {
        $('#animated-year').prop('number', 2020).animateNumber({number: 2007 }, { duration: duration });
        $('#animated-employees').prop('number', 1).animateNumber({ number: 100 }, { duration: duration });
        $('#animated-clients').prop('number', 0).animateNumber({
            number: 150,
            numberStep: function(now, tween) {
                var rounded_now = Math.round(now);
                var target = $(tween.elem);
                if (rounded_now === 150) {
                    target.prop('number', rounded_now).text(rounded_now + '+');
                } else {
                    target.prop('number', rounded_now).text(rounded_now);
                }
            }
        }, {
            duration: duration
        });
    }
    var startedNumbersAnimation = false;
    $(document).scroll(function(event){
        var position = $('#animated-numbers').position().top - window.innerHeight;
        console.log($(this).scrollTop(), $('#animated-numbers').position().top, window.innerHeight);
        if ($(this).scrollTop() >= position && !startedNumbersAnimation) {
            startNumbersAnimation(1500);
            startedNumbersAnimation = true;
        }
    })
});
