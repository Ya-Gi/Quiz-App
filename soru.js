function Soru(soruMetni,cevapSecenekleri,dogruCevap)  {
    this.soruMetni=soruMetni;
    this.cevapSecenekleri=cevapSecenekleri;
    this.dogruCevap=dogruCevap;
    
} 
Soru.prototype.cevapKntrolEt= function(cevap) {
    return cevap === this.dogruCevap
}

let soru1 = new Soru("hangisi javascript paket yönetim oygulmasıdır?",{a:"Node.js",b:"Typescript",c:"npm"},"c");
let soru2 = new Soru("hangisi .net paket yönetim oygulmasıdır?",{a:"Node.js",b:"Typescript",c:"npm"},"b")

let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır?",{a:"Node.js",b:"Typescript",c:"npm",d:"nuget"},"c"),
    new Soru("2- hangisi frontend kapsamında değerlendirilmez?",{a:"css",b:"html",c:"javascript",d:"sql"},"d"),
    new Soru("3- hangisi backend kapsamında değerlendirilir?",{a:"Node.js",b:"Typescript",c:"angular",d:"react"},"a"),
    new Soru("4- hangisi javascript programlama dilini kullancaz?",{a:"react",b:"angular",c:"vue.js",d:"asp.net"},"d")
    
];