var box = document.querySelector(".box")
var box1 = document.querySelector(".box1")
var box2 = document.querySelector(".box2")
var headbtn = document.querySelector("#head")
var tailbtn = document.querySelector("#tail")
var winner = document.querySelector("#winner")
var scorep = document.querySelector(".score")
var sorry = document.querySelector(".sorry")

let score= 0;
let count =0;


function counst(){
    var countp = document.querySelector(".open")
    count++;
    countp.innerText = `Count ${count}`

}
function Score(){
    
   score++;
   console.log(scorep.innerText = `Add Score ${score}`)
}

headbtn.addEventListener("click", ()=>{
    counst()
    headresult()     
})
tailbtn.addEventListener("click", ()=>{
    counst()
    tailresult()       
})

function headresult(){
    box1.classList.add("head")
    box2.classList.add("tail")

let headmath = Math.floor(Math.random() * 30)
let tailmath = Math.floor(Math.random() * 30)
    if(headmath < tailmath){
        console.log("Head")
       box1.classList.remove("head")
    sorry.classList.add("img")
    winner.innerHTML =`Congraculation the Winner is HEAD`
    Score()

    }else{
    winner.innerHTML = ""
    sorry.classList.remove("img")
    }
   
}
function tailresult(){
    box1.classList.add("head")
    box2.classList.add("tail")

let headmath = Math.floor(Math.random() * 30)
let tailmath = Math.floor(Math.random() * 30)
    if(headmath < tailmath){
    sorry.classList.remove("img")
    winner.innerHTML =``
    
    }else{
        console.log("Tail")
       box2.classList.remove("tail")
    sorry.classList.add("img")
    tailwinner.innerHTML =`Congraculation the Winner is TAIL`
    Score()
    }
   
}
   
