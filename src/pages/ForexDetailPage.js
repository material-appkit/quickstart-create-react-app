import React from 'react';

import NavManager from '@material-appkit/core/managers/NavManager';
import ViewController from '@material-appkit/core/components/ViewController';

import ForexDetailView from 'components/forex/ForexDetailView';

import { COMMON_PAGE_PROPS } from 'variables';

function ForexDetailPage(props) {
  const qsParams = NavManager.qsParams;
  const { base } = qsParams;

  const currency = props.match.params.currency.toUpperCase();

  return (
    <ViewController
      title={`${base} to ${currency}`}
      {...props}
    >
      <ForexDetailView
        base={base}
        currency={currency}
      />
    </ViewController>
  );
}

ForexDetailPage.propTypes = COMMON_PAGE_PROPS;

export default ForexDetailPage;
