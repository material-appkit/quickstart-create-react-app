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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: '0.6em',
    boxShadow: '0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd',
    overflow: 'hidden',
    textAlign: 'center',
  },

  strong: {
    padding: '0.4em 0',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1px dashed ${theme.palette.secondary.dark}`,
    boxShadow: `0 2px 0 ${theme.palette.secondary.dark}`,
    width: '100%',
  },

  span: {
    color: '#2f2f2f',
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 500,
    letterSpacing: '-0.05em',
    lineHeight: 1,
    margin: '12px 0 2px',
  },

  em: {
    color: theme.palette.secondary.main,
    fontStyle: 'normal',
    fontWeight: 500,
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
