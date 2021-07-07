$(Document).ready(function(){

        $('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
        if ($('i', this).hasClass('fa-plus')) {
            $('i', this).removeClass('fa-plus').addClass('fa-minus');
        }
        else {
            $('i', this).removeClass('fa-plus').addClass('fa-minus');
        }
});   
