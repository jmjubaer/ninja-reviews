import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SingleReview from "./pages/SingleReview.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Categories from "./pages/Categories.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/reviews/:id",
        element: <SingleReview></SingleReview>,
      },
      {
        path: "/category/:id",
        element: <Categories></Categories>,
      },
    ],
  },
]);
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
