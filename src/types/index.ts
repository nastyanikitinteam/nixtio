// Common types for the application

export type BaseEntity = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
};

// Form types
export type FormField = {
  name: string;
  label: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
};

export type FormValues = {
  [key: string]: string | number | boolean | null;
};

// API response types
export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// Add more types as needed
