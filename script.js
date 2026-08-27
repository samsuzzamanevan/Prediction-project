

// formation 1

let l1 = document.getElementsByClassName('l1')[0]





l1.addEventListener('click', function(){

    l1.classList.add('background1') 
    l2.classList.remove('background1')
    l3.classList.remove('background1')
    l4.classList.remove('background1')
    l5.classList.remove('background1')
    l6.classList.remove('background1')
    
    // ;; forward part

    let forward = document.querySelectorAll('.forward')
    forward.forEach(function(forward){
        forward.style.display = 'inline-block'
    })
    forward[0].style.display = 'none' 

    let fdplayer = document.querySelector('.fdplayer2 h1').textContent = 'Left Forward(LF)'




    // ;; midfield part


    let midfield = document.querySelectorAll('.midfield')
    midfield.forEach(function(midfield){
        midfield.style.display = 'inline-block'
    })
    midfield[0].style.display = 'none';
    midfield[1].style.display = 'none';

    document.querySelector('.mfplayer3 h1').textContent = 'Left Midfielder (LM)'
    document.querySelector('.mfplayer4 h1').textContent = 'Center Midfielder (CM)'



    // ;; defence part

    let defence = document.querySelectorAll('.defence')
    defence.forEach(function(defence){
        defence.style.display = 'inline-block'
    })
    defence[0].style.display = 'none';
    defence[1].style.display = 'none';
    
    document.querySelector('.drplayer3 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer4 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer5 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer6 h1').textContent = 'Right Back(RB)'

})

 

// formation 2

let l2 = document.getElementsByClassName('l2')[0];

l2.addEventListener('click',function(){
    
    l2.classList.add('background1');
    l1.classList.remove('background1')
    l3.classList.remove('background1')
    l4.classList.remove('background1')
    l5.classList.remove('background1')
    l6.classList.remove('background1')

    // forward 
    let forward = document.querySelectorAll('.forward')
    forward.forEach(function(forward){
        forward.style.display = 'inline-block'
    })
    
    let fdplayer = document.querySelector('.fdplayer2 h1').textContent = 'Center Forward(CF)'
 

    // midfield
    let midfield = document.querySelectorAll('.midfield')
    midfield.forEach(function(midfield){
        midfield.style.display = 'inline-block';
    })
    midfield[0].style.display = 'none';
    midfield[1].style.display = 'none';

    document.querySelector('.mfplayer3 h1').textContent = 'Left Midfielder (LM)'
    document.querySelector('.mfplayer4 h1').textContent = 'Center Midfielder (CM)'



    // defence
    let defence = document.querySelectorAll('.defence')
    defence.forEach(function(defence){
        defence.style.display = 'inline-block'
    })
    defence[0].style.display = 'none';
    defence[1].style.display = 'none';
    defence[2].style.display = 'none';

    document.querySelector('.drplayer4 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer5 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer6 h1').textContent = 'Right Back(RB)'
}

)

// formation 3

let l3 = document.getElementsByClassName('l3')[0]

l3.addEventListener('click',function(){
    
    l3.classList.add('background1');
    l1.classList.remove('background1')
    l2.classList.remove('background1')
    l4.classList.remove('background1')
    l5.classList.remove('background1')
    l6.classList.remove('background1')

    // forward 
    let forward = document.querySelectorAll('.forward')
    forward.forEach(function(forward){
        forward.style.display = 'inline-block'
    })
    forward[0].style.display =  'none';
    let fdplayer = document.querySelector('.fdplayer2 h1').textContent = 'Left Forward(LF)'
    
 

    // midfield
    let midfield = document.querySelectorAll('.midfield')
    midfield.forEach(function(midfield){
        midfield.style.display = 'inline-block';
    })
    midfield[0].style.display = 'none';

    document.querySelector('.mfplayer4 h1').textContent = 'Center Midfielder (CM)'
    document.querySelector('.mfplayer3 h1').textContent = 'Center Midfielder (CM)'
  


    // defence
    let defence = document.querySelectorAll('.defence')
    defence.forEach(function(defence){
        defence.style.display = 'inline-block'
    })
    defence[0].style.display = 'none';
    defence[1].style.display = 'none';
    defence[2].style.display = 'none';

    document.querySelector('.drplayer4 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer5 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer6 h1').textContent = 'Right Back(RB)'

}

)


