// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };

// const routes = {
//     404: "/pages/404.html",
//     "/": "/pages/index.html",
//     "/about": "/pages/about.html",
//     "/lorem": "/pages/lorem.html",
// };

// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();

// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });

fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(response => response.json())
    .then(date => console.log(date));

// let foodlist = document.querySelector('.food');

// //1.create an XMLHttp Request Object
// let request = new XMLHttpRequest();

// //2.create the request
// request.open('Get', 'https://foodish-api.herokuapp.com/')

// //3.Send the request
// request.send();

// request.addEventListener('load', function () {
//     let[date] = JSON.parse(request.responseText);
//     console.log(date);
// })

// fetch('https://foodish-api.herokuapp.com/')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


fetch("https://foodish-api.herokuapp.com/")
    .then(response => response.json())
    .then(date => console.log(date));