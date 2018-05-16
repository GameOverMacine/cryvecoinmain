
	// on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.prog_1').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.prog_1').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.bar_100').stop().animate({
            left: progressTotal
        }, animationLength);
    }
       


    moveProgressBar2();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar2();
    });
	 function moveProgressBar2() {
      console.log("moveProgressBar");
        var getPercent = ($('.prog_2').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.prog_2').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.bar_200').stop().animate({
            left: progressTotal
        }, animationLength, );
    }

	// on page load...
    moveProgressBar3();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar3();
    });
	 function moveProgressBar3() {
      console.log("moveProgressBar");
        var getPercent = ($('.prog_3').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.prog_3').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.bar_300').stop().animate({
            left: progressTotal
        }, animationLength);
    }
