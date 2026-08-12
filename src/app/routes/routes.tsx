import { createBrowserRouter } from "react-router";
import { CategoryPage, MainPage } from "../../pages";
import { Layout } from "../layouts/Layout";
import { ROUTES } from "../../shared";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {index: true, Component: MainPage},
      {path: ROUTES.community, element: <a>Comm</a>},
      {path: ':category', Component: CategoryPage},
      {path: 'article', children: [
        {path: ':alias', element: <a>Article</a>}
      ],
      },
      {
        path: ROUTES.profile.index, children: [
          {index: true, element: <a>Profile</a>},
          {path: ROUTES.profile.edit, element: <a>EditProfile</a>}
        ]
      }
    ]
  },
]);