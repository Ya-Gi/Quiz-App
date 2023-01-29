//  OOP: Nesne Tabanlı Programama
// Object
// let soru = {
//     soruMetni: "hangisi javascript paket yönetim oygulmasıdır?",
//     cevapSecenekleri: {
//         a:"Node.js",
//         b:"Typescript",
//         c:"npm"
//     },
//     dogruCevap:"c",
//     cevapKntrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// let soru2 = {
//     soruMetni: "hangisi .net paket yönetim oygulmasıdır?",
//     cevapSecenekleri: {
//         a:"Node.js",
//         b:"nuget",
//         c:"npm"
//     },
//     dogruCevap:"b",
//     cevapKntrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// 
// console.log(soru.soruMetni);
// console.log(soru.cevapKntrolEt("c"));
// console.log(soru2.cevapKntrolEt("c"));
// 
// Sınıf => nesne*30
// ES5, ES6, ES7

// BU ŞEKİDEDE OLABİLİR

// function Soru(soruMetni,cevapSecenekleri,dogruCevap)  {
//     this.soruMetni=soruMetni;
//     this.cevapSecenekleri=cevapSecenekleri;
//     this.dogruCevap=dogruCevap;
//     this.cevapKntrolEt= function(cevap) {
//         return cevap === this.dogruCevap
//     }
    
    
// } 





const quiz = new Quiz(sorular);
const ui = new UI();
let counter;
let counterline;


 
    ui.btn_start.addEventListener("click", function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisinigoster(quiz.soruIndex +1,quiz.sorular.length);
    ui.btn_next.classList.remove("show");
   
})
     ui.btn_next.addEventListener("click",function() {

    if(quiz.sorular.length != quiz.soruIndex +1) {
        ui.quiz_box.classList.add("active");
        quiz.soruIndex +=1;
        clearInterval(counter);
        clearInterval(counterline);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisinigoster(quiz.soruIndex +1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");

       }
       else {
        clearInterval(counter);
        clearInterval(counterline);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skorGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
    
       }
       

})

function optionSelector(options) {
     clearInterval(counter);
     clearInterval(counterline);
     let cevap = options.querySelector("span b").textContent;
     let soru = quiz.soruGetir();

     if(soru.cevapKntrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        options.classList.add("correct");
        options.insertAdjacentHTML("beforeend",ui.correctIcon);
     }    
     else {
        options.classList.add("incorrect");
        options.insertAdjacentHTML("beforeend",ui.incorrectIcon);

     }   
     
     for(let i=0; i<ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled")
     }
        ui.btn_next.classList.add("show");

}

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})
ui.btn_replay.addEventListener("click",function(){
 
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi=0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");

})


function startTimer(time) {
   counter= setInterval(timer,1000);
    function timer() {
        ui.time_second.textContent=time;
        time--;
        if(time<0) {
          clearInterval(counter);
          ui.time_text.textContent="Süre bitti "
           let cevap = quiz.soruGetir().dogruCevap;

           for(let option of ui.option_list.children) {
            if(option.querySelector("span b").textContent==cevap) {
                option.classList.add("correct");
                option.insertAdjacentHTML("beforeend",ui.correctIcon);

            }
            option.classList.add("disabled");
           }
           ui.btn_next.classList.add("show");
        }
    }

}

function startTimerLine() {
 
    let line_width = 0;
 
     
    counterline = setInterval(timer,25)

    function timer() {
        line_width +=1.25;
        ui.time_line.style.width = line_width + "px"

        if(line_width > 549) {
            clearInterval(counterline);
            console.log("aaaaa");
        }

    }

}