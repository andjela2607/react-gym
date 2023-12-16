import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/Home/HeroBanner';
import SearchExercises from '../components/Home/SearchExercises';
import Exercises from '../components/Home/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
