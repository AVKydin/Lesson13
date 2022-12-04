
let firstNameRegExp = /^[a-zA-Z]{2,20}$/;
let lastNameRegExp = /^[a-zA-Z]{2,20}$/;
let emailRegExp = /\w*\d*\.*@\w*.\w*/;
let passwordRegExp = /^[a-zA-Z0-9]{8,15}$/;

let getId = (id) => document.getElementById(id);

// input firstName

getId("firstName").oninput = function () {
    let firstName = firstNameRegExp.test(getId("firstName").value);
    if (firstName) {
        getId("pFirstName").style.display = "none";
        getId("greenFirst").style.display = "block";
        this.style.border = "2px solid green";
    } else {
        getId("pFirstName").style.display = "block";
        getId("greenFirst").style.display = "none";
        getId("redFirst").style.display = "block";
        this.style.border = "2px solid red";
    }
};

// input lastName

getId("lastName").oninput = function () {
    let lastName = lastNameRegExp.test(getId("lastName").value);
    if (lastName) {
        getId("pLastName").style.display = "none";
        getId("greenLast").style.display = "block";
        this.style.border = "2px solid green";
    } else {
        getId("pLastName").style.display = "block";
        getId("greenLast").style.display = "none";
        getId("redLast").style.display = "block";
        this.style.border = "2px solid red";
    }
};

// input Email adress

getId("email").oninput = function () {
  let email = emailRegExp.test(getId("email").value);
  if (email) {
    getId("pEmailAdress").style.display = "none";
    getId("greenEmail").style.display = "block";
    this.style.border = "2px solid green";
  } else {
    getId("pEmailAdress").style.display = "block";
    getId("greenEmail").style.display = "none";
    getId("redEmail").style.display = "block";
    this.style.border = "2px solid red";
  }
};

// input password

getId("password").oninput = function () {
let password = passwordRegExp.test(getId("password").value);
  if (password) {
    getId("pPassword").style.display = "none";
    getId("greenPassword").style.display = "block";
    this.style.border = "2px solid green";
  } else {
    getId("pPassword").style.display = "block";
    getId("greenPassword").style.display = "none";
    getId("redPassword").style.display = "block";
    this.style.border = "2px solid red";
  }
};


// input signUp

getId("checkbox").oninput = function () {
  let checkbox = getId("checkbox");
  let signUp = getId("signUp");
  let modal = getId("modal");
  let btn = getId("btn");
  let password = passwordRegExp.test(getId("password").value);
  let email = emailRegExp.test(getId("email").value);
  let lastName = lastNameRegExp.test(getId("lastName").value);
  let firstName = firstNameRegExp.test(getId("firstName").value);

  if (checkbox.checked && password && email && lastName && firstName) {
    signUp.removeAttribute("disabled");
    signUp.style.cursor = "pointer";
    signUp.style.backgroundColor = "rgb(33, 112, 143)";
  }

  signUp.onclick = function () {
    modal.style.display = "block";
    document.querySelector("body").style.backgroundColor = 'silver';

  }

  btn.onclick = function () {
    location.reload();
    // modal.style.display = "none";
    // getId("password").value = '';
    // getId("email").value = "";
    // getId("lastName").value = "";
    // getId("firstName").value = "";
    // document.querySelector("body").style.backgroundColor = "";
    // getId("greenPassword").style.display = "none";
    // getId("redPassword").style.display = "none";
    // getId("greenEmail").style.display = "none";
    // getId("redEmail").style.display = "none";
    // getId("greenLast").style.display = "none";
    // getId("redLast").style.display = "none";
    // getId("greenFirst").style.display = "none";
    // getId("redFirst").style.display = "none";
    // getId("firstName").style.border = "";
    // getId("lastName").style.border = "";
    // getId("email").style.border = "";
    // getId("password").style.border = "";
    // signUp.style.backgroundColor = "";
    // checkbox.checked = false;
  }

};
