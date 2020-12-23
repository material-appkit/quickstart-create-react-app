/**
 * See link below for CSS Calendar styling reference:
 * https://www.sitepoint.com/create-calendar-icon-html5-css3/
 */
import dayjs from 'dayjs';

import PropTypes from 'prop-types';
import React, { useState } from 'react';


import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  icon: {
    fontSize: '1em',
    display: 'block',
    position: 'relative',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: '0.6em',
    boxShadow: '0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd',
    marginRight: theme.spacing(2),
    overflow: 'hidden',

    '& *': {
      display: 'block',
      width: '100%',
      fontSize: '1em',
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'absolute',
    },
  },

  strong: {
    top: 0,
    padding: '0.4em 0',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1px dashed ${theme.palette.secondary.dark}`,
    boxShadow: `0 2px 0 ${theme.palette.secondary.dark}`,
  },

  span: {
    fontSize: '2.8em',
    letterSpacing: '-0.05em',
    paddingTop: '0.8em',
    color: '#2f2f2f',
  },

  em: {
    bottom: '0.3em',
    color: theme.palette.secondary.main,
    fontStyle: 'normal',
  },
}));

function CalendarIcon(props) {
  const classes = styles();

  const [date] = useState(() => dayjs(props.date));
    
  return (
    <time dateTime={props.date} className={classes.icon}>
      <strong className={classes.strong}>{date.format('MMMM')}</strong>
      <span className={classes.span}>{date.format('D')}</span>
      <em className={classes.em}>{date.format('dddd')}</em>
    </time>
  );
}

CalendarIcon.propTypes = {
  date: PropTypes.string.isRequired,
};

export default CalendarIcon;
