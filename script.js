let body = document.body;
let wrapper = document.querySelector(".wrapper");
let paperCtn = document.querySelector(".paper-container");

let currentFrame = 0
const contentList = ['🤍', '💙'];

body.addEventListener("click", click);

function click(){
    switch(currentFrame){
        case 0:
            wrapper.classList.add("opening");
            let waitWrapperOpen = setTimeout(paperout, 1000);
            break;
        case 1:
            endFrame();
            break;
        default:
            console.log("click");
            break;
        }
}

function paperout(){
    console.log('paper outting');
    paperCtn.classList.add("opening");
    let waitWrapperOpen = setTimeout(function(){
        wrapper.style.transitionDuration = 1 + 's';
        wrapper.style.scale = 0.75;
        wrapper.classList.remove('opening');
    }, 750);

    paperCtn.addEventListener('animationend', function(){
        paperCtn.classList.remove("in-wrapper");
        paperCtn.classList.remove("opening");
        wrapper.classList.add('opened');
        paperCtn.classList.add("opened");
    },{once : true}
    );
    wrapper.addEventListener('animationend', function(){
        wrapper.remove();
    }, {once : true}
    );
    currentFrame = 1;
}

function endFrame(){
    let emojiLoop = setInterval(function(){
        if(numEmoji < limit){
            runningText()
        }
    }, 25);
}



const limit = 500;
let numEmoji = 0;
const max_width = document.body.clientWidth;

function runningText(){
    let cont = document.querySelector('.emoji-container');
    let e = document.createElement('div');
    let width = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;

    let speed =  Math.random() * width / 1000  * 2 + 0.5;
    let size = Math.floor(Math.random() * 10 + 1);
    let top = Math.floor(Math.random() * 95);
    
    e.style.animationDuration = speed + 's';
    e.style.fontSize = size + 'rem';
    e.style.top = top + '%';

    e.innerText = contentList[numEmoji % contentList.length];

    e.classList.add('running-text');

    cont.appendChild(e);
    numEmoji++;
    e.addEventListener('animationiteration', () => {
        e.remove();
        numEmoji--;
    });
}