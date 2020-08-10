import React from 'react';
import Footer from './Footer';
import Header from './Header';


const Layout = (props) => {

  return( 
    <html>
      <head>
        <title>Kevin Duan</title>
      </head>
      <div>
        <Header/>
        <div className="content-main">
          {props.children}
        </div>
        <Footer/>
      </div>
    </html>
  )
}

export default Layout
