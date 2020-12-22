import React from 'react';

import MasterDetailView from '@material-appkit/core/components/MasterDetailView';
import NavManager from '@material-appkit/core/managers/NavManager';
import ViewController from '@material-appkit/core/components/ViewController';

import ForexListView from 'components/forex/ForexListView';
import ForexDetailView from 'components/forex/ForexDetailView';

import { COMMON_PAGE_PROPS } from 'variables';


function ForexIndexPage(props) {
  const location = props.location;
  const qsParams = NavManager.qsParams;

  const loadForexData = (currency) => {
    return new Promise((resolve, reject) => {
      resolve({ currency });
    });
  };

  return (
    <ViewController title="Foreign Exchange" {...props}>
      <MasterDetailView
        DetailViewComponent={ForexDetailView}
        detailViewPlaceholder={(
          <p>Forex Detail View Placeholder</p>
        )}
        detailViewProps={{
          base: qsParams.base,
          currency: qsParams.currency,
        }}
        inspectedObjectLoader={loadForexData}
        itemIdKey="currency"
        ListViewComponent={ForexListView}
        location={location}
      />
    </ViewController>
  );
}

ForexIndexPage.propTypes = COMMON_PAGE_PROPS;

export default ForexIndexPage;
