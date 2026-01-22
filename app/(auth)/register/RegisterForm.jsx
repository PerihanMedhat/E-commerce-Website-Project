'use client';
import { useState } from 'react';

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (formData.password !== formData.confirmPassword) {
  //     toast.error('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const res = await fetch('/api/register', {
  //       method: 'POST',
  //       body:{
  //         email: formData.email,
  //         password: formData.password
  //       }
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       toast.error(data.message || 'Registration failed');
  //     }

  //     toast.success('Registration successfully!');
  //     router.push('/');
  //   } catch (error) {
  //     toast.error(error.message || 'Something went wrong');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <form className="flex flex-col space-y-4">
        <label className="font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          required
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <label className="font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          minLength={6}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <label className="font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          minLength={6}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition duration-200 my-6 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;


