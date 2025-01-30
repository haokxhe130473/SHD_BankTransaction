import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider từ react-redux
import { store } from './states/store'; // Import store của bạn
import router from './routes/router';
import { theme } from './theme/theme';
import './index.css';
import BreakpointsProvider from './providers/useBreakpoints';
// import './../src/components/common/pdfWorker'; // Đảm bảo cấu hình worker

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BreakpointsProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </BreakpointsProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);