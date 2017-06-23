(function(){
	chilliController.onUpdate = function(){
		if(chilliController.clientState == chilliController.stateCodes.AUTH){
			userUrl = getURLParam("userurl") || getURLParam("userurl",getURLParam("loginurl"));
			window.location = userUrl;
		}
	  }
	  var doLogon2 = function(response){
		var metaContent = jQuery(response)[1].content;
		response = getParam("response",metaContent);
		chilliController.logon2("usertest",response);
		setTimeout(chilliController.onUpdate, 1000);
	  };	
	  var doLogon1 = function(){
		jQuery.post("login.chi",{username:"usertest",password:"passwd",userurl:"http://www.google.com"},doLogon2,"html");
	  };
	  var authStateChanged = function(user) {
          if (user) {
            doLogon1();
          } 
		  
	   };
      var initApp = function() {
		setTimeout(chilliController.onUpdate, 1000);
        firebase.auth().onAuthStateChanged(authStateChanged, function(error) {
          console.log(error);
        });
      };
      window.addEventListener('load', initApp);
	  setTimeout(chilliController.onUpdate, 1000);
})();