import React from 'react';
import "./style.css";
import Layout from '../layout';

interface defaultLayoutProps {
  children: React.ReactNode
}


const App: React.FC<defaultLayoutProps> = (props) => {
  return (
    <Layout/>
  )
}


export default App;
