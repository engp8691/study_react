import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// COMPONENTS
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'

// ICONS
import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import DnsRounded from '@material-ui/icons/DnsRounded';
import PermMediaOutlined from '@material-ui/icons/PermMediaOutlined';
import Public from '@material-ui/icons/Public';
import SettingsEthernet from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent';
import Dashboard from '@material-ui/icons/Dashboard';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import PhonelinkSetup from '@material-ui/icons/PhonelinkSetup';
import withStyles from '@material-ui/core/styles/withStyles';

const color = 'rgba(255, 255, 255, 0.7)';
const activeColor = '#4fc3f7';
const dividerColor = '#404854';

const themeFunction = theme => ({
  drawer: {
    background: '#19212b',
    '& *': {
      color,
    },
  },
  list: {
    padding: 0,
    '& svg': {
      fontSize: 20,
    },
  },
  item: {
    '&:hover': {
      background: 'rgba(255,255,255,.08)',
    },
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  activeItem: {
    '& *': {
      color: activeColor,
    },
  },
  header: {
    background: '#262f3d',
    boxShadow: `inset 0 -1px ${dividerColor}`,
  },
  unPaddedRight: {
    paddingRight: 0,
  },
  firebaseHeader: {
    marginLeft: theme.spacing.unit,
  },
  smallIcon: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    borderLeft: `1px solid ${dividerColor}`,
    borderRadius: 0,
    '&:hover': {
      background: 'none',
    },
  },
  itemIcon: {
    margin: 0,
  },
  categoryHeader: {
    paddingTop: 20,
    paddingBottom: theme.spacing.unit * 2,
  },
  categoryHeaderText: {
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.common.white,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 500,
    '&$textDense': {
      fontSize: 14,
      fontWeight: 500,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
    background: dividerColor,
  },
});

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <People />, active: true },
      { id: 'Database', icon: <DnsRounded /> },
      { id: 'Storage', icon: <PermMediaOutlined /> },
      { id: 'Hosting', icon: <Public /> },
      { id: 'Functions', icon: <SettingsEthernet /> },
      { id: 'ML Kits', icon: <SettingsInputComponent /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Crashlytics', icon: <SettingsApplications /> },
      { id: 'Performance', icon: <Dashboard /> },
      { id: 'Test Lab', icon: <PhonelinkSetup /> },
    ],
  },
];

const Navigator = ({ classes }) => (
  <Drawer
    variant="permanent"
    classes={{ paper: cx('navigator', classes.drawer) }}
  >
    <List className={classes.list}>
      <ListItem className={classes.header}>
        <ListItemIcon className={classes.itemIcon}>
          <img
            alt={'logo'}
            className={'firebase-logo'}
            src={
              'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
            }
          />
        </ListItemIcon>
        <img
          alt={'label'}
          className={cx('firebase-label', classes.firebaseHeader)}
          src={
            'https://www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'
          }
        />
      </ListItem>
      <ListItem className={cx(classes.header, classes.unPaddedRight)}>
        <ListItemIcon className={classes.itemIcon}>
          <Home />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.itemText }}>
          Project Overview
        </ListItemText>
        <IconButton disableRipple className={classes.smallIcon}>
          <Settings />
        </IconButton>
      </ListItem>
      {categories.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.categoryHeader}>
            <ListItemText
              classes={{
                primary: classes.categoryHeaderText,
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ id: childId, icon, active }) => (
            <ListItem
              button
              dense
              key={childId}
              className={cx(classes.item, active && classes.activeItem)}
            >
              <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemText,
                  textDense: classes.textDense,
                }}
              >
                {childId}
              </ListItemText>
            </ListItem>
          ))}
          <Divider className={classes.divider} />
        </React.Fragment>
      ))}
    </List>
  </Drawer>
);

Navigator.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(themeFunction)(Navigator);

