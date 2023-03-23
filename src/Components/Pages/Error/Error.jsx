import ErrorImg from '../../../assets/img/Error.png';
import s from './Error.module.scss';

function Error() {
    return (
        <div className={s.error}>
            <div className={s.errorImg}>
                <img src={ErrorImg} alt="Error" />
            </div>
            <div className={s.errorTxt}>
                <h2>Lost your way?</h2>
                <p>Oops! This is awkward. You are looking for something that doesn't actually exist.</p>
            </div>
        </div>
    );
}

export default Error;
