(function(){
	chilliController.onUpdate = function(){
		var userUrl = getURLParam("userurl");
		if(chilliController.clientState == chilliController.stateCodes.AUTH || userUrl){
			window.location = userUrl;
		}
	  }
	  var doLogon2 = function(response){
		var metaContent = jQuery(response)[1].content;
		response = getParam("response",metaContent);
		chilliController.logon2("usertest",response);
		setTimeout(chilliController.refresh,500);
		setTimeout(chilliController.onUpdate, 1000);
	  };	
	  var doLogon1 = function(){
		  try {jQuery.post("login.chi",{username:"usertest",password:"passwd",userurl:"http://www.google.com"},doLogon2,"html");}
		  catch(e){console.error(e);}
	  };
	  var authStateChanged = function(user) {
          if (user) {
            doLogon1();
          } 
		  
	   };
      var initApp = function() {
        firebase.auth().onAuthStateChanged(authStateChanged, function(error) {
          console.log(error);
        });
      };
      window.addEventListener('load', initApp);
	  setTimeout(chilliController.onUpdate, 1500);
})();