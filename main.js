

function validateForm() {
    var firstname = document.forms["myForm"]["firstName"].value;
    var lastname = document.forms["myForm"]["lastName"].value;
    var email = document.forms["myForm"]["email"].value;
    var emailconf = document.forms["myForm"]["emailConf"].value;
    var age = document.forms["myForm"]["age"].value;
    var password = document.forms["myForm"]["password"].value;
    var passwordconf = document.forms["myForm"]["passwordConf"].value;
    if (firstname == "") {
      alert("First name must be filled out");
      return false;
    }
    if (firstname.length > 3) {
        alert("First trop court");
        return false;
      }
    if (lastname == "") {
        alert("Last Name must be filled out");
        return false;
      }
      if (email == "") {
        alert("Email must be filled out");
        return false;
      }
      if (emailconf == "") {
        alert("Email confirmation must be filled out");
        return false;
      }
      if (age == "") {
        alert("Age Name must be filled out");
        return false;
      }
      if (password == "") {
        alert("Password must be filled out");
        return false;
      }
      if (passwordconf == "") {
        alert("Password confirmation must be filled out");
        return false;
      }
      if (emailconf !== email) {
        alert("Email non cohérent");
        return false;
      }
      if (passwordconf !== password) {
        alert("Mot de passe non cohérent");
        return false;
      }
      if (password.length < 6) {
        alert("Mot de passe pas assez long");
        return false;
      }

      
  }

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function ValidateEmail() {

    alert(email.match(validRegex));
    return(email.match(validRegex))
  
  
  }
