import qs from 'query-string';
import React, { useEffect, useState } from 'react';

import ViewController from '@material-appkit/core/components/ViewController';

import ForexDetailView from 'components/forex/ForexDetailView';

import { COMMON_PAGE_PROPS } from 'variables';

function ForexDetailPage(props) {
  const { location, match } = props;

  const [representedObject, setRepresentedObject] = useState(null);
  const [title, setTitle] = useState(null);


  useEffect(() => {
    const qsParams = qs.parse(location.search);
    const { base } = qsParams;
    const currency = match.params.currency;

    if (base && currency) {
      setRepresentedObject( { base, currency });
      setTitle(`${base} to ${currency}`);
    } else {
      setRepresentedObject(null);
      setTitle(null)
    }
  }, [location, match]);


  return (
    <ViewController
      title={title}
      {...props}
    >
      {representedObject && (
        <ForexDetailView
          representedObject={representedObject}
          standalone
        />
      )}
    </ViewController>
  );
}

ForexDetailPage.propTypes = COMMON_PAGE_PROPS;

export default ForexDetailPage;
