  
  const videos = document.querySelectorAll(".project-videos video");

    videos.forEach(video => {
        console.log("here");
        video.addEventListener("mouseover", function () {
            this.play()
        })
        
        video.addEventListener("mouseout", function () {
            this.pause()
        })
        
        video.addEventListener("touchstart", function () {
            this.play()
        })
        
        video.addEventListener("touchend", function () {
            this.pause()
        })
    }) 
