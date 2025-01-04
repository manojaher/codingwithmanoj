import { useNavigate } from 'react-router-dom';

export const useNavigateTo = (): ((path: string) => void) => {
  const navigate = useNavigate();

  const navigateTo = (path: string): void => {
    navigate(path);
  };
  return navigateTo;
};
