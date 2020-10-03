import styles from '../styles/MainCard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  card: {
    color: '#313131',
    zIndex: '1',
    position: 'relative',
    boxShadow: theme.shadows[3],
  },
  emailDiv: {
    display: 'flex',
    borderBottom: '1px solid #CAE7FE',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  phoneDiv: {
    display: 'flex',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  label: {
    color: '#313131',
    fontSize: '18px',
    marginLeft: theme.spacing(3),
  },
  icon: {
    color: '#00BFA5',
  },
}));

export default function NameNav() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.emailDiv}>
        <AlternateEmailIcon className={classes.icon} />
        <Typography className={classes.label}>ivanova@mail.ru</Typography>
      </div>
      <div className={classes.phoneDiv}>
        <PhoneIcon className={classes.icon} />
        <Typography className={classes.label}>
          Укажите номер телефона
        </Typography>
      </div>
    </Card>
  );
}
