import React from 'react';
import './header.styles.scss';

const Header = () => {

    return (
            <div>
            <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>

                <div className="header-main">
                        <div className="dev">
                        <h1>Kevin Duan</h1>
                        <span className="attr">Aspiring Software Engineer</span>
                        <span className="dot">•</span>
                        <span className="attr">NYU Stats, Math, and CS</span>
                        </div>
                        <div className="icons">
                        <a href='https://github.com/kdduan'><i className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/kevinduan1/'><i className="fab fa-linkedin"></i></a>
                        <a href='https://www.facebook.com/kevin.duan.3/'><i className="fab fa-facebook"></i></a>
                        </div>
                        <hr/>
                 </div>
            </div>
        
    );
}

export default Header
