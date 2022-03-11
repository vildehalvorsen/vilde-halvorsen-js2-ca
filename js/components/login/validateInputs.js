export function checkLength(value, length) {
    if (value.length >= length) {
        return true;
    } else {
        return false;
    }
}

export function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const testEmail = reg.test(email);
    return testEmail;
}