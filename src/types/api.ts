// API related types

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// API Request configuration
export interface APIRequestConfig {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  signal?: AbortSignal;
}

// API Response
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: APIError;
  message?: string;
  statusCode: number;
  timestamp?: string;
}

// API Error
export interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
  stack?: string;
}

// Pagination
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// Search/Filter
export interface SearchParams {
  query?: string;
  filters?: Record<string, any>;
  page?: number;
  limit?: number;
}

// Contact form submission
export interface ContactFormSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
  consent: boolean;
}

// Newsletter subscription
export interface NewsletterSubscription {
  email: string;
  name?: string;
  interests?: string[];
}

// File upload
export interface FileUpload {
  file: File;
  filename: string;
  mimeType: string;
  size: number;
}

export interface FileUploadResponse {
  url: string;
  filename: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
}
