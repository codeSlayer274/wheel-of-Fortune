window.onload =(function() {

    let hr = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");


    function displayTime() {
        let date = new Date();

        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let hRotation = 30 * hh + mm / 2;
        let mRotation = 6 * mm;
        let sRotation = 6 * ss;


        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;
    }

    setInterval(displayTime, 1000);

});





// const hour = document.getElementById('hour');
// const minute = document.getElementById('min');
// const second = document.getElementById('sec');
//
// function time(){
//     let date = new Date();
//     let sec = date.getSeconds();
//     let secDegree = ((sec/60) * 360) + 90;
//     second.style.transform = `rotate(${secDegree}deg)`;
//     second.innerText = secDegree;
//
//     let min = date.getMinutes();
//     let minDegree = ((min/60) * 360) + 90;
//     minute.style.transform = `rotate(${minDegree}deg)`;
//     minute.innerText = minDegree ;
//
//     let hr = date.getHours();
//     let hourDegree = ((min/12) * 360) + 90;
//     hour.style.transform = `rotate(${hourDegree}deg)`;
//     hour.innerText = hr;
// }
//
// setInterval(time, 1000);