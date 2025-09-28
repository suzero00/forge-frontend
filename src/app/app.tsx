import { AppRouter } from '@/app/providers/router';
import '@/shared/assets/styles/main.scss';
import { ThemeProvider } from '@/app/providers/theme-provider/ui/theme-provider';
import '@/shared/config/i18n/i18n';

export const App = () => {
    return (
        <>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </>
    );
};
