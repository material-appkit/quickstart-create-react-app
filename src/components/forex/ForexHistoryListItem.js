import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListViewItem, {
  listItemProps,
  commonPropTypes,
} from '@material-appkit/core/components/ListViewItem';

import CalendarIcon from 'components/CalendarIcon';


function ForexHistoryListItem(props) {
  const { date, rate } = props.item;

  return (
    <ListViewItem {...listItemProps(props)}>
      <ListItemIcon style={{ marginRight: 16 }}>
        <CalendarIcon date={date} />
      </ListItemIcon>

      <ListItemText
        primary={rate}
        primaryTypographyProps={{ variant: 'h2', component: 'p' }}
      />
    </ListViewItem>
  );
}

ForexHistoryListItem.propTypes = commonPropTypes;

export default ForexHistoryListItem;
