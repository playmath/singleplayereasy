var logo;
var start;
var gameState = "serve";
var cloudImg;
var cloudsGroup;
var noofclouds=0;
var x,y;
var answerinput;
var cloud;
var questionstage=0;
var questionback, timeback;
var input, button;
var corrects=0;
var playagainbutton;
var doubt;



function preload(){
logo = loadImage("Logo Transperant.png");
cloudImg = loadImage("cloud.png");
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    start = createButton("Start");
    start.position(width/2 - 100,height/2 - 100);
    start.class("button");
    start.mouseClicked(singleplayeropen);

    cloudsGroup = new Group();
    timeback = createSprite(0,height/2,50 ,height);
    timeback.shapeColor = rgb(135, 206, 235);
    timeback.visible = false;
    questionback = createSprite(width/2 + 200,height/2,width/2 + 300,height);
    questionback.shapeColor = "white";
    questionback.visible = false;

    input = createInput("","text").attribute('placeholder', 'type here...');
    input.position(width/2, height/2);
    input.hide();
    input.class("input");

    button = createButton("Submit");
    button.position(width/2  ,height/2 +100);
    button.hide();
    button.class("button");
    button.mouseClicked(correctorwrong);

    playagainbutton = createButton("Play Again");
    playagainbutton.position(width/2 - 100, height/2);
    playagainbutton.class("button");
    playagainbutton.mouseClicked(reset);
    playagainbutton.hide();

    doubt = createA("https://playmath.github.io/mailus","Have A Doubt?","_blank");
    doubt.position(width/2 - 50, height - 50);



 
}

function draw() {
  //console.log(gameState);
   if(gameState === "serve"){ 
    background("white");
    imageMode(CENTER);
  image(logo,width/2, 100,150,150);
   }

   if(gameState === "play"){
     background("white");
     start.hide();
     push();
     fill("black");
     textSize(30);
     text("Score: "+corrects+"/10",width/2 + 250, height - 50);
    pop();
    push();
    fill("#fe34f4a8");
    textSize(30);
    text("Time Bar",50, height/2);
    pop();
  
   }

   if(questionstage === 1){
    fill("black");
    textSize(30);
    text("What is the square root of 144?(√144)",width/2, 50);
    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();





   }
   //console.log(questionstage);
   if(timeback.y >= height + height/2){
    timeback.y = height/2;
    questionstage = 99;
  }
  if(questionstage === 2){
    fill("black");
    textSize(30);
    text("Value of Pi in fraction",width/2, 50);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
       timeback.shapeColor = "red";
       color = "red";
     }else{
      timeback.shapeColor = "green";
      color = "green";
     }
   input.show();
   button.show();

  }

  if(questionstage === 3){
    fill("black");
    textSize(30);
    text("Pythagorean triplet: 3,4 & x. Write the value of x.",width/2, 50);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();

  }

  if(questionstage === 4){
    fill("black");
    textSize(30);
    text("Enter the only one even prime number",width/2, 50);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();

  }

  if(questionstage === 5){
    fill("black");
    textSize(30);
    text("If Pushpa gets 50,00,00,000 from 500,00,00,000 then how much is left for the director?",100, 50);
    textSize(15);
    text("*Type Answer In Numerical Value, Use No Commas & Don't write like this: 4195crs or 85154laks. Write like this: 1500000000",100,75);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();

  }

  if(questionstage === 6){
    fill("black");
    textSize(30);
    text("If p/7 = 1, type the value of p",width/2, 50);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();

  }

  if(questionstage === 7){
    fill("black");
    textSize(30);
    text("Type 9²",width/2, 50);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();

  }

  if(questionstage === 8){
    fill("black");
    textSize(30);
    text("Type Log(10) value",width/2, 50);
    

    timeback.visible = true;
     if(frameCount%50 === 0){
       timeback.y += height/10
     }
     if(timeback.y >= height){
      timeback.shapeColor = "red";
      color = "red";
    }else{
     timeback.shapeColor = "green";
     color = "green";
    }
   input.show();
   button.show();

  }


