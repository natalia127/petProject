import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export function App() {
  const {
    theme,
  } = useTheme();
  return (
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="loading">
                <Navbar />
                <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
            </Suspense>
      </div>
  );
}
