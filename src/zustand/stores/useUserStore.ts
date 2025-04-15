import {create} from 'zustand';
import {UserStoreTypes} from '../../utils/TypeScritTypes/userStoreTypes';

const useUserStore = create<UserStoreTypes>((set, get) => ({
  userDetails: {},
  userToken: null,
  resetUserStore: () =>
    set({
      userDetails: {},
      userToken: null,
    }),
}));

export default useUserStore;
