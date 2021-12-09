import {useState, useEffect} from 'react'

import {
    CounterTimeBox,
    CounterTitle,
    CloseCounterTimeBox,
    TimeSelectBox,
    TimeSelectTitle,
    SelectTime,
    CounterTimeBoxBody, 
    CounterMainTime,
    CounterSelectTime,
    TimeNumberBox,
    TimerİconsBox,
    DropdownSelect,
    StartTimeButton
 } from '../styles/CounterTimeStyled'

function CounterTime() {

    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [hour, setHour] = useState("00");
    const [timerActive, setTimerActive] = useState(false);
    const [countDownActive, setcountDownActive] = useState(false);
    const [counter, setCounter] = useState(0);


    const secondCounter = formatNumber(Math.floor(counter % 60));
    const minuteCounter = formatNumber(Math.floor((counter % (60 * 60)) / 60));
    const hourCounter = formatNumber(Math.floor(counter / (60 * 60)));
  
    /*Timer*/
    useEffect(() => {
      let intervalId;
      if (timerActive) {
        intervalId = setInterval(() => {     
          let computedSecond =
            String(secondCounter).length === 1
              ? `0${secondCounter}`
              : secondCounter;

          let computedMinute =
            String(minuteCounter).length === 1
              ? `0${minuteCounter}`
              : minuteCounter;

            let computedHour=
            String(hourCounter).length === 1
            ? `0${hourCounter}`
            : hourCounter;

          setSecond(computedSecond);
          setMinute(computedMinute);
          setHour(computedHour);
          setCounter((counter) => counter + 1);
        }, 1000);
      } 
      return () => clearInterval(intervalId);
    }, [timerActive, counter]);
  

    /*COUNTDOWN*/
    useEffect(() => {
        if (countDownActive) {
          stopTimer();
          return;
        }
        const s = Number(second);
        const m = Number(minute) * 60;
        const h = Number(hour) * 3600;
        setCounter(s + m + h);
      }, [second, minute, hour]);

      useEffect(() => {
        if (!countDownActive) return;
        if (counter < 1) {
          stopTimer();
        }
      }, [counter, countDownActive]);

      useEffect(() => {
        let intervalId;
        if (countDownActive) {
          intervalId = setInterval(() => {
            setCounter((counter) => counter - 1);
          }, 1000);
        }
        return () => clearInterval(intervalId);
      }, [countDownActive]);

      
    const countDownStart = () => {
        setcountDownActive(!countDownActive);
    }

    const timerStart = () => {
        setTimerActive(!timerActive);
    }

    function formatNumber(n) {
        return n > 9 ? "" + n : "0" + n;
    }

    function stopTimer() {
        setTimerActive(false);
        setcountDownActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
        setHour("00");
    }

    return (

        <CounterTimeBox>
            <CounterTitle> Zamanlayıcı</CounterTitle>
            <CloseCounterTimeBox>&times;</CloseCounterTimeBox>
            <CounterTimeBoxBody>
            
                <CounterSelectTime>
                    <TimeSelectBox>
                        <TimeSelectTitle> Saat: </TimeSelectTitle>
                        <SelectTime>
                        <DropdownSelect
                            onChange={(e) => setHour(e.target.value)}
                            >
                            {new Array(24).fill(0).map((_, i) => (
                            <option key={i}>{formatNumber(i)}</option>
                            ))}
                        </DropdownSelect>
                        </SelectTime>
                    </TimeSelectBox>
                    <TimeSelectBox>
                        <TimeSelectTitle> Dakika: </TimeSelectTitle>
                        <SelectTime>
                        <DropdownSelect
                            onChange={(e) => setMinute(e.target.value)}
                            
                             >
                            {new Array(60).fill(0).map((_, i) => (
                            <option key={i}>{formatNumber(i)}</option>
                            ))}
                        </DropdownSelect>
                        </SelectTime>
                    </TimeSelectBox>
                    <TimeSelectBox>
                        <TimeSelectTitle> Saniye: </TimeSelectTitle>
                        <SelectTime>
                        <DropdownSelect
                            onChange={(e) => setSecond(e.target.value)}
                            
                            >
                            {new Array(60).fill(0).map((_, i) => (
                            <option key={i}>{formatNumber(i)}</option>
                            ))}
                        </DropdownSelect>
                        </SelectTime>
                    </TimeSelectBox>
                </CounterSelectTime>
                <CounterMainTime>
                    <TimerİconsBox>
                        <StartTimeButton onClick={countDownStart}> 
                        {countDownActive ? (
                            <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 300.003 300.003"
                            >
                                <path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003    C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46    c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198    c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z" />
                            </svg>
                            <svg
                                onClick={stopTimer}
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 455 455"
                            >
                                <path d="M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.24,455,455,353.25,455,227.5    C455,101.761,353.25,0,227.5,0z M308.27,289.139c0,10.548-8.582,19.13-19.131,19.13H165.862c-10.548,0-19.13-8.582-19.13-19.13    V165.861c0-10.548,8.582-19.13,19.13-19.13h123.277c10.549,0,19.131,8.582,19.131,19.13V289.139z" />
                            </svg>
                            </>
                        ) : (
                            <p> Geri Sayım </p>
                        )}
                        </StartTimeButton>
                    </TimerİconsBox>
                    <TimeNumberBox>
                        <p>{hourCounter}</p>
                        <span>:</span>
                        <p>{minuteCounter}</p>
                        <span>:</span>
                        <p>{secondCounter}</p>
                    </TimeNumberBox> 
                    
                    <TimerİconsBox>
                        <StartTimeButton onClick={timerStart} >
                        {timerActive ? (
                            <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 300.003 300.003"
                            >
                                <path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003    C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46    c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198    c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z" />
                            </svg>
                            <svg
                                onClick={stopTimer}
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 455 455"
                            >
                                <path d="M227.5,0C101.761,0,0,101.75,0,227.5C0,353.239,101.75,455,227.5,455C353.24,455,455,353.25,455,227.5    C455,101.761,353.25,0,227.5,0z M308.27,289.139c0,10.548-8.582,19.13-19.131,19.13H165.862c-10.548,0-19.13-8.582-19.13-19.13    V165.861c0-10.548,8.582-19.13,19.13-19.13h123.277c10.549,0,19.131,8.582,19.131,19.13V289.139z" />
                            </svg>
                            </>
                        ) : (
                            <p> Süreyi Başlat </p>
                        )}
                        </StartTimeButton>
                    </TimerİconsBox>
                </CounterMainTime>
            </CounterTimeBoxBody>
        </CounterTimeBox>
    )
}

export default CounterTime
