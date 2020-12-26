import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';

import MasterDetailView from '@material-appkit/core/components/MasterDetailView';
import NavManager from '@material-appkit/core/managers/NavManager';
import ViewController from '@material-appkit/core/components/ViewController';
import { reverse } from '@material-appkit/core/util/urls';
import { pluck } from '@material-appkit/core/util/set';

import ForexListView from 'components/forex/ForexListView';
import ForexDetailView from 'components/forex/ForexDetailView';
import ForexDetailViewPlaceholder from 'components/forex/ForexDetailViewPlaceholder';

import AppContext from 'AppContext';
import paths from 'paths';
import { COMMON_PAGE_PROPS } from 'variables';


const styles = makeStyles((theme) => ({
  listViewContainer: {
    width: 300,
  },
}));

function ForexIndexPage(props) {
  const classes = styles();
  const context = useContext(AppContext);
  const { breakpoint } = context;
  const isWidthMediumUp = isWidthUp('md', breakpoint);

  const qsParams = NavManager.qsParams;
  const { base, currency } = qsParams;


  const handleListViewSelectionChange = (selection) => {
    if (selection.size) {
      const selectedItem = pluck(selection);

      if (isWidthMediumUp) {
        if (currency !== selectedItem.currency) {
          NavManager.updateUrlParam('currency', selectedItem.currency);
        }
      } else {
        const detailUrl = reverse(paths.forex.currency, {
          currency: selectedItem.currency,
        });
        NavManager.navigate(detailUrl, { base });
      }
    } else {
      if (currency) {
        NavManager.clearUrlParam('currency');
      }
    }
  };


  const listViewSelectionInitializer = (items) => {
    const selection = new Set();
    for (const item of items) {
      if (item.currency === currency) {
        selection.add(item);
      }
    }
    return selection;
  };

  return (
    <ViewController title="Foreign Exchange" {...props}>
      <MasterDetailView
        DetailViewComponent={ForexDetailView}
        detailViewPlaceholder={<ForexDetailViewPlaceholder />}
        detailViewProps={{
          base,
          currency: qsParams.currency,
        }}
        listViewSelectionInitializer={listViewSelectionInitializer}
        listViewContainerClassName={classes.listViewContainer}
        ListViewComponent={ForexListView}
        onListViewSelectionChange={handleListViewSelectionChange}
        showDetailView={isWidthMediumUp}
      />
    </ViewController>
  );
}

ForexIndexPage.propTypes = COMMON_PAGE_PROPS;

export default ForexIndexPage;
