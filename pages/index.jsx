import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './theme';

import Nav from '../components/Nav.component';
import NameNav from '../components/NameNav.component';
import MainCard from '../components/MainCard.component';
import MainCardEdit from '../components/MainCardEdit.component';
import ModalComp from '../components/ModalComp.component';

import styles from '../styles/Index.module.css';

const classes = makeStyles({});

function Main() {
  const [openModal, setOpenModal] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [saveState, setSaveState] = React.useState(false);
  const [editState, setEditState] = React.useState(false);

  const handleOpen = (name, email, phone) => {
    setUser({ name, email, phone });
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleFinalSave = () => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
      setSaveState(true);
      fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const reset = () => {
    setEditState(false);
    setOpenModal(false);
    setSaveState(false);
  };
  const handleToggle = () => {
    setEditState(!editState);
  };

  return (
    <>
      <Container>
        <Nav />
        <div className={styles.profileText}>
          <Typography
            style={{ marginBottom: theme.spacing(1) }}
            className={styles.profileTextH1}
          >
            ЛИЧНЫЙ ПРОФИЛЬ
          </Typography>
          <Typography
            style={{ marginBottom: theme.spacing(3) }}
            className={styles.profileTextH2}
          >
            Главная/Личный профиль
          </Typography>
        </div>
        <NameNav toggleEditState={handleToggle} editState={editState} />
        {editState ? (
          <MainCardEdit handleOpen={handleOpen} />
        ) : (
          <MainCard editState={editState} />
        )}
        <ModalComp
          open={openModal}
          handleClose={handleClose}
          handleFinalSave={handleFinalSave}
          saveState={saveState}
          handleReset={reset}
        />
      </Container>
    </>
  );
}

export default Main;
