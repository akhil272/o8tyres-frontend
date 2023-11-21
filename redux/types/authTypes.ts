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

export type SignUpCustomerPayload = {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  addressLine01: string;
  addressLine02?: string;
  pinCode: number;
};

export type SignUpBusinessPayload = {
  companyName: string;
  gstNumber: string;
  officeNumber: string;
  email: string;
  password: string;
  addressLine01: string;
  addressLine02?: string;
  pinCode: number;
  accountManagerName: string;
  accountManagerPhoneNumber: string;
  employeeOneName: string;
  employeeOnePhoneNumber: string;
  employeeTwoName?: string;
  employeeTwoPhoneNumber?: string;
};

export type RefreshSuccessResponse = {
  accessToken: string;
  refreshToken: string;
};
