// function randomColor(){
//     const hax='0123456789ABCDEF'
//     let color='#'
//     for(let i=0;i<6;i++){
//         color +=hax[Math.floor(Math.random()*16)]
//     }
//     return color
// }
// let stop
// document.querySelector('#start').addEventListener('click',function(){
//         if(!stop){
//             stop=setInterval(() => {
//                 document.querySelector('body').style.backgroundColor=randomColor()
//             }, 500);
//         }

// })
// document.querySelector('#stop').addEventListener('click',function(){
//     clearInterval(stop)
//     stop=null
// })










// More proper way to do this
let stop
function randomColor() {
    const hax = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hax[Math.floor(Math.random() * 16)]
    }
    return color
}
document.querySelector('#start').addEventListener('click',()=>{changeColor()})
document.querySelector('#stop').addEventListener('click',()=> {StopChange()})
function changeColor() {

    if (!stop) {
       stop = setInterval(Color, 500)
    }
    function Color() {
        document.querySelector('body').style.backgroundColor = randomColor()
    }

}
function StopChange(){
    
    clearInterval(stop)
    stop = null

}




