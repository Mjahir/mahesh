

// function changetext(){
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Mahesh Bhai"
// }

// let fpara=document.getElementById('fpara');

// fpara.addEventListener('click',changetext);

// // fpara.removeEventListener('click',changetext);


// let ancorelement = document.getElementById('fancor');


// ancorelement.addEventListener('click',function(event) {
//     event.preventDefault();
//     ancorelement.textContent = "click done bhai"
// });


// let paras = document.querySelectorAll('p');

function alertpara(event) {

     alert("you have cliked on para: " + event.target.textcontent );
 }

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     console.log("eventlistener added");
//     para.addEventListener('click',alertpara);
// }


let mydiv = document.getElementById('wrapper');

document.addEventListener('click',alertpara);