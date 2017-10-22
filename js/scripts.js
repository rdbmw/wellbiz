$(function() {

  //// УПРАВЛЕНИЕ СЛАЙДЕРОМ НА ГЛАВНОЙ СТРАНИЦЕ ---- НАЧАЛО ---- /////
  var slide_fwd = document.querySelector(".slide__forward");
  var slide_bwd = document.querySelector(".slide__backward");
  var radios = document.getElementById('top-slider').getElementsByTagName('input');

  slide_fwd.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        if (i === radios.length - 1) {
          radios[0].checked = true;
          break;
        }
        radios[i + 1].checked = true;
        break;
      }
    }
  });

  slide_bwd.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        if (i === 0) {
          radios[radios.length - 1].checked = true;
          break;
        }
        radios[i - 1].checked = true;
        break;
      }
    }
  });
  //// УПРАВЛЕНИЕ СЛАЙДЕРОМ НА ГЛАВНОЙ СТРАНИЦЕ ---- КОНЕЦ ---- /////

  //// УПРАВЛЕНИЕ СЛАЙДЕРОМ С ПЕРСОНАЛОМ НА ГЛАВНОЙ СТРАНИЦЕ ---- НАЧАЛО ---- /////
  var person_fwd = document.querySelector(".person__forward");
  var person_bwd = document.querySelector(".person__backward");
  var persons = document.getElementById('person-slider').getElementsByTagName('input');

  person_fwd.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].checked) {
        if (i === persons.length - 1) {
          persons[0].checked = true;
          break;
        }
        persons[i + 1].checked = true;
        break;
      }
    }
  });

  person_bwd.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].checked) {
        if (i === 0) {
          persons[radios.length - 1].checked = true;
          break;
        }
        persons[i - 1].checked = true;
        break;
      }
    }
  });
  //// УПРАВЛЕНИЕ СЛАЙДЕРОМ С ПЕРСОНАЛОМ НА ГЛАВНОЙ СТРАНИЦЕ ---- КОНЕЦ ---- /////


  //// ОБРАТНЫЙ ЗВОНОК В ШАПКЕ  ---- НАЧАЛО ---- /////
  var btns = document.getElementsByClassName("jscallback");
  var modal = document.getElementById('callback');
  var modalClose = modal.querySelector(".modal-content__close");
  var modalOk = document.getElementById('callback_ok');
  var modalOkClose = modalOk.querySelector(".modal-content__close");
  var modalOkbtn = modalOk.querySelector(".lead-form__btn");
  var overlay = document.querySelector(".modal-overlay");
  var leadComment = document.getElementById('leadComment');

  // показ модального окна
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
      event.preventDefault();
      // yaCounter45566046.reachGoal('ClickButton');
      modal.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
      leadComment.value = "кнопка '" + this.textContent +"'";
    });
  }

  // закрытие модального окна по кресту
  modalClose.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  // закрытие модального окна по кресту
  modalOkClose.addEventListener("click", function(event) {
    event.preventDefault();
    modalOk.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("leadComment").value = '';
  });

  // закрытие модального окна по кресту
  modalOkbtn.addEventListener("click", function(event) {
    event.preventDefault();
    modalOk.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    document.getElementById("name").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("leadComment").value = '';
  });

  // отправка формы
  var form = document.getElementById("leadForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (document.getElementById("name").value == "" || document.getElementById("phone").value == "") {
      document.getElementById("error").innerHTML = "Заполните имя и телефон!";
    } else {
      document.getElementById("error").innerHTML = "";
      document.getElementById("submitbtn").classList.toggle("lead-form__btn--loading");
      document.getElementById("submitbtn").disabled = true;
      // yaCounter45566046.reachGoal('Lead');

      setTimeout(function() {
        document.getElementById("submitbtn").classList.toggle("lead-form__btn--loading");
        document.getElementById("submitbtn").disabled = false;
        modal.classList.toggle("hidden");
        modalOk.classList.toggle("hidden");
      }, 2000);

      // var xmlhttp = (window.XMLHttpRequest)
      //   ? new XMLHttpRequest()
      //   : new ActiveXObject("Microsoft.XMLHTTP");
      // xmlhttp.open('POST', '/catch/', true);
      // xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      // xmlhttp.onreadystatechange = function() {
      //   if (xmlhttp.readyState == 4) {
      //     if (xmlhttp.status == 200) {
      //       document.getElementById("name").value = '';
      //       document.getElementById("phone").value = '';
      //       // form.getElementById("com").value='';
      //     } else if (xmlhttp.status == 500) {
      //       document.getElementById("error").innerHTML = "Сервер не отвечает!<br>" + xmlhttp.responseText + "<br>Попробуйте позже";
      //     } else {
      //       document.getElementById("error").innerHTML = "Ошибка!<br>" + xmlhttp.responseText;
      //     }
      //     document.getElementById("submitbtn").classList.toggle("lead-form__btn--loading");
      //   }
      // }
      // var reqjson = {
      //   name: document.getElementById("name").value,
      //   phone: document.getElementById("phone").value,
      //   comment: document.getElementById("leadComment").value,
      // };
      // xmlhttp.send(JSON.stringify(reqjson));
    }
  });
  //// ОБРАТНЫЙ ЗВОНОК В ШАПКЕ  ---- КОНЕЦ ---- /////

  //// ОТЗЫВЫ  ---- НАЧАЛО ---- /////
  var reviewBtns = document.getElementsByClassName("review__more");
  var fullReviews = document.getElementsByClassName("review-full");

  for (var i = 0; i < reviewBtns.length; i++) {
    reviewBtns[i].addEventListener("click", function(event) {
      event.preventDefault();
      // yaCounter45566046.reachGoal('ClickButton');
      fullReviews[this.dataset.full].classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
  }

  for (var i = 0; i < fullReviews.length; i++) {
    fullReviews[i].querySelector(".review-full__close").addEventListener("click", function(event) {
      event.preventDefault();
      // yaCounter45566046.reachGoal('ClickButton');
      fullReviews[this.dataset.full].classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
  }

  //// ОТЗЫВЫ  ---- КОНЕЦ ---- /////
});
