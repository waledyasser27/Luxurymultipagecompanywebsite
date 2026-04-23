import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:slug", Component: ProjectDetailsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
