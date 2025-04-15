// all the home queries will define here

import {useQuery} from '@tanstack/react-query';
import {KEYS} from '../queriesKey';
import api from '../../config/axios/axiosConfig';
import useUserStore from '../../zustand/stores/useUserStore';

// this is the sample function defined here

const USER_DATA = [
  {
    id: 1,
    name: 'John Doe',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/150',
    role: 'user',
  },
  {
    id: 2,
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: 'https://via.placeholder.com/150',
    role: 'admin',
  },
];
const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

const fetchUserDetails = async (id: any) => {
  try {
    await delay(800);
    // const res = await api.get(`ENDPOINT`);
    const userData = USER_DATA.find(user => user.id === id);
    if (userData) {
      useUserStore.setState({userDetails: userData});
      return {
        success: true,
        message: 'Fetched successful',
        data: userData,
      };
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.error('Error', error);
  }
};

export const useFetchUserDetailsQuery = (id: any, enabled: boolean) =>
  useQuery({
    queryKey: [KEYS.GET_ALL_POSTS],
    queryFn: () => fetchUserDetails(id),
    enabled: enabled,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
