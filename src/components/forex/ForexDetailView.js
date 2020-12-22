import PropTypes from 'prop-types';
import React from 'react';

// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import 'media/flag_sprites.css';

const styles = makeStyles((theme) => ({

}));

function ForexDetailView({ representedObject }) {
  const classes = styles();

  return (
    <div>
      <img
        alt=''
        className={`flag flag-${representedObject.base.toLowerCase()}`}
      />

      <img
        alt=''
        className={`flag flag-${representedObject.currency.toLowerCase()}`}
      />
    </div>
  );
}

ForexDetailView.propTypes = {
  representedObject: PropTypes.object.isRequired,
};

export default ForexDetailView;
