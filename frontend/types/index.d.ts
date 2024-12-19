type User = {
  email: string;
  fullName: string;
  profilePic: string;
  token: string;
};

/**
 *  RTK Query params types
 */

// POST /auth/login
type LogInParams = {
  email: string;
  password: string;
};

// POST /auth/signup
type SignUpParams = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
