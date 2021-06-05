$( document ).ready(function() {
    
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.product-conteiner').hide();
    
        $('.product-conteiner[category="'+catProduct+'"]').show();
    });

    $('.category_item[category="all"]').click(function(){
        $('.product-conteiner').show();
    });

});