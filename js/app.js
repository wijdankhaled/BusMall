'use strict'
//console.log("hello iam work");
let leftImg=document.getElementById('leftImg');
let middelImg=document.getElementById('middleImg');
let rightImg=document.getElementById('rightImg');

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let maxAttempts = 25;
let userACounter = 0;
let nameImg=[];
let allImg=[];
let votesImg=[];
let showImg=[];

function getImg(name,sorce){
this.name=name;
this.sorce=sorce;
this.show=0;
this.votes=0;
allImg.push(this)
nameImg.push(this.name);
}
new getImg('bag','/img/bag.jpg');
new getImg('banana','/img/banana.jpg');
new getImg('bathroom','/img/bathroom.jpg');
new getImg('boots','/img/boots.jpg');
new getImg('breakfast','/img/breakfast.jpg');
new getImg('bubblegum','/img/bubblegum.jpg');
new getImg('chair','/img/chair.jpg');
new getImg('cthulhu','/img/cthulhu.jpg');
new getImg('dog-duck','/img/dog-duck.jpg');
new getImg('dragon','/img/dragon.jpg');
new getImg('pen','/img/pen.jpg');
new getImg('pet-sweep','/img/pet-sweep.jpg');
new getImg('scissors','/img/scissors.jpg');
new getImg('shark','/img/shark.jpg');
new getImg('sweep','/img/sweep.png');
new getImg('tauntaun','/img/tauntaun.jpg');
new getImg('unicorn','/img/unicorn.jpg');
new getImg('water-can','/img/water-can.jpg');
new getImg('wine-glass','/img/wine-glass.jpg');

function generateRandomIndex() {
    return Math.floor(Math.random() * allImg.length);
}

function renderImg(){
leftImageIndex=generateRandomIndex();
middleImageIndex=generateRandomIndex();
rightImageIndex=generateRandomIndex();

do {
    middleImageIndex=generateRandomIndex();
   rightImageIndex=generateRandomIndex();
}
while ((middleImageIndex === leftImageIndex || middleImageIndex===rightImageIndex)||(rightImageIndex===leftImageIndex || rightImageIndex===middleImageIndex)||(leftImageIndex===middleImageIndex || leftImageIndex===rightImageIndex));
leftImg.src=allImg[leftImageIndex].sorce;
middelImg.src=allImg[middleImageIndex].sorce;
rightImg.src=allImg[rightImageIndex].sorce;

//console.log(allImg[leftImageIndex].sorce);
//console.log(allImg[middleImageIndex].sorce);
//sconsole.log(allImg[rightImageIndex].sorce);

allImg[leftImageIndex].show++;
allImg[middleImageIndex].show++;
allImg[rightImageIndex].show++;
}

renderImg();

leftImg.addEventListener('click', userClick);
middelImg.addEventListener('click', userClick);
rightImg.addEventListener('click', userClick);

function  userClick(event){
userACounter++;
//console.log(userACounter);
if(userACounter<=maxAttempts){
    if (event.target.id === 'leftImg'){
        allImg[leftImageIndex].votes = allImg[leftImageIndex].votes + 1;
    }
    else if(event.target.id === 'middleImg'){
        allImg[middleImageIndex].votes = allImg[middleImageIndex].votes + 1;
    }
    else if(event.target.id === 'rightImg'){
        allImg[leftImageIndex].votes = allImg[leftImageIndex].votes + 1;
    }
    renderImg();
}else{
    leftImg.removeEventListener('click',userClick );
    middelImg.removeEventListener('click',userClick );
    rightImg.removeEventListener('click',userClick );
/*
    let list=document.getElementById('list');
    let btn =document.getElementById('btn');
    btn .addEventListener('click',listf);

    function listf(){
    let listElement;
    for(let i=0;i<allImg.length;i++){
        listElement=document.createElement('li');
        list.appendChild(listElement);
        listElement.textContent=`${allImg[i].name} had ${allImg[i].votes} votes, and was seen ${allImg[i].show} times`;
    }
}*/
for (let i = 0; i < allImg.length; i++) {
    votesImg.push(allImg[i].votes);
   showImg.push(allImg[i].show);
}
vChart();
}

}
//console.log(allImg);
//images ${i+1}:${allImg[i].votes}  votes

function vChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:nameImg ,
            datasets: [{
                    label: '# of imges Votes',
                    data: votesImg,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: '# of imges shown',
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    data:showImg
                }
            ]
        },
        options: {

        }
    });

}
//console.log(votesImg);
