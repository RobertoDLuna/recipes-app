import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

function Foods() {
  return (
    <div>
      <Header title="Foods" bool btnName="food" />
      <Recipes food />
      <Footer />
    </div>
  );
}

export default Foods;