// formation 4

let l4 = document.getElementsByClassName('l4')[0];

l4.addEventListener('click',function(){
    
    l4.classList.add('background1');
    l1.classList.remove('background1')
    l2.classList.remove('background1')
    l3.classList.remove('background1')
    l5.classList.remove('background1')
    l6.classList.remove('background1')

    // forward 
    let forward = document.querySelectorAll('.forward')
    forward.forEach(function(forward){
        forward.style.display = 'inline-block'
    })
    forward[0].style.display =  'none';
    forward[1].style.display =  'none';
    let fdplayer = document.querySelector('.fdplayer3 h1').textContent = 'Left Forward(LF)'
 

    // midfield
    let midfield = document.querySelectorAll('.midfield')
    midfield.forEach(function(midfield){
        midfield.style.display = 'inline-block';
    })
    midfield[0].style.display = 'none';
    midfield[1].style.display = 'none';

    document.querySelector('.mfplayer3 h1').textContent = 'Left Midfielder(LM)'
    document.querySelector('.mfplayer4 h1').textContent = 'Center Midfielder(CM)'


    // defence
    let defence = document.querySelectorAll('.defence')
    defence.forEach(function(defence){
        defence.style.display = 'inline-block'
    })
    defence[0].style.display = 'none';

    document.querySelector('.drplayer2 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer3 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer4 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer5 h1').textContent = 'Right Back(RB)'
    document.querySelector('.drplayer6 h1').textContent = 'Right Back(RB)'

}

)



// formation 5 

let l5 = document.getElementsByClassName('l5')[0];

l5.addEventListener('click',function(){
    
    l5.classList.add('background1');
    l1.classList.remove('background1')
    l2.classList.remove('background1')
    l3.classList.remove('background1')
    l4.classList.remove('background1')
    l6.classList.remove('background1')

    // forward 
    let forward = document.querySelectorAll('.forward')
    forward.forEach(function(forward){
        forward.style.display = 'inline-block'
    })
    forward[0].style.display =  'none';
    forward[1].style.display =  'none';
    let fdplayer = document.querySelector('.fdplayer3 h1').textContent = 'Left Forward(LF)'

    // midfield
    let midfield = document.querySelectorAll('.midfield')
    midfield.forEach(function(midfield){
        midfield.style.display = 'inline-block';
    })

    document.querySelector('.mfplayer3 h1').textContent = 'Center Midfielder(CM)'
    document.querySelector('.mfplayer4 h1').textContent = 'Right Midfielder(RM)'


    // defence
    let defence = document.querySelectorAll('.defence')
    defence.forEach(function(defence){
        defence.style.display = 'inline-block'
    })
    defence[0].style.display = 'none';
    defence[1].style.display = 'none';
    defence[2].style.display = 'none';

    document.querySelector('.drplayer4 h1').textContent = 'Left  Back(LB)'
    document.querySelector('.drplayer5 h1').textContent = 'Center  Back(CB)'
    document.querySelector('.drplayer6 h1').textContent = 'Right  Back(RB)'


}

)


// formation 6 

let l6 = document.getElementsByClassName('l6')[0];

l6.addEventListener('click',function(){
    
    l6.classList.add('background1');
    l1.classList.remove('background1')
    l2.classList.remove('background1')
    l3.classList.remove('background1')
    l5.classList.remove('background1')
    l4.classList.remove('background1')

    // forward 
    let forward = document.querySelectorAll('.forward')
    forward.forEach(function(forward){
        forward.style.display = 'inline-block'
    })
    forward[0].style.display =  'none';
    forward[1].style.display =  'none';
    let fdplayer = document.querySelector('.fdplayer3 h1').textContent = 'Left Forward(LF)'
 

    // midfield
    let midfield = document.querySelectorAll('.midfield')
    midfield.forEach(function(midfield){
        midfield.style.display = 'inline-block';
    })
    midfield[0].style.display = 'none';
    midfield[1].style.display = 'none';
    midfield[2].style.display = 'none';


    document.querySelector('.mfplayer4 h1').textContent = 'Left Midfielder(LM)'


    // defence
    let defence = document.querySelectorAll('.defence')
    defence.forEach(function(defence){
        defence.style.display = 'inline-block'
    })

    document.querySelector('.drplayer1 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer2 h1').textContent = 'Left Back(LB)'
    document.querySelector('.drplayer3 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer4 h1').textContent = 'Center Back(CB)'
    document.querySelector('.drplayer5 h1').textContent = 'Right Back(RB)'
    document.querySelector('.drplayer6 h1').textContent = 'Right Back(RB)'

    
}

)

