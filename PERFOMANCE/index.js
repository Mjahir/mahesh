

// // code 1

//  const t1 = performance.now()

//  for(i=1;i<=100;i++){
//      let para = document.createElement('p');
//      para.textContent = "This Is Para" + i;
//      document.body.appendChild(para);
//  }

//  const t2 = performance.now();

//  console.log("Total time by code1:" + (t2-t1));





// // code 2

// const t3 = performance.now()

// let mydiv = document.createElement('div');

// for(i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "This Is Para" + i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);

// const t4 = performance.now()

// console.log("total time by code2:" + (t4-t3));


// Best code
 
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent="This is para"+i;
    fragment.appendChild(para);
    
}
document.body.appendChild(fragment);