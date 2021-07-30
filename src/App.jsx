import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';

export function App() {
    return (
        <>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <GlobalStyles />
        </>
    );
}

export default App;
