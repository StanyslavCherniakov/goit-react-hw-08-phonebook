import React from 'react';
import { Appbar } from '../AppBar/Appbar';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
};


