const hours = document.querySelector('#hours')  
const minute = document.querySelector('#minute')
   
const second = document.querySelector('#second')
const startbtn = document.querySelector('#startbtn')




 






let startInterval;
let seconds = 0;
function startWatch() {
    console.log('watch started');
    
        startInterval = setInterval(function () {
        seconds += 1;
        if(seconds > 9){
            second.innerHTML = seconds;
        }else{
            second.innerHTML = '0' +  seconds;
        }
        console.log(seconds)
    }, 1000);
}

function stopWatch(){
console.log("watch stop")
// clearInterval(startInterval)
seconds -= 1;
clearInterval(startInterval)
}
function resetWatch(){
   console.log("watch reset")
   seconds  =  0;
}
