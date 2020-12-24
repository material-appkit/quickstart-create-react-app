import PropTypes from 'prop-types';
import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListViewItem, {
  listItemProps,
  commonPropTypes,
} from '@material-appkit/core/components/ListViewItem';


function ForexListItem(props) {
  const { displayRate, ...rest } = props;
  const { currency, rate } = props.item;

  return (
    <ListViewItem {...listItemProps(rest)}>
      <ListItemIcon>
        <img
          alt=''
          className={`flag flag-${currency}`}
        />
      </ListItemIcon>
      <ListItemText
        primary={currency}
        secondary={displayRate ? rate : null}
      />
    </ListViewItem>
  );
}

ForexListItem.propTypes = {
  ...commonPropTypes,
  displayRate: PropTypes.bool,
};

export default ForexListItem;
