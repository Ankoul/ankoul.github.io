(function(){
		function getQueryString(url){
			var s = "";
			var href = url || window.location.href;
			var idx = href.indexOf("?");
			if(idx == -1){
				return '';
			}
			return href.substr(idx + 1);;
		}
		function getURLParam(param, url) {
			var qs = getQueryString(url);
			if(!qs){
				return;
			}
			param += "=";
			idx = qs.indexOf(param);
			if (idx == -1) {
				return;
			}
			endIdx = qs.indexOf("&",idx);
			endIdx = endIdx > -1 ? endIdx : href.length;
			return qs.substring(idx + param.length,endIdx);
			s = qs.substring(idx + param.length,endIdx);
		}
		function normalizeUrl(s){
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
})();