import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import './exercises.css';
import Pagination from './Pagination';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions,
        );
      }

      setExercises(exercisesData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  console.log(exercises);
  return (
    <div id="exercises" className="exercises-wrapper">
      <h3 className="exercises-header">Showing Results</h3>
      <div className="exercises-div">
        {currentItems.map((item, i) => (
          <ExerciseCard key={i} item={item} />
        ))}
      </div>
      <div className="exercises-pagination">
        {exercises.length > 9 && <Pagination exercises={exercises} setCurrentItems={setCurrentItems} />}
      </div>
    </div>
  );
};

export default Exercises;
