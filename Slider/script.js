const items=document.querySelectorAll(".item")
count=1;

setInterval(()=>{
    count++;
    let currentItem=document.querySelector(".current");
    currentItem.classList.remove("current");
    if(count>items.length){
        count=1;
        items[0].classList.add("current");
        
    }else{
            
        
        currentItem.nextElementSibling.classList.add("current")
    }
    
    

},3000)
