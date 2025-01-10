let h1=document.querySelector('.h1');
setInterval(function() {
h1.className='focus-in-contract ,focus-out';
setTimeout(function() {
h1.className='h1';
}, 1500)
}, 3000)
