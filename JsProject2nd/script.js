const form=document.querySelector('form')
form.addEventListener('submit',function(e){
        e.preventDefault();
        const height=parseInt(document.querySelector('#Hi').value);
        const weight=parseInt(document.querySelector('#We').value);
        const result=document.querySelector('.result')
        const result1=document.querySelector('.r1')
        console.log(height,weight)
        if(height===''||height<0||isNaN(height)){
            result.innerHTML=`NOt Valid height  ${height}`
        }
        else if(weight===''||weight<0||isNaN(weight)){
            result.innerHTML=`NOt Valid weight ${weight}`
        }
        else{
            const bmi=(weight/((height*height)/10000)).toFixed(2)
            result.innerHTML=bmi;
            if(bmi<18.60){
                result1.innerHTML='You Under Wight '
            }
            else if(bmi>24.9){
            result1.innerHTML='You OverWight '
                }
            else{
            result1.innerHTML='You are Fit and fine '

            }    
             }
});