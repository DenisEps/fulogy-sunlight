import styles from '../styles/NameNav.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    zIndex: '1',
    position: 'relative',
    backgroundColor: '#1A78C2',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: theme.shadows[3],
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarDiv: {
    display: 'flex',
    alignItems: 'center',
    zIndex: '1',
    position: 'relative',
  },
  name: {
    color: 'white',
    fontSize: '30px',
    fontWeight: '600',
    marginLeft: theme.spacing(4),
  },
  editDiv: {
    cursor: 'pointer',
    display: 'flex',
  },
  editText: {
    fontWeight: '600',
    fontSize: '14px',
    marginRight: '3px',
    color: 'white',
  },
}));

export default function NameNav({ editState, toggleEditState }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.avatarDiv}>
        <Avatar className={classes.avatar}>H</Avatar>
        <Typography className={classes.name}>
          Иванова Анна Михайловна
        </Typography>
      </div>
      <div className={classes.editDiv}>
        {editState ? (
          <>
            <Typography onClick={toggleEditState} className={classes.editText}>
              РЕДАКТИРОВАТЬ
            </Typography>
            <EditIcon
              onClick={toggleEditState}
              style={{ fontSize: '18px', color: 'white' }}
            />
          </>
        ) : (
          <>
            <Typography onClick={toggleEditState} className={classes.editText}>
              ЗАКРЫТЬ
            </Typography>
            <ClearIcon
              onClick={toggleEditState}
              style={{ fontSize: '18px', color: 'white' }}
            />{' '}
          </>
        )}
      </div>
    </Card>
  );
}
