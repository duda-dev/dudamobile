//Helpers for correct staging links

$("a.login").attr("href", domain+"/home");
$("a.sign-up").attr("href", domain+"/signup");
$("li.my-sites > a.mySites").attr("href",domain+"/home");
$("#username-dropdown li:first-of-type a").attr("href",domain+"/home/dashboard?account");
$("#username-dropdown li:nth-of-type(2) a").attr("href",domain+"/logout?next=http://www.dudamobile.com/");