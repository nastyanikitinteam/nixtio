import * as yup from 'yup';

// Common validation schemas using Yup

export const emailSchema = yup
  .string()
  .email('Invalid email format')
  .required('Email is required');

export const passwordSchema = yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required');

export const requiredStringSchema = yup
  .string()
  .required('This field is required');

export const optionalStringSchema = yup.string();

// Example: Login form schema
export const loginSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

// Example: Contact form schema
export const contactSchema = yup.object().shape({
  name: requiredStringSchema,
  email: emailSchema,
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

// Add more schemas as needed
