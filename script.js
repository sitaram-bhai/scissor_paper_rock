let image = document.getElementById("mainlogo");
let image2 = document.getElementById("mainlogo2");
let result = document.getElementById("result");
let scoreR = document.getElementById("scorecount");
let scoreL = document.getElementById("scorecount2");
let r1;
let r2;
let a;
let b;
let sL = 0;
let sR = 0;
let sm;



document.addEventListener('keydown', function(event) {
  if (event.keyCode == 65) {
    
    changeimg('./photos/seasor.png','logo1',1,2);
  }
  else if (event.keyCode == 83) {
    changeimg('./photos/PAPER.png','logo2',2,2);
  }
  
  else if (event.keyCode == 68) {
changeimg('./photos/rock.png','logo3',3,2);
  }

else if (event.keyCode == 74) {

  changeimg2('./photos/seasor.png','logo4',1,1);
}

else if (event.keyCode == 75) {

  changeimg2('./photos/PAPER.png','logo5',2,1);
}

else if (event.keyCode == 76) {
  changeimg2('./photos/rock.png','logo6',3,1);
}

}, true);



function changeimg(dm, ln, r, c) {
  a = c;
  r1 = r;

  let l1 = document.getElementById(`${ln}`);

  if (l1.id == `${ln}`) {
    for (let i = 1; i <= 3; i++) {
      let l2 = document.getElementById(`logo${i}`);
      l2.style.backgroundColor = "white";
    }
  }
  l1.style.backgroundColor = "purple";

  image.src = dm;



 if(a==2 && b==1){
    results();
    b=0;
a=0;
 }

  
}

function changeimg2(dm, ln, r, c) {
  r2 = r;
  b = c;
  let l1 = document.getElementById(`${ln}`);

  if (l1.id == `${ln}`) {
    for (let i = 4; i <= 6; i++) {
      let l2 = document.getElementById(`logo${i}`);
      l2.style.backgroundColor = "white";
    }
  }

  l1.style.backgroundColor = "black";

  image2.src = dm;

  if(a==2 && b==1){
    results();
    b=0;
    a=0;
    
 }
    

}

function results() {
  if ((r1 == 1 && r2 == 2) || (r1 == 2 && r2 == 3) || (r1 == 3 && r2 == 1)) {
    if(sL+sR<6){
    scoreL.textContent = sL + 1;


    }
    sL = parseInt(scoreL.textContent);

  } else if (
    (r1 == 1 && r2 == 3) ||
    (r1 == 2 && r2 == 1) ||
    (r1 == 3 && r2 == 2)
  ) {
    if(sR+sL<6){
    scoreR.textContent = sR + 1;
    }
    sR = parseInt(scoreR.textContent);
  }
  else{
  
  }
  sm = sR + sL;
  if (sm == 6){finalResult();}




}

function finalResult() {
  if (sm == 6) {
    if (sL > sR) {
      result.textContent = `PLAYER 1 IS WINNER WITH SCORE ${sL}`;
    } else if (sR > sL) {
      result.textContent = `PLAYER 2 IS WINNER WITH SCORE ${sR} `;
    } else if (sR == sL) {
      result.textContent = `DRAW WITH  SCORE ${sR}  `;
    } else {
      result.textContent = "INVALID!!";
    }
  }
}


// 65 83 68 
// 74 75 76