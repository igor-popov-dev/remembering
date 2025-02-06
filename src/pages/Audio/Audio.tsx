// import { lists } from '../../data/lists/lists';
// import { customLists } from '../../data/lists/customList';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ActionBtn } from '../../components/ActionBtn/ActionBtn';
import { Header } from '../../components/Header/Header';
import { feelingsItems } from '../../data/feelings';
import styles from './Audio.module.css';
// import { lists } from '../../data/lists/lists';
// import { customLists } from '../../data/lists/customList';
import Button from '../../components/Button/Button';
import { lists } from '../../data/lists/lists';
import {
	goToNextPhrase,
	nextFeelingIndex,
	nextQuestionIndex,
	setCurrentListId,
	// setLists,
	setPhraseIndex,
	setPhraseIndexInput,
	setQuestionIndex
} from '../../store/app.slice';
import { AppDispatch, RootState } from '../../store/store';



export const Audio = () => {
	const [step, setStep] = useState<number>(1)
	const [q1, setQ1] = useState('');
	const [q3, setQ3] = useState('');

	const dispatch = useDispatch<AppDispatch>();

	const {
		phrases,
		currentListId,
		phraseIndex,
		questionIndex,
		phraseIndexInput,
		feelingIndex,
		// isListDone,
		currentQuestions
	} = useSelector((state: RootState) => state.app);
	// const scrollToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth'
	// 	});
	// };

	// const randomizeFeeling = () => Math.floor(Math.random() * feelingsItems.length);

	const navigate = useNavigate();



	useEffect(() => {
		dispatch(setQuestionIndex(0));
	}, [dispatch]);


	const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		if (!value) {
			return;
		}
		dispatch(setCurrentListId(+value));
	};

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target?.value;
		if (!+value && value !== '') {
			return;
		}

		if (+value > phrases.length || value === '0') {
			return;
		}
		dispatch(setPhraseIndexInput(value));
		if (!value) {
			return;
		}
		dispatch(setPhraseIndex(+value - 1));
		dispatch(nextFeelingIndex());
	};

	// const setRandomFeeling = () => {
	// 	dispatch(setFeelingIndex(randomizeFeeling()));
	// };

	const currentTitle = currentQuestions?.[questionIndex] ?? 'Вопрос';
	// const animateThx = async (fn: ()=>void): Promise<void> => {
	// 	setShowThx(true);
	// 	setShowFadeIn(true);

	// 	return new Promise((resolve) => {

	// 		setTimeout(() => {
	// 			fn();
	// 			setShowFadeOut(true);
	// 			scrollToTop(); 
	// 		}, 1000);
			
	// 		setTimeout(() => {
	// 			setShowThx(false); 
	// 			setShowFadeIn(false);
	// 			setShowFadeOut(false);
	// 			resolve(); 
	// 		}, 2000);
	// 	});
	// };
	const yes = async () => {
		dispatch(nextQuestionIndex());
		
	};

	const no = async () => {
		setStep(1);
		dispatch(goToNextPhrase());
	};

	const goToDonat = () => {
		const url = 'https://www.donationalerts.com/r/devforsoul';
		window.open(url, '_blank');
	};
	// const [showThx, setShowThx] = useState<boolean>(false);
	// const [showFadeIn, setShowFadeIn] = useState<boolean>(false);
	// const [showFadeOut, setShowFadeOut] = useState<boolean>(false);



	// const q1 = `Ты можешь вспомнить случай, когда Ты только что закончил собирать, строить что-то.`
	const q2 = `Что это был за случай?`
	// const q3 = `Какой тембр вы получили во время воспоминания`

	const speakText = (q: string) => {
		if (!q.trim()) return;

		const utterance = new SpeechSynthesisUtterance(q);
		utterance.lang = "ru-RU";
		window.speechSynthesis.speak(utterance);
  	};
	const sayThx = () => speakText('Спасибо');

	const nextStep = (nextStep: number) => {
		if (autoplay) {
			sayThx();
		}
		if ( nextStep === 1) {
			yes();
		}
		setStep(nextStep);

	}

	useEffect(()=>{
		const currentQ = `${currentTitle} ${phrases[phraseIndex]}`
		setQ1(currentQ)
		if (step === 1 && autoplay) {
				speakText(currentQ);
		}
	}, [currentTitle, phraseIndex]);
	useEffect(()=>{
		setQ3(`${feelingsItems[feelingIndex].question}`)
	}, [feelingIndex]);

	const [autoplay, setAutoplay] = useState(false)

	useEffect(() => {
		if (autoplay) {
			if (step === 2) {
				speakText(q2);
			}
			if (step === 3) {
				speakText(q3);
			}
		}
	}, [autoplay, step, phraseIndex]);
	return <>
		{/* <div className={cn(styles.thxWrapper, {[styles.displayFlex]: showThx}, {[styles.fadeIn]: showFadeIn}, {[styles.fadeOut]: showFadeOut})}>
			<h2 className={styles.thxText}>Спасибо!</h2>
		</div> */}
		<Header title={`Cписок: ${lists.find(item => item.id === currentListId)?.theme ?? ''}`}>
			<div className={styles.theme}>
				<select className={styles.select} onChange={handleSelectChange} value={currentListId}>
					{lists.map(item => <option key={item.id} value={item.id}>{item.theme}</option>)}
				</select>
				<div className={styles.text}>всего карточек в списке: {phrases.length}</div>
				<input className={styles.input} type="number" pattern="[0-9]*" min="1" max={phrases.length} value={phraseIndexInput} onChange={handleChange}/>
				<button className={styles.shuffleButton} onClick={()=>navigate('/remembering/bad')}>Если вспоминание некоторых вещей вызвало у вас неприятные ощущения</button>
			</div>
		</Header>
	<div className={styles.wrapper}>
		<button className={styles.donat} onClick={goToDonat}>
			<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#750000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
				Сделай донат
		</button>
		<input className={styles.input} type="range" min="1" max={phrases.length} step="1" value={phraseIndexInput || 0} onChange={handleChange}></input>
		<h1 className={styles.h2}>Вопрос {`${phraseIndex + 1}: ${phrases[phraseIndex]}`}</h1>
		<div className={cn(styles.step, {[styles.show]: step === 1 })}>
			<h1 className={styles.h1}>{q1}</h1>
			<div className={styles.btnWrapper}>
				<ActionBtn type='play' onClick={() => speakText(q1)} />
				<ActionBtn disabled={step !== 1} type='done' onClick={() => nextStep(2)}/>
			</div>
		</div>
		<div className={cn(styles.step,{[styles.show]: step === 2 })}>
			<h1 className={styles.h1}>{q2}</h1>
			<div className={styles.btnWrapper}>
				<ActionBtn type='play' onClick={() => speakText(q2)}/>
				<ActionBtn disabled={step !== 2} type='done' onClick={() => nextStep(3)}/>
			</div>
		</div>
		<div className={cn(styles.step,{[styles.show]: step === 3 })}>
			<h1 className={styles.h1}>{q3}</h1>
			<p className={styles.defenition}>{feelingsItems[feelingIndex]?.description ?? ''}</p>
			<div className={styles.btnWrapper}>
				<ActionBtn type='play' onClick={() => speakText(q3)}/>
				<ActionBtn disabled={step !== 3} type='done' onClick={() => nextStep(1)}/>
			</div>
		</div>
		<div className={styles.footer} style={{marginTop: 'auto', padding: '20px'}}>
				<label className={styles.autoplay}>
					<input type="checkbox" checked={autoplay} onChange={() => setAutoplay(value => !value)}/>
					<img src="sound.svg" alt="звук" width={20} />
					autoplay
					</label>
				<Button onClick={no}>Не могу вспомнить<br />Пропустить вопрос</Button>
				<Button onClick={() => navigate('/remembering/final')}>Закончить</Button>
		</div>
	</div></>
};