import styles from '../styles/MainCardEdit.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, TextField, Button } from '@material-ui/core';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    zIndex: '1',
    position: 'relative',
    boxShadow: theme.shadows[3],
  },
  insideDiv: { display: 'flex', width: '100%' },
  contentDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
  icon: {
    color: theme.palette.primary.main,
  },
  textInput: { marginLeft: theme.spacing(3) },
  button: {
    color: 'white',
    borderRadius: '36px',
    padding: '15px 26px',
    marginTop: theme.spacing(3),
  },
}));

export default function NameNav() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.insideDiv}>
        <div
          className={`${classes.nameDiv} ${classes.contentDiv} ${styles.contentDiv}`}
        >
          <AssignmentIndIcon fontSize="large" className={classes.icon} />
          <TextField
            className={classes.textInput}
            variant="outlined"
            placeholder="Укажите ваши фамилию и имя"
            label="Фамилия и имя"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div
          className={`${classes.emailDiv} ${classes.contentDiv} ${styles.contentDiv}`}
        >
          <AlternateEmailIcon fontSize="large" className={classes.icon} />
          <TextField
            className={classes.textInput}
            variant="outlined"
            placeholder="ivanova@mail.ru"
            label="E-mail"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div
          className={`${classes.phoneDiv} ${classes.contentDiv} ${styles.contentDiv}`}
        >
          <PhoneIcon fontSize="large" className={classes.icon} />
          <TextField
            className={classes.textInput}
            variant="outlined"
            placeholder="Укажите номер телефона"
            label="Номер телефона"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disableElevation
      >
        Сохранить изменения
      </Button>
    </Card>
  );
}
