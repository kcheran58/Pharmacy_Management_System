import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MyComponent = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: 'black', padding: '20px' }}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: '1100px', textAlign: 'center' }}>
          <Typography variant="h4">Header</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ padding: '10px', minHeight: '200px' }}>
          <Typography variant="body1">Content Area 1</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ padding: '10px', minHeight: '200px' }}>
          <Typography variant="body1">Content Area 2</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: '10px', textAlign: 'center' }}>
          <Typography variant="body2">Footer</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
