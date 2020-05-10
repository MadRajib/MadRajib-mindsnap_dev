
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

