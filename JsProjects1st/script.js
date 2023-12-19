console.log('jaiShriRam')
console.log('jai Shri Ram')
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
        console.log(button)
        button.addEventListener('click',function(e){
            console.log('e'+e)
            console.log('te'+e.target)

            body.style.backgroundColor=e.target.id;
        });
});