function validate_first_name(txt)
{
    let result = /^([A-Z{PL}][a-z{pl}]{2,20})?$/.test(txt.value);
    if(!result){
        txt.style.borderColor = "red";
        return false
    }
    txt.style.borderColor = "green";
    return true
}

function validate_last_name(txt)
{
    let result = /^([A-Z{PL}][a-z{pl}]{2,20})?$/.test(txt.value);
    if(!result){
        txt.style.borderColor = "red";
        return false
    }
    txt.style.borderColor = "green";
    return true
}

function validate_login(txt)
{
    let result = /^([a-z]{3,12})?$/.test(txt.value);
    if(!result){
        txt.style.borderColor = "red";
        return false
    }
    txt.style.borderColor = "green";
    return true
}

function validate_sex(txt)
{
    let result = /^([MK])?$/.test(txt.value);
    if(!result){
        txt.style.borderColor = "red";
        return false
    }
    txt.style.borderColor = "green";
    return true
}

function validate_password(txt)
{
    let result = /^([a-z]{3,12})?$/.test(txt.value);
    if(!result){
        txt.style.borderColor = "red";
        return false
    }
    txt.style.borderColor = "green";
    return true
}

function validate_password_repeat(txt)
{
    let result = /^({8,})?$/.test(txt.value);
    if(password.value!=password2.value){
        result = false
    }
    if(!result){
        txt.style.borderColor = "red";
        return false
    }
    txt.style.borderColor = "green";
    return true
}


function attach_events(){     
    const button = document.getElementById("button");
    const form = document.getElementById('formularz');
    let error
    var firstName = document.getElementById("firstname")
    var lastName = document.getElementById("lastname")
    var login = document.getElementById("login")
    var sex = document.getElementById("sex")
    var password = document.getElementById("password")
    var password2 = document.getElementById("password2")
    
    firstName.addEventListener("input", function(ev){
        validate_first_name(firstName)
        alert("FIREFORX PLS")
    });

    lastName.addEventListener("input", function(ev){
        validate_last_name(lastName)
    });

    login.addEventListener("input", function(ev){
        validate_login(login)
    });

    sex.addEventListener("input", function(ev){
        validate_sex(sex)
    });

    password.addEventListener("input", function(ev){
        validate_password(password)
    });

    password2.addEventListener("input", function(ev){
        validate_password_repeat(password2)
    });


    form.addEventListener("submit", ev => {
        ev.preventDefault()
        alert("FIREFORX PLS")
        error = false
        if(!validate_first_name(firstName)){
            createFieldError(firstName, "Imię musi składać się z co najmniej 2 liter i zaczynać od dużej litery")
            error = true
        }
        if(!validate_last_name(lastName)){
            createFieldError(lastName, "Nazwisko musi składać się z co najmniej 2 liter i zaczynać od dużej litery")
            error = true
        }
        if(!validate_login(login)){
            createFieldError(login, "Login musi składać się z 3 do 12 liter i samych małych liter")
            error = true
        }

        if(!validate_sex(sex)){
            createFieldError(sex, "Płeć musi być uzupełniona jako M lub K")
            error = true
        }

        if(!validate_password(password)){
            createFieldError(password, "Hasło musi składać się z conajmniej 8 liter")
            error = true
        }

        if(!validate_password_repeat(password2)){
            createFieldError(password2, "Hasło musi składać się z conajmniej 8 liter i być takie same")
            error = true
        }
        
        if(!error){
            ev.target.submit();
        }
    });
}

function createFieldError(field, text) {
    removeFieldError(field);
    const div = document.createElement("div");
    div.classList.add("form-error-text");
    div.innerText = text;
    if (field.nextElementSibling === null) {
        field.parentElement.appendChild(div);
    } else {
        if (!field.nextElementSibling.classList.contains("form-error-text")) {
            field.parentElement.insertBefore(div, field.nextElementSibling);
        }
    }
}

function removeFieldError(field) {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("form-error-text")) {
            errorText.remove();
        }
    }
}
attach_events()