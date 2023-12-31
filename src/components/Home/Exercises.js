import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../../api/fetchData';
import ExerciseCard from '../Exercises/ExerciseCard';

const Exercises = ({ exercises, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=0',
          exerciseOptions
        );
    
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, []);

  return (
    <Box
      id='exercises'
      sx={{
        mt: { lg: '110px' },
      }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{
          gap: { xs: '50px', lg: '110px' },
        }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination // br strane
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
