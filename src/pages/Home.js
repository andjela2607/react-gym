import React from 'react'
import { Box } from '@mui/material';

import HeroBanner from '../components/Home/HeroBanner';
import SearchExercises from '../components/Home/SearchExercises';
import Exercises from '../components/Home/Exercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home