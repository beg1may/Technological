import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from '/src/Components/NavbarHeader';
import Content from "./Components/Body/Content";
import Categories from "./Components/Body/Categories";
import NewsCard from "./Components/Body/News-card";
import AboutUs from "./Components/Body/AboutUs";
import Footer from "./Components/Body/Footer";

const App = () => {
    return (
        <div className="fonts">
            <NavbarHeader />
            <Content />
            <Categories />
            <NewsCard />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default App;