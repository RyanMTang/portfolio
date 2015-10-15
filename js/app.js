
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $captionHeader = $('<h3 id="captionHeader"></h3>')
var $caption = $('<p id="caption"></p>');
var $modal = $('<div id="modal"></div>');
var $content = $('<div id="content"></div>');
var $close = $('<a id="close" href="#"></a>');
var docHeight = $(document).height();

$content.append($image, $captionHeader, $caption);


$('body').append($overlay, $modal);

$overlay.css({
    "height": docHeight
});


$('#gallery a').click(function(event){
	var imageLocation = $(this).attr('href');
	var captionHeader = $(this).children('h3').text()
	var captionParagraph = $(this).children('p').text();
	$image.attr('src',imageLocation);
	$captionHeader.text(captionHeader);
	$caption.text(captionParagraph);
	event.preventDefault();
	$overlay.show();
	$modal.show();

});

$overlay.click(function(){
	$overlay.hide();
	$modal.hide();

});

var modal = (function(){ 
    
    $modal.hide();

    $modal.append($content, $close);

    // Close the modal
    $close.click(function(){
    	$modal.hide();
    	$overlay.hide();
    });

}());