// fdplayer 1 .....

let forwardplayer11 = document.getElementsByClassName('fdplayer1')[0]

let f1 = document.getElementsByClassName('f1')[0]


f1.addEventListener('click',function(){

    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    forwardplayer11.style.display = 'inline-block'
    f1.style.border = '1px solid white'
    f2.style.border = 'none' 
    f3.style.border = 'none' 
    f4.style.border = 'none' 
    m1.style.border = 'none' 
    m2.style.border = 'none' 
    m3.style.border = 'none' 
    m4.style.border = 'none' 
    m5.style.border = 'none' 
    d1.style.border = 'none' 
    d2.style.border = 'none' 
    d3.style.border = 'none' 
    d4.style.border = 'none' 
    d5.style.border = 'none' 
    d6.style.border = 'none' 
    g1.style.border = 'none'
   

    let forwardplayer1 = document.querySelectorAll('.fdplayer1 li')
    
      
    forwardplayer1[0].addEventListener('click', function(){
        f1.style.backgroundImage = 'URL(./images/forward/ENDRICK_463746.jpg)'
        f1.style.backgroundPosition = 'center';
        f1.style.backgroundRepeat = 'no-repeat';
        f1.style.backgroundSize = 'cover';

        
      })
      forwardplayer1[1].addEventListener('click', function(){
        f1.style.backgroundImage = 'URL(./images/forward/GABRIEL-MARTINELLI_430597.avif)'
        f1.style.backgroundPosition = 'center';
        f1.style.backgroundRepeat = 'no-repeat';
        f1.style.backgroundSize = 'cover';


      })


  


      
      
})






// fd player2

let forwardplayer12 = document.getElementsByClassName('fdplayer2')[0]
let f2 = document.getElementsByClassName('f2')[0]

f2.addEventListener('click',function(){
    forwardplayer11.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    forwardplayer12.style.display = 'inline-block'
    f2.style.border = '1px solid white' 
    f1.style.border = 'none'   
    f3.style.border = 'none'   
    f4.style.border = 'none'   
    m1.style.border = 'none'   
    m2.style.border = 'none'   
    m3.style.border = 'none'   
    m4.style.border = 'none'   
    m5.style.border = 'none'   
    d1.style.border = 'none'   
    d2.style.border = 'none'   
    d3.style.border = 'none'   
    d4.style.border = 'none'   
    d5.style.border = 'none'   
    d6.style.border = 'none'   
    g1.style.border = 'none'
       

    let forwardplayer2 = document.querySelectorAll('.fdplayer2 li')


    


    forwardplayer2[0].addEventListener('click', function(){
        f2.style.backgroundImage = 'URL(./images/forward/IGOR-THIAGO_519836.avif)'
        f2.style.backgroundPosition = 'center';
        f2.style.backgroundRepeat = 'no-repeat';
        f2.style.backgroundSize = 'cover';


      
      })
      forwardplayer2[1].addEventListener('click', function(){
        f2.style.backgroundImage = 'URL(./images/forward/LUIZ-HENRIQUE_448420.avif)'
        f2.style.backgroundPosition = 'center';
        f2.style.backgroundRepeat = 'no-repeat';
        f2.style.backgroundSize = 'cover';


      })

    





})


// fd player3

let forwardplayer13 = document.getElementsByClassName('fdplayer3')[0]
let f3 = document.getElementsByClassName('f3')[0]

