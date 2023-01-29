function UI() {
    this.btn_start = document.querySelector(".btn-start"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.btn_next = document.querySelector(".next-btn"),
    this.option_list = document.querySelector(".option-list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
    


}


UI.prototype.soruGoster=function(soru) {

    let question = `<span>${soru.soruMetni} </span>`;
    let option= ``
    for(let cevap in soru.cevapSecenekleri) {
 
     option+=
     `
      <div class="option">
      <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
      </div>
     `;
    }
 
     document.querySelector(".question-text").innerHTML = question;
     this.option_list.innerHTML = option;
 
     const options = this.option_list.querySelectorAll(".option");
 
     for (let opt of options) {
         opt.setAttribute("onclick","optionSelector(this)")
     }
 
       
 }

UI.prototype.soruSayisinigoster=function(soruSirasi,toplamSoru) {
    
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question-index").innerHTML=tag;

}
UI.prototype.skorGoster = function(toplamSoru,dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`
    document.querySelector(".score_box .score_text").innerHTML=tag;
}