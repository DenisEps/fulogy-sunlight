import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('sm')]: {
      height: '24px',
      width: '24px',
    },
  },
  name: {
    fontSize: '14px',
    marginLeft: theme.spacing(1),
    color: 'white',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatarDiv: {
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid white',
    paddingLeft: theme.spacing(2),
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
    },
  },
  icon: {
    color: 'white',
    zIndex: '1',
    [theme.breakpoints.down('sm')]: {
      height: '24px',
      marginRight: `-5px`
    },
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NotificationsNoneIcon className={classes.icon} fontSize="large" />
      <div className={classes.avatarDiv}>
        <Avatar className={classes.avatar}>H</Avatar>
        <Typography className={classes.name}>Иванова А.</Typography>
      </div>
    </div>
  );
}
