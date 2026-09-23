const mario = document.queryselector('.mario'); 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
   const pipePosition = pipe.offsetLeft;
   console.console.log();
    
}, 10);
document.addEventListener('keydown',jump);