if(questionstage === 9){
  fill("black");
  textSize(30);
  text("The product of 121 x 0 x 200 x 25 is",width/2, 50);
  

  timeback.visible = true;
   if(frameCount%50 === 0){
     timeback.y += height/10
   }
   if(timeback.y >= height){
    timeback.shapeColor = "red";
    color = "red";
  }else{
   timeback.shapeColor = "green";
   color = "green";
  }
 input.show();
 button.show();

}

if(questionstage === 10){
  fill("black");
  textSize(30);
  text("6% of 500",width/2, 50);
  

  timeback.visible = true;
   if(frameCount%50 === 0){
     timeback.y += height/10
   }
   if(timeback.y >= height){
    timeback.shapeColor = "red";
    color = "red";
  }else{
   timeback.shapeColor = "green";
   color = "green";
  }
 input.show();
 button.show();

}

  if(questionstage === 99){
    background("white");
  fill("red");
  textSize(30);
  text("You Lost!!!",250,100);
  fill("green");
  text("Your Score:"+corrects+"/10",250, 170);
  fill("blue");
  text("Better Luck Next Time",250, 240);
  input.hide();
  button.hide();
  playagainbutton.show();

  }

  if(gameState === "end"){
background("white");
input.hide();
button.hide();
timeback.visible = false;
fill("black");
textSize(50);
text("YOU WON!!!",width/2 - 150,height/2 - 50);
playagainbutton.show();
  }



 
    drawSprites();

    

}

function singleplayeropen(){
gameState = "play";
questionstage = 1;
}
function correctorwrong(){
  if(questionstage === 1){
  if(input.value() === "12"){
  questionstage = 2;
  timeback.y = height/2;
  corrects += 1;
  }else{
    fill("red");
    textSize(25);
    text("Wrong Answer",width/2,height -200);
  }
}

if(questionstage === 2){
  if(input.value() === "22/7"){
    questionstage = 3;
    timeback.y = height/2;
    corrects += 1;
    }else{
      fill("red");
      textSize(25);
      text("Wrong Answer",width/2,height -200);
    }
  }

  if(questionstage === 3){
    if(input.value() === "5"){
      questionstage = 4;
      timeback.y = height/2;
      corrects += 1;
      }else{
        fill("red");
        textSize(25);
        text("Wrong Answer",width/2,height -200);
      }
    }
    if(questionstage === 4){
      if(input.value() === "2"){
        questionstage = 5;
        timeback.y = height/2;
        corrects += 1;
        }else{
          fill("red");
          textSize(25);
          text("Wrong Answer",width/2,height -200);
        }
      }

      if(questionstage === 5){
        if(input.value() === "4500000000"){
          questionstage = 6;
          timeback.y = height/2;
          corrects += 1;
          }else{
            fill("red");
            textSize(25);
            text("Wrong Answer",width/2,height -200);
          }
        }

        if(questionstage === 6){
          if(input.value() === "7"){
            questionstage = 7;
            timeback.y = height/2;
            corrects += 1;
            }else{
              fill("red");
              textSize(25);
              text("Wrong Answer",width/2,height -200);
            }
          }

          if(questionstage === 7){
            if(input.value() === "81"){
              questionstage = 8;
              timeback.y = height/2;
              corrects += 1;
              }else{
                fill("red");
                textSize(25);
                text("Wrong Answer",width/2,height -200);
              }
            }

            if(questionstage === 8){
              if(input.value() === "1"){
                questionstage = 9;
                timeback.y = height/2;
                corrects += 1;
                }else{
                  fill("red");
                  textSize(25);
                  text("Wrong Answer",width/2,height -200);
                }
              }

              if(questionstage === 9){
                if(input.value() === "0"){
                  questionstage = 10;
                  timeback.y = height/2;
                  corrects += 1;
                  }else{
                    fill("red");
                    textSize(25);
                    text("Wrong Answer",width/2,height -200);
                  }
                }
                if(questionstage === 10){
                  if(input.value() === "30"){
                    gameState = "end";
                    timeback.y = height/2;
                    corrects += 1;
                    }else{
                      fill("red");
                      textSize(25);
                      text("Wrong Answer",width/2,height -200);
                    }
                  }
}

function reset(){
  window.location.reload();
}

function keyPressed(){
  if(keyCode === 13){
correctorwrong();
  }
}



