const subjectsData = [
  {
    id: "math",
    title: "Mathematics (ሒሳብ)",
    desc: "Maths - Sets, Algebra, Geometry, Statistics and Trigonometry.",
    pdfUrl: "pdfs/math.pdf",
    roomName: "FasikawTechGrade9Mathematics",
    chapters: [
      { title: "Unit 1: Further on Sets", note: "Set operations (union, intersection, difference), Venn diagrams, and number of elements." },
      { title: "Unit 7: Statistics and Probability", note: "Data collection, scales of measurement (Nominal, Ordinal, Interval, Ratio), and probability." }
    ],
    quiz: [
      
    ]
  },
  {
    id: "english",
    title: "English (እንግሊዝኛ)",
    desc: "Reading comprehension, writing, speaking and grammar.",
    pdfUrl: "pdfs/english.pdf",
    roomName: "FasikawTechGrade9English",
    chapters: [
      { title: "Unit 1: Living in Urban Areas", note: "Listening skills, comparing urban and rural life, and present tenses." },
      { title: "Unit 2: Study Skills & Reading", note: "Skimming, scanning, note-taking strategies, and conditional sentences." }
    ],
    quiz: [
      { q: "1. Reading a text quickly to get the main idea is called:", options: ["Scanning", "Skimming", "Proofreading"], answer: 1 },
      { q: "2. Choose the correct verb: She ____ to school every morning.", options: ["go", "goes", "going"], answer: 1 }
    ]
  },
  {
    id: "physics",
    title: "Physics (ፊዚክስ)",
    desc: "Vectors, motion, forces, work, energy and waves.",
    pdfUrl: "pdfs/physics.pdf",
    roomName: "FasikawTechGrade9Physics",
    chapters: [
      { title: "Unit 1: Physics and Human Society", note: "Branches of physics, scientific method, and careers in physics." },
      { title: "Unit 2: Physical Quantities", note: "Scalar vs. Vector quantities, SI units, and measurement accuracy." }
    ],
    quiz: [
      { q: "1. Which of the following is a vector quantity?", options: ["Mass", "Temperature", "Velocity"], answer: 2 },
      { q: "2. What is the SI unit of Force?", options: ["Joule", "Newton", "Watt"], answer: 1 }
    ]
  },
  {
    id: "chemistry",
    title: "Chemistry (ኬሚስትሪ)",
    desc: "Matter, atomic structure, periodic table and chemical bonding.",
    pdfUrl: "pdfs/chemistry.pdf",
    roomName: "FasikawTechGrade9Chemistry",
    chapters: [
      { title: "Unit 1: Chemistry and Its Importance", note: "Definition of chemistry, branches, and role in agriculture and medicine." },
      { title: "Unit 3: Structure of the Atom", note: "Protons, neutrons, electrons, atomic number, mass number, and isotopes." }
    ],
    quiz: [
      { q: "1. Which subatomic particle has a negative charge?", options: ["Proton", "Neutron", "Electron"], answer: 2 },
      { q: "2. Atoms of the same element with different numbers of neutrons are:", options: ["Isotopes", "Ions", "Molecules"], answer: 0 }
    ]
  },
  {
    id: "biology",
    title: "Biology (ባዮሎጂ)",
    desc: "Cells, classification of organisms, human health and nature.",
    pdfUrl: "pdfs/biology.pdf",
    roomName: "FasikawTechGrade9Biology",
    chapters: [
      { title: "Unit 1: Introduction to Biology", note: "Characteristics of living things, microscope parts, and Ethiopian biologists." },
      { title: "Unit 3: Cells", note: "Prokaryotic vs. Eukaryotic cells, plant vs. animal cell organelles." }
    ],
    quiz: [
      { q: "1. Which organelle is known as the powerhouse of the cell?", options: ["Ribosome", "Mitochondria", "Nucleus"], answer: 1 },
      { q: "2. Which structure is found in plant cells but NOT in animal cells?", options: ["Cell wall", "Cell membrane", "Cytoplasm"], answer: 0 }
    ]
  },
  {
    id: "history",
    title: "History (ታሪክ)",
    desc: "Ethiopian and world civilizations and historical events.",
    pdfUrl: "pdfs/history.pdf",
    roomName: "FasikawTechGrade9History",
    chapters: [
      { title: "Unit 1: The Discipline of History", note: "Meaning of history, primary vs. secondary sources, and dating." },
      { title: "Unit 2: Ancient World Civilizations", note: "Mesopotamia, Ancient Egypt, and Aksumite Kingdom." }
    ],
    quiz: [
      { q: "1. Eyewitness accounts and ancient inscriptions are:", options: ["Primary sources", "Secondary sources", "Fictional stories"], answer: 0 },
      { q: "2. Which ancient Ethiopian kingdom minted its own coins?", options: ["Damot", "Aksum", "Zagwe"], answer: 1 }
    ]
  },
  {
    id: "geography",
    title: "Geography (ጂኦግራፊ)",
    desc: "The Earth, climate, landforms and Ethiopia's environment.",
    pdfUrl: "pdfs/geography.pdf",
    roomName: "FasikawTechGrade9Geography",
    chapters: [
      { title: "Unit 1: Geological History & Topography of Ethiopia", note: "Location, size, shape, and major landforms of Ethiopia." },
      { title: "Unit 2: Climate of Ethiopia", note: "Agro-climatic zones (Dega, Woina Dega, Kolla)." }
    ],
    quiz: [
      { q: "1. Which agro-climatic zone in Ethiopia is best for dense settlement?", options: ["Berha", "Woina Dega", "Wurch"], answer: 1 },
      { q: "2. Lines running East-West parallel to the Equator are:", options: ["Longitudes", "Latitudes", "Meridians"], answer: 1 }
    ]
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    desc: "Computer systems, digital logic, networking and programming.",
    pdfUrl: "pdfs/it.pdf",
    roomName: "FasikawTechGrade9IT",
    chapters: [
      { title: "Unit 1: Organization of Files & Computer Systems", note: "Hardware components, software types, and analog vs. digital systems." },
      { title: "Unit 2: Computer Networks", note: "LAN, MAN, WAN, network topologies, and internet security." }
    ],
    quiz: [
      { q: "1. Which signal represents continuous values over time?", options: ["Digital signal", "Analog signal", "Binary code"], answer: 1 },
      { q: "2. A network covering a single school building is called:", options: ["WAN", "LAN", "MAN"], answer: 1 }
    ]
  },
  {
    id: "citizenship",
    title: "Citizenship (የዜግነት ትምህርት)",
    desc: "Ethical values, democracy, human rights and responsibilities.",
    pdfUrl: "pdfs/citizenship.pdf",
    roomName: "FasikawTechGrade9Citizenship",
    chapters: [
      { title: "Unit 1: Ethical Values", note: "Honesty, integrity, fairness, empathy, and civic responsibility." },
      { title: "Unit 2: Digital Technology Culture", note: "Digital etiquette, online privacy, and responsible social media use." }
    ],
    quiz: [
      { q: "1. Protecting personal passwords and respecting others online is:", options: ["Digital citizenship", "Hardware maintenance", "Data mining"], answer: 0 },
      { q: "2. Doing the right thing even when no one is watching is:", options: ["Integrity", "Negligence", "Bias"], answer: 0 }
    ]
  }
];

