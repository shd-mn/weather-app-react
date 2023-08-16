import { useSelector } from 'react-redux';
import styles from './alert.module.scss';
const Alert = () => {
    const { alert } = useSelector((state) => state);

    return <>{alert && <div className={styles.alert}>{alert}</div>}</>;
};
export default Alert;
