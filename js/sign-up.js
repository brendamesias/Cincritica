$(document).ready(function() {
  $('.logo').addClass('animated slideInDown');

  
  function nameValid() {
    return $('#first_name').val().length >= 3;
  }
  
  function lastNameValid() {
    return $('#last_name').val().length >= 3;
  }

  function nickNameValid() {
    if ($('#nickname').val().length >= 3 && !($('#nickname').val().match(/^\s+|\s+$/))) {
      return true;
    }
    alert('Tu nickname no debe tener espacios.') ;
  }
  
  function emailValid() {
    return !$('#email').hasClass('invalid') && ($('#email').val().trim().length !== 0);
  }
  
  function passwordValid() {
    return $('#password').val().length >= 6;
  }
  
  function confirmPassword() {
    if ($('#confirm-password').val().length >= 6 && $('#confirm-password').val() === $('#password').val()) {
      return true;
    }
    alert('Tus contraseñas no son iguales. Por favor inténtalo nuevamente');
  }
  
  function checkboxValid() {
    return $('#filled-in-box').prop('checked');
  }
  
  function allOk() {
    return nameValid() && lastNameValid() && nickNameValid() && emailValid() && passwordValid() && confirmPassword();
  }
  
  $('#filled-in-box').on('change', function() {
    if (allOk()) {
      $('.btn-sign-up').prop('disabled', false);
    } else {
      $(this).prop('checked', false);
    }
  });

  /* Guardando los campos en el local storage */

  var name = [],
    lastName = [],
    email = [],
    password = [],
    nickname = [],
    equalPassword = [];
 
  $('.btn-sign-up').click(function() {
    var nameVal = $('#first_name').val();
    lastNameVal = $('#last_name').val();
    nicknameVal = $('#nickname').val();
    emailVal = $('#email').val();
    passwordVal = $('#password').val();
    confirmPasswordVal = $('#confirm-password').val();

    name.push(nameVal);
    lastName.push(lastNameVal);
    nickname.push(nicknameVal);
    email.push(emailVal);
    password.push(passwordVal);
    equalPassword.push(confirmPasswordVal);

    localStorage.setItem('name_new_user', JSON.stringify(name));
    localStorage.setItem('last_name_new_user', JSON.stringify(lastName));
    localStorage.setItem('nickname', JSON.stringify(nickname));
    localStorage.setItem('email_new_user', JSON.stringify(email));
    localStorage.setItem('password_new_user', JSON.stringify(password));
    localStorage.setItem('confirm_password_new_user', JSON.stringify(equalPassword));
  });    
 
  /* Enviando a la siguiente vista, una vez que se llenaron todos los campos */

  $('.btn-sign-up').on('click', function() {
    $(location).attr('href', 'intereses.html');
  });

  /* Enviando a la vista home */

  $('.logo').on('click', function() {
    $(location).attr('href', 'home.html');
  });
});