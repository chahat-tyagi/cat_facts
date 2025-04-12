const message = document.getElementById("first-message");
const secMessage = document.getElementById("cat-fact");
const image = document.getElementById("cat-image");
const Break = document.getElementById("break");

document.addEventListener("DOMContentLoaded", () => {
    const factDisplay = document.getElementById("fact");
    const factButton = document.getElementById("new-fact");
    const imgContainer = document.getElementById("img-container");
    const bgMusic = document.getElementById("bg-music");

    const songs = [
      "./bg/track_1.mp3",
      "./bg/track_2.mp3",
      "./bg/track_3.mp3",
      "./bg/track_4.mp3",
      "./bg/track_5.mp3",
      "./bg/track_6.mp3",
      "./bg/track_7.mp3",
      "./bg/track_8.mp3",
      "./bg/track_9.mp3",
      "./bg/track_10.mp3",
      "./bg/track_11.mp3",
      "./bg/track_12.mp3",
      "./bg/track_13.mp3",
      "./bg/track_14.mp3",
      "./bg/track_15.mp3",
      "./bg/track_16.mp3"
    ];

    let currentIndexSong = 0;
  
    factButton.addEventListener("click", () => {

      message.style.display = "none";
      secMessage.style.display = "block";

      // Fetch cat fact
      fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
          factDisplay.textContent = data.fact;
        })
        .catch(error => {
          factDisplay.textContent = "Oops! Couldn't fetch a cat fact.";
          console.error("API error:", error);
        });
  
      // Fetch random cat image
      fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
          image.style.display = "none";
          Break.style.display = "none";
          const imgUrl = data[0].url;
          imgContainer.innerHTML = `<img src="${imgUrl}" alt="Random Cat" width="400px">`;
        })
        .catch(error => {
          imgContainer.innerHTML = "<p>Couldn't load cat image 🐾</p>";
          console.error("Image error:", error);
        });


      //Background music
      currentIndexSong = (currentIndexSong + 1) % songs.length;
      bgMusic.src = songs[currentIndexSong];
      bgMusic.play();

    });
  });

  

