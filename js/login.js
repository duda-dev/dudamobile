//Logged in or not
var api_url = "http://my.dudamobile.com/api/uis/accounts/current";

$.ajax({
   type: 'GET',
	url: api_url,
	async: false,
	cache: true,
	dataType: 'jsonp',
	success: function(json) {
	if(json.name == '_dm_transitional') {
		$('.login').show();
		console.log('_dm_transitional returned');
	} else {
		console.log('else success returned');
		$('li.username>a').html(json.name);
		$('.my-sites').show();
		$('.login').hide();

		//Reseller
		$('.partner-design-purchase').attr('href', 'http://my.dudamobile.com/home/payment/purchase/reseller');
		//White Label
		$('.partner-white-purchase').attr('href', 'http://my.dudamobile.com/home/payment/purchase/wl_reseller');
		}
},
error: function(e) {
	$('.login').show();
	console.log('error returned');
}
});

//DudaOne Sign Up
$(function () {
	function showError(msg) {
		$("form label.error").first().text(msg).fadeIn().delay(5000).fadeOut();	
	}
	$("form.mobile-sign-up").on("submit",function (e) {
		var form = $(this),
			userName = form.find("[name='userName']").val(),
			pwd = form.find("[name='pwd']").val(),
			pwd2 = form.find("[name='pwd2']").val();
		e.preventDefault();
		if (userName.trim().length == 0) {
			$('label[for="userName"]').addClass('error');
			showError("User name is required");
		}
		else if (pwd.trim().length == 0) {
			$('label[for="pwd"]').addClass('error');
			showError("Password is required");
		}
		else if (pwd != pwd2) {
			$('label[for="pwd2"]').addClass('error');
			showError("Passwords should match");			
		}
		else {
			var url = "http://my.dudamobile.com/api/public/signup";
			$.ajax({url: url,
				data: {userName: userName, pwd: pwd, operationOrigin: "DESIGN_D1_WEB_MOBILE"},
				contentType : 'application/json',
				dataType: "jsonp"
			}).done(function (data) {
				if (data.value.length == 0) {
					form.parent().hide();
					$('#create-account .success').show();
				}
				else 
					showError(data.value);
			}).fail(function (data) {
				showError("Unable to create user, please try again later");
			});
		}
	});	
});