// Gallery
lightGallery(document.getElementById('lightGallery'), {
    thumbnail: true,
});


// Music
var music = $("#musicPlayer")[0],
    selectorMusic = $("#control-music");

selectorMusic.click(function(){
    if (music.paused == false) {
        music.pause();
        $(this).addClass("paused");
    } else {
        music.play();
        $(this).removeClass("paused");
    }
});
  


// Tamu
var urlParams = new URLSearchParams(window.location.search),
    tamu = urlParams.get('tamu');

// $('.prayers .form-group #name').val(tamu);
// $('#popup-opening #tamu-name').text(tamu);


// Open popup
$('#opening .guest').click(function(){
    $("#opening").hide();
    $("body").removeClass("fixed-body");
    music.play();
});

// ============================== COUNTER ============================= //
var countDownDate = new Date("Sep 10, 2023 08:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var tagDays = $("#countdown #days .time"),
        tagHours = $("#countdown #hours .time"),
        tagMinutes = $("#countdown #minutes .time"),
        tagseconds = $("#countdown #seconds .time"),
        tagAll = $("#countdown .time");
    
    // Output
    tagDays.text(days);
    tagHours.text(hours);
    tagMinutes.text(minutes);
    tagseconds.text(seconds);

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    tagAll.text("0");
  }
}, 1000);