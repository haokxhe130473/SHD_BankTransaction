import { Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import paths, { rootPaths } from './path';

// Import trực tiếp tất cả các component
import App from '../App';
import MainLayout from '../layouts/main-layout';
import AuthLayout from '../layouts/auth-layout';
import Dashboard from '../pages/dashboard';
import Spinner from '../components/loading/Splash';
import LoadingProgress from '../components/loading/LoadingProgress';
import LoginPage from '../pages/authentication/login';
import SignUpPage from '../pages/authentication/signup';
import ForgetPasswordPage from '../pages/authentication/forget-password';
import ResetPasswordPage from '../pages/authentication/reset-password';
import NotFoundPage from '../pages/not-found';

/**
 * @Defines the routes for the application using React Router.
 */
export const routes = [
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: (
          <MainLayout>
            <Suspense fallback={<LoadingProgress />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: paths.transactions,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.signup,
            element: <SignUpPage />,
          },
          {
            path: paths.forgetPassword,
            element: <ForgetPasswordPage />,
          },
          {
            path: paths.resetPassword,
            element: <ResetPasswordPage />,
          },
        ],
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notFound,
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={paths.notFound} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
