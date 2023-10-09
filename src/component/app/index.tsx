import React from 'react';
import "./style.css";
import Layout from '../layout';

interface defaultLayoutProps {
  children: React.ReactNode
}


const App: React.FC<defaultLayoutProps> = (props) => {
  return (
    < ><div className="btn btn-danger">Button</div><h1>hi</h1></>
  )
}

export default App;
