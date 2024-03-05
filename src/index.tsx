import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeProvider } from './app/provider/ThemeProvider';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const renderEl = (
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
root.render(renderEl);
