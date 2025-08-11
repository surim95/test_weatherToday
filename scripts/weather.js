const weatherData = [
    { city: "Seoul", temp: "24°C", desc: "맑음", src: "./images/sun.png"},
    { city: "Busan", temp: "20°C", desc: "흐림", src: "./images/rainy-day.png"},
    { city: "Jeju", temp: "22°C", desc: "비", src: "./images/cloudy.png"},
];

/* 날씨 데이터 연결 */
const weatherBtn = document.querySelector('.reload');
const city = document.querySelector('.city em');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const weatherIcon = document.querySelector('.weather_icon img');

//console.log(weatherBtn, weatherData, city, temp, desc, weatherIcon);
//console.log(weatherData.length);

weatherBtn.addEventListener('click',()=>{
    const randomNum = Math.floor(Math.random()*weatherData.length);
    //console.log(randomNum);
    city.textContent = weatherData[randomNum].city;
    temp.textContent = weatherData[randomNum].temp;
    desc.textContent = weatherData[randomNum].desc;
    weatherIcon.src = weatherData[randomNum].src;
})

/* 하단 미니 날씨 */
const busan = document.querySelector('.busan');
const seoul = document.querySelector('.seoul');
const jeju = document.querySelector('.jeju');

//console.log(busan, seoul, jeju);
seoul.addEventListener('click',()=>{
    minimap(0)
})

busan.addEventListener('click',()=>{
    minimap(1)
})

jeju.addEventListener('click',()=>{
    minimap(2)
})

function minimap(num){
    city.textContent = weatherData[num].city;
    temp.textContent = weatherData[num].temp;
    desc.textContent = weatherData[num].desc;
    weatherIcon.src = weatherData[num].src;
}