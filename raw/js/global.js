
//Shows the first img child element and hides all the rest
$('img').addClass('imgClass');
$('img').parent('p').addClass('paragraphClass');
$('br').remove();

// $('imgClass').each(function(){
//   $(this).hide().filter('.imgClass:not(:first)').show();
// });

// $('.paragraphClass').find('imgClass').show();
// $("imgClass").hide().filter(":first").show();

//
// var img = $('img');
// var insideOfP = $('.paragraphClass > img.imgClass');
// // $('.paragraphClass > img.imgClass').remove();
//
//
//
// if('img') {
//   img.remove().filter('.imgClass:not(:first)').show();
// } else if ('insideOfP') {
//   insideOfP.remove().filter('.imgClass:not(:first)').show();
// }







// $("div.test:not(:eq(0))").hide();





// $('span.content p:not(:first-child)').hide().filter('p .imgSrc').show();



// $('.' + 'imgSrc').show();


// $('#wrapper').not(":eq(#box_5)").hide();






// $(".imgSrc").hide().filter(":first-child").show();

// $('p').filter('.imgSrc').addClass('paragraph-text');

// $('span.content img:not(:first)').hide().filter(':first').show();
// $('span.content > p img:first').hide();

// $('span.content p:not(:first)').each(function(){
//   $(this).hide().filter('p > .imgSrc').show();
// });
