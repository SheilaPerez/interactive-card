import { FC } from "react";
import styles from './ConfirmBtn.module.css';

interface Props {
    handleClickConfirm?: () => void;
    children: string;
}
const ConfirmBtn: FC<Props> = ({handleClickConfirm, children}) => {
    return(
        <div>
            <button type="button" onClick={handleClickConfirm} className={styles.confirmBtn}>{children}</button>
        </div>
    )
};

export default ConfirmBtn;