import { FC } from 'react';
import styles from './Card.module.css';
interface Props {
    creditCardNum: string;
    cardholderName: string;
    monthDate: number;
    yearDate: number;
    cvc: number;
}
const Card: FC<Props> = ({creditCardNum, cardholderName, monthDate, yearDate, cvc}) => {

    return(
        <div className={styles.pageCardContent}>
            <div className={styles.desktopBackground}></div>
            <div className={styles.cardsContent}>
                <div className={styles.cardFront}>
                    <div className={styles.cardLogo}></div>
                    {creditCardNum.length <= 0 ? <p className={styles.cardNumber}>0000 0000 0000 0000 </p> : <p className={styles.cardNumber}>{creditCardNum}</p>}
                    <div className={styles.nameDate}>
                        {cardholderName.length <= 0 ? <p>JANE APPLESEED</p> : <p>{cardholderName}</p>}
                        <div className={styles.dateContent}>
                            {monthDate === 0 ? <p>00</p> : <p>{monthDate}</p>}
                            <p>/</p>
                            {yearDate === 0 ? <p>00</p> : <p>{yearDate}</p>} 
                        </div>
                    </div>
                </div>
                <div className={styles.cardBack}>
                    <div className={styles.cvcNumber}>
                        {cvc <= 0 || isNaN(cvc) ? <p>000</p> : <p>{cvc}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;


