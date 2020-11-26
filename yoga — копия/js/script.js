window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabs = document.querySelectorAll(".info-header-tab"),
        tab = document.querySelector(".info-header"),
        con = document.querySelectorAll(".info-tabcontent");
    function hideTabContent(a){
        for(let i = a; i < con.length; i++){
            con[i].classList.remove("show");
            con[i].classList.add("hide");
        }
    }
    hideTabContent(1);
    function showTabContent(b){
        for(let i = 0; i < con.length; i++){
            if(con[b].classList.contains("hide")){
                con[b].classList.remove("hide");
                con[b].classList.add("show"); 
            }
        }
    }
    tab.addEventListener('click', function(event){
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

    let deadline = '2020-11-28';
    function getTimeRemaining(endtime){
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
         }
        function setClock(id, endtime){
            let timer = document.getElementById(id),
                hours = timer.querySelector(".hours"),
                minutes = timer.querySelector(".minutes"),
                seconds = timer.querySelector(".seconds"),
                timeInterval = setInterval(updateClock, 1000);

                function updateClock(){
                    let t = getTimeRemaining(endtime);
                    function addZero(num){
                        if(num <= 9){
                            return  "0" + num;
                        }else return num ;
                    }
                    
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
                    if(t.total <= 0){
                        clearInterval(timeInterval);
                    }
                }
        }
   
    setClock('timer', deadline);
    

});

