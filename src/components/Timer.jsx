import { CircularProgressbar, buildStyles } from '/react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect } from 'react';
import SettingsContext from './SettingsContext';


const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setIsPaused] = useState(true);
    const [isWorking, setIsWorking] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60);

    useEffect(() => {
        let interval;

        const handleTick = () => {
            if (!isPaused && secondsLeft > 0) {
                setSecondsLeft(prevSeconds => prevSeconds - 1);
            }
        };

        if (!isPaused && secondsLeft > 0) {
            interval = setInterval(handleTick, 1000);
        }

        if (isPaused || secondsLeft === 0) {
            clearInterval(interval);
        }

        if (secondsLeft === 0) {
            if (isWorking) {
                setIsWorking(false);
                setSecondsLeft(settingsInfo.breakMinutes * 60);
            } else {
                setIsWorking(true);
                setSecondsLeft(settingsInfo.workMinutes * 60);
            }
            settingsInfo.automatic ? setIsPaused(false) : setIsPaused(true);


        }

        return () => clearInterval(interval);
    }, [isPaused, secondsLeft, isWorking, settingsInfo]);

    const handleStartPauseClick = () => {
        setIsPaused(prevPaused => !prevPaused);
    };

    const percentageComplete = isWorking
        ? (secondsLeft / (settingsInfo.workMinutes * 60)) * 100
        : (secondsLeft / (settingsInfo.breakMinutes * 60)) * 100;

    return (
        <>
            <CircularProgressbar
                value={percentageComplete}
                text={isWorking ? `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60 < 10 ? '0' : ''}${secondsLeft % 60}` : `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60 < 10 ? '0' : ''}${secondsLeft % 60}`}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: isPaused ? red : green,
                    trailColor: 'rgba(255,255,255,0.2)',
                    pathTransitionDuration: 0.5,
                    strokeLinecap: 'butt'
                })}
            />
            <div style={{ marginTop: '20px' }}>
                {isPaused ? <PlayButton onClick={handleStartPauseClick} /> : <PauseButton onClick={handleStartPauseClick} />}
            </div>
            <div style={{ marginTop: '20px' }}>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
            
        </>
    );
}

export default Timer;
