import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { theme } from './theme';

import Nav from '../components/Nav.component';
import NameNav from '../components/NameNav.component';
import MainCard from '../components/MainCard.component';
import MainCardEdit from '../components/MainCardEdit.component';

import styles from '../styles/Index.module.css';

function Main() {
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
        <NameNav />
        <MainCard />
        <MainCardEdit />
      </Container>
    </>
  );
}

export default Main;
