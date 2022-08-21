// set initial count
let count = 0;
// set value and buttons
const value = document.querySelector('#value');
const Btns = document.querySelector('.btn');


Btns.forEach(function(btn) {btn.addEventListener("click",function 
(e) {const styles= e.currentTarget.classicList;
    if (styles.cotains(decrease)) {count--;
        
    }
    else if (styles.cotains(increase)) {count++
        
    }
    else {count=0;}
    if (count > 0) {value.style.color='green'}
    if (count<0) {value.style.color="red"
        
    } 
    if (count===0) {value.style.color="#222"
        
    }
    
        
    }   
    }

    value.textContent=count
})

});