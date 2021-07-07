$(document).ready(function () {

    // Sprachauswahl
    $(document).on('click', '.sprachen', function () {
        $('.flaggen').toggle('fast');
    });

    // Burger-menu
    $(document).on('click', '.menu', function () {
        $('nav ul').toggle('fast');
    });

    // Dropdown
    $(document).on('click', '.dropdown', function () {
        $('.hidden').toggle('fast');
    });

    //Durchgehender Slideer
    //     parentSlider.addEventListener('transitionend', () => {
    //     if(images[counter].id === 'lastone'){
    //         imageBand.style.transition = "none";
    //         counter = 1;
    //         imageBand.style.transform = "translateX(" + -size * counter + "px)"
    //     }

    //     if(images[counter].id === 'firstone'){
    //         imageBand.style.transition = "none";
    //         counter = images.length - 2;
    //         imageBand.style.transform = "translateX(" + -size * counter + "px)"
    //     }
    // });

    // Service Seite

    //Accordion

    $(document).on('click', '#web', function () {
        $(this).find('#design').toggle();
        function toggleContent(content) {
            if (content === 1) {
                $('.content-2').hide()
                $('.content-1').show()
            } else {
                $('.content-1').hide()
                $('.content-2').show()
            }

            //Click on Tab 2
            $(document).on('click', 'tab-2', function () {
                toggleContent(2);
            })
            //Click on Tab 1
            $(document).on('click', 'tab-1', function () {
                toggleContent(1);
            })

            $(document).on('mouseenter', '.tab', function () {
                console.log
            })

        }

        $('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
        if ($('i', this).hasClass('fa-plus')) {
            $('i', this).removeClass('fa-plus').addClass('fa-minus');
        }
        else {
            $('i', this).removeClass('fa-plus').addClass('fa-minus');
        }


    });

});
