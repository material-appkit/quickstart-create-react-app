import React from 'react';

import ListItemText from '@material-ui/core/ListItemText';

import ListViewItem, {
  listItemProps,
  commonPropTypes,
} from '@material-appkit/core/components/ListViewItem';


function ForexHistoryListItem(props) {
  const { date, value } = props.item;

  return (
    <ListViewItem {...listItemProps(props)}>
      <ListItemText
        primary={date}
        secondary={value}
      />
    </ListViewItem>
  );
}

ForexHistoryListItem.propTypes = commonPropTypes;

export default ForexHistoryListItem;
