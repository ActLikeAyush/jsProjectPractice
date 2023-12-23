
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
const form = document.querySelector('form')
const input = document.querySelector('#in');
const submit = document.querySelector('#bu')
const TurnPre = document.querySelector('.Pre')
const win = document.querySelector('.win')
const TurnLeft = document.querySelector('.Left')
const NewGame=document.querySelector('.NewGame')
const EndGame=document.querySelector('.EndGame')
let numOfTrun = 10
let pre=[]
console.log(numOfTrun)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input.value)
    const Guess = input.value
    if (numOfTrun > 1) {
        if (Guess == randomNumber) {
            win.innerHTML = 'you Win The Game'
        }
        else if (Guess < randomNumber) {
            win.innerHTML = 'Try Bigger Number'
            numOfTrun = numOfTrun - 1
            TurnLeft.innerHTML=`Turn Left: ${numOfTrun}`
            pre.push(Guess)
            TurnPre.innerHTML=`Previous guess: | ${pre} |`

        }
        else if (Guess > randomNumber) {
            win.innerHTML = 'Try Smaller Number'
            numOfTrun = numOfTrun - 1
            TurnLeft.innerHTML=numOfTrun
            pre.push(Guess)
            TurnPre.innerHTML=`Previous guess:| ${pre} |`
        }
    }
    else{
        win.innerHTML='You Lose the game'

    }
});