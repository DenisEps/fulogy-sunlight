import styles from '../styles/MainCard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  card: {
    zIndex: '1',
    position: 'relative',
    boxShadow: theme.shadows[3],
    borderRadius: '10px',
  },
  emailDiv: {
    display: 'flex',
    borderBottom: '1px solid #CAE7FE',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  phoneDiv: {
    display: 'flex',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  label: {
    color: '#313131',
    fontSize: '18px',
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      marginLeft: theme.spacing(1),
    },
  },
  icon: {
    color: '#00BFA5',
  },
}));

export default function MainCard({ user }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.emailDiv}>
        <AlternateEmailIcon className={classes.icon} />
        <Typography className={classes.label}>{user.email}</Typography>
      </div>
      <div className={classes.phoneDiv}>
        <PhoneIcon className={classes.icon} />
        <Typography className={classes.label}>{user.phone}</Typography>
      </div>
    </Card>
  );
}
