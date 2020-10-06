import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../styles/theme';

import Nav from '../components/Nav.component';
import NameNav from '../components/NameNav.component';
import MainCard from '../components/MainCard.component';
import MainCardEdit from '../components/MainCardEdit.component';
import ModalComp from '../components/ModalComp.component';

import styles from '../styles/Index.module.css';

// const classes = makeStyles({});

function Main() {
  const [openModal, setOpenModal] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [localUser, setLocalUser] = React.useState({
    name: 'Иванова Анна Михайловна',
    email: 'ivanova@mail.ru',
    phone: 'Укажите номер телефона',
  });
  const [saveState, setSaveState] = React.useState(false);
  const [editState, setEditState] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('user')) {
      setLocalUser(JSON.parse(localStorage.getItem('user')));
    };
  }, []);

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
      setLocalUser(user);
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
        <Nav user={localUser} />
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
        <NameNav
          toggleEditState={handleToggle}
          editState={editState}
          user={localUser}
        />
        {editState ? (
          <MainCardEdit handleOpen={handleOpen} />
        ) : (
          <MainCard editState={editState} user={localUser} />
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
