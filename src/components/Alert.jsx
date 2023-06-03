import { useSelector } from 'react-redux';
const Alert = () => {
    const { alert } = useSelector((state) => state);

    return <>{alert && <div className="alert">{alert}</div>}</>;
};
export default Alert;
