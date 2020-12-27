import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import ListViewItem, {
  listItemProps,
  commonPropTypes,
} from '@material-appkit/core/components/ListViewItem';

import CalendarIcon from 'components/CalendarIcon';


const styles = makeStyles({
  listItemIcon: {
    marginRight: 16,
    marginBottom: 4,
  },
});

function ForexHistoryListItem(props) {
  const classes = styles();

  const { date, rate } = props.item;

  return (
    <ListViewItem {...listItemProps(props)}>
      <ListItemIcon className={classes.listItemIcon}>
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
