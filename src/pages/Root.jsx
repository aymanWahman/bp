import React from 'react';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <div>
      <header>
        My heder
      </header>

      <Outlet />
    </div>
  );
}

export default Root;
