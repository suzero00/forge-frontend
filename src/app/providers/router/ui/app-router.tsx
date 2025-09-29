import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from '@/shared/hooks/useTheme';
import { Header } from '@/widgets';
import { Sidebar } from '@/widgets/sidebar';
import { Loader } from '@/shared/ui/loader';
import { NotFoundPage } from '@/pages/not-found';

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
            <Header />
            <div className={`app_wrapper`}>
                <Sidebar />
                <div className={`app_content`}>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={'/'}>
                                <Route index element={<MainPage />} />
                                <Route path={'/about'} element={<AboutPage />} />
                            </Route>
                            <Route path={'*'} element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};
