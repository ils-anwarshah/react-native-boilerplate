// all the auth queries will define here
import {useMutation} from '@tanstack/react-query';
import api from '../../config/axios/axiosConfig';

// this is the sample function defined here
const VALID_USERS = [
  {
    email: 'user@example.com',
    password: 'password123',
    userData: {
      id: 1,
      name: 'John Doe',
      email: 'user@example.com',
      role: 'user',
      token: 'mock-jwt-token-xyz123',
    },
  },
  {
    email: 'admin@example.com',
    password: 'password123',
    userData: {
      id: 2,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
      token: 'mock-jwt-token-xyz3134',
    },
  },
];

const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
const loginUsingEmailAndPasswordHandler = async ({data}: any) => {
  try {
    // network delay (800ms)
    await delay(800);

    // Find matching user in mock data
    const user = VALID_USERS.find(
      u => u.email === data.email && u.password === data.password,
    );

    if (user) {
      return {
        success: true,
        message: 'Login successful',
        data: user.userData,
      };
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.error('Login Error', error);
    throw error;
  }
};

export const useHandleLoginMutation = (config: any) =>
  useMutation({
    mutationFn: loginUsingEmailAndPasswordHandler,
    ...config,
  });
