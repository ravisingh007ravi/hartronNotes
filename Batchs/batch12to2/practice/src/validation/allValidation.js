export const ValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

export const ValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const ValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

export const ValidGender = (title) => {
    return ['male', 'female', 'other'].includes(title);
}

export const ValidMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
}

export const ValidPincode = (pincode) => {
    const pincodeRegex = /^[1-9]\d{5}$/;
    return pincodeRegex.test(pincode);
}