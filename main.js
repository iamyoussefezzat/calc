let input = document.getElementById('inputbox');
let buttons =document.querySelectorAll
('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (t) =>{
        if(t.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(t.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        
        else if(t.target.innerHTML == ' DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

       else{
        string += t.target.innerHTML;
        input.value = string;
       }
        
    }) 
})


