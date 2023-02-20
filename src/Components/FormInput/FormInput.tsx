import styles from './FormInput.module.css';
import ConfirmBtn from '../../ConfirmBtn/ConfirmBtn';
import { FC, useState } from 'react';
interface Props {
    setCreditCardNum: (text: string) => void;
    setCardholderName: (text: string) => void;
    setCardMonthDate: (num: number) => void;
    setCardYearDate: (num: number) => void;
    setCardCvc: (num: number) => void;
    setFormSubmited: (boolean: boolean) => void; 
}
const FormInput: FC<Props> = ({setCreditCardNum, setCardholderName, setCardMonthDate, setCardYearDate, setCardCvc, setFormSubmited}) => {
    const [cardName, setCardName] = useState<string>('');
    const [cardNums, setCardNums] = useState<string>('');
    const [month, setMonth] = useState<number>();
    const [year, setYear] = useState<number>();
    const [cvc, setCvc] = useState<number>();
    const [confirmBtn, setConfirmBtn] = useState<Boolean>(false);

    const letters = /^[a-zA-Z]+$/.test(cardName);
    let numbers = /^\d+$/.test(cardNums);

    const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNums(e.target.value)
    }
    const handleChangeCardName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardName(e.target.value)
    }
    const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(e.target.valueAsNumber)
    }
    const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.valueAsNumber)
    }
    const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvc(e.target.valueAsNumber)
    }
    const confirmForm = () => {
        setConfirmBtn(true);
        if((letters && cardName.length > 0) && (numbers && cardNums.length > 0) && month && year && cvc) {
            setFormSubmited(true)
        }
    }

    return(
        <div className={styles.inputContent}>
            <label className={styles.labels}>cardholder name</label>
            <input type="text" placeholder='e.g. Jane Appleseed' onChange={(e) => handleChangeCardName(e)} onBlur={(e) => setCardholderName(e.target.value)} value={cardName} className={!letters && (cardName.length > 0 || cardName.length === 0) && confirmBtn ? styles.wrongInputText : styles.inputText}></input>
            {!letters && cardName.length > 0 && confirmBtn ? <p className={styles.wrongFormat}>Name contain only letters</p> : ''}
            {cardName.length === 0 && confirmBtn ? <p className={styles.wrongFormat}>Can't be blank</p> : ''}
            <label className={styles.labels}>card number</label>
            <input type="text" placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => handleChangeCardNumber(e)} onBlur={(e) => setCreditCardNum(e.target.value)} value={cardNums} className={!numbers && (cardNums.length > 0 || cardNums.length === 0) && confirmBtn ? styles.wrongInputText : styles.inputText}></input>
            {!numbers && cardNums.length > 0 && confirmBtn ? <p className={styles.wrongFormat}>Wrong format, numbers only</p> : ''}
            {cardNums.length === 0 && confirmBtn ? <p className={styles.wrongFormat}>Can't be blank</p> : ''}
            <div className={styles.inputNumsContent}>
                <div>
                    <div className={styles.expDate}>
                        <label className={styles.labels}>exp. date (MM/YY)</label>
                        <div className={styles.monthYearInput}>
                            <input type="number" placeholder='MM' onChange={(e) => handleChangeMonth(e)} onBlur={(e) => setCardMonthDate(e.target.valueAsNumber)} value={month} className={month === undefined && confirmBtn ? styles.wrongInputNum : styles.inputNum}></input>
                            <input type="number" placeholder='YY' onChange={(e) => handleChangeYear(e)} onBlur={(e) => setCardYearDate(e.target.valueAsNumber)} value={year} className={year === undefined && confirmBtn ? styles.wrongInputNum : styles.inputNum}></input>
                        </div>
                    </div>
                    {(month === undefined || year === undefined) && confirmBtn ? <p className={styles.wrongFormat}>Can't be blank</p> : ''}
                </div>
               <div className={styles.cvc}>
                    <label className={styles.labels}>cvc</label>
                    <input type="number" placeholder='e.g. 123' onChange={(e) => handleChangeCVC(e)} onBlur={(e) => setCardCvc(e.target.valueAsNumber)} value={cvc} className={ cvc === undefined && confirmBtn ? styles.wrongInputNumCVC : styles.inputNumCVC}></input>
                    {cvc === undefined && confirmBtn ? <p className={styles.wrongFormat}>Can't be blank</p> : ''}
               </div>
            </div>
            <ConfirmBtn handleClickConfirm={confirmForm} children={'Confirm'}></ConfirmBtn>
        </div>  
    )
};

export default FormInput;

