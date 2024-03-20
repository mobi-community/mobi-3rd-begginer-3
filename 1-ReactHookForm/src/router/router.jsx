import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/layout';
import Main from '../pages/main';
import EmailPW from '../pages/Sign-up/emailPW';
import PhBirth from '../pages/Sign-up/phBirth';
import AboutMe from '../pages/Sign-up/AboutMe';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/Email_Pw',
        element: <EmailPW />,
      },
      {
        path: '/Ph_Birth',
        element: <PhBirth />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
    ],
  },
]);
export default router;
