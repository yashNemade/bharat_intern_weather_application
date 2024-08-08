var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="3db3d2f177cd92286b34790b38f3efb8"

btn.addEventListener('click', function()
    {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => 
    {
        var name = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${name}</span>`
        temp.innerHTML=`Temperature: <span>${temperature} K</span>`
        description.innerHTML=`Sky Conditions: <span>${descrip}</span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed} km/h</span>`
    
    })

    .catch(err => alert('You Entered "Wrong" City Name!!!'))
})