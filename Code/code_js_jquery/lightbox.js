$(document).ready(function () {


    // Variablen

    var UD_ACTIVE_IMG;
    var UD_IMG_URL;


    //Lightbox erstellen

    $('body').append(`<div id="ud_lightbox_overlay">
                    <div id="ud_lightbox_inhalt">
                        <div id="ud_nav">
                            <span class="fas fa-chevron-left"></span>
                            <span class="fas fa-times"></span>
                            <span class="fas fa-chevron-right"></span>
                        </div>
                        <img />
                    </div>
                </div>`);

    //Öffnen und schließen Lightbox

    $('.ud_galerie img').stop().click(function () {
        UD_IMG_URL = $(this).attr('src');

        $('#ud_lightbox_overlay #ud_lightbox_inhalt img').attr('src', UD_IMG_URL);
        $('#ud_lightbox_overlay').fadeIn(500);

        UD_ACTIVE_IMG = $(this);
    });


    $('.fa-times').stop().click(function () {
        $('#ud_lightbox_overlay').fadeOut(500);
    });


    //Nächstes Bild 

    $('.fa-chevron-right').stop().click(function () {
        ud_next_img(UD_ACTIVE_IMG);
    });

    function ud_next_img(UD_OBJECT) {
        if ($(UD_OBJECT).next().is('img')) {
            console.log('geht weiter')
            UD_ACTIVE_IMG = $(UD_OBJECT).next();
            UD_IMG_URL = $(UD_OBJECT).next('img').attr('src');
            $('#ud_lightbox_overlay #ud_lightbox_inhalt img').attr('src', UD_IMG_URL);
        } else {
            console.log('geht nicht weiter');
            UD_ACTIVE_IMG = $(UD_OBJECT).parent().children('img').first();
            UD_IMG_URL = $(UD_OBJECT).parent().children('img').first().attr('src');
            $('#ud_lightbox_overlay #ud_lightbox_inhalt img').attr('src', UD_IMG_URL);
        }
    }

    //Vorheriges Bild 

    $('.fa-chevron-left').stop().click(function () {
        ud_prev_img(UD_ACTIVE_IMG);
    });

    function ud_prev_img(UD_OBJECT) {
        if ($(UD_OBJECT).prev().is('img')) {
            console.log('geht weiter')
            UD_ACTIVE_IMG = $(UD_OBJECT).prev();
            UD_IMG_URL = $(UD_OBJECT).prev('img').attr('src');
            $('#ud_lightbox_overlay #ud_lightbox_inhalt img').attr('src', UD_IMG_URL);
        } else {
            console.log('geht nicht weiter');
            UD_ACTIVE_IMG = $(UD_OBJECT).parent().children('img').last();
            UD_IMG_URL = $(UD_OBJECT).parent().children('img').last().attr('src');
            $('#ud_lightbox_overlay #ud_lightbox_inhalt img').attr('src', UD_IMG_URL);
        }
    }
});
