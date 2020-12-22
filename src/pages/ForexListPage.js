import React from 'react';

import ViewController from '@material-appkit/core/components/ViewController';

import ForexListView from 'components/forex/ForexListView';

import { COMMON_PAGE_PROPS } from 'variables';


function ForexListPage(props) {
  return (
    <ViewController title="Foreign Exchange" {...props}>
      <ForexListView />
    </ViewController>
  );
}

ForexListPage.propTypes = COMMON_PAGE_PROPS;

export default ForexListPage;
