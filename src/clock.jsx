import { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formattedTime = time  .toLocaleTimeString();
    const currentdate=new Date().toLocaleDateString()
    return (
        <>
            <div className="digitalclock">
                <div className="clock">
                    <span>Date  : {currentdate}</span>
                    <br></br>
                    <span> Time:  {formattedTime}</span>
                   
                </div>
            </div>
        </>
    );
}

export default DigitalClock;
