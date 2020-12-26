import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import ListView from '@material-appkit/core/components/ListView';
import ListViewDialog from '@material-appkit/core/components/ListViewDialog';
import NavManager from '@material-appkit/core/managers/NavManager';
import SplitView from '@material-appkit/core/components/SplitView';
import StorageManager from '@material-appkit/core/managers/StorageManager';

import ForexListItem from './ForexListItem';

import 'media/flag_sprites.css';

import { FOREX_API_ENDPOINT } from 'variables';

const styles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: 12,
  },

  listViewLoading: {
    opacity: 0.5,
  },
}));

function ForexListView({ listViewProps }) {
  const classes = styles();

  const qsParams = NavManager.qsParams;
  const { base } = qsParams;

  const [currencyDialogOpen, setCurrencyDialogOpen] = useState(false);

  useEffect(() => {
    if (!base) {
      let baseCurrency = StorageManager.localValue('baseCurrency');
      if (!baseCurrency) {
        baseCurrency = 'USD';
        StorageManager.setLocalValue('baseCurrency', baseCurrency);
      }
      NavManager.updateUrlParam('base', baseCurrency);
    }
  }, [base]);


  const transformFetchItemsResponse = (res) => {
    const rates = res.jsonData.rates;
    const items = Object.keys(rates)
      .filter((v) => v.toUpperCase() !== base.toUpperCase())
      .sort()
      .map((currency) => ({
        base,
        currency,
        rate: rates[currency],
      }));

    return { items };
  };


  const handleCurrencyDialogDismiss = (selection) => {
    if (selection) {
      NavManager.updateUrlParam('base', selection[0].currency);
    }

    setCurrencyDialogOpen(false);
  };


  return (
    <>
      <SplitView
        bar={(
          <AppBar position="relative" color="default" elevation={1}>
            {base &&
              <Toolbar
                className={classes.toolbar}
                disableGutters
                variant="dense"
              >
                <Button
                  onClick={() => setCurrencyDialogOpen(true)}
                  startIcon={(
                    <img
                      alt=''
                      className={`flag flag-${base}`}
                    />
                  )}
                >
                  Base Currency
                </Button>
              </Toolbar>
            }
          </AppBar>
        )}
        barSize={48}
        placement="top"
        scrollContent
      >
        {base &&
          <ListView
            {...listViewProps}
            classes={{
              listViewLoading: classes.listViewLoading,
            }}
            displayMode="list"
            itemIdKey="currency"
            listItemComponent={ForexListItem}
            listItemProps={{
              displayRate: true,
            }}
            responseTransformer={transformFetchItemsResponse}
            src={`${FOREX_API_ENDPOINT}/latest`}
            filterParams={{ base }}
          />
        }
      </SplitView>

      {currencyDialogOpen && (
        <ListViewDialog
          displayMode="list"
          itemIdKey="currency"
          listItemComponent={ForexListItem}
          onDismiss={handleCurrencyDialogDismiss}
          responseTransformer={transformFetchItemsResponse}
          selectionMode="single"
          src={`${FOREX_API_ENDPOINT}/latest`}
          title="Select a base currency"
        />
      )}
    </>
  );
}

ForexListView.propTypes = {
  listViewProps: PropTypes.object,
};

ForexListView.defaultProps = {
  listViewProps: {},
};


export default React.memo(ForexListView);
