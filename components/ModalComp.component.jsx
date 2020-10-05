import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      borderTopRightRadius: '10px',
      borderTopLeftRadius: '10px',
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '318px',
    width: '600px',
    [theme.breakpoints.down('sm')]: {
      borderTopRightRadius: '25px',
      borderTopLeftRadius: '25px',
      position: 'fixed',
      bottom: '0',
      width: '100vw',
      minHeight: '200px',
    },
  },
  title: {
    color: '#313131',
    opacity: '0.7',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(3),
    },
  },
  buttonSave: {
    minWidth: '202px',
    color: 'white',
    borderRadius: '36px',
    padding: '15px 26px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(3),
    },
  },
  buttonCancel: {
    minWidth: '202px',
    color: theme.palette.primary.main,
    borderRadius: '36px',
    padding: '15px 26px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(2),
    },
  },
  closeIcon: {
    color: '#828282',
    alignSelf: 'flex-end',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
    },
  },
}));

export default function ModalComp({
  open,
  handleClose,
  handleFinalSave,
  saveState,
  handleReset
}) {
  const classes = useStyles();

  const handleSave = () => {
    handleFinalSave();
  };

  return (
    <Modal
      aria-labelledby="save-modal-title"
      aria-describedby="save-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleReset}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {!saveState ? (
            <>
              <CloseIcon onClick={handleClose} className={classes.closeIcon} />
              <Typography className={classes.title}>
                Сохранить изменения?
              </Typography>
              <Button
                className={classes.buttonSave}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleSave}
              >
                Сохранить
              </Button>
              <Button
                className={classes.buttonCancel}
                variant="outlined"
                color="primary"
                disableElevation
                onClick={handleClose}
              >
                Не сохранять
              </Button>
            </>
          ) : (
            <>
              <CloseIcon onClick={handleReset} className={classes.closeIcon} />
              <Typography className={classes.title}>
                Данные успешно сохранены
              </Typography>
              <Button
                className={classes.buttonSave}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleReset}
              >
                Хорошо
              </Button>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
