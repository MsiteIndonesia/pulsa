(function($){

/* ----------------------------------------------------------- */
/*  AJAX CONTACT FORM SUBMSSION WITH VALIDATION 
/* ----------------------------------------------------------- */

var contactForm = $('#contact-form');

$(contactForm).validator();

// $(contactForm).on('submit', function (e) {
// 	if (!e.isDefaultPrevented()) {
// 		var url = "/login";
		
// 		$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: $(this).serialize(),
// 		success: function (data)
// 		{
// 			var messageAlert = 'alert-' + data.type;
// 			var messageText = data.message;
			
// 			var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
// 			if (messageAlert && messageText) {
// 				$(contactForm).find('.messages').html(alertBox);
// 				$(contactForm)[0].reset();
// 			}
// 		}
// 		});
// 		return false;
// 	}
// 	});
})(jQuery);