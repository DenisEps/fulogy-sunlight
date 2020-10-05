import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    minWidth: '600px',
  },
  title: {
    color: '#313131',
    opacity: '0.7',
    fontSize: '24px',
  },
  buttonSave: {
    minWidth: '202px',
    color: 'white',
    borderRadius: '36px',
    padding: '15px 26px',
  },
  buttonCancel: {
    minWidth: '202px',
    color: theme.palette.primary.main,
    borderRadius: '36px',
    padding: '15px 26px',
  },
  closeIcon: {
    color: '#828282',
    alignSelf: 'flex-end',
    cursor: 'pointer',
  },
}));

export default function ModalComp({ open, handleClose }) {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="save-modal-title"
      aria-describedby="save-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <CloseIcon onClick={handleClose} className={classes.closeIcon} />
          <Typography className={classes.title}>
            Сохранить изменения?
          </Typography>
          <Button
            className={classes.buttonSave}
            variant="contained"
            color="primary"
            disableElevation
          >
            Сохранить
          </Button>
          <Button
            className={classes.buttonCancel}
            variant="outlined"
            color="primary"
            disableElevation
          >
            Не сохранять
          </Button>
        </div>
      </Fade>
    </Modal>
  );
}
