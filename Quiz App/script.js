const questions=[
    {
    question:"which animal is the largest animal?",
    ans:[
        {text:"Dog" ,correct:false},
        {text:"Elephant",correct:true},
        {text:"Shark" ,correct:false},
        {text:"Giraffe" ,correct:false},

    ]
},
{
    question:"which is the best language for web development?",
    ans:[
        {text:"C" ,correct:false},
        {text:"Java",correct:false},
        {text:"React" ,correct:true},
        {text:"Python" ,correct:false},

    ]
},
{
    question:"which language is create indendation error",
    ans:[
        {text:"Java" ,correct:false},
        {text:"Python",correct:true},
        {text:"JavaScript" ,correct:false},
        {text:"c++" ,correct:false},

    ]
},
{
    question:" how to get the variable in python ",
    ans:[
        {text:"int a=scan.newInt()" ,correct:false},
        {text:"B=scan(%d)",correct:false},
        {text:"Nothing" ,correct:false},
        {text:"user_id=input()" ,correct:true},

    ]
},
{
    question:"how to define a string in java?",
    ans:[
        {text:"String str=new string()" ,correct:true},
        {text:"str=apple",correct:false},
        {text:"A=23" ,correct:false},
        {text:"string=string" ,correct:false},

    ]
},
{
    question: "Which is the largest planet in our solar system?",
    ans: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Mars", correct: false },
        { text: "Venus", correct: false }
    ]
}

];
const questionelement=document.getElementById('quesno');
const ansbutton=document.getElementById('ans-btn');
const nextbutton=document.getElementById('nextbtn');
let currentquesindex=0;
let scoreno=0;

function startQuiz(){
    currentquesindex=0;
    scoreno=0;
    nextbutton.innerHTML="Next";
    showques();

}
function showques(){
    reset();
    let currentquestion=questions[currentquesindex];
    let quesno=currentquesindex + 1;
    questionelement.innerHTML=quesno +'.'+currentquestion.question;
    currentquestion.ans.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        ansbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener('click',selectans);
     });
      

}
function reset(){
    nextbutton.style.display="none";
    while(ansbutton.firstChild){
        ansbutton.removeChild(ansbutton.firstChild);
    }
}
function selectans(e){
    const selectedbutton=e.target;
    const correct=selectedbutton.dataset.correct==="true";
    if(correct){
        scoreno++;
        selectedbutton.classList.add('correct');
    }else{
        selectedbutton.classList.add('incorrect');
    }
    Array.from(ansbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add('correct');
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}
function handle(){
    currentquesindex++;
    if(currentquesindex<questions.length){
        showques();
    }
    else{
        showscore();
    }


}
function showscore(){
    reset();
    questionelement.innerHTML=`You scored ${scoreno} out of ${questions.length}`;
    nextbutton.innerHTML="Restart";
    nextbutton.style.display="block";
        

}
nextbutton.addEventListener('click',()=>{
    
    if(currentquesindex<questions.length){
        handle();
    }else{
        startQuiz();
    }
});
startQuiz();