//Shows the first img child element and hides all the rest
$('span.content img:not(:first)').hide().filter(':first').show();
