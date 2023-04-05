


let personaImg = [document.querySelector("#persona1"), document.querySelector("#persona2")]

let infoBasicH =[document.querySelector("#nameHuman"), document.querySelector('#resultH')]
let infoBasicG =[document.querySelector("#nameGods"), document.querySelector('#resultG')]

let humanityClassCompetitor = [ document.querySelector('.human1'), document.querySelector('.human2'),document.querySelector(".human3"),document.querySelector(".human4"), document.querySelector(".human5"),document.querySelector(".human6"),document.querySelector(".human7"), document.querySelector(".human8") ]
   
    
let godsClassCompetitor = [ document.querySelector('.god1'),document.querySelector('.god2'),document.querySelector(".god3"), document.querySelector(".god4"), document.querySelector(".god5"), document.querySelector(".god6"),  document.querySelector(".god7"), document.querySelector(".god8")]
   
  
   
let GodsNumber = 0
let humanNumber = 0

function Competitors(img,name){
    this.img = img
    this.name = name
    this.result = result
}

// let luBu = new Competitors("./assets/lubu.svg","Lu bu","")
// let adao = new Competitors("./assets/adao.svg","Adão","")
   
// const Styleh = {
//     imgStyle:"filter: gray;-webkit-filter: grayscale(100%);"
// }

// const luBu = {
//     img:"./assets/lubu.svg",
//     name:"Lu bu",
//     result:"",
   
// }

const adao = {
    img:"./assets/adao.svg",
    name:"Adão",
    result:"",
 }
const sasakiKojiro = {
    img:"./assets/sasaki.svg",
    name:"Sasaki Kojiro",
    result:""


}

// const jack={
//     img:"./assets/jack.svg",
//     name:"Jack, o Estripador",
//     result:function result(){
//         if(GodsNumber === 4){
//             console.log('fooi')
//         }
//         } 
// }







let thor = {
    img:"./assets/thor.png",
    name:"Thor",
    result:""
}
let zeus = {
    img:"./assets/zeus.svg",
    name:"Zeus",
    result:""

}
let poseidon ={
    img:"./assets/poseidon.svg",
    name:"Poseidon",
    result:""
    
}

// const hercules ={
//     img:"./assets/hercules.svg",
//     name:"hércules",  
//     Equipment:"Lion Club",
//     result: function result(){
//         if(humanNumber === 4){
//             console.log('fooi')
//         }
//     },
    
// }




humanityClassCompetitor[0].addEventListener('click',mudarH)
humanityClassCompetitor[1].addEventListener('click',mudarH1)
humanityClassCompetitor[2].addEventListener('click',mudarH2)
// humanityClassCompetitor[3].addEventListener('click',mudarH3)
godsClassCompetitor[0].addEventListener('click',mudarG)
godsClassCompetitor[1].addEventListener('click',mudarG1)
godsClassCompetitor[2].addEventListener('click',mudarG2)
// godsClassCompetitor[5].addEventListener('click',mudarG3)

function result(){
   
    if (GodsNumber == 1 && humanNumber == 1){
        personaImg[0].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicH[1].innerHTML = luBu.result = "perdeu"
    }else{
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = luBu.result = ""
        personaImg[1].style=""
        infoBasicG[1].innerHTML = thor.result = ""
    }
   
}

function result1(){

    if (humanNumber == 2 && GodsNumber == 2){
        personaImg[0].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicH[1].innerHTML = adao.result = "perdeu"
    }else{
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = adao.result = ""
        personaImg[1].style=""
        infoBasicG[1].innerHTML = zeus.result = ""
    }

}
function result2(){


    if(humanNumber == 3 && GodsNumber == 3){
        personaImg[1].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicG[1].innerHTML = poseidon.result = "perdeu"
    }else{
        personaImg[1].style=""
        infoBasicG[1].innerHTML = poseidon.result = ""
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = sasakiKojiro.result = ""
    }
    
}

function mudarH(){
    humanNumber = 1
    result()
    infoBasicH[0].innerHTML = luBu.name
    infoBasicH[1].innerHTML = luBu.result
    personaImg[0].src = luBu.img
    
}

function mudarH1(){
    humanNumber = 2
    infoBasicH[0].innerHTML = ""
    infoBasicH[1].innerHTML = ""
   result1()
   
    infoBasicH[0].innerHTML = adao.name
    infoBasicH[1].innerHTML = adao.result
    personaImg[0].src = adao.img
    
}

 function mudarH2(){
    humanNumber = 3
    result2()
    infoBasicH[0].innerHTML = sasakiKojiro.name
    personaImg[0].src = sasakiKojiro.img
    
   
  
 }
// function mudarH3(){
//     areaInfoH[0].style = "visibility:visible"
//     personaImg[0].style = "visibility:visible"
//     areaInfoH[1].style = sasakiKojiroStyle.infohUl
//     areaInfoH[2].style = sasakiKojiroStyle.infohH1
    
//     personaImg[0].src = jack.img
//     infomMainH[0].innerHTML = jack.name
//     infomMainH[1].innerHTML = "Raça:"+" "+jack.race
//     infomMainH[2].innerHTML = "Titulo:"+" "+jack.titulo
//     infomMainH[3].innerHTML = "Equipamento:"+" "+jack.Equipment
// }
    function mudarG(){
       GodsNumber = 1
       personaImg[1].src = ""
       infoBasicG[0].innerHTML = "" 
       result()
        personaImg[1].src = thor.img
       infoBasicG[0].innerHTML = thor.name   
           
    }
function mudarG1(){

    GodsNumber = 2
    personaImg[1].src = ""
     infoBasicG[0].innerHTML = ""
    result1()

    personaImg[1].src = zeus.img
     infoBasicG[0].innerHTML = zeus.name 
      
}
 function mudarG2(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML = ""
    GodsNumber = 3
   
    result2()
    personaImg[1].src = poseidon.img
    infoBasicG[0].innerHTML = poseidon.name
    infoBasicG[1].innerHTML = poseidon.result
   
 }

 
    
//     infoBasicG[0].innerHTML = poseidon.name 
//     infoBasicG[1].innerHTML = poseidon.result
//     personaImg[1].src = poseidon.img
//  }
// function mudarG3(){
//     areaInfoG[0].style = poseidonStyle.infog
//     personaImg[1].style = poseidonStyle.imgstyle
//     personaImg[1].src = hercules.img
//     infomMainG[0].innerHTML = hercules.name
//     infomMainG[1].innerHTML ="Raça"+" "+hercules.race
//     infomMainG[2].innerHTML = "Titulo"+" "+hercules.titulo
//     infomMainG[3].innerHTML = "Equipamento"+" "+hercules.Equipment

    
// }


  
