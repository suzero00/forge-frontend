import styles from './not-found-page.module.scss';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <span>Страница не найдена 404!</span>
            <button onClick={() => navigate(-1)}>Назад</button>
            <button onClick={() => navigate('/')}>На главную</button>
        </div>
    );
};
