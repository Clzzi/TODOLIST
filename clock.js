const clockContainer = document.querySelector(".clock_js");
const clockTitle = document.querySelector("h1");
    
function getTime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const am = 'AM';
    const pm = 'PM';
    if(hours > 12)
    {
        const hours1 = hours-12;
        clockTitle.innerText = `${hours1 < 10 ? `0${hours1}` : hours1}:${
        minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}${ pm}`;
    }
    else
    {
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds} ${am}`;
    }
}

function init()
{
    getTime();
    setInterval(getTime, 1000);
}

init();