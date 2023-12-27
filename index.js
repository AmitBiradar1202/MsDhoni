
function submission(){

    var mahi=document.getElementById("7").value;
    if(isNaN(mahi)){
        const split_string = mahi.split("");
        console.log(split_string)
        const result=mahi.length;
        console.log(result)
        
        if(result==7){
            yesThala();
        }
        else{
            noThala();
        }
    }
    else{
        let result = Array.from(String(mahi), Number);

    console.log(result);
    let initialValue=0
    const sumWithInitial = result.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );
      if(sumWithInitial==7){
        yesThala();
    }
    else{
        noThala();
    }
    }
}


function yesThala(){
    var box=document.getElementById("box");
    box.innerHTML= '<div class="no" ><video src="./Dhoni.mp4"  loop autoplay  width="200" height="150" id="ok"></video></div>';
    setTimeout(()=> {
        box.innerHTML = '' ;
    },17000); 

}


function noThala(){
    var box=document.getElementById("box");
    box.innerHTML= '<h1 class="no">NoThala</h1> <audio src="./DhoniChat Meme.mp3" type="audio.mp3" loop autoplay></audio>';
    setTimeout(()=> {
        box.innerHTML = '' ;
    },5500); 
}