f3.addEventListener('click',function(){
    forwardplayer13.style.display = 'inline-block'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer14.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    f3.style.border = '1px solid white' 
    f1.style.border = 'none'   
    f2.style.border = 'none'   
    f4.style.border = 'none'   
    m1.style.border = 'none'   
    m2.style.border = 'none'   
    m3.style.border = 'none'   
    m4.style.border = 'none'   
    m5.style.border = 'none'   
    d1.style.border = 'none'   
    d2.style.border = 'none'   
    d3.style.border = 'none'   
    d4.style.border = 'none'   
    d5.style.border = 'none'   
    d6.style.border = 'none'  
    g1.style.border = 'none' 
       

    let forwardplayer3 = document.querySelectorAll('.fdplayer3 li')


    


    forwardplayer3[0].addEventListener('click', function(){
        f3.style.backgroundImage = 'URL(./images/forward/NEYMAR_314197.avif)'
        f3.style.backgroundPosition = 'center';
        f3.style.backgroundRepeat = 'no-repeat';
        f3.style.backgroundSize = 'cover';


      
      })
    forwardplayer3[1].addEventListener('click', function(){
        f3.style.backgroundImage = 'URL(./images/forward/VINICIUS-JUNIOR_405742.avif)'
        f3.style.backgroundPosition = 'center';
        f3.style.backgroundRepeat = 'no-repeat';
        f3.style.backgroundSize = 'cover';


      
      })
    forwardplayer3[2].addEventListener('click', function(){
        f3.style.backgroundImage = 'URL(./images/forward/RAYAN_475036.avif)'
        f3.style.backgroundPosition = 'center';
        f3.style.backgroundRepeat = 'no-repeat';
        f3.style.backgroundSize = 'cover';


      
      })
     

    



})


// fd player4

let forwardplayer14 = document.getElementsByClassName('fdplayer4')[0]
let f4 = document.getElementsByClassName('f4')[0]

f4.addEventListener('click',function(){
    forwardplayer14.style.display = 'inline-block'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    f4.style.border = '1px solid white' 
    f1.style.border = 'none'   
    f2.style.border = 'none'   
    f3.style.border = 'none'   
    m1.style.border = 'none'   
    m2.style.border = 'none'   
    m3.style.border = 'none'   
    m4.style.border = 'none'   
    m5.style.border = 'none'   
    d1.style.border = 'none'   
    d2.style.border = 'none'   
    d3.style.border = 'none'   
    d4.style.border = 'none'   
    d5.style.border = 'none'   
    d6.style.border = 'none'  
    g1.style.border = 'none' 
       

    let forwardplayer4 = document.querySelectorAll('.fdplayer4 li')





    forwardplayer4[0].addEventListener('click', function(){
        f4.style.backgroundImage = 'URL(./images/forward/MATHEUS-CUNHA_430609.avif)'
        f4.style.backgroundPosition = 'center';
        f4.style.backgroundRepeat = 'no-repeat';
        f4.style.backgroundSize = 'cover';


      
      })

    forwardplayer4[1].addEventListener('click', function(){
        f4.style.backgroundImage = 'URL(./images/forward/RAPHINHA_433872.avif)'
        f4.style.backgroundPosition = 'center';
        f4.style.backgroundRepeat = 'no-repeat';
        f4.style.backgroundSize = 'cover';


      
    })



})



// ==== midfield part


// mf player1

let mfplayer11 = document.getElementsByClassName('mfplayer1')[0]
let m1 = document.getElementsByClassName('m1')[0]

m1.addEventListener('click',function(){
    mfplayer11.style.display = 'inline-block'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer15.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    m1.style.border = '1px solid white'
    f1.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    m2.style.border = 'none'
    m3.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
  
       

    let mfplayer1 = document.querySelectorAll('.mfplayer1 li')


    


    mfplayer1[0].addEventListener('click', function(){
        m1.style.backgroundImage = 'URL(./images/midfilder/BRUNO-GUIMARAES_430605.avif)'
        m1.style.backgroundPosition = 'center';
        m1.style.backgroundRepeat = 'no-repeat';
        m1.style.backgroundSize = 'cover';


      
      })

    mfplayer1[1].addEventListener('click', function(){
        m1.style.backgroundImage = 'URL(./images/midfilder/EVERTON-RIBEIRO.avif)'
        m1.style.backgroundPosition = 'center';
        m1.style.backgroundRepeat = 'no-repeat';
        m1.style.backgroundSize = 'cover';


      
      })
     

    




})





// mf player2

let mfplayer12 = document.getElementsByClassName('mfplayer2')[0]
let m2 = document.getElementsByClassName('m2')[0]

m2.addEventListener('click',function(){
    mfplayer12.style.display = 'inline-block'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    m2.style.border = '1px solid white'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m3.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
  
       

    let mfplayer2 = document.querySelectorAll('.mfplayer2 li')


    


    mfplayer2[0].addEventListener('click', function(){
        m2.style.backgroundImage = 'URL(./images/midfilder/DANILO-SANTOS_429392.avif)'
        m2.style.backgroundPosition = 'center';
        m2.style.backgroundRepeat = 'no-repeat';
        m2.style.backgroundSize = 'cover';


      
      })

     

    



})








