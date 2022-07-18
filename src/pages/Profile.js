// import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import { DataContext } from '../context/DataContext';

function Profile() {
  return (
    <div>
      <Header title="Profile" bool={ false } />
      <h3 data-testid="profile-email">Email</h3>
      <button data-testid="profile-done-btn" type="button">Done Recipes</button>
      <button data-testid="profile-favorite-btn" type="button">Favorite Recipes</button>
      <button data-testid="profile-logout-btn" type="button">Logout</button>
      <Footer />
    </div>
  );
}

export default Profile;
