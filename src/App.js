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

      