// mf player3

let mfplayer13 = document.getElementsByClassName('mfplayer3')[0]
let m3 = document.getElementsByClassName('m3')[0]

m3.addEventListener('click',function(){
    mfplayer13.style.display = 'inline-block'
    mfplayer11.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    m3.style.border = '1px solid white'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m4.style.border = 'none'
    m2.style.border = 'none'
    f2.style.border = 'none'
    m5.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
  
       

    let mfplayer3 = document.querySelectorAll('.mfplayer3 li')


    


    mfplayer3[0].addEventListener('click', function(){
        m3.style.backgroundImage = 'URL(./images/midfilder/EDERSON-SILVA_485069.avif)'
        m3.style.backgroundPosition = 'center';
        m3.style.backgroundRepeat = 'no-repeat';
        m3.style.backgroundSize = 'cover';


      
      })


    mfplayer3[1].addEventListener('click', function(){
        m3.style.backgroundImage = 'URL(./images/midfilder/CASEMIRO_308386.avif)'
        m3.style.backgroundPosition = 'center';
        m3.style.backgroundRepeat = 'no-repeat';
        m3.style.backgroundSize = 'cover';


      
      })

     

    




})















// mf player4

let mfplayer14 = document.getElementsByClassName('mfplayer4')[0]
let m4 = document.getElementsByClassName('m4')[0]

m4.addEventListener('click',function(){
    mfplayer14.style.display = 'inline-block'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    m4.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'  
       

    let mfplayer4 = document.querySelectorAll('.mfplayer4 li')


    


    mfplayer4[0].addEventListener('click', function(){
        m4.style.backgroundImage = 'URL(./images/midfilder/LUCAS-PAQUETA_411726.avif)'
        m4.style.backgroundPosition = 'center';
        m4.style.backgroundRepeat = 'no-repeat';
        m4.style.backgroundSize = 'cover';


      
      })



})


















// mf player5

let mfplayer15 = document.getElementsByClassName('mfplayer5')[0]
let m5 = document.getElementsByClassName('m5')[0]

m5.addEventListener('click',function(){
    mfplayer15.style.display = 'inline-block'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    m5.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
  
       

    let mfplayer5 = document.querySelectorAll('.mfplayer5 li')


    


    mfplayer5[0].addEventListener('click', function(){
        m5.style.backgroundImage = 'URL(./images/midfilder/FABINHO_394456.avif)'
        m5.style.backgroundPosition = 'center';
        m5.style.backgroundRepeat = 'no-repeat';
        m5.style.backgroundSize = 'cover';


      
      })


    mfplayer5[1].addEventListener('click', function(){
        m5.style.backgroundImage = 'URL(./images/midfilder/Fred.avif)'
        m5.style.backgroundPosition = 'center';
        m5.style.backgroundRepeat = 'no-repeat';
        m5.style.backgroundSize = 'cover';


      
      })



})









// defence part 




// dr player1

let drplayer11 = document.getElementsByClassName('drplayer1')[0]
let d1 = document.getElementsByClassName('d1')[0]

d1.addEventListener('click',function(){
    drplayer11.style.display = 'inline-block'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    d1.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
  
       

    let drplayer1 = document.querySelectorAll('.drplayer1 li')


    


    drplayer1[0].addEventListener('click', function(){
        d1.style.backgroundImage = 'URL(./images/defender/ALEX-SANDRO_335658.avif)'
        d1.style.backgroundPosition = 'center';
        d1.style.backgroundRepeat = 'no-repeat';
        d1.style.backgroundSize = 'cover';


      
      })


    drplayer1[1].addEventListener('click', function(){
        d1.style.backgroundImage = 'URL(./images/defender/BREMER_431889.avif)'
        d1.style.backgroundPosition = 'center';
        d1.style.backgroundRepeat = 'no-repeat';
        d1.style.backgroundSize = 'cover';


      
      })



})






// dr player2

let drplayer12 = document.getElementsByClassName('drplayer2')[0]
let d2 = document.getElementsByClassName('d2')[0]

