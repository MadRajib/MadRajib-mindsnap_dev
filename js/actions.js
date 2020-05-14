
$(document).ready(function() {

    // move top smooth scrolling
    $(".scroll").click(function(event){	
        event.preventDefault();
        $('html,body').animate({scrollTop:0},900);
    });


    $("#sidebar-toggle").click(function(event){
        event.preventDefault();
        const $wrapper = document.querySelector('#wrapper');
        // $("#wrapper").classList.toggle('toggled');
        $wrapper.classList.toggle('toggled');
        
    });

});
$( window ).on( "load", function() { 
        var vidDefer = document.getElementsByTagName('iframe');

        for (var i=0; i<vidDefer.length; i++) {
            if(vidDefer[i].getAttribute('data-src')) {
                vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
            }
        }

})
// function init() {
//     var vidDefer = document.getElementsByTagName('iframe');
//     for (var i=0; i<vidDefer.length; i++) {
//     if(vidDefer[i].getAttribute('data-src')) {
//     vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
//     } } }
//     window.onload = init;

