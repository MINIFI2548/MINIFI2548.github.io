let body = document.body;

// ! เปิดซองจดหมาย
let envelope = document.querySelector(".envelope");
let paperCont = document.querySelector(".paper-container");

body.addEventListener('click', openEnvelope);
function openEnvelope(){
    console.log('open envelope');
    body.removeEventListener('click', openEnvelope);

    envelope.classList.add('open');
    paperCont.classList.add('opening');
    paperCont.addEventListener('animationend', function(){
        paperCont.classList.remove('opening');
        paperCont.classList.add('opened');
        envelope.style.animation = 'spinout-envelope 1s .2s linear';
        envelope.addEventListener('animationend', function(){
            envelope.remove();
        },{once : true}
        );
    body.addEventListener('click', readLetter);
    },{once : true}
    );
    paperCont.classList.remove('in-envelope');
    console.log(envelope);
}

// ! เปิดการ๋ดทีละใบ
function readLetter(){
    console.log("read a letter");
}

// ! ข้อความวิ่งตอนจบ
function endFrame(){
    let emojiLoop = setInterval(function(){
        runningText();
        numEmoji++;
    }, 25);
}
const limit = 1000;
let numEmoji = 0;
const contentList = ['🤍', '💙'];

function runningText(){
    let cont = document.querySelector('.emoji-container');
    let e = document.createElement('div');
    let height = document.body.clientheight;
    let clientHeight = document.body.clientHeight;

    let speed =  Math.random() * 2 + 1;
    let size = Math.floor(Math.random() * 10 + 5);
    let left = Math.floor(Math.random() * 105 - 5);
    
    e.style.animationDuration = speed + 's';
    e.style.fontSize = size + 'rem';
    e.style.left = left + '%';

    e.innerText = contentList[numEmoji % contentList.length];

    e.classList.add('running-text');

    cont.appendChild(e);
    e.addEventListener('animationiteration', () => {
        e.remove();
    });
}