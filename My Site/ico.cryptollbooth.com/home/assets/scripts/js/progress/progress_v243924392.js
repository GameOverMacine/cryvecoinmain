
var $progress = $(".progress"),
    $bar = $(".progress__bar"),
    $text = $(".progress__text"),
    percent = 0,
    update,
    resetColors,
    speed = 40,
    orange = 16,
    yellow = 16,
    red = 80,
    timer;
var totalsale = 26000000;
var total_tokens = 300000000;
var soldtokens;
var tokenspercent = 18;
var ethAddress_balance ="0x9a904bf665D394d592eD4CBc314536caeA3FAB35"; 
var ethAddress_contract ="0xb9586703a9941edce76ad45f5d0429f5f1c6daef";
var apiKey ="3PNUWB7DBISGV8B3XGZJ1RQP4ZX1ED1UE1";
var wei,wei2,token_balance,token_balance2,sold_tokens;

var now = moment(); 
var start = moment.tz("2018-02-28 14:00", "Etc/Greenwich"); // another date
var duration = moment.duration(now.diff(start));
var hours= duration.asHours().toFixed();
if(hours==0){
 jQuery("#soldtokens").text(3409503);
}
if(hours==1){
jQuery("#soldtokens").text(3409503);
}

var soldtokens = parseInt(jQuery("#soldtokens").text());
console.log(hours);
		
if(soldtokens){
tokenspercent = (soldtokens/totalsale)*100;
}


resetColors = function() {
  
  $bar
    .removeClass("progress__bar--red")
    .removeClass("progress__bar--yellow")
    .removeClass("progress__bar--orange")
    .removeClass("progress__bar--blue");
  
  $progress
    .removeClass("progress--complete");
  
};

update = function() {
        //SET CURRENT PERCENTAGE HERE:  
  if (percent >= tokenspercent){
        return;
} 

  timer = setTimeout( function() {

    percent += 1; //Math.random() * 1.9;
    percent = parseFloat( percent.toFixed(1) );
    
    $text.find("em").text( percent + "%" );

    if( percent >= 100 ) {

      percent = 100;
      $progress.addClass("progress--complete");
      $bar.addClass("progress__bar--blue");
      $text.find("em").text( "Complete" );

    } else {
      
      if( percent >= red ) {
        $bar.addClass("progress__bar--red");
      }
      
      else if( percent >= yellow ) {
        $bar.addClass("progress__bar--yellow");
      }
      
      //else if( percent >= orange ) {
       // $bar.addClass("progress__bar--orange");
      //}
      
      speed = Math.floor( Math.random() * 90 );
      update();

    }

    $bar.css({ width: percent + "%" });

  }, speed);
  
};

setTimeout( function() {
  
  $progress.addClass("progress--active");
  update();
  
},500);


/* $(document).on("click",  function(e) {
  
  percent = 0;
  clearTimeout( timer );
  resetColors();
  update();
  
}); */