import type { FC } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria";

export const Component: FC = () => {
  const navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Outlet />
    </RouterProvider>
  );
};

if (import.meta.env.DEV) Component.displayName = "Root";
