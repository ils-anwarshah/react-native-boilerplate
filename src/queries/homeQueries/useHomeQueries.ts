// all the home queries will define here

import {useQuery} from '@tanstack/react-query';
import {KEYS} from '../queriesKey';
import api from '../../config/axios/axiosConfig';

// this is the sample function defined here
/**
 * 
 *  
const fetchUserPosts = async () => {
    try {
        const res = await api.get(`ENDPOINT`);
        return res.data;
    } catch (error) {
        console.error('Error', error);
    }
};

export const useUserPostQuery = (postId: number) =>
useQuery({
queryKey: [KEYS.GET_ALL_POSTS, postId],
queryFn: fetchUserPosts,
});
*/
