export type ApiResponse<T> = {
  success: boolean;
  status?: number;
  message?: string;
  data: T;
  meta?: {
    total: number;
    page: number;
    lastPage: number;
  };
};

export type ErrorResponse = {
  status: number;
  data: {
    statusCode: number;
    message: string | string[];
    error: string;
  };
};
