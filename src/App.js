import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name:</label>
      <input {...register('firstName', { required: 'First Name is required' })} />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input {...register('lastName', { required: 'Last Name is required' })} />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="email">Email:</label>
      <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="city">City:</label>
      <input {...register('city', { required: 'City is required' })} />
      {errors.city && <p>{errors.city.message}</p>}

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input {...register('phoneNumber', { required: 'Phone Number is required', pattern: { value: /^\d+$/, message: 'Invalid phone number' } })} />
      {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
