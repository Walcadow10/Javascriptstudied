
//DOM
//let veri;

//veri = window.document;
//veri = window.document.head;
//veri = window.document.body;
//veri = window.document.URL;
//veri = window.document.domain;
//veri = window.document.images;
//veri = window.document.forms;
//veri = window.document.forms[0].id;
//veri = window.document.forms[0].method; 
//veri = window.document.forms[0].action;
//veri = window.document.scripts;
//veri = window.document.scripts[2];

//console.log(veri);

//Elementlerin Seçilmesi

//Tek Element Seçimi
//document.getElementById() Metodu

//let veri;

//veri = document.getElementById("header");
//veri = document.getElementById("header").id;
//veri = document.getElementById("header").className;

//veri = document.getElementById("header");

//veri = veri.id
//veri = veri.className;

//veri.style.color = "blue";
//veri.style.fontSize = "50px";
//veri.style.fontWeight = "bold";
//veri.style.display = "none";

//document.getElementById("header").innerText = "Yapılacaklar";

//document.getElementById("header").innerText = "<b> ToDo List <b>";

//document.getElementById("header").innerHTML = "<b> ToDo List <b>";


//console.log(veri);

//let.veri;

//document.querySelector() Metodu

//console.log(document.querySelector("#header"));

//let Kaan = {
  //  name: "Kaan",
    //yearOfBirth: 2003,
    //job: "Web Developer",


//}

//let kaan = {
  //  isim: "Kaan",
   // dogumgunu: 2003,
   // Meslek: "Web Developer",


//}

//val = Kaan;
//console.log(val);
//console.log(typeof val);

function Student(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    console.log(this);


}

let Kaan = new Student("kaan",2008,"Web Developer");