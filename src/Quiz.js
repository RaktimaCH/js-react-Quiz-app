import React from "react";
import { useState } from "react";
import "./Quiz.css"

export default function Quiz(){

    const questions =[
        {
            questionText:"JavaScript is an __ language?",
            answerOptions:[
                {answerText:"Object-Oriented", isCorrect:true},
                {answerText:"Object-Based", isCorrect:false},
                {answerText:"Procedural", isCorrect:false},
                {answerText:"None of the above", isCorrect:false}
            ]
        },
        {
            questionText:"Which of the following is not javascript framework?",
            answerOptions:[
                {answerText:"Node", isCorrect:false},
                {answerText:"vue", isCorrect:false},
                {answerText:"React", isCorrect:false},
                {answerText:"Cassandra", isCorrect:true}
            ]
        },
        {
            questionText:"How to stop an interval timer in javascript?",
            answerOptions:[
                {answerText:"clearTimer", isCorrect:false},
                {answerText:"clearInterval", isCorrect:true},
                {answerText:"intervalOver", isCorrect:false},
                {answerText:"None of the above", isCorrect:false}
            ]
        },
        {
            questionText:"which are not server-side Javascript objects?",
            answerOptions:[
                {answerText:"Data", isCorrect:false},
                {answerText:"FileUpload", isCorrect:false},
                {answerText:"Function", isCorrect:false},
                {answerText:"All of the above", isCorrect:true}
            ]
        },
        {
            questionText:"ECMAScript was created to standardize __?",
            answerOptions:[
                {answerText:"TypeScript", isCorrect:false},
                {answerText:"java", isCorrect:false},
                {answerText:"JSON", isCorrect:false},
                {answerText:"javascript", isCorrect:true}
            ],
        },
        {
            questionText:"In ES6-which method refers to the parent class?",
            answerOptions:[
                {answerText:"parent()", isCorrect:false},
                {answerText:"super()", isCorrect:true},
                {answerText:"top()", isCorrect:false},
                {answerText:"main()", isCorrect:false}
            ],
        },
        {
            questionText:"In ES6-let has a block scope?",
            answerOptions:[
                {answerText:"Yes", isCorrect:true},
                {answerText:"Can not say", isCorrect:false},
                {answerText:"No", isCorrect:false},
                {answerText:"May be", isCorrect:false}
            ],
        },
        {
            questionText:"what is the default port where webpack-server runs?",
            answerOptions:[
                {answerText:"443", isCorrect:false},
                {answerText:"3030", isCorrect:false},
                {answerText:"3306", isCorrect:false},
                {answerText:"8080", isCorrect:true}
            ],
        }, {
            questionText:"How many stages are there in react js life cycle?",
            answerOptions:[
                {answerText:"1", isCorrect:false},
                {answerText:"2", isCorrect:false},
                {answerText:"3", isCorrect:true},
                {answerText:"0", isCorrect:false}
            ],
        },
        {
            questionText:"How many elements does a react component returns?",
            answerOptions:[
                {answerText:"1", isCorrect:false},
                {answerText:"0", isCorrect:false},
                {answerText:"multiple elements with one root element", isCorrect:true},
                {answerText:"none of the above", isCorrect:false}
            ],
        },
        {
            questionText:"To update state in react forcefully,which method is used?",
            answerOptions:[
                {answerText:"setState", isCorrect:false},
                {answerText:"forceUpdate", isCorrect:true},
                {answerText:"Both of above", isCorrect:false},
                {answerText:"none of above", isCorrect:false}
            ],
        },
        {
            questionText:"The __ can retrieve update state and re-render again?",
            answerOptions:[
                {answerText:"state", isCorrect:false},
                {answerText:"store", isCorrect:false},
                {answerText:"view", isCorrect:true},
                {answerText:"action", isCorrect:true}
            ],
        },
        {
            questionText:"A createStore function can have __ arguments?",
            answerOptions:[
                {answerText:"1", isCorrect:false},
                {answerText:"2", isCorrect:false},
                {answerText:"3", isCorrect:true},
                {answerText:"4", isCorrect:false}
            ],
        },
        {
            questionText:"Which of the following is react-redux helper method?",
            answerOptions:[
                {answerText:"help()", isCorrect:false},
                {answerText:"assist()", isCorrect:false},
                {answerText:"view()", isCorrect:false},
                {answerText:"connect()", isCorrect:true}
            ],
        },
        {
            questionText:"Reducers are pure function in redux?",
            answerOptions:[
                {answerText:"True", isCorrect:true},
                {answerText:"False", isCorrect:false},
                {answerText:"can be true or false", isCorrect:false},
                {answerText:"can not say", isCorrect:false}
            ],
        },
        {
            questionText:"Which of them provide us debugging plateform for redux apps?",
            answerOptions:[
                {answerText:"Redux-Testing", isCorrect:false},
                {answerText:"Redux-Middleware", isCorrect:false},
                {answerText:"Redux-Devtools", isCorrect:true},
                {answerText:"Redux-suscribe", isCorrect:false}
            ],
        }, {
            questionText:"Which is the best case complexity of QuickSort?",
            answerOptions:[
                {answerText:"O(nlogn)", isCorrect:true},
                {answerText:"O(logn)", isCorrect:false},
                {answerText:"O(n)", isCorrect:false},
                {answerText:"O(n^2)", isCorrect:false}
            ],
        },
        {
            questionText:"very slow way of sorting is___?",
            answerOptions:[
                {answerText:"Heap sort", isCorrect:false},
                {answerText:"Bubble", isCorrect:false},
                {answerText:"Insertion sort", isCorrect:true},
                {answerText:"Quick sort", isCorrect:false}
            ],
        },
         {
            questionText:"Which of the following is not stable sorting algorithm?",
            answerOptions:[
                {answerText:"Insertion sort", isCorrect:false},
                {answerText:"selection sort", isCorrect:true},
                {answerText:"Bubble Sort", isCorrect:false},
                {answerText:"Merge sort", isCorrect:false}
            ],

        },
        {
            questionText:" Which of the following is not an in-place sorting algorithm?",
            answerOptions:[
                {answerText:"Selection sort", isCorrect:false},
                {answerText:"Heap sort", isCorrect:false},
                {answerText:"Quick sort", isCorrect:false},
                {answerText:"Merge sort", isCorrect:true}
            ],
        }
    
    
    ];
 

        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [showScore,setShowScore] = useState(false);
        const [score, setScore] = useState(0);


        const handAnswerOptionClick =(isCorrect)=>{
            if(isCorrect){
             setScore(score +1)
            }


            const nextQuestion = currentQuestion +1;
            if(nextQuestion < questions.length){
                setCurrentQuestion(nextQuestion)
            }else{
                setShowScore(true)
            }

        };
    
    function handleAgain(){
            
        setCurrentQuestion(0)
        setShowScore(showScore === false)    
     
        }
       

    return(

        <div className="container">
            {showScore ? (
                <div> 
                    you scored {score} out of {questions.length}
                    <br/><br/><br/>
                    <button onClick={handleAgain}>Take Quiz Again</button> 
                </div>
            ) : (

            <div>

            
            <div className="quiz-box">
               <h1>Question {currentQuestion+1}/{questions.length}</h1>
               <p>{questions[currentQuestion].questionText}</p>
            </div>
            <div className="quiz-box1">
                {questions[currentQuestion].answerOptions.map((answerOptions)=>(
                  <button onClick={()=>handAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                   
                ))}
             
            </div>

            </div>
            )}
    
        </div>
    );
}