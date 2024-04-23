import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from '/src/Components/NavbarHeader';
import Content from "./Components/Body/Content";
import Categories from "./Components/Body/Categories";

const App = () => {
    return (
        <div className="fonts">
            <NavbarHeader />
            <Content />
            <Categories />
        </div>
    );
};

export default App;