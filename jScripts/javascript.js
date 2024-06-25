// function toggleNav(){
//     document.getElementById("main-nav").classList.toggle("hide-mobile");
// }

// function toggleNav() {
//     var nav = document.getElementById("main-nav");
//     if (nav.style.width === "250px") {
//         nav.style.width = "0";
//     } else {
//         nav.style.width = "250px";
//     }
// }


    // תקלות נפוצות

    // document.addEventListener("DOMContentLoaded", function() {
    //     var acc = document.getElementsByClassName("accordion");
    //     for (var i = 0; i < acc.length; i++) {
    //         acc[i].addEventListener("click", function() {
    //             this.classList.toggle("active");
    //             var panel = this.nextElementSibling;
    //             if (panel.style.display === "block") {
    //                 panel.style.display = "none";
    //             } else {
    //                 panel.style.display = "block";
    //             }
    //         });
    //     }
    // });
    

    document.addEventListener("DOMContentLoaded", function() {
        var acc = document.getElementsByClassName("accordion");
        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (window.getComputedStyle(panel).getPropertyValue('display') === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    });
  

function toggleNavBar() {
    var nav = document.getElementById("mobile-nav");
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
}




  
function navigateToDoctorPage() {
    window.location.href = "doctorPage.html";
    console.log("doc");
 }

 function navigatToKidsPage() {
    window.location.href = "kidsPage.html";
    console.log("kids");
 }


 function navigatToFlightersPage() {
    window.location.href = "travlerPage.html";
    console.log("kids");
 }
 function  navigatToSwimmersPage() {
    window.location.href = "swimmers.html";
    console.log("kids");
 }


 function  navigatToAdultsPage() {
    window.location.href = "adult.html";
    console.log("kids");
 }





    // קרוסלה דף בית
document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector(".list");

  
    let item = document.querySelector(".item");
    let itemWidth;

   
    const initializeItemWidth = () => {
        item = document.querySelector(".item");
        if (item) {
            itemWidth = item.offsetWidth;
            window.handleClick = function(direction) {
                if(direction === "previous") {
                    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
                } else {
                    list.scrollBy({ left: itemWidth, behavior: "smooth" });
                }
            }
        } else {
            // If the item is not rendered yet, try again after a short delay
            requestAnimationFrame(initializeItemWidth);
        }
    };

    // Call the initialization function initially
    initializeItemWidth();
});


    // איסורים והגבלות שימוש

  document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  });


    // המלצות מהעולם  

   function showPopup(country) {
        const popup = document.getElementById('popup');
        const videoIframe = document.getElementById('video-iframe');
        const popupTitle = document.getElementById('popup-title');
        const popupFlag = document.getElementById('popup-flag');
    
        let videoUrl = '';
        let title = '';
        let flagSrc = '';
    
        switch (country) {
            case 'Israel':
                videoUrl = 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Eardoc.store/videos/930844451966430/&show_text=0&width=560';
                title = 'ישראל';
                flagSrc = 'images/israel.png';
                break;
            case 'UK':
                videoUrl = 'https://www.youtube.com/embed/Kx0Whg-KOxg';
                title = 'בריטניה';
                flagSrc = 'images/Britain.png';
                break;
            case 'US':
                videoUrl = 'https://www.youtube.com/embed/_7OPmT3yJWY';
                title = 'אמריקה';
                flagSrc = 'images/amerika.png';
                break;
            case 'ND':
                videoUrl = 'https://www.youtube.com/embed/oyki6anJwR0';
                title = 'צפון דיקוטה';
                flagSrc = 'images/dikota.png';
                break;
            case 'Hawaii':
                videoUrl = 'https://www.youtube.com/embed/1ZPIhMGBsaM';
                title = 'הוואי';
                flagSrc = 'images/hawaii.png';
                break;
            case 'Asia':
                videoUrl = 'https://www.youtube.com/embed/KpFTmjh-4qg';
                title = 'תאילנד';
                flagSrc = 'images/Thailand.png';
                break;
        }
    
        videoIframe.src = videoUrl;
        popupTitle.textContent = title;
        popupFlag.src = flagSrc;
        popupFlag.alt = `${title} flag`;
    
        popup.style.display = 'flex';
    }
    
    function closePopup() {
        const popup = document.getElementById('popup');
        const videoIframe = document.getElementById('video-iframe');
        const popupTitle = document.getElementById('popup-title');
        const popupFlag = document.getElementById('popup-flag');
    
        popup.style.display = 'none';
        videoIframe.src = '';  // Stop the video when the popup is closed
        popupTitle.textContent = '';
        popupFlag.src = '';
        popupFlag.alt = '';
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const popup = document.getElementById('popup');
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });
    });
// window.addEventListener('resize', adjustMapSize);

// function adjustMapSize() {
//     var mapContainer = document.querySelector('.map-container');
//     var mapWidth = 2000; // Width of the map image
//     var containerWidth = mapContainer.offsetWidth;
//     var scale = containerWidth / mapWidth;
//     mapContainer.style.transform = 'scale(' + scale + ')';
// }
  
