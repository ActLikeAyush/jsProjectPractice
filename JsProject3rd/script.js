const time=document.querySelector('.clock')
setInterval(function(){
    let date=new Date();
    let a=date.toLocaleTimeString()
    console.log(a)
    time.innerHTML=a
},1000)