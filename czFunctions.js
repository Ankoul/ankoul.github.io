function getQueryString(url){
	var s = "";
	var href = url || window.location.href;
	var idx = href.indexOf("?");
	if(idx == -1){
		return '';
	}
	return href.substr(idx + 1);
}
function getParam(param, url) {
	url = url || window.location.href;
	var qs = getQueryString(url);
	if(!qs){
		return '';
	}
	param += "=";
	idx = qs.indexOf(param);
	if (idx == -1) {
		return '';
	}
	endIdx = qs.indexOf("&",idx);
	endIdx = endIdx > -1 ? endIdx : url.length;
	return qs.substring(idx + param.length,endIdx);
	s = qs.substring(idx + param.length,endIdx);
}
function getURLParam(param, url){
	var s = getParam(param, url);
	if (s.charAt(4) == '%' || s.charAt(5) == '%') {
		s = s.replace(/%3a/g, ":");
		s = s.replace(/%2f/g, "/");
		s = s.replace(/%3f/g, "?");
		s = s.replace(/%3d/g, "=");
		s = s.replace(/%26/g, "&");
		s = s.replace(/%25/g, "%");
		s = s.replace(/\+/g, " ");
	}
	return s;
}
function translateFirebaseButtons(){
	var clock = setInterval(translate, 10), term = "Sign in with", portugueseTerm = "Entrar com o", isChanged = false;
	function translate() {
		if (isChanged) {
			clearInterval(clock);
		}
		var textElements = document.getElementsByClassName("firebaseui-idp-text firebaseui-idp-text-long");
		for (i in textElements) {
			var element = textElements[i];
			if (typeof element.textContent != "undefined") {
				element.textContent = element.textContent.replace("Sign in with","Entrar com o");
				isChanged = true;
			}
		}
	}
}