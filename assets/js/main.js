
/* javascript */
let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => { 

    //prevent default behavior of form 
    event.preventDefault(); 

    let question1 = this.question1.value; 
    let question2 = this.question2.value; 
    let question3 = this.question3.value; 
    let question4 = this.question4.value;
    let question5 = this.question5.value; 
    let question6 = this.question6.value;
    let question7 = this.question7.value; 
    let question8 = this.question8.value; 
    let question9 = this.question9.value;
    let question10 = this.question10.value;  
    console.log(this.question1); 

// For odd items: substract one from the user response. 
 question1 -= 1; 
 question3 -= 1; 
 question5 -= 1; 
 question7 -= 1; 
 question9 -= 1; 

 // For even items: subtract the user responses from 5. 
 question2 = 5 - question2;
 question4 = 5 - question4;
 question6 = 5 - question6; 
 question8 = 5 - question8; 
 question10 = 5 - question10; 

let answer = (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9+ question10) * 2.5 

this.answer.value = answer; 

console.log(answer); 

}); 
