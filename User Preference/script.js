const fSize=document.querySelector("#fontSize");
const bgColour=document.querySelector("#bgColour");
const mainBody=document.querySelector("main");
const p=document.querySelector("p");
const button=document.querySelector("#btn");
// To Reset Value 
button.addEventListener("click",resetValues)
function resetValues(){
        localStorage.removeItem("fontSize")
        localStorage.removeItem("bgColour")
        localStorage.setItem("fontSize","16px");
        localStorage.setItem("bgColour","aqua");
        p.style.fontSize="16px";
        fSize.value="16px";
        mainBody.style.backgroundColor="aqua";
        bgColour.value="aqua";
        
    
}
// To add font size
const aplyFontSize=(event)=>{
    const font=event.target.value;
    p.style.fontSize=font;
    localStorage.setItem("fontSize",`${font}`);
}
// To add colour
const aplyBgColour=(event)=>{
    const bg=event.target.value;
    mainBody.style.backgroundColor=bg;
    localStorage.setItem("bgColour",`${bg}`);
}
// To add fon size and colour user
function userFontColour(){
  font=localStorage.getItem("fontSize");
  p.style.fontSize=font;
  fSize.value=`${font}`;
  bg=localStorage.getItem("bgColour");
  mainBody.style.backgroundColor=bg;
  bgColour.value=`${bg}`;
}

fSize.addEventListener("change",aplyFontSize);
bgColour.addEventListener("change",aplyBgColour);
userFontColour();
