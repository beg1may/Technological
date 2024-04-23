import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from '/src/Components/NavbarHeader';
import Content from "./Components/Body/Content";

const App = () => {
    return (
        <div className="fonts">
            <NavbarHeader />
            <Content />
        </div>
    );
};

export default App;