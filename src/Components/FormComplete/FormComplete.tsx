import ConfirmBtn from '../../ConfirmBtn/ConfirmBtn';
import styles from './FormComplete.module.css';

const FormComplete = () => {
    return(
        <div className={styles.formCompleteContain}>
            <div className={styles.iconComplete}></div>
            <h1 className={styles.thanks}>thank you!</h1>
            <p className={styles.description}>We’ve added your card details</p>
            <ConfirmBtn>{'Continue'}</ConfirmBtn>
        </div>
    )
};

export default FormComplete;