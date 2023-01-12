// fetch("http://localhost:3000/fetch")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });

// fetch("http://localhost:3000/fetch")
//     .then(response => response.json())
//     .then(date => {
//         data.foreach(user => {
//             const markup = `<li>${user.Name}</li>`;
//             document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//         })
//     });

// .catch (error => console.log(error));




    // fetch('http://localhost:3000/fetch')
    //     .then(res =>{
    //         return res.json();
    //     })
    //     .then(date => {
    //     data.forEach(user => {
    //         const markup = `<li>${user.Name}</li>`;
    //         document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    //     })
    //     .catch (error => console.log(error));
    // });
    
    // function totalClick(click) {
    // const totalClick = document.getElementById('totalClicks');
    // const sumvalue = parseInt(totalClick.innerText) + click;
    // console.log(sumvalue + click);
    // totalClick.innerText = sumvalue;
    // }   


// const plus = document.querySelector(".plus"),
// minus = document.querySelector(".minus"),
// num = document.querySelector(".num");

//  let a = 1;
//     plus.addEventListener("click", () => {
//     a++;
//     a = (a < 10) ? "0" + a : a ;
//     num.innerText = a;
//     console.log(a);
// });
//     minus.addEventListener("click", () => {
//    if(a > 1){
//     a--;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
//    }
// });

fetch("http://localhost:3000/fetch").then((data) => {
    //console.log(data); json format
    return data.json(); //converted to object
}).then((ObjectData) => {
    console.log(ObjectData[0].title);
    let tableData = ""; 
    ObjectData.map((values) => {
        tableData += `<tr>
        <td><img src="${values.Image}"></td>
        <td>${values.Name}</td>
        <td>${values.Cost}</td>
        <td>${values.Details}</td>
        <td> 
            <div class="wrapper">
                <span class="minus">-</span>
                <span class="num">01</span>
                <span class="plus">+</span>
            </div >
        </td>
        
       
      </tr>`
    });

document.getElementById("table_body").innerHTML = tableData;
})

// const plus = document.querySelector(".plus"),
//  minus = document.querySelector(".minus"),
//  num = document.querySelector(".num");

//  let a = 1;
//  plus.addEventListener("click", () => {
//     a++;
//     a = (a < 10) ? "0" + a : a ;
//     num.innerText = a;
//     console.log(a);
//  });
//  minus.addEventListener("click", () => {
//    if(a > 1){
//     a--;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
//    }
//  });










































// fetch("http://localhost:3000/fetch")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(ObjectData[0].title);
//         let tableData = "";
//         ObjectData.map((values) => {
//             tableData += `<tr>
//             <td>${values.Name}</td>
//             <td>${values.Cost}</td>
//             <td>${values.Details}</td>
//           </tr>`
//         });
//         document.getElementById("table_body").innerHTML = tableData;
//     });