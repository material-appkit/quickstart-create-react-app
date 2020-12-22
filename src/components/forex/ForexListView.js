import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AppContext from 'AppContext';

import 'media/flag_sprites.css';

const styles = makeStyles((theme) => ({
  view: {
    padding: theme.spacing(1),
  },
}));

function View(props) {
  const classes = styles();
  const context = useContext(AppContext);
  const { forexData } = context;

  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    console.log(forexData);
  }, [forexData]);

  if (!dataSource) {
    return null;
  }

  return (
    <Box component="main" className={classes.view}>
      <Typography>View Content</Typography>
    </Box>
  );
}

View.propTypes = {};

export default View;
