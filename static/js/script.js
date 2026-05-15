
// =========================
// LOVE COUNTER
// =========================

const startDate = new Date("2023-06-06T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (diff / 1000) % 60
    );

    document.getElementById("counter").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateCounter, 1000);

updateCounter();


// =========================
// SMOOTH SCROLL
// =========================

function scrollToStory(){

    document.getElementById("story")
        .scrollIntoView({
            behavior:"smooth"
        });
}


// =========================
// PASSWORD
// =========================

const correctPassword = "06062023";

function checkPassword(){

    const input =
        document.getElementById("password-input").value;

    const error =
        document.getElementById("error-message");


    if(input === correctPassword){

        // HIDE PASSWORD SCREEN

        const passwordScreen =
            document.getElementById("password-screen");

        passwordScreen.style.opacity = "0";


        setTimeout(() => {

            passwordScreen.style.display = "none";


            // SHOW INTRO SCREEN

            const intro =
                document.getElementById("intro-screen");

            intro.style.display = "flex";


            setTimeout(() => {

                intro.style.opacity = "1";

            }, 100);


            // PLAY MUSIC

            const music =
                document.getElementById("bg-music");

            music.play();

        }, 1000);

    }else{

        error.innerHTML =
            "Giận em luôn 💔";
    }
}



/* =========================
   ENTER MAIN WEBSITE
========================= */

function enterMainWebsite(){

    const intro =
        document.getElementById("intro-screen");

    intro.style.opacity = "0";




    setTimeout(() => {

        intro.style.display = "none";


        // SHOW BACKGROUND

        const bg =
            document.querySelector(".fade-bg");

        bg.classList.add("active-bg");
        
        const sides = 
            document.querySelectorAll( 
                ".side-image" 
            ); 
        
        sides.forEach((side) => { 
            side.classList.add("show-side");
        });   


        // SHOW TEXT ONE BYONE

        const items =
            document.querySelectorAll(".fade-item");

        items.forEach((item, index) => {

            setTimeout(() => {

                item.classList.add("active");

            }, index * 700);

        });

    }, 1000);
}

// =========================
// ENTER KEY SUPPORT
// =========================

document
    .getElementById("password-input")
    .addEventListener("keypress", function(event){

        if(event.key === "Enter"){

            checkPassword();
        }
    });


// =========================
// SCROLL REVEAL
// =========================

const hiddenElements =
    document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }else{

                entry.target.classList.remove("show");
            }

        });

    },
    {
        threshold:0.15
    }

);

hiddenElements.forEach((el) => observer.observe(el));

const items =
    document.querySelectorAll(".fade-item");

items.forEach((item, index) => {

    setTimeout(() => {

        item.classList.add("show-item");

    }, index * 800);

});

// AUTO PLAY VIDEO

const videos =
    document.querySelectorAll(
        ".memory-item video"
    );

videos.forEach((video) => {

    video.addEventListener(
        "mouseenter",
        () => {

            video.play();

        }
    );

    video.addEventListener(
        "mouseleave",
        () => {

            video.pause();

            video.currentTime = 0;

        }
    );

});

document.querySelectorAll("video").forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
    });
});


// =========================
// OPEN LETTER
// =========================

function openLetter(){

    const modal =
        document.getElementById("letter-modal");


    // SHOW AGAIN

    modal.style.display = "flex";


    // RESET REFLOW

    void modal.offsetWidth;


    // START ANIMATION AGAIN

    modal.classList.add("show-letter");

}

// =========================
// CLOSE LETTER
// =========================

function closeLetter(){

    const modal =
        document.getElementById("letter-modal");

    modal.classList.remove("show-letter");


    // RESET ANIMATION

    setTimeout(() => {

        modal.style.display = "none";

    }, 500);

}


// =========================
// NEXT PAGE
// =========================

function goToNextPage(){
    window.location.href =
        "/carousel";

}
