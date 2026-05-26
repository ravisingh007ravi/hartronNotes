export const ValidName = (value) => {
    const NameRegex = /^[A-Za-z ]{2,50}$/
    return NameRegex.test(value)
}

export const ValidEmail = (value) => {
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
    return EmailRegex.test(value)
}

export const ValidMobile = (value) => {
    const MobileRegex = /^[6-9]\d{9}$/
    return MobileRegex.test(value)
}

export const ValidPassword = (value) => {
    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    return PasswordRegex.test(value)
}

export const ValidPincode = (value) => {
    const PincodeRegex = /^[1-9][0-9]{5}$/
    return PincodeRegex.test(value)
}

export const ValidGender = (value) => {
    return ['male','female','other'].includes(value)
}

