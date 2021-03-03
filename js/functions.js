export function brief() {

  document.addEventListener('keydown', function(action) { 
    let monCode = action.key;
    console.log(monCode);
  
    let monAudio = document.getElementById(monCode);
    if(!monAudio) return;
    monAudio.previousElementSibling.classList.add("sound-active");

           // console.log(monAudio);
           monAudio.currentTime = 0;
           monAudio.play();
           monAudio.addEventListener('ended', function(action) {
               monAudio.previousElementSibling.classList.remove("sound-active");
           })
  
        })

} 

export function mouseclick() {
  document.addEventListener('click', function(action) {
    let monCode = action.target.nextElementSibling.getAttribute('id')
    let monAudio = document.getElementById(monCode);
    console.log(monCode);
    if (!monAudio) return;
    monAudio.previousElementSibling.classList.add("sound-active");

         // console.log(monAudio);
         monAudio.currentTime = 0;
         monAudio.play();
         monAudio.addEventListener('ended', function(action) {
            monAudio.previousElementSibling.classList.remove("sound-active");
      })

  })
}











      