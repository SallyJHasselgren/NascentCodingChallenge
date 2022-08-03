export function validateEmail(email) {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        throw new Error("You have entered an invalid email address");
    }
}