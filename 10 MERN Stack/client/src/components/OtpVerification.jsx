import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showErrorToast, showSuccessToast } from './notification/Tost';
import {local} from '../ApiUrl'
export default function OtpVerification() {

  const Navigate = useNavigate()

  const { id } = useParams();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleChange = (index, value) => {
    // Allow only single digit
    if (value.length > 1) {
      value = value[0];
    }

    // Check if it's a number
    if (value && !/^\d+$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // If all digits are filled, auto-submit
    const allFilled = newOtp.every(digit => digit !== '');
    if (allFilled) {
      handleSubmit(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        // Move to previous input if current is empty
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else if (otp[index] !== '') {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }

    // Handle left arrow key
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
    }

    // Handle right arrow key
    if (e.key === 'ArrowRight' && index < 3) {
      e.preventDefault();
      inputRefs.current[index + 1].focus();
    }

    // Handle delete key
    if (e.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.slice(0, 4).split('').filter(char => /^\d+$/.test(char));
    
    if (digits.length > 0) {
      const newOtp = [...otp];
      digits.forEach((digit, idx) => {
        if (idx < 4) {
          newOtp[idx] = digit;
        }
      });
      setOtp(newOtp);
      
      // Focus on the next empty input or last filled
      const lastFilledIndex = Math.min(digits.length, 3);
      inputRefs.current[lastFilledIndex].focus();
      
      // Auto-submit if all fields are filled
      if (newOtp.every(digit => digit !== '')) {
        handleSubmit(newOtp.join(''));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (otpCode) => {
    if (otpCode.length !== 4) {
      showErrorToast('Please enter complete OTP');
      return;
    }

    setLoading(true);
    try {
      
      const response = await axios.post(`${local}user/verify_otp/${id}`,{userotp:otp.join('')})
      if(response.status==200){
        showErrorToast('Successfully Verify Otp')
        Navigate('/login')
      }
    } catch (error) {
      showErrorToast(error?.response?.data?.msg ||'Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (!canResend) return;

    setLoading(true);
    try {
     
     console.log(otp)
    } 
    catch (error) {
      showErrorToast('Failed to resend OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">OTP Verification</h1>
          <p className="text-gray-600">
            Enter the 4-digit code sent to your registered email/phone
          </p>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              autoFocus={index === 0}
              disabled={loading}
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={() => handleSubmit(otp.join(''))}
          disabled={loading || otp.some(digit => digit === '')}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>

        {/* Resend Section */}
        <div className="mt-6 text-center">
          {canResend ? (
            <button
              onClick={handleResendOtp}
              disabled={loading}
              className="text-green-600 font-semibold hover:text-green-700 transition duration-300 disabled:opacity-50"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-600">
              Resend code in <span className="font-bold text-green-600">{timeLeft}</span> seconds
            </p>
          )}
        </div>

        {/* Back to Login Link */}
        <div className="mt-4 text-center">
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-gray-700 transition duration-300"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}