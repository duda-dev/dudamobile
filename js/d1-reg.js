//DudaOne Landing Page Reg Test
$('#sign-up-and-login').on('click', function(e) {
	e.preventDefault();
	var form = $(this).parent(),
	userName = form.find("[name='userName']").val(),
	pwd = form.find("[name='pwd']").val();
if (userName.trim().length === 0) {
	$('input[name="userName"]').addClass('error');
	$('label.error').html("<strong>User name is required</strong>");
	return;
}
else if (pwd.trim().length === 0) {
	$('input[name="pwd"]').addClass('error');
	$('label.error').html("<strong>Password is required</strong>");
	return;
} else {
	e.preventDefault();
	var url = 'http://my.dudamobile.com/api/public/signup?....&operationOrigin=DESIGN_WEB&_dm_op_source=dudaone-register';
	$.ajax({url: url,
		data: {userName: userName, pwd: pwd},
		contentType : 'application/json',
		dataType: "jsonp"
	}).done(function (data) {
		if (data.value.length === 0) {
			$('form.home-reg-formd').fadeOut();
			$('#uname').val(userName);
			$('#upwd').val(pwd);
			dmTrackNewUser(userName);
			dmTrackEvent(SITE_CREATE_ACCOUNT, 'account', userName);
			$('#loginForm').delay(500).submit();
		}
		else
			$('label.error').html(data.value);
	}).fail(function (data) {
		$('label.error').html("Unable to create user, please try again later");
	});
}
});