import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser, selectIsRefreshing } from '../redux/auth/authSlice';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return { isLoggedIn, isRefreshing, user };
};

