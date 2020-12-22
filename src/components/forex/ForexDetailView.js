import qs from 'query-string';

import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles } from '@material-ui/core/styles';

import SnackbarManager from '@material-appkit/core/managers/SnackbarManager';

import 'media/flag_sprites.css';

import AppContext from 'AppContext';
import { FOREX_API_ENDPOINT } from 'variables';

const styles = makeStyles((theme) => ({
  table: {
    // width: 400,
  },
}));

function ForexDetailView({ location, representedObject }) {
  const classes = styles();

  const context = useContext(AppContext);
  const updateAppContext = context.update;

  const [baseCurrency, setBaseCurrency] = useState(null);
  const [currency, setCurrency] = useState(null);

  const [tableDataSource, setTableDataSource] = useState(null);

  useEffect(() => {
    if (representedObject) {
      setCurrency(representedObject.currency);
    }
  }, [representedObject]);


  useEffect(() => {
    const qsParams = qs.parse(location.search);
    setBaseCurrency(qsParams.base);
  }, [location]);



  useEffect(() => {
    if (!(baseCurrency && currency)) {
      return;
    }

    setTableDataSource(null);

    const queryParams = qs.stringify({
      start_at: '2020-01-01',
      end_at: '2020-12-31',
      base: baseCurrency,
      symbols: currency,
    });

    updateAppContext({ loadProgress: undefined });
    fetch(`${FOREX_API_ENDPOINT}/history?${queryParams}`)
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            const orderedDates = Object.keys(data.rates).sort();
            setTableDataSource(orderedDates.map((date) => ({
              date,
              value: data.rates[date][currency],
            })));
          });
        } else {
          SnackbarManager.error('Failed to retrieve historical ForEx data');
        }
      })
      .catch(() => {
        SnackbarManager.error('Failed to retrieve historical ForEx data');
      })
      .finally(() => {
        updateAppContext({ loadProgress: null });
      });
  }, [baseCurrency, currency, updateAppContext]);


  if (!(baseCurrency && currency && tableDataSource)) {
    return null;
  }

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <img
              alt=''
              className={`flag flag-${baseCurrency.toLowerCase()}`}
            />

            <img
              alt=''
              className={`flag flag-${currency.toLowerCase()}`}
            />
          </TableCell>
          <TableCell align="right">Exchange Rate</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableDataSource.map((rate) => (
          <TableRow key={rate.date}>
            <TableCell component="th" scope="row">
              {rate.date}
            </TableCell>
            <TableCell align="right">
              {rate.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ForexDetailView.propTypes = {
  location: PropTypes.object.isRequired,
  representedObject: PropTypes.object.isRequired,
};

export default ForexDetailView;
