import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Nav from '../components/Nav.component';

import styles from '../styles/Index.module.css';

function Main() {
  return (
    <>
      <Container>
        <Nav />
        <div className={styles.profileText}>
          <Typography className={styles.profileTextH1}>
            ЛИЧНЫЙ ПРОФИЛЬ
          </Typography>
          <Typography className={styles.profileTextH2}>
            Главная/Личный профиль
          </Typography>
        </div>
      </Container>
    </>
  );
}

export default Main;
