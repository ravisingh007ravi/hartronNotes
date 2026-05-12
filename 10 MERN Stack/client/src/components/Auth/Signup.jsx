import React from 'react';
import { useFormik } from 'formik';
import { FaGoogle, FaApple, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaVenusMars, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { validationSchema } from './Validation';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('Form data:', values);
    },
  });

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleAppleLogin = () => {
    console.log('Login with Apple');
  };

  // Form fields configuration
  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: FaUser,
      placeholder: 'Enter your name...',
      showPasswordToggle: false,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: FaEnvelope,
      placeholder: 'Enter your email...',
      showPasswordToggle: false,
    },
    {
      name: 'password',
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      icon: FaLock,
      placeholder: 'Enter your password...',
      showPasswordToggle: true,
      toggleState: showPassword,
      setToggleState: setShowPassword,
      helperText: 'Password must contain at least 8 characters, one uppercase, one lowercase, and one number',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: showConfirmPassword ? 'text' : 'password',
      icon: FaCheckCircle,
      placeholder: 'Confirm your password...',
      showPasswordToggle: true,
      toggleState: showConfirmPassword,
      setToggleState: setShowConfirmPassword,
      showMatchIndicator: true,
    },
  ];

  // Gender options
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const socialButtons = [
    {
      id: 'google',
      icon: FaGoogle,
      label: 'Sign up with Google',
      onClick: handleGoogleLogin,
      iconClass: 'text-red-500',
    },
    {
      id: 'apple',
      icon: FaApple,
      label: 'Sign up with Apple',
      onClick: handleAppleLogin,
      iconClass: 'text-black',
    },
  ];

  const passwordsMatch = formik.values.password && formik.values.confirmPassword && 
                        formik.values.password === formik.values.confirmPassword;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative">
          <img 
            src="https://img.magnific.com/free-vector/healthy-menu-blackboard_23-2147494330.jpg?t=st=1778561078~exp=1778564678~hmac=424a8cbb5dd57e65d0ba0c5ec3bf39a0fbf379883ee6fca81571cc8b1c02748e&w=1480" 
            alt="Healthy menu" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Signup Form */}
        <div className="md:w-1/2 p-8 lg:p-12 bg-white">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600">Join us today and start your journey</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Map through form fields */}
            {formFields.map((field) => {
              const Icon = field.icon;
              const hasError = formik.touched[field.name] && formik.errors[field.name];
              
              return (
                <div key={field.name}>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    <Icon className="inline mr-2 text-green-600" />
                    {field.label}
                  </label>
                  
                  {field.showPasswordToggle ? (
                    <div className="relative">
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
                          hasError
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                        }`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[field.name]}
                      />
                      <button
                        type="button"
                        onClick={() => field.setToggleState(!field.toggleState)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {field.toggleState ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
                        hasError
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[field.name]}
                    />
                  )}
                  
                  {hasError && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors[field.name]}</p>
                  )}
                  
                  {field.helperText && !hasError && (
                    <p className="text-gray-500 text-xs mt-1">{field.helperText}</p>
                  )}
                  
                  {field.showMatchIndicator && passwordsMatch && (
                    <p className="text-green-600 text-xs mt-1 flex items-center">
                      <FaCheckCircle className="mr-1" /> Passwords match!
                    </p>
                  )}
                </div>
              );
            })}

            {/* Gender Field - Separate due to radio buttons structure */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                <FaVenusMars className="inline mr-2 text-green-600" />
                Gender
              </label>
              <div className="flex gap-4">
                {genderOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.gender === option.value}
                      className="mr-2 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition duration-300 shadow-md"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons - Mapped */}
          <div className="space-y-3">
            {socialButtons.map((button) => {
              const Icon = button.icon;
              return (
                <button
                  key={button.id}
                  onClick={button.onClick}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <Icon className={`${button.iconClass} text-xl`} />
                  <span className="font-medium text-gray-700">{button.label}</span>
                </button>
              );
            })}
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 font-semibold hover:text-green-700 transition duration-300">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}