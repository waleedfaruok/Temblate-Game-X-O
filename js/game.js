
let rtun = true;
let sequre = [];


function reset(A,B,C){
   document.getElementById('w'+A).style.color = "red";
   document.getElementById('w'+B).style.color = "red";
   document.getElementById('w'+C).style.color = "red";

   setTimeout(()=>{
     location.reload();
   },2000);
};

function checkwenir(){
   for(let i = 1; i <=9; i++){
    sequre[i] = document.getElementById('w'+ i).innerHTML;
   }
   if( sequre[1]==sequre[2] && sequre[2]==sequre[3] && sequre[1]!=""){
    alert('I won' + " " + sequre[1] + " "+ ' the game');
    reset(1,2,3);
   }
   if( sequre[4]==sequre[5] && sequre[5]==sequre[6] && sequre[4]!=""){
    alert('I won' + " " + sequre[4] + " "+ ' the game');
    reset(4,5,6);
   }
   if( sequre[7]==sequre[8] && sequre[8]==sequre[9] && sequre[7]!=""){
    alert('I won' + " " + sequre[7] + " "+ ' the game');
    reset(7,8,9);
   }
   if( sequre[1]==sequre[4] && sequre[4]==sequre[7] && sequre[1]!=""){
    alert('I won' + " " + sequre[1] + " "+ ' the game');
    reset(1,4,7);
   }
   if( sequre[2]==sequre[5] && sequre[5]==sequre[8] && sequre[2]!=""){
    alert('I won' + " " + sequre[2] + " "+ ' the game');
    reset(2,5,8);
   }
   if( sequre[3]==sequre[6] && sequre[6]==sequre[9] && sequre[3]!=""){
    alert('I won' + " " + sequre[3] + " "+ ' the game');
    reset(3,6,9);
   }
   if( sequre[1]==sequre[5] && sequre[5]==sequre[9] && sequre[1]!=""){
    alert('I won' + " " + sequre[1] + " "+ ' the game');
    reset(1,5,9);
   }
   if( sequre[3]==sequre[5] && sequre[5]==sequre[7] && sequre[3]!=""){
    alert('I won' + " " + sequre[3] + " "+ ' the game');
    reset(3,5,7);
   }
   
};


function addtoid(id){
    let wil =  document.getElementById(id);
  if(rtun && wil.innerHTML == ""){
    wil.innerHTML = "X";
    rtun =!rtun;
  }else if(!rtun && wil.innerHTML ==""){
    wil.innerHTML = "O";
    rtun =!rtun;
  }
  checkwenir();
};