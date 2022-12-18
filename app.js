let studentName=document.getElementById("name")
let schoolName=document.getElementById("school")

let subjectOne=document.getElementById("subject-one")
let subjectTwo=document.getElementById("subject-two")
let subjectThree=document.getElementById("subject-three")

let scoreOne=document.getElementById("score-one")
let scoreTwo=document.getElementById("score-two")
let scoreThree=document.getElementById("score-three")

let form=document.getElementById("form")
// let button=document.getElementById("btn1")

form.addEventListener("submit", function(e){
    e.preventDefault() 

    if(studentName.value=="" || schoolName.value=="" || subjectOne.value=="" || subjectTwo.value=="" || subjectThree.value==""){
        document.getElementById("error").innerHTML="Inputs Required!"

        setTimeout(()=>{
            window.location.reload(true)
        },3000)
    }
    else{
        document.getElementById("error")=""
    }

    if(subjectOne.value=="" && subjectTwo.value=="" && subjectThree.value==""){
          document.getElementById("subjectError").innerHTML.display="none"   

    }

    
    else if(subjectOne.value==subjectTwo.value || subjectOne.value==subjectThree.value){
        document.getElementById("subjectError").innerHTML="Duplicate Subjects!"

        setTimeout(()=>{
            window.location.reload(true)
        },3000)
    }
    else if(subjectTwo.value==subjectOne.value || subjectTwo.value==subjectThree.value){
        document.getElementById("subjectError").innerHTML="Duplicate Subjects!"

        setTimeout(()=>{
            window.location.reload(true)
        },3000)

    }
    else if(subjectThree.value==subjectOne.value || subjectThree.value==subjectTwo.value){
        document.getElementById("subjectError").innerHTML="Duplicate Subjects!"

        setTimeout(()=>{
            window.location.reload(true)
        },3000)
    }
    // else{
    //     document.getElementById("subjectError").innerHTML=""
    // }
    






    // score1=parseInt(scoreOne.value)
    // score2=parseInt(scoreTwo.value)
    // score3=parseInt(scoreThree.value)

    // total= score1 + score2 + score3
    // average= total/3
    // finalAverage= Math.round(average)

    // if(finalAverage < 50){
    //     document.getElementById("result").innerHTML= `Dear ${studentName.value}, Your score is not enough for you to proceed to the next Level`
    //     document.getElementById("result").style.color="red"
    // }
    // else if(finalAverage >= 50){
    //     console.log()
    //     document.getElementById("result").innerHTML=`Dear ${studentName.value}, You have proceeded to the next Level`
    //     document.getElementById("result").style.color="green"

    //     studentName.value=""
    //     schoolName.value=""
    //     subjectOne.value=""
    //     subjectTwo.value=""
    //     subjectThree.value=""
    //     scoreOne.value=""
    //     scoreTwo.value=""
    //     scoreThree.value=""
    // }

    

})

// button.addEventListener("click", function(){

//     if(studentName.value.length <3 && schoolName.value.length <3){
//         Message.innerHTML=""
        
    //     setTimeout(()=>{
    //         window.location.href="result.html"
    //     },2000)
    // }
//     else if(studentName.value.length >3 && schoolName.value.length>3){

//         setTimeout(()=>{
//             window.location.href="result.html"
//         },2000)
//     }


// })
