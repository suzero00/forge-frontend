import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from '@/shared/hooks/useTheme';
import { Header } from '@/widgets';
import { Sidebar } from '@/widgets/sidebar';

const MainPage = lazy(() =>
    import('@/pages/main').then((module) => ({ default: module.MainPage })),
);
const AboutPage = lazy(() =>
    import('@/pages/about').then((module) => ({ default: module.AboutPage })),
);

export const AppRouter = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={'Loading...'}>
                <Header />
                <div className={`app_wrapper`}>
                    <Sidebar />
                    <div className={`app_content`}>
                        <Routes>
                            <Route path={'/'}>
                                <Route path={'/'} element={<MainPage />} />
                                <Route path={'/about'} element={<AboutPage />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
