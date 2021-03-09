function chkfrm(x)
{
	
	if(document.getElementById(x).Name.value=="")
	{
	alert('Please enter your Name.');
	document.getElementById('Name').focus();
	return false;
	}

	if(document.getElementById(x).email.value=="")
	{
	alert('Please enter your E-mail address.');
	document.getElementById('email').focus();
	return false;
	}
	else{
	var em=document.getElementById(x).email.value;
	if(mailCheck(em)==false)
	{
	alert('This E-mail address is not valid.');
	document.getElementById('email').focus();
	return false;}
	}

	if(document.getElementById(x).Phone.value=="")
	{
	alert('Please enter your Phone number.');
	document.getElementById('Phone').focus();
	return false;
	}
	else{
	var phone1=document.getElementById(x).Phone.value.replace(/[^\d]/g,'');
	if(isInteger(phone1)==false)
	{
	alert('Please enter a valid phone number.');
	document.getElementById('Phone').focus();
	return false;
	}
	}

	if(document.getElementById(x).Comment.value=="")
	{
	alert('Please enter your comments.');
	document.getElementById('Comment').focus();
	return false;
	}
}

function mailCheck(str)
{
	if(str == '')
	{
	return false;
	}
	if(str != "")
	{
	email = str;
	if(!email.match(/^[A-Za-z0-9\._\-+]+@[A-Za-z0-9_\-+]+(\.[A-Za-z0-9_\-+]+)+$/))
	{
	return false;
	}
	}
	return true;
}


function isInteger(val)
{
	var numericExpression = /^[0-9]+$/;
	if(val.match(numericExpression)) {
	return true;
	}
	else
	{
	return false;
	}
	}
	function mailCheck(str)
	{
	if(str == '')
	{
	return false;
	}
	if(str != "")
	{
	email = str;
	if(!email.match(/^[A-Za-z0-9\._\-+]+@[A-Za-z0-9_\-+]+(\.[A-Za-z0-9_\-+]+)+$/))
	{
	return false;
	}
	}
	return true;
}

function numeric_check(event){
	if((event.keyCode<46|| event.keyCode>57)  && (event.keyCode<37 || event.keyCode>40) && (event.keyCode!=8) && (event.keyCode!=127)  && (event.keyCode!=9) && (event.keyCode<96 || event.keyCode>105)) 
		return event.returnValue=false;
}
function char_check(event){	
	if((event.keyCode<65 || event.keyCode>90) && (event.keyCode<97 || event.keyCode>122) && (event.keyCode!=32) && (event.keyCode!=8) && (event.keyCode!=9) && (event.keyCode!=37) && (event.keyCode!=39) && (event.keyCode!=46))
		return event.returnValue=false;
}
function numeric_check(event){
	if((event.keyCode<46|| event.keyCode>57)  && (event.keyCode<37 || event.keyCode>40) && (event.keyCode!=8) && (event.keyCode!=127)  && (event.keyCode!=9) && (event.keyCode<96 || event.keyCode>105)) 
		return event.returnValue=false;
}
function char_check(event){	
		if((event.keyCode<65 || event.keyCode>90) && (event.keyCode!=32) && (event.keyCode!=8) && (event.keyCode!=127)  && (event.keyCode!=9)  && (event.keyCode<37 || event.keyCode>40) && (event.keyCode!=46) )
		return event.returnValue=false;
}
