const a = Math.floor(Math.random()*6)+1;

const Image = 'dice_'+a+'.png';

document.querySelectorAll
('img')[0].setAttribute
('src' , Image);

alert(a);

document.querySelector ('h1').innerHTML = 'test passed';