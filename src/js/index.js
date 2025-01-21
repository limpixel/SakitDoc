const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const sliderTrack = document.querySelector(".slider-track");
const sliderItems = document.querySelectorAll(".shop-item");

let currentIndex = 0;

function updateSlider() {
  const maxIndex = sliderItems.length - 1;
  const offset = currentIndex * sliderItems[0].clientWidth;
  sliderTrack.style.transform = `translateX(-${offset}px)`;

  // Hide/show buttons
  prevBtn.classList.toggle("hidden", currentIndex === 0);
  nextBtn.classList.toggle("hidden", currentIndex === maxIndex);
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < sliderItems.length - 1) {
    currentIndex += 1;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider);

// Initialize slider
updateSlider();

// QNA JS
document.getElementById("get-answer-btn").addEventListener("click", () => {
  const selectedQuestion = document.getElementById("question-select").value;
  const answerDisplay = document.getElementById("answer-display");

  let answer = "";

  switch (selectedQuestion) {
    case "1":
      answer =
        "SakitDoc is an online platform that connects patients with healthcare providers for consultations and health-related services.";
      break;
    case "2":
      answer =
        "To book an appointment, visit our 'Book Appointment' section and select your preferred doctor and time slot.";
      break;
    case "3":
      answer =
        "SakitDoc provides services such as online doctor consultations, appointment bookings, health checkups, and medicine delivery.";
      break;
    case "4":
      answer =
        "You can contact a doctor via our 'Call Doctor' feature for quick and easy consultations.";
      break;
    default:
      answer = "Please select a question.";
      break;
  }

  answerDisplay.textContent = answer;
  answerDisplay.style.display = "block";
});

// Page Top Doctor


