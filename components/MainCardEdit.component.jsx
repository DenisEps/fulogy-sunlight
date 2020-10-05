import styles from '../styles/MainCardEdit.module.css';
import { makeStyles } from '@material-ui/core/styles';

import { Card, TextField, Button, Input } from '@material-ui/core';

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
  form: {
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
    marginRight: theme.spacing(5),
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

export default function NameNav({ handleOpen }) {
  const classes = useStyles();

  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const { name, email, phone } = e.target;
    const emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const namere = /^[a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ']{4,}(?: [a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ']+){0,2}$/;
    const phonere = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    if (!emailre.test(String(email.value).toLowerCase())) {
      setEmailError(true);
    }
    if (!namere.test(String(name.value).toLowerCase())) {
      setNameError(true);
    }
    if (!phonere.test(String(phone.value))) {
      setPhoneError(true);
    } else if (
      emailre.test(String(email.value).toLowerCase()) && 
      namere.test(String(name.value).toLowerCase()) && 
      phonere.test(String(phone.value))) {
        handleOpen();
      }

  };

  return (
    <Card>
      <form onSubmit={(e) => handleSave(e)} className={classes.form}>
        <div className={classes.insideDiv}>
          <div
            className={`${classes.nameDiv} ${classes.contentDiv} ${styles.contentDiv}`}
          >
            <AssignmentIndIcon fontSize="large" className={classes.icon} />
            <TextField
              fullWidth
              name="name"
              className={classes.textInput}
              variant="outlined"
              placeholder="Укажите ваши фамилию и имя"
              label="Фамилия и имя"
              InputLabelProps={{
                shrink: true,
              }}
              error={nameError}
              helperText={nameError ? 'Вы неверно указали имя' : ''}
            />
          </div>
          <div
            className={`${classes.emailDiv} ${classes.contentDiv} ${styles.contentDiv}`}
          >
            <AlternateEmailIcon fontSize="large" className={classes.icon} />

            <TextField
              fullWidth
              name="email"
              className={classes.textInput}
              variant="outlined"
              placeholder="ivanova@mail.ru"
              label="E-mail"
              InputLabelProps={{
                shrink: true,
              }}
              error={emailError}
              helperText={emailError ? 'Вы неверно указали e-mail' : ''}
            />
          </div>
          <div
            className={`${classes.phoneDiv} ${classes.contentDiv} ${styles.contentDiv}`}
          >
            <PhoneIcon fontSize="large" className={classes.icon} />
            <TextField
              fullWidth
              name="phone"
              className={classes.textInput}
              variant="outlined"
              placeholder="Укажите номер телефона"
              label="Номер телефона"
              InputLabelProps={{
                shrink: true,
              }}
              error={phoneError}
              helperText={phoneError ? 'Вы неверно указали телефон' : ''}
            />
          </div>
        </div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableElevation
          type="submit"
        >
          Сохранить изменения
        </Button>
      </form>
    </Card>
  );
}
