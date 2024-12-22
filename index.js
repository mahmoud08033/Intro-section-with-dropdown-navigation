// ()





let x =document.getElementById( 'ls')
let z =document.getElementById( 'dr')
let img= x.querySelector('img')

let y= false

x.onclick=function() {
  

    if (y) {
        y=false
        img.src='images/icon-arrow-down.svg';
        z.style.display='none'
    } else {
        y=true
        img.src='images/icon-arrow-up.svg';
        z.style.display='block'
    }
}
   

let s =document.getElementById( 'la')
let w =document.getElementById( 'ds')
let imge= s.querySelector('img')

let n= false

s.onclick=function() {
  

    if (n) {
        n=false
        imge.src='images/icon-arrow-down.svg';
        w.style.display='none'
    } else {
        n=true
        imge.src='images/icon-arrow-up.svg';
        w.style.display='block'
    }
}

let q =document.getElementById( 'li')
let t =document.getElementById( 'dk')
let im= s.querySelector('img')
let ll =document.getElementById( 'lo')


let k= false

q.onclick=function() {
  

    if (k) {
        k=false
        im.src='images/icon-arrow-down.svg';
        t.style.display='none'
        ll.style.margin='0px'

    } else {
        k=true
        im.src='images/icon-arrow-up.svg';
        t.style.display='block'
        ll.style.marginTop='170px'
       


    }
}
   

let li =document.getElementById( 'lo')
let droplist =document.getElementById( 'dp')
let i= s.querySelector('img')
let bot=document.getElementById( 'bot')

let e= false

li.onclick=function() {
  

    if (e) {
        e=false
        i.src='images/icon-arrow-down.svg';
        droplist.style.display='none'
          bot.style.margin='0px'
    } else {
        e=true
        i.src='images/icon-arrow-up.svg';
        droplist.style.display='block'
        bot.style.marginTop='150px'


      

        
    }
}

let icn =document.getElementById( 'icon')
let dem =document.getElementById( 'demo')
let ico =document.getElementById( 'ico')
let md= window.matchMedia('(max-width: 750px)');




icn.addEventListener('click',function () {
    if ( md.matches) {
        
     dem.classList.remove( "hide");
       
    }else{
   dem.classList.add( "hide");
   }
})

ico.addEventListener('click',function () {


    dem.classList.add( "hide");



})

md.addEventListener('change',function () {

    if ( !md.matches) {
      dem.classList.add( "hide");
    }

    
})

