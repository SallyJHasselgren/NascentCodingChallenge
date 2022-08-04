export function validateEmail(email) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        throw new Error("You have entered an invalid email address");
    }
}

export function validatePhonenumber(number) {
    var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!(phone.test(number))) {
        throw new Error("You have entered an invalid phone number");
    }
}
