// import { lists } from '../../data/lists/lists';
// import { customLists } from '../../data/lists/customList';
import cn from 'classnames';
import { useState } from 'react';
import { ActionBtn } from '../../components/ActionBtn/ActionBtn';
import styles from './Audio.module.css';




export const Audio = () => {
	const [step, setStep] = useState<number>(1)
	const q1 = `Ты можешь вспомнить случай, когда Ты только что закончил собирать, строить что-то.`
	const q2 = `Что это был за случай?`
	const q3 = `Какой тембр вы получили во время воспоминания`

	const speakText = (q: string) => {
		if (!q.trim()) return;

		const utterance = new SpeechSynthesisUtterance(q);
		utterance.lang = "ru-RU";
		window.speechSynthesis.speak(utterance);
  	};
	const sayThx = () => speakText('Спасибо');

	const nextStep = (nextStep: number) => {
		sayThx();
		setStep(nextStep);

	}
	return <div className={styles.container}>
		<h1 className={styles.h1}>Вопрос 1: ты был счастлив?</h1>
		<div className={cn(styles.step, styles.show)}>
			<h1 className={styles.h1}>{q1}</h1>
			<div className={styles.btnWrapper}>
				<ActionBtn type='play' onClick={() => speakText(q1)} />
				<ActionBtn disabled={step !== 1} type='done' onClick={() => nextStep(2)}/>
			</div>
		</div>
		<div className={cn(styles.step,{[styles.show]: step !== 1 })}>
			<h1 className={styles.h1}>{q2}</h1>
			<div className={styles.btnWrapper}>
				<ActionBtn type='play' onClick={() => speakText(q2)}/>
				<ActionBtn disabled={step !== 2} type='done' onClick={() => nextStep(3)}/>
			</div>
		</div>
		<div className={cn(styles.step,{[styles.show]: step === 3 })}>
			<h1 className={styles.h1}>{q3}</h1>
			<div className={styles.btnWrapper}>
				<ActionBtn type='play' onClick={() => speakText(q3)}/>
				<ActionBtn disabled={step !== 3} type='done' onClick={() => nextStep(1)}/>
			</div>
		</div>
	</div>
};