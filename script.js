const mario = document.queryselector('.mario');
const pipe = document.queryselector('.pipe'); 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
   
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario);

    console.log(marioPosition)
   
   if (pipePosition <= 120) {

    pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px';
    
   }
    
}, 10);

document.addEventListener('keydown',jump);