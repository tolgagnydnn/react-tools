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


    function formatNumber(n) {
        return n > 9 ? "" + n : "0" + n;
    }
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [hour, setHour] = useState("00");
    const [timerActive, setTimerActive] = useState(false);
    const [countDownActive, setcountDownActive] = useState(false)
    const [counter, setCounter] = useState(0);

    const secondCounter = formatNumber(Math.floor(counter % 60));
    const minuteCounter = formatNumber(Math.floor((counter % (60 * 60)) / 60));
    const hourCounter = formatNumber(Math.floor(counter / (60 * 60)));
  
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
                            value={hour}>
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
                            value={minute}
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
                            value={second}
                            >
                            {new Array(60).fill(0).map((_, i) => (
                            <option key={i}>{formatNumber(i)}</option>
                            ))}
                        </DropdownSelect>
                        </SelectTime>
                    </TimeSelectBox>
                </CounterSelectTime>
                <CounterMainTime>
                    <TimeNumberBox>
                        <p>{hourCounter}</p>
                        <span>:</span>
                        <p>{minuteCounter}</p>
                        <span>:</span>
                        <p>{secondCounter}</p>
                    </TimeNumberBox> 
                    
                    <TimerİconsBox>
                        <StartTimeButton onClick={() => setcountDownActive(!countDownActive)}> 
                            {countDownActive ?
                                <>
                                    <p> Durdur </p>
                                    <p onClick={stopTimer} > Bitir </p>
                                </>
                                :
                                <p> Geri Sayım </p>
                            }
                        </StartTimeButton>

                        <StartTimeButton onClick={() => setTimerActive(!timerActive)} >
                            {timerActive ? 
                                <>
                                    <p> Durdur </p>
                                    <p onClick={stopTimer} > Bitir </p>
                                </>
                                    :
                                    <p> Başlat </p> 
                            }
                        </StartTimeButton>
                    </TimerİconsBox>
                </CounterMainTime>
            </CounterTimeBoxBody>
        </CounterTimeBox>
    )
}

export default CounterTime
