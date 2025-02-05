import styles from './ActionBtn.module.css';
import { ActionBtnProps } from './ActionBtn.props';

export const ActionBtn = ({type, onClick, disabled}: ActionBtnProps) => {
    if (type === 'play') {
        return <button className={styles.button} onClick={onClick} disabled={disabled}>
            <img src="play.svg" alt="Logo" width={20}/>
            Прослушать
            </button>   
    }
    if (type === 'done') {
        return <button className={styles.button} onClick={onClick} disabled={disabled}>
            <img src="done.svg" alt="Logo" width={20}/>
            Готово
        </button>   
    }
}