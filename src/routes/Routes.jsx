import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/user/HomePage";
import  MoviesPage  from "../pages/user/MoviesPage";
import { LoginPage } from "../pages/user/loginPage";
import { SignupPage } from "../pages/user/signupPage";
import { JournalsPage } from "../pages/user/JournalsPage";
import { UserLayout } from "../layouts/UserLayout";
import { ErrorPage } from "../pages/user/ErrorPage";
import { ReviewPage } from "../pages/user/ReviewPage";
import { UserAuth } from "./ProtectedRoutes.jsx/UserAuth";
import MovieDetailPage from "../pages/user/MovieDetailPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "login",
            element: <LoginPage />
        },
        {
            path: "signup",
            element: <SignupPage />
        },
        {
            path: "movies",
            element: <MoviesPage />
        },
      ],
    },
    {
        path:"/user",
        element: (
        <UserAuth>
            <UserLayout />
        </UserAuth>
        ),
        children:[
            {
                path:"movies",
                element:<MoviesPage />
            },
            {
                path: "journals",
                element: <JournalsPage />
            },
            {
                path:"reviews",
                element: <ReviewPage />
            }, 
            {
                path: "movies/:id",
                element: <MovieDetailPage />
            }
           
        ],
    },
  ]);