d2.addEventListener('click',function(){
    drplayer12.style.display = 'inline-block'
    drplayer11.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    gkplayer.style.display = 'none'
    d2.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
       

    let drplayer2 = document.querySelectorAll('.drplayer2 li')


    


    drplayer2[0].addEventListener('click', function(){
        d2.style.backgroundImage = 'URL(./images/defender/Alex-Telles.avif)'
        d2.style.backgroundPosition = 'center';
        d2.style.backgroundRepeat = 'no-repeat';
        d2.style.backgroundSize = 'cover';


      
      })


    drplayer2[1].addEventListener('click', function(){
        d2.style.backgroundImage = 'URL(./images/defender/Dani-Alves.avif)'
        d2.style.backgroundPosition = 'center';
        d2.style.backgroundRepeat = 'no-repeat';
        d2.style.backgroundSize = 'cover';


      
      })



})















// dr player3

let drplayer13 = document.getElementsByClassName('drplayer3')[0]
let d3 = document.getElementsByClassName('d3')[0]

d3.addEventListener('click',function(){
    drplayer13.style.display = 'inline-block'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    gkplayer.style.display = 'none'
    d3.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none' 
       

    let drplayer3 = document.querySelectorAll('.drplayer3 li')


    


    drplayer3[0].addEventListener('click', function(){
        d3.style.backgroundImage = 'URL(./images/defender/DANILO_335656.avif)'
        d3.style.backgroundPosition = 'center';
        d3.style.backgroundRepeat = 'no-repeat';
        d3.style.backgroundSize = 'cover';


      
      })


    drplayer3[1].addEventListener('click', function(){
        d3.style.backgroundImage = 'URL(./images/defender/DOUGLAS-SANTOS_367981.avif)'
        d3.style.backgroundPosition = 'center';
        d3.style.backgroundRepeat = 'no-repeat';
        d3.style.backgroundSize = 'cover';


      
      })



})













// dr player4

let drplayer14 = document.getElementsByClassName('drplayer4')[0]
let d4 = document.getElementsByClassName('d4')[0]

d4.addEventListener('click',function(){
    drplayer14.style.display = 'inline-block'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer16.style.display = 'none'
    drplayer15.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    gkplayer.style.display = 'none'
    d4.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
       

    let drplayer4 = document.querySelectorAll('.drplayer4 li')


    


    drplayer4[0].addEventListener('click', function(){
        d4.style.backgroundImage = 'URL(./images/defender/Eder-Militao.avif)'
        d4.style.backgroundPosition = 'center';
        d4.style.backgroundRepeat = 'no-repeat';
        d4.style.backgroundSize = 'cover';


      
      })


    drplayer4[1].addEventListener('click', function(){
        d4.style.backgroundImage = 'URL(./images/defender/GABRIEL-MAGALHAES_430601.avif)'
        d4.style.backgroundPosition = 'center';
        d4.style.backgroundRepeat = 'no-repeat';
        d4.style.backgroundSize = 'cover';


      
      })



})















// dr player5

let drplayer15 = document.getElementsByClassName('drplayer5')[0]
let d5 = document.getElementsByClassName('d5')[0]

d5.addEventListener('click',function(){
    drplayer15.style.display = 'inline-block'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer16.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    gkplayer.style.display = 'none'
    d5.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
  
       

    let drplayer5 = document.querySelectorAll('.drplayer5 li')


    


    drplayer5[0].addEventListener('click', function(){
        d5.style.backgroundImage = 'URL(./images/defender/LEO-PEREIRA_371956.avif)'
        d5.style.backgroundPosition = 'center';
        d5.style.backgroundRepeat = 'no-repeat';
        d5.style.backgroundSize = 'cover';


      
      })


    drplayer5[1].addEventListener('click', function(){
        d5.style.backgroundImage = 'URL(./images/defender/MARQUINHOS_332946.avif)'
        d5.style.backgroundPosition = 'center';
        d5.style.backgroundRepeat = 'no-repeat';
        d5.style.backgroundSize = 'cover';


      
      })



})















// dr player6

let drplayer16 = document.getElementsByClassName('drplayer6')[0]
let d6 = document.getElementsByClassName('d6')[0]

