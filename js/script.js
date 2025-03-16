const hour = document.querySelector('.hour input')
const minute = document.querySelector('.minute input')
const second = document.querySelector('.second input')

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let timerID;


start.onclick = () => {

    if(hour.value == "" || minute.value == "" || second.value == ""){
        window.alert("Please fill out the fields")
        return
    }
    else if(hour.value == 0 && minute.value == 0 && second.value == 0){
        window.alert("At least 5 seconds of time is needed to start")
        return
    }
    else if(minute.value > 59 || second.value > 59){
        window.alert("Second and Minute cannot exceed 59")
        return
    }
    else{
        let sec = Number(second.value);
        let min = Number(minute.value);
        let hr = Number(hour.value);

        start.style.display = 'none'
        reset.style.display = 'inline-block'
        stop.style.display = 'inline-block'

        timerID = setInterval(()=>{

            if(hr === 0 && min === 0 && sec === 0){
                clearInterval(timerID)
                stop.style.display = 'none'
                return
            }
          
            if(sec == 0){
                sec = 59;
                if (min > 0){
                    min --;
                }
                else if(hr > 0){
                    min = 59;
                    hr --;
                }
            }
            else{
                sec --;
            }

            second.value = String(sec).padStart(2, '0');
            minute.value = String(min).padStart(2, '0');
            hour.value = String(hr).padStart(2, '0');
    },1000)
    }
}

stop.onclick = () => {
    clearInterval(timerID)
    stop.style.display = 'none'
    start.style.display = "inline-block"
    reset.style.display = 'inline-block'
}

reset.onclick = () => {
    clearInterval(timerID)
    reset.style.display = 'none'
    stop.style.display = 'none'
    start.style.display = 'inline-block'

    sec = 0;
    min = 0;
    hr = 0;

    second.value = '00'
    minute.value = '00'
    hour.value = '00'
}