let currentSubject = null;
let completedSubjects = JSON.parse(localStorage.getItem("grade9_completed")) || [];

function renderSubjects(list) {
  if (!list) list = subjectsData;
  const grid = document.getElementById("subjects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  list.forEach(function (subj) {
    const isDone = completedSubjects.includes(subj.id);
    const card = document.createElement("div");
    card.className = isDone ? "subject-card completed" : "subject-card";
    card.onclick = function () { openSubjectModal(subj.id); };

    const top = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = subj.title;
    const p = document.createElement("p");
    p.textContent = subj.desc;

    const tags = document.createElement("div");
    tags.className = "card-tags";
    ["📕 PDF Book", "🔴 Live Video Class", "📝 Quiz"].forEach(function (t) {
      const span = document.createElement("span");
      span.className = "mini-tag";
      span.textContent = t;
      tags.appendChild(span);
    });

    top.appendChild(h3);
    top.appendChild(p);
    top.appendChild(tags);

    const footer = document.createElement("div");
    footer.className = "card-footer";
    const linkText = document.createElement("span");
    linkText.textContent = "Join Live Class & PDF →";
    footer.appendChild(linkText);

    if (isDone) {
      const badge = document.createElement("span");
      badge.className = "badge-done";
      badge.textContent = "✓ Completed";
      footer.appendChild(badge);
    }

    card.appendChild(top);
    card.appendChild(footer);
    grid.appendChild(card);
  });

  updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}

