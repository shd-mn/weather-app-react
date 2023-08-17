import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../redux/weatherSlice';
// setAlert
import styles from './alert.module.scss';
import Icon from '../icons';
const Alert = () => {
    const dispatch = useDispatch();
    const { alert } = useSelector((state) => state);

    return (
        <>
            {alert && (
                <div className={styles.alert}>
                    {alert}
                    <button
                        type="button"
                        onClick={() => dispatch(setAlert(''))}
                    >
                        <Icon icon="xmark-solid" size={24} />
                    </button>
                </div>
            )}
        </>
    );
};
export default Alert;
