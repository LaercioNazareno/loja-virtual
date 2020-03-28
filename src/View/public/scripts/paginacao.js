$(document).ready(function(){
    $.ajax({
        url:"../pages/carrocel.html",
        type:"GET", 
        dataType: 'text',

        success: function( response ) {
            $('.main').html(response);
        },

        error: function( response ) {
            $('.content').html(
                //TODO adicionar alerta
                // <p>
                //     Desculpe, não conseguimos realizar a chamada, por favor tente de novo.
                // </p>
            );
        },
        complete: function ( response ){
            //TODO adicionar alerta
        }
    })
    $.ajax({
        url:"../pages/card.html",
        type:"GET", 
        dataType: 'text',

        success: function( response ) {
            $('.card').html(response);
        },

        error: function( response ) {
            $('.content').html(
                //TODO adicionar alerta
                // <p>
                //     Desculpe, não conseguimos realizar a chamada, por favor tente de novo.
                // </p>
            );
        },
        complete: function ( response ){
            //TODO adicionar alerta
        }
    })
});