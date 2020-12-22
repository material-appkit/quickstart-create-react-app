import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import ListViewItem, {
  listItemProps,
  commonPropTypes,
} from '@material-appkit/core/components/ListViewItem';

const styles = makeStyles((theme) => ({

}));

function ForexListItem(props) {
  const classes = styles();
  const { currency, value } = props.item;

  const allListItemProps = listItemProps(props);

  return (
    <ListViewItem {...allListItemProps}>
      <ListItemIcon>
        <img className={`flag flag-${currency}`} />
      </ListItemIcon>
      <ListItemText primary={value} />
    </ListViewItem>
  );
}

ForexListItem.propTypes = commonPropTypes;

export default ForexListItem;
