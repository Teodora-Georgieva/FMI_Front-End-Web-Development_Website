"use strict";

var emptyFields = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   
    if (username == "" || password == "") {
      alert("Попълни празните полета");
    }
  }

  function validateEmail () {   
    var email = document.getElementById("email").value;
    if(email == ""){
      alert("Попълни празните полета");
    }

    else if ( !/\S+@\S+\.\S+/.test(email)){
      alert("Невалиден имейл");
    }
  }

  function validatePassword () {
    var password = document.getElementById("password").value;

    if(password.length < 8)
    {
      alert("Паролата трябва да съдържа поне 8 символа");
    }
  }