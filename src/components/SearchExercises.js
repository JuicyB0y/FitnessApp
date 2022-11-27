import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar.js';

import './searchExercises.css';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  // const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseDate = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions,
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExerciseDate();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div className="search-wrapper">
      <h2 className="search-header">
        Awesome Exercises You <br /> Shoul Know
      </h2>
      <div className="search-inputWrapper">
        <input
          value={search}
          onChange={handleInput}
          className="search-input"
          placeholder="Search Exercises"
          type="text"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="search-categories">
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </div>
    </div>
  );
};

export default SearchExercises;
