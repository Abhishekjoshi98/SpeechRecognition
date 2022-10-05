const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result',(e)=>{
    texts.appendChild(p);
    const text = Array.from(e.results).map((result)=>result[0]).map((result)=>result.transcript).join('');

     p.innerText = text;

    if(e.results[0].isFinal){
       if(text.includes('how are you')){
         p = document.createElement('p');
          p.classList.add('replay');
          p.innerText = 'I am fine';
         texts.appendChild(p);
   }
   if(text.includes('who are you')){
    p = document.createElement('p');
     p.classList.add('replay');
     p.innerText = 'I am Chitti robot Speed 1tz memory 1zb';
    texts.appendChild(p);
    }
   if(
    text.includes("what's your name") || text.includes("what is your name")
   ){
    p=document.createElement('p');
    p.classList.add('replay');
    p.innerText='My name is Chrome Alexa';
    texts.appendChild(p);
   }
   if(
    text.includes('open youTube') || text.includes('open YouTube')
   ){
    p = document.createElement('p');
    p.classList.add('replay');
    p.innerText= 'opening youtube channel';
    texts.appendChild(p);
    console.log('opening youtube');
    window.open('https://www.youtube.com/','_blank');
   }
   p = document.createElement('p');
}
});
recognition.addEventListener('end',()=>{
    recognition.start();
})
function speak(){
recognition.start();
}