d6.addEventListener('click',function(){
    drplayer16.style.display = 'inline-block'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    gkplayer.style.display = 'none'
    d6.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    g1.style.border = 'none'
  
       

    let drplayer6 = document.querySelectorAll('.drplayer6 li')


    


    drplayer6[0].addEventListener('click', function(){
        d6.style.backgroundImage = 'URL(./images/defender/ROGER-IBANEZ_430594.avif)'
        d6.style.backgroundPosition = 'center';
        d6.style.backgroundRepeat = 'no-repeat';
        d6.style.backgroundSize = 'cover';


      
      })


    drplayer6[1].addEventListener('click', function(){
        d6.style.backgroundImage = 'URL(./images/defender/Thiago-Silva.avif)'
        d6.style.backgroundPosition = 'center';
        d6.style.backgroundRepeat = 'no-repeat';
        d6.style.backgroundSize = 'cover';


      
      })



})







// gk part

let gkplayer = document.getElementsByClassName('gkplayer')[0]
let g1 = document.getElementsByClassName('g1')[0]

g1.addEventListener('click',function(){
    gkplayer.style.display = 'inline-block'
    drplayer13.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    g1.style.border = '1px solid white'
    m3.style.border = 'none'
    f1.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    f2.style.border = 'none'
    f3.style.border = 'none'
    f4.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    d3.style.border = 'none'
  
       

    let gkplayer1 = document.querySelectorAll('.gkplayer li')


    


    gkplayer1[0].addEventListener('click', function(){
        g1.style.backgroundImage = 'URL(./images/gk/ALISSON_308370.avif)'
        g1.style.backgroundPosition = 'center';
        g1.style.backgroundRepeat = 'no-repeat';
        g1.style.backgroundSize = 'cover';


      
      })


    gkplayer1[1].addEventListener('click', function(){
        g1.style.backgroundImage = 'URL(./images/gk/EDERSON_395427.avif)'
        g1.style.backgroundPosition = 'center';
        g1.style.backgroundRepeat = 'no-repeat';
        g1.style.backgroundSize = 'cover';


      
      })


    gkplayer1[2].addEventListener('click', function(){
        g1.style.backgroundImage = 'URL(./images/gk/WEVERTON_396315.avif)'
        g1.style.backgroundPosition = 'center';
        g1.style.backgroundRepeat = 'no-repeat';
        g1.style.backgroundSize = 'cover';


      
      })



})




let submit = document.getElementsByClassName('submit')[0]
let formation = document.getElementsByClassName('formation')[0]


submit.addEventListener('click',function(){
    formation.style.display = 'none'
    submit.innerHTML = 'your selection is successed'
    forwardplayer11.style.display = 'none'
    forwardplayer12.style.display = 'none'
    forwardplayer13.style.display = 'none'
    forwardplayer14.style.display = 'none'
    mfplayer11.style.display = 'none'
    mfplayer12.style.display = 'none'
    mfplayer13.style.display = 'none'
    mfplayer14.style.display = 'none'
    mfplayer15.style.display = 'none'
    drplayer11.style.display = 'none'
    drplayer12.style.display = 'none'
    drplayer13.style.display = 'none'
    drplayer14.style.display = 'none'
    drplayer15.style.display = 'none'
    drplayer16.style.display = 'none'
    gkplayer.style.display = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    m1.style.border = 'none'
    m2.style.border = 'none'
    m3.style.border = 'none'
    m4.style.border = 'none'
    m5.style.border = 'none'
    d1.style.border = 'none'
    d2.style.border = 'none'
    d3.style.border = 'none'
    d4.style.border = 'none'
    d5.style.border = 'none'
    d6.style.border = 'none'
    g1.style.border = 'none'
    f1.style.pointerEvents = 'none'
    f2.style.pointerEvents = 'none'
    f3.style.pointerEvents = 'none'
    f4.style.pointerEvents = 'none'
    m1.style.pointerEvents = 'none'
    m2.style.pointerEvents = 'none'
    m3.style.pointerEvents = 'none'
    m4.style.pointerEvents = 'none'
    m5.style.pointerEvents = 'none'
    d1.style.pointerEvents = 'none'
    d2.style.pointerEvents = 'none'
    d3.style.pointerEvents = 'none'
    d4.style.pointerEvents = 'none'
    d5.style.pointerEvents = 'none'
    d6.style.pointerEvents = 'none'
    g1.style.pointerEvents = 'none'
    submit.style.pointerEvents = 'none'
    submit.style.right = '39%'
})



