import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MasterDetailView from '@material-appkit/core/components/MasterDetailView';
import NavManager from '@material-appkit/core/managers/NavManager';
import ViewController from '@material-appkit/core/components/ViewController';
import { reverse } from '@material-appkit/core/util/urls';

import ForexListView from 'components/forex/ForexListView';
import ForexDetailView from 'components/forex/ForexDetailView';
import ForexDetailViewPlaceholder from 'components/forex/ForexDetailViewPlaceholder';
import paths from 'paths';
import { COMMON_PAGE_PROPS } from 'variables';


const styles = makeStyles((theme) => ({
  listViewContainer: {
    width: 300,
  },
}));

function ForexIndexPage(props) {
  const classes = styles();

  const location = props.location;
  const qsParams = NavManager.qsParams;
  const { base } = qsParams;

  const loadForexData = (currency) => {
    return new Promise((resolve, reject) => {
      resolve({ currency });
    });
  };

  return (
    <ViewController title="Foreign Exchange" {...props}>
      <MasterDetailView
        DetailViewComponent={ForexDetailView}
        detailViewPlaceholder={<ForexDetailViewPlaceholder />}
        detailPathInfo={(item) => {
          return {
            pathname: reverse(paths.forex.currency, {
              currency: item.currency,
            }),
            qsParams: { base },
          }
        }}
        detailViewProps={{
          base,
          currency: qsParams.currency,
        }}
        inspectedObjectLoader={loadForexData}
        itemIdKey="currency"
        listViewContainerClassName={classes.listViewContainer}
        ListViewComponent={ForexListView}
        location={location}
      />
    </ViewController>
  );
}

ForexIndexPage.propTypes = COMMON_PAGE_PROPS;

export default ForexIndexPage;
