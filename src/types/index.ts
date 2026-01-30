// Common types for the application

export type BaseEntity = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
};

// API response types
export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// Export contact types
export type { ContactBlock } from './contact';

// Add more types as needed
