export type User = {
  id: number;
  username: string;
  email: string;
  role: {
    name: string;
  };
};

export type SignSuccessResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type RefreshSuccessResponse = {
  accessToken: string;
  refreshToken: string;
};
