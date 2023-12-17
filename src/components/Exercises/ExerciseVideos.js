import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';

import Loader from "../Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { xs: '20px', lg: '200px' } }} p='20px'>
      <Typography variant='h3' mb='33px' fontWeight='bold'>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { xs: '0', lg: '110px' },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((exerciseVideo, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${exerciseVideo?.video?.videoId}`}
            target='_blank' // novi prozor
            rel='noreferrer' // eksterni link 
            key={index}
            style={{ textDecoration: 'none' }}
          >
            <Card
              sx={{
                width: 400,
                height: 350,
                borderTop: '4px solid #ff2625',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s all ease-in-out',
                marginBottom: '10px',
              }}
            >
              <CardMedia
                image={exerciseVideo?.video?.thumbnails[0]?.url}
                sx={{
                  height: '200px',
                  width: '100%',
                  mb: 2,
                  border: '2px solid #e3e3e3',
                }}
              />
              <CardContent>
                <Typography
                  variant='subtitle1'
                  fontWeight='bold'
                  lineHeight={1.5}
                >
                  {exerciseVideo?.video?.title}
                </Typography>
                <Typography variant='subtitle2'>
                  {exerciseVideo?.video?.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant='body1' textAlign='right' pt={2}>
                  by {exerciseVideo?.video?.channelName},
                </Typography>
                <Typography variant='body1' textAlign='right' pt={2}>
                  {exerciseVideo?.video?.publishedTimeText}
                </Typography>
              </CardActions>
            </Card>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
