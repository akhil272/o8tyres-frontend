export type ApiResponse<T> = {
  success: boolean;
  status?: number;
  message?: string;
  data: T;
};

export type ErrorResponse = {
  status: number;
  data: {
    statusCode: number;
    message: string;
    errors: [
      {
        message: string;
      }
    ];
  };
};
