// Your code goes here
// Your code goes here
/*function clickEventHandler(event){
    //event.preventDefault();
    //console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!');
    //console.log(event.target);
    //console.log(event.currentTarget)
    //event.target.style.backgroundColor ='blue';
}*/

let anchorTag = document.querySelectorAll('a');
for (let i = 0; i < anchorTag.length; i++) {
    anchorTag[i].addEventListener('focus', (event) => {
        event.target.style.backgroundColor = 'red';
    })
}
document.querySelector('nav').addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'blue';
    event.target.style.transform = 'scale(1.3)';
    preventDefault();
})

document.querySelector('header').addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'green';
})

document.querySelector('img').addEventListener('drag', (event) => {
    //event.target.style.backgroundColor = 'blue';
    event.target.style.transform = 'scale(0.5)';
})
document.querySelectorAll('img')[1].addEventListener('load', (event) => {
    event.target.style.transform = 'scale(0.5)';
    event.target.style.border = '10px solid red';
})
document.querySelector('header').addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'pink';
})
document.querySelectorAll('p')[0].addEventListener('scroll', (event) => {
    event.target.style.backgroundColor = 'red';
})
document.querySelectorAll('p')[1].addEventListener('resize', (event) => {
    event.target.style.backgroundColor = 'blue';
})
document.querySelectorAll('p')[2].addEventListener('select', (event) => {
    event.target.style.backgroundColor = 'green';
})
document.querySelectorAll('p')[3].addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'yellow';
})


let parent = document.querySelectorAll('.destination');
let child = document.querySelectorAll('.destination .btn');

for (let i = 0; i < parent.length && i < child.length; i++) {
    parent[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';
    })
    child[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
        event.stopPropagation();
    })
}