function openSubjectModal(subjectId) {
  currentSubject = subjectsData.find(function (s) { return s.id === subjectId; });
  if (!currentSubject) return;
const meetUrl = "https://google.com";
const chatUrl = "https://vdo.ninja" + currentSubject.roomName;
  document.getElementById("modal-badge").textContent = "Grade 9 Live Classroom";
  document.getElementById("modal-title").textContent = currentSubject.title;

  document.getElementById("split-pdf-frame").src = currentSubject.pdfUrl;
  document.getElementById("full-pdf-frame").src = currentSubject.pdfUrl;
  document.getElementById("pdf-open-tab").href = currentSubject.pdfUrl;
  document.getElementById("subject-meet-link").href = meetUrl;
document.getElementById("subject-chat-link").href = chatUrl;
document.getElementById("live-class-frame").src = chatUrl;

  const chaptersDiv = document.getElementById("chapters-list");
  chaptersDiv.innerHTML = "";
  currentSubject.chapters.forEach(function (ch) {
    const box = document.createElement("div");
    box.className = "chapter-item";
    const h4 = document.createElement("h4");
    h4.textContent = ch.title;
const p = document.createElement("p");
p.textContent = ch.note;
box.appendChild(h4);
box.appendChild(p);
chaptersDiv.appendChild(box);
});
  const quizDiv = document.getElementById("quiz-questions");
  quizDiv.innerHTML = "";
  
  // የ 60 ደቂቃ ሰዓት ማሳያ ሳጥን
  const timerBanner = document.createElement("div");
  timerBanner.id = "quiz-timer-box";
  timerBanner.style.cssText = "background:#ffe6e6; color:#d9534f; padding:10px 15px; border-radius:8px; font-weight:bold; margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;";
  timerBanner.innerHTML = '<span>⏱️ Exam Time Remaining:</span> <span id="subject-timer" style="font-size:18px;">60:00</span>';
  quizDiv.appendChild(timerBanner);

  currentSubject.quiz.forEach(function (item, qIdx) {
    const qBox = document.createElement("div");
    qBox.className = "quiz-question";
    const qP = document.createElement("p");
    qP.textContent = item.q;
    qBox.appendChild(qP);
    item.options.forEach(function (opt, oIdx) {
      const label = document.createElement("label");
      label.className = "quiz-option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "q_" + qIdx;
      radio.value = oIdx;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + opt));
      qBox.appendChild(label);
    });
    quizDiv.appendChild(qBox);
  });

  document.getElementById("quiz-result").textContent = "";
  switchTab("study");
  document.getElementById("lesson-modal").classList.add("active");
  startSubjectTimer();

}
function loadLocalPdf(event) {
const file = event.target.files[0];
if (file) {
const fileUrl = URL.createObjectURL(file);
document.getElementById("split-pdf-frame").src = fileUrl;
document.getElementById("full-pdf-frame").src = fileUrl;
document.getElementById("pdf-open-tab").href = fileUrl;
}
}
let subjectTimerInterval;
let subjectTimeLeft = 3600; // 60 minutes

function startSubjectTimer() {
  clearInterval(subjectTimerInterval);
  subjectTimeLeft = 3600;
  subjectTimerInterval = setInterval(function () {
    let mins = Math.floor(subjectTimeLeft / 60);
    let secs = subjectTimeLeft % 60;
    const timerEl = document.getElementById("subject-timer");
    if (timerEl) {
      timerEl.textContent = mins + ":" + (secs < 10 ? "0" : "") + secs;
    }
    if (subjectTimeLeft <= 0) {
      clearInterval(subjectTimerInterval);
      alert("Time is up! Submitting your quiz automatically.");
      submitQuiz();
    }
    subjectTimeLeft--;
  }, 1000);
}

function closeModal() {
  clearInterval(subjectTimerInterval);
  document.getElementById("lesson-modal").classList.remove("active");
  document.getElementById("live-class-frame").src = "";
}

