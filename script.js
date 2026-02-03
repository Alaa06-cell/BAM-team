document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("N0bPy4_VxwpFpPivu");

  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_v0zke6e", "template_e3tuwvc", {
      name: name.value,
      email: email.value,
      message: message.value
    })
    .then(() => {
      successMsg.style.display = "block";
      form.reset();
    })
    .catch(() => {
      alert("Something went wrong. Check EmailJS settings.");
    });
  });
const slides = [
  {
    img: "courbe.png",
    text: 
    `1 : Courbe de croissance
    
    Design يخدم على النمو متاعك.
هوية بصرية قوية + stratégie ذكية = audience تكبر.
ديما طالعين للفوق.`
  },
  {
    img: "mockup.png",
    text: `2 :  Branding, mockups & affiches

    نخلّيو الماركة متاعك تعيش.
Branding، logos، mockups وaffiches يورّيوك مشروعك كيفاش ينجم يطلع في الواقع.
مش كان تصميم، إحساس وصورة قوية.`
  }
];

let index = 0;

const slide = document.querySelector(".carousel-slide");
const slideImg = slide.querySelector("img");
const insightText = document.getElementById("insight-text");

const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

function updateSlide() {
  slide.classList.add("fade-out");

  setTimeout(() => {
    slideImg.src = slides[index].img;
    insightText.innerText = slides[index].text;

    slide.classList.remove("fade-out");
    slide.classList.add("fade-in");

    setTimeout(() => {
      slide.classList.remove("fade-in");
    }, 150);
  }, 300);
}

/* 🔥 INITIAL LOAD */
updateSlide();

/* 🔥 BUTTONS */
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

});