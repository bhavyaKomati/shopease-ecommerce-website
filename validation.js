const form = document.getElementById("checkoutForm");

function showError(input, errorId, message){
    document.getElementById(errorId).textContent = message;
    input.style.border = "2px solid red";
}

function showSuccess(input, errorId){
    document.getElementById(errorId).textContent = "";
    input.style.border = "2px solid green";
}

function validateFullName(){
    const input = document.getElementById("fullName");
    const regex = /^[A-Za-z ]{3,}$/;

    if(!regex.test(input.value)){
        showError(input, "fullNameError", "Please enter your full name (letters only)");
        return false;
    }

    showSuccess(input, "fullNameError");
    return true;
}

function validateEmail(){
    const input = document.getElementById("email");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(input.value)){
        showError(input, "emailError", "Please enter a valid email address");
        return false;
    }

    showSuccess(input, "emailError");
    return true;
}

function validatePhone(){
    const input = document.getElementById("phone");

    if(!/^\d{10}$/.test(input.value)){
        showError(input, "phoneError", "Phone must be 10 digits");
        return false;
    }

    showSuccess(input, "phoneError");
    return true;
}

function validateAddress(){
    const input = document.getElementById("address");

    if(input.value.length < 10){
        showError(input, "addressError", "Please enter your full street address");
        return false;
    }

    showSuccess(input, "addressError");
    return true;
}

function validateCity(){
    const input = document.getElementById("city");

    if(!/^[A-Za-z ]+$/.test(input.value)){
        showError(input, "cityError", "Please enter a valid city name");
        return false;
    }

    showSuccess(input, "cityError");
    return true;
}

function validatePostal(){
    const input = document.getElementById("postal");

    if(!/^\d{5,6}$/.test(input.value)){
        showError(input, "postalError", "Please enter a valid postal code");
        return false;
    }

    showSuccess(input, "postalError");
    return true;
}

function validateCard(){
    const input = document.getElementById("card");

    if(!/^\d{16}$/.test(input.value)){
        showError(input, "cardError", "Card number must be 16 digits");
        return false;
    }

    showSuccess(input, "cardError");
    return true;
}

function validateExpiry(){
    const input = document.getElementById("expiry");

    if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(input.value)){
        showError(input, "expiryError", "Please enter a valid future expiry date");
        return false;
    }

    showSuccess(input, "expiryError");
    return true;
}

function validateCVV(){
    const input = document.getElementById("cvv");

    if(!/^\d{3}$/.test(input.value)){
        showError(input, "cvvError", "CVV must be 3 digits");
        return false;
    }

    showSuccess(input, "cvvError");
    return true;
}

document.getElementById("fullName").oninput = validateFullName;
document.getElementById("email").oninput = validateEmail;
document.getElementById("phone").oninput = validatePhone;
document.getElementById("address").oninput = validateAddress;
document.getElementById("city").oninput = validateCity;
document.getElementById("postal").oninput = validatePostal;
document.getElementById("card").oninput = validateCard;
document.getElementById("expiry").oninput = validateExpiry;
document.getElementById("cvv").oninput = validateCVV;

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(
        validateFullName() &&
        validateEmail() &&
        validatePhone() &&
        validateAddress() &&
        validateCity() &&
        validatePostal() &&
        validateCard() &&
        validateExpiry() &&
        validateCVV()
    ){
        localStorage.removeItem("cart");
        window.location.href = "order-success.html";
    }
});