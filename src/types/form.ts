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

// Add more form-related types as needed
