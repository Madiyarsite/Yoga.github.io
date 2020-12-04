window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = document.querySelectorAll(".info-header-tab"),
        tab = document.querySelector(".info-header"),
        con = document.querySelectorAll(".info-tabcontent");
    let hideTabContent = (a) => {
        for(let i = a; i < con.length; i++){
            con[i].classList.remove("show");
            con[i].classList.add("hide");
        }
    };
    hideTabContent(1);
    let showTabContent = (b) => {
        for(let i = 0; i < con.length; i++){
            if(con[b].classList.contains("hide")){
                con[b].classList.remove("hide");
                con[b].classList.add("show"); 
            }
        }
    };
    tab.addEventListener('click', (event) => {
        let target = event.target;
        if(target && target.classList.contains("info-header-tab")){
            for(let i = 0; i < tabs.length; i++){
                if(target == tabs[i]){
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });
//timer
    let deadline = '2020-12-05';
    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            return{
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
         };
        let setClock = (id, endtime) => {
            let timer = document.getElementById(id),
                hours = timer.querySelector(".hours"),
                minutes = timer.querySelector(".minutes"),
                seconds = timer.querySelector(".seconds"),
                timeInterval = setInterval(updateClock, 1000);

                function updateClock(){
                    let t = getTimeRemaining(endtime);
                    let addZero = (num) => {
                        if(num <= 9){
                            return  "0" + num;
                        }else return num ;
                    };
                    
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
                    if(t.total <= 0){
                        clearInterval(timeInterval);
                    }
                }
        };
   
    setClock('timer', deadline);
    
    //modal
        let more = document.querySelector(".more"),
            overlay = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close");
        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
            });

//form
let massenge = {
    loading: 'load',
    success: 'thanks',
    fail: 'errore'
}; 
function post(){      
let form = document.querySelector(".main-form"),
    input = form.getElementsByTagName('input'),
    statusMassenge = document.createElement("div");
    statusMassenge.classList.add("status");
form.addEventListener('submit', function(event){
            return new Promise(function(resolve, reject){
            function win(){
                statusMassenge.innerHTML = massenge.success;
            }
    event.preventDefault();
    form.appendChild(statusMassenge);
let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
let formData = new FormData(form);
    request.send(formData);
request.addEventListener('readystatechange', function(){
        if(request.readyState < 4){
            statusMassenge.innerHTML = massenge.loading;
        }else if( request.readyState === 4 && request.status == 405){
            resolve(win());
        }else{
            // statusMassenge.innerHTML = massenge.fail;
            reject(statusMassenge.innerHTML = massenge.fail);
        }
});
    }).then(clear());
      function clear(){
        for(let i = 0; i < input.length; i++){
            input[i].value = '';
        }
    }                  
});
}
post();
});


