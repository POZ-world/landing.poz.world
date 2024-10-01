import React, { ReactNode } from 'react';
import { Header, Footer } from './navigation';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: ReactNode; // ReactNode is the correct type for children
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 xl:px-0">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;