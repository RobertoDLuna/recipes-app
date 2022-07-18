// import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function DrinkId() {
  const { setFilteredById } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    const doFetch = async () => {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const json = await resp.json();
      setFilteredById(json);
    };
    doFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>oi</h1>
    </div>
  );
}

export default DrinkId;
