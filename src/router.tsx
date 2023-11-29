import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    lazy: () => import("~/Root.tsx"),
    children: [
      {
        index: true,
        lazy: () => import("~/pages/index.page.tsx"),
      },
      {
        path: "*",
        lazy: () => import("~/pages/404.page.tsx"),
      },
    ],
  },
]);

export default router;
