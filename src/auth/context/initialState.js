import { UserInformationLocalStorage } from '../../utils/Auth';

export const initialState = {
  isAuthenticated: !!localStorage.getItem('accessToken'),
  username: localStorage.getItem('username') || null,
  ...UserInformationLocalStorage(),
  error: null,
  isLoading: false,
};
