import React from 'react'
import MyForm from '../components/MyForm';
import Navbar from '../components/Navbar';
import View from "./View";


function Home() {
  return (
    <div>
        <Navbar/>
        <MyForm/>
        <View />
    </div>
  );
}

export default Home