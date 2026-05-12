import * as Yup from 'yup';
import { FaGoogle, FaApple, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaVenusMars, FaCheckCircle } from 'react-icons/fa';


export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-z A-Z]{0,50}$/, 'Invalid name (only letters and spaces, max 50 characters)')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 
      'Password must contain at least 8 characters, one uppercase, one lowercase, and one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Invalid gender')
    .required('Gender is required'),
});



export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 
      'Password must contain at least 8 characters, one uppercase, one lowercase, and one number')
    .required('Password is required'),
});