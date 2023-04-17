import { useMutation } from 'react-query';
import { authUrl } from './config';

const authenticateUser = async () => {
  console.log(authUrl);
  // window.location.replace(authUrl as string);

  return true;
};

export const useAuthenticateUser = () => {
  return useMutation(authenticateUser);
};
