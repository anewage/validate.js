validator_of_{{ $form_name }}.registerCallback('check_mobile', function(value) {
	/*
	 * Regular Expression for Iran standard mobile phone numbers.
	 */
	var mobileRegex = /(0|\+98)?9\d{9}/;
	var persianNum = [/۰/g,/۱/g,/۲/g,/۳/g,/۴/g,/۵/g,/۶/g,/۷/g,/۸/g,/۹/g];
	var str = new String(value);
	for(var i=0;i<10;i++){ //change farsi characters to english-numeric characters.
		str = str.replace(persianNum[i],i.toString());
	}
	return mobileRegex.test(str);
}).setMessage('check_mobile', 'ساختار شماره تلفن همراه صحیح نیست.');