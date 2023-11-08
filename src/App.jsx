import "./App.css";
import { useState } from "react";
function App() {
  const [breakTimeSrting, setBreak] = useState("5:00");
  const [sessionTimeString, setSession] = useState("25:00");
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [bOrs, setbOrs] = useState(true);

  function handleBreakTime(e) {
    if (e.target.id == "sub") {
      if (breakTime > 1) {
        setBreakTime(breakTime - 1);
        setBreak(breakTime - 1 + ":00");
      } else {
        setBreakTime(1);
      }
    } else {
      setBreakTime(breakTime + 1);
      setBreak(breakTime + 1 + ":00");
    }
  }
  function handleSessionTime(e) {
    if (e.target.id == "sub") {
      if (sessionTime > 1) {
        setSessionTime(sessionTime - 1);
        setSession(sessionTime - 1 + ":00");
      } else {
        setSessionTime(1);
      }
    } else {
      setSessionTime(sessionTime + 1);
      setSession(sessionTime + 1 + ":00");
    }
  }

  function Start() {
    let btns = document.getElementsByClassName("playing");
    for (let index = 0; index < btns.length; index++) {
      btns[index].disabled = true;
    }

    let btn = document.getElementById("start");
    btn.disabled = true;
    let audio = document.getElementById("audio");
    if (bOrs) {
      let time = sessionTime * 60 - 1;
      let interval = setInterval(function hello() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 1 ? "0" + minutes : minutes;

        setSession(minutes + ":" + seconds);

        time -= 1;
        if (time < 0) {
          audio.play();
          clearInterval(interval);
          for (let index = 0; index < btns.length; index++) {
            btns[index].disabled = false;
          }

          setTimeout(() => {
            setbOrs(!bOrs);
            setSession(sessionTime + ":00");
            btn.disabled = false;
          }, 2000);
        }
      }, 1000);
    } else {
      let time = breakTime * 60 - 1;
      const interval = setInterval(function hello() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 1 ? "0" + minutes : minutes;
        setBreak(minutes + ":" + seconds);

        time -= 1;
        if (time < 0) {
          clearInterval(interval);
          for (let index = 0; index < btns.length; index++) {
            btns[index].disabled = false;
          }
          audio.play();
          setTimeout(() => {
            setbOrs(!bOrs);
            setBreak(breakTime + ":00");
            btn.disabled = false;
          }, 2000);
        }
      }, 1000);
    }
  }

  return (
    <div className="flex flex-col h-screen w-[100%] justify-center items-center bg-[#2A2C31] gap-4">
      <h1 className="animate-pulse text-yellow-50 text-3xl font-semibold">
        Pomodoro Clock
      </h1>
      <div className="flex flex-col w-[350px] h-min gap-2 pt-2  items-center ">
        <div className="flex justify-between w-full ">
          <div className=" w-[100px] h-[100px] flex flex-col items-center justify-center gap-2 ">
            <p className="text-red-600 text-base">Break lenght</p>
            <div className="flex items-center">
              {/*this is break section*/}
              <button className="playing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-yellow-50 hover:text-gray-600"
                  onClick={handleBreakTime}
                  id="sub"
                >
                  <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                </svg>
              </button>

              <p className="text-3xl text-yellow-50">{breakTime}</p>
              <button className="playing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-yellow-50 hover:text-gray-600 "
                  onClick={handleBreakTime}
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="  h-[100px] w-[120px] flex flex-col items-center justify-center gap-2">
            <p className="text-green-600 text-base">Session Length</p>
            <div className="flex items-center">
              {/*this is session section*/}
              <button className="playing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-yellow-50 hover:text-gray-600 "
                  onClick={handleSessionTime}
                  id="sub"
                >
                  <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                </svg>
              </button>

              <p className="text-3xl text-yellow-50 ">{sessionTime}</p>
              <button className="playing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 text-yellow-50 hover:text-gray-600 "
                  onClick={handleSessionTime}
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {bOrs ? (
          <div className="flex justify-center items-center flex-col gap-1 h-72 w-72 border-4 rounded-[100%] border-green-500  ">
            <p className="text-yellow-50 text-5xl">{sessionTimeString}</p>
            <div className="flex gap-8">
              <button id="start" className="text-yellow-50" onClick={Start}>
                Click to Start
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col gap-1 h-72 w-72 border-4 rounded-[100%] bg-green-500 border-green-500  ">
            <p className="text-yellow-50 text-5xl">{breakTimeSrting}</p>
            <div className="flex gap-8">
              <button id="start" className="text-yellow-50" onClick={Start}>
                Click to Start
              </button>
              {/*<button className="text-yellow-50" onClick={breakStop}>
                Stop
        </button>*/}
            </div>
          </div>
        )}

        <div className="flex w-full items-center justify-between">
          <button
            className="text-yellow-50 playing"
            onClick={() => {
              setbOrs(!bOrs);
            }}
          >
            Next
          </button>
          <button
            className="text-yellow-50 playing"
            onClick={() => {
              setBreakTime(5);
              setSessionTime(25);
              setBreak("5:00");
              setSession("25:00");
              setbOrs(true);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <a
        href="https://github.com/Muhammedjazimtk"
        target="_blank"
        rel="noreferrer"
      >
        <p className="text-yellow-50 text-center text-xs">by jazim</p>
      </a>
      <audio id="audio">
        <source src="audio.mp3" type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

export default App;
