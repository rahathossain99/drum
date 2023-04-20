for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        let code=this.innerHTML;
        check(code);
        butAnimation(code);
    });
}

document.addEventListener("keypress",function(event){
    check(event.key);
    butAnimation(event.key);
})

function check(code){
    switch(code){
        case "w":
            let tom1=new Audio("tone/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2=new Audio("tone/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3=new Audio("tone/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4=new Audio("tone/tom-4.mp3");
            tom4.play();
            break; 
        case "j":
            let snare=new Audio("tone/snare.mp3");
            snare.play();
            break; 
        case "k":
            let kick_bass=new Audio("tone/kick-bass.mp3");
            kick_bass.play();
            break; 
        case "l":
            let crash=new Audio("tone/crash.mp3");
            crash.play();
            break;   
        default:alert(code);                     
    }
}

function butAnimation(butt){
    let active=document.querySelector("."+ butt);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}