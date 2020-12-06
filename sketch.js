

var database ;
var form , game , question
var score=0
var optionA,optionB
var QBox , correctAns
var questionCounter, total;
var startButton, nextButton
var gameState="start"
function setup(){


    database = firebase.database();
    //createCanvas(500,500);
question= new Question();
  
    QBox= createElement("h2")
    QBox.position(200,200)
    optionA= createButton("")
    optionA.position(350,350)
    optionB= createButton("")
    optionB.position(550,350)
    questionCounter=1;
    total =5;

    


game = new Game()



if(gameState==="start")    
    game.start()


}

function draw()
        {
                

        }


      //  setTimeout(function(){text("Next",200,200)}, 3000000)



        



function showQuestion()
{
    if(questionCounter<=5)
    {
        question.getQuestion()
        question.getOptionA()
        question.getOptionB()
       
        if( optionA.mousePressed(()=>
            {
                if(optionA.html()===correctAns)
                    {
                        optionA.style('background-color','green')
  
                        score++

                    }
                else
                {
                        optionA.style('background-color','red')
                        optionB.style('background-color','green')
                }



}))
                {
                            setTimeout(function()
                                {
                                    optionA.style('background-color','blue')
                                    optionB.style('background-color','blue')
    //questionCounter+=1
                                }, 5000);
   
    
                }

            }
            else if(questionCounter>5)
            gameState="end"
        }
