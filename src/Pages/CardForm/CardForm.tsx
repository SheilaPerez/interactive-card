import { useState } from 'react';
import { Card, FormInput, FormComplete } from '../../Components';
import styles from './CardForm.module.css';

const CardForm = () => {
    const [creditCardNum, setCreditCardNum] = useState<string>('');
    const [cardName, setCardName] = useState<string>('')
    const [monthDate, setMonthDate] = useState<number>(0);
    const [yearDate, setYearDate] = useState<number>(0);
    const [cvc, setCvc] = useState<number>(0);
    const [formSubmited, setFormSubmited] = useState<Boolean>(false);

    return(
        <div className={styles.pageContent}>
            <Card creditCardNum={creditCardNum} cardholderName={cardName} monthDate={monthDate} yearDate={yearDate} cvc={cvc}></Card>
            {formSubmited ? <FormComplete></FormComplete> : <FormInput setCreditCardNum={setCreditCardNum} setCardholderName={setCardName} setCardMonthDate={setMonthDate} setCardYearDate={setYearDate} setCardCvc={setCvc} setFormSubmited={setFormSubmited}></FormInput>}
        </div>
    )
};

export default CardForm;