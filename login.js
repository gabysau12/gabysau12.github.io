document.addEventListener('DOMContentLoaded',function(){
  console.log("Hello,world!");
  var inputEmail = document.getElementById('email');
  var inputPassword = document.getElementById ('password');
  console.log(inputEmail);
  console.log(inputPassword);
  
  function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('user-email');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
	}
}
	function validarPassword(password) {
    if (password.length <= 8) {
        console.log("La contraseña es válida.");
    } else {
        console.log("La contraseña debe tener 8 caracteres o menos.");
    }
}
});
