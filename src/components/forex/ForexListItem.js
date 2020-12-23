import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListViewItem, {
  listItemProps,
  commonPropTypes,
} from '@material-appkit/core/components/ListViewItem';


function ForexListItem(props) {
  const { currency, value } = props.item;

  return (
    <ListViewItem {...listItemProps(props)}>
      <ListItemIcon>
        <img
          alt=''
          className={`flag flag-${currency.toLowerCase()}`}
        />
      </ListItemIcon>
      <ListItemText
        primary={currency}
        secondary={value}
      />
    </ListViewItem>
  );
}

ForexListItem.propTypes = commonPropTypes;

export default ForexListItem;
