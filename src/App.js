import React from 'react';
import Header from './components/shared/Header';

const App = ({children}) => (
    <div>
        <Header />
        <main className="container">
            {children}
        </main>
    </div>
);

export default App;