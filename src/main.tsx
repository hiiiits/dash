import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import router from "~/router.tsx";

import { setupTheme } from "~/stores/theme.ts";

import "@unocss/reset/tailwind.css";
import "~/styles/globals.css";
import "virtual:uno.css";

setupTheme();

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
