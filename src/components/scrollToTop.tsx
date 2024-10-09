import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;