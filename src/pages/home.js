import React from "react";
import PageWrapper from "../UI/wrapper/pageWrapper";

import Card from "./card";
import Text from "./text";
import Header from "../components/header/index";
import Sidebar from "../components/sidebar/index"
import './home.css'


export default class Store extends React.Component {
  
    
  


  render() {
    const { home } = this.props;

    return (
      <PageWrapper className="home-layout">
      <div className="sidebar-responsive">
       <Sidebar />
       </div>
       <div className="left-sidebar">
      <Header  className="header-responsive"/>
      <Text />
      <Card />
      </div>
      
      
      
      
       
        
        
       
       

       
         
      

        
      </PageWrapper>
    );
  }
}