function closeModalOnOutside(event) {
  if (event.target.id === "lesson-modal") closeModal();
}

function switchTab(tab) {
  ["study", "pdf", "notes", "quiz"].forEach(function (t) {
    document.getElementById("tab-" + t).classList.toggle("active", tab === t);
    document.getElementById(t + "-content").classList.toggle("hidden", tab !== t);
  });
}

function submitQuiz() {
  clearInterval(subjectTimerInterval);
  if (!currentSubject) return;
  let score = 0;
  const total = currentSubject.quiz.length;
  currentSubject.quiz.forEach(function (item, idx) {
    const selected = document.querySelector('input[name="q_' + idx + '"]:checked');
    if (selected && parseInt(selected.value) === item.answer) score++;
  });
  const resultEl = document.getElementById("quiz-result");
  const percent = Math.round((score / total) * 100);
  resultEl.textContent = "You scored " + score + " out of " + total + "! (" + percent + "%)";
  if (percent >= 50 && !completedSubjects.includes(currentSubject.id)) {
    completedSubjects.push(currentSubject.id);
    localStorage.setItem("grade9_completed", JSON.stringify(completedSubjects));
    renderSubjects();
  }
}

function sendContactMessage(event) {
event.preventDefault();
const name = document.getElementById("sender-name").value;
const phone = document.getElementById("sender-phone").value;
const msg = document.getElementById("sender-msg").value;
const text = encodeURIComponent("Hello Fasikaw Tech! Name: " + name + " (" + phone + ") - Message: " + msg);
window.open("t.me" + text, "_blank");
document.getElementById("contact-status").textContent = "Opening Telegram to send your message to @fasikawtech...";
}
function updateProgressBar() {
const total = subjectsData.length;
const done = completedSubjects.length;
const percent = Math.round((done / total) * 100);
document.getElementById("progress-fill").style.width = percent + "%";
document.getElementById("progress-text").textContent = percent + "% Completed (" + done + "/" + total + " Subjects)";
}
function resetProgress() {
completedSubjects = [];
localStorage.removeItem("grade9_completed");
renderSubjects();
}
renderSubjects();
const questions = [
  {
    q: "1. Which of the following is an irrational number?",
    options: ["√16", "22/7", "0.333...", "√7"],
    answer: 3 // Index of correct answer (0=A, 1=B, 2=C, 3=D)
  },
  {
    q: "2. What is the Greatest Common Factor (GCF) of 24 and 36?",
    options: ["6", "12", "72", "4"],
    answer: 1
  },
  {
    q: "3. Simplify: (2³ × 2⁻⁵) ÷ 2⁻⁴",
    options: ["2", "4", "8", "1/4"],
    answer: 1
  }
  // እዚህ ጋር የቀሩትን ጥያቄዎች በተመሳሳይ መልኩ መጨመር ይችላሉ
];

let currentIndex = 0;
let score = 0;
let selectedOption = null;
let timeLeft = 60 * 60; // 60 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("time-left").innerText = 
      `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult();
    }
    timeLeft--;
  }, 1000);
}

function loadQuestion() {
  selectedOption = null;
  const currentQ = questions[currentIndex];
  document.getElementById("question-number").innerText = `Question ${currentIndex + 1} of ${questions.length}`;
  document.getElementById("question-text").innerText = currentQ.q;
  
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  
  currentQ.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = opt;
    btn.onclick = () => selectOption(btn, index);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(button, index) {
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
  button.classList.add("selected");
  selectedOption = index;
}

function nextQuestion() {
  if (selectedOption === null) {
    alert("Please select an answer first!");
    return;
  }
  if (selectedOption === questions[currentIndex].answer) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    clearInterval(timerInterval);
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-body").style.display = "none";
  document.getElementById("result-box").style.display = "block";
  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById("final-score").innerText = percentage;
  document.getElementById("score-details").innerText = `You answered ${score} out of ${questions.length} questions correctly.`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  timeLeft = 60 * 60;
  document.getElementById("quiz-body").style.display = "block";
  document.getElementById("result-box").style.display = "none";
  loadQuestion();
  startTimer();
}

// Start the quiz when page loads
loadQuestion();
startTimer();
