
const subjectsData = [
  {
    id: "math",
    title: "Mathematics (ሒሳብ)",
    desc: "Maths - Sets, Algebra, Geometry, Statistics and Trigonometry.",
 pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9Mathematics",
    chapters: [
      { title: "Unit 1: Further on Sets", note: "Set operations (union, intersection, difference), Venn diagrams, and number of elements." },
      { title: "Unit 7: Statistics and Probability", note: "Data collection, scales of measurement (Nominal, Ordinal, Interval, Ratio), and probability." }
    ],
    quiz: [
            { q: "1. Which of the following is an irrational number?", options: ["√16", "22/7", "0.333...", "√7"], answer: 3 },
      { q: "2. What is the Greatest Common Factor (GCF) of 24 and 36?", options: ["6", "12", "72", "4"], answer: 1 },
      { q: "3. Simplify: (2³ × 2⁻⁵) ÷ 2⁻⁴", options: ["2", "4", "8", "1/4"], answer: 1 },
      { q: "4. If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, what is A ∩ B?", options: ["{1, 2, 3, 4, 5, 6}", "{1, 2}", "{3, 4}", "{5, 6}"], answer: 2 },
      { q: "5. Which of the following sets is an empty set?", options: ["{0}", "{∅}", "{x ∈ ℕ : 1 < x < 2}", "{x ∈ ℤ : -1 < x < 1}"], answer: 2 },
      { q: "6. If n(A) = 15, n(B) = 20, and n(A ∩ B) = 5, what is n(A ∪ B)?", options: ["35", "30", "40", "25"], answer: 1 },
      { q: "7. Solve for x: 3(x - 4) + 2 = 2x + 5", options: ["15", "-5", "5", "11"], answer: 0 },
      { q: "8. What is the solution set of |2x - 3| = 7?", options: ["{5}", "{-2, 5}", "{2, -5}", "{-2}"], answer: 1 },
      { q: "9. Solve the inequality: -3x + 5 ≤ 14", options: ["x ≤ -3", "x ≥ -3", "x ≤ 3", "x ≥ 3"], answer: 1 },
      { q: "10. What is the solution set of x² - 5x + 6 = 0?", options: ["{2, 3}", "{-2, -3}", "{1, 6}", "{-1, -6}"], answer: 0 },
      { q: "11. Which of the following represents a function?", options: ["{(1, 2), (1, 3), (2, 4)}", "{(2, 5), (3, 5), (4, 5)}", "{(0, 1), (0, -1)}", "{(3, 2), (3, 4)}"], answer: 1 },
      { q: "12. If f(x) = 2x² - 3x + 1, what is f(-2)?", options: ["3", "15", "-1", "11"], answer: 1 },
      { q: "13. What is the domain of the function f(x) = 1 / (x - 4)?", options: ["ℝ", "ℝ \\ {0}", "ℝ \\ {4}", "{x ∈ ℝ : x > 4}"], answer: 2 },
      { q: "14. What is the slope of the line passing through (2, 3) and (4, 7)?", options: ["2", "1/2", "-2", "4"], answer: 0 },
      { q: "15. What is the y-intercept of the linear equation 2x + 3y = 12?", options: ["6", "4", "3", "12"], answer: 1 },
      { q: "16. Which equation represents a line parallel to y = 3x - 5?", options: ["y = -1/3x + 2", "y = -3x + 5", "y = 3x + 7", "y = 1/3x - 5"], answer: 2 },
      { q: "17. Rationalize the denominator of 6 / √3:", options: ["6√3", "2√3", "3√2", "√3"], answer: 1 },
      { q: "18. Express 0.00045 in scientific notation:", options: ["4.5 × 10⁴", "4.5 × 10⁻⁴", "45 × 10⁻⁵", "0.45 × 10⁻³"], answer: 1 },
      { q: "19. If two similar triangles have sides in ratio 2:3, what is the ratio of their areas?", options: ["2:3", "4:9", "8:27", "√2:√3"], answer: 1 },
      { q: "20. In a right triangle, if the legs are 6 cm and 8 cm, what is the hypotenuse?", options: ["10 cm", "14 cm", "12 cm", "48 cm"], answer: 0 },
      { q: "21. What is the sum of the interior angles of a regular hexagon?", options: ["360°", "540°", "720°", "1080°"], answer: 2 },
      { q: "22. Find the area of a circle whose diameter is 14 cm (π ≈ 22/7):", options: ["44 cm²", "154 cm²", "616 cm²", "88 cm²"], answer: 1 },
      { q: "23. What is the value of sin(30°) + cos(60°)?", options: ["0", "1/2", "1", "√3"], answer: 2 },
      { q: "24. If u = (3, -2) and v = (-1, 5), what is u + v?", options: ["(2, 3)", "(4, -7)", "(-3, -10)", "(2, -7)"], answer: 0 },
      { q: "25. What is the magnitude of the vector a = (3, 4)?", options: ["7", "1", "5", "25"], answer: 2 },
      { q: "26. Find the mean of the data set: 4, 8, 6, 10, 12", options: ["6", "8", "10", "40"], answer: 1 },
      { q: "27. What is the median of the numbers: 12, 5, 8, 19, 3, 10?", options: ["8", "9", "10", "13.5"], answer: 1 },
      { q: "28. A fair six-sided die is rolled once. Probability of getting a prime number?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2 },
      { q: "29. A bag has 3 red and 5 blue balls. Probability of drawing a red ball?", options: ["3/5", "5/8", "3/8", "1/3"], answer: 2 },
      { q: "30. Solve the system of equations: x + y = 10 and x - y = 4", options: ["(7, 3)", "(3, 7)", "(6, 4)", "(8, 2)"], answer: 0 }

    ]
  },
  {
    id: "english",
    title: "English (እንግሊዝኛ)",
    desc: "Reading comprehension, writing, speaking and grammar.",
   pdfUrl: "https://google.com",

    roomName: "FasikawTechGrade9English",
    chapters: [
      { title: "Unit 1: Living in Urban Areas", note: "Listening skills, comparing urban and rural life, and present tenses." },
      { title: "Unit 2: Study Skills & Reading", note: "Skimming, scanning, note-taking strategies, and conditional sentences." }
    ],
    quiz: [
           // Part 1: Tenses and Verb Forms
      { q: "1. By the time the teacher arrived at the classroom, the students ______ the assignment.", options: ["finish", "have finished", "had finished", "are finishing"], answer: 2 },
      { q: "2. She ______ in Bishoftu since she was five years old.", options: ["lives", "has lived", "is living", "lived"], answer: 1 },
      { q: "3. Look at those dark clouds! It ______ soon.", options: ["is going to rain", "rains", "rained", "was raining"], answer: 0 },
      { q: "4. While I ______ my homework last night, the electricity suddenly went out.", options: ["did", "have done", "was doing", "am doing"], answer: 2 },
      { q: "5. Water ______ at 100 degrees Celsius at standard atmospheric pressure.", options: ["is boiling", "boils", "boiled", "has boiled"], answer: 1 },

      // Part 2: Conditional Sentences
      { q: "6. If you study hard for your Grade 9 exams, you ______ high grades.", options: ["would score", "will score", "scored", "would have scored"], answer: 1 },
      { q: "7. If I ______ a bird, I would fly across the Rift Valley lakes.", options: ["am", "was", "were", "have been"], answer: 2 },
      { q: "8. She would have caught the early bus if she ______ up on time.", options: ["woke", "had woken", "wakes", "would wake"], answer: 1 },
      { q: "9. Unless it ______ tomorrow, we will go on our school field trip.", options: ["rains", "doesn't rain", "will rain", "rained"], answer: 0 },

      // Part 3: Active and Passive Voice
      { q: "10. The new Grade 9 textbooks ______ by the Ministry of Education last year.", options: ["published", "were published", "are publishing", "have published"], answer: 1 },
      { q: "11. Coffee ______ in many parts of southern and western Ethiopia.", options: ["grows", "is grown", "grew", "is growing"], answer: 1 },
      { q: "12. Which sentence is the correct passive form of: 'The students are cleaning the compound'?", options: ["The compound is cleaned by the students.", "The compound was cleaned by the students.", "The compound is being cleaned by the students.", "The compound has been cleaned by the students."], answer: 2 },

      // Part 4: Reported (Indirect) Speech
      { q: "13. Abebe said, 'I am preparing for the physics quiz.' Reported speech: Abebe said that he ______ for the physics quiz.", options: ["is preparing", "was preparing", "prepared", "has prepared"], answer: 1 },
      { q: "14. The teacher asked us, 'Where did you put the laboratory equipment?' Reported speech: The teacher asked us where we ______ the laboratory equipment.", options: ["put", "had put", "have put", "were putting"], answer: 1 },
      { q: "15. Marta said, 'I will visit my grandmother next week.' Reported speech: Marta said that she ______ her grandmother the following week.", options: ["will visit", "would visit", "visited", "visits"], answer: 1 },

      // Part 5: Relative Clauses, Prepositions & Modals
      { q: "16. The scientist ______ discovered the Endod treatment for bilharzia was Dr. Aklilu Lemma.", options: ["which", "whom", "who", "whose"], answer: 2 },
      { q: "17. This is the library ______ we usually borrow reference books.", options: ["which", "where", "who", "whose"], answer: 1 },
      { q: "18. You ______ wear your school uniform during regular school days; it is mandatory.", options: ["might", "must", "could", "would"], answer: 1 },
      { q: "19. Despite ______ very tired, the athlete finished the marathon.", options: ["he was", "of being", "being", "to be"], answer: 2 },
      { q: "20. Neither the teacher nor the students ______ aware of the schedule change.", options: ["was", "were", "is", "has been"], answer: 1 },

      // Part 6: Vocabulary and Word Meaning
      { q: "21. Soil erosion is a major environmental problem. The word 'erosion' means:", options: ["Fertilization of land", "Gradual wearing away of topsoil", "Planting new trees", "Irrigation of crops"], answer: 1 },
      { q: "22. Choose the word that is closest in meaning (synonym) to 'ancient':", options: ["Modern", "Very old", "Temporary", "Recent"], answer: 1 },
      { q: "23. Choose the word that is opposite in meaning (antonym) to 'generous':", options: ["Kind", "Stingy", "Helpful", "Wealthy"], answer: 1 },
      { q: "24. Regular physical exercise has many ______ effects on human health.", options: ["harmful", "beneficial", "dangerous", "careless"], answer: 1 },
      { q: "25. When people cut down forests without replanting, it leads to severe ______.", options: ["afforestation", "deforestation", "conservation", "cultivation"], answer: 1 },

      // Part 7: Reading & Writing Skills
      { q: "26. Reading a passage quickly to get the general idea or main gist is known as:", options: ["Scanning", "Skimming", "Proofreading", "Summarizing"], answer: 1 },
      { q: "27. Looking through a text rapidly to find a specific date, name, or number is called:", options: ["Skimming", "Scanning", "Inferring", "Paraphrasing"], answer: 1 },
      { q: "28. Which sentence in a paragraph usually states the main idea of that paragraph?", options: ["Concluding sentence", "Supporting detail", "Topic sentence", "Transitional phrase"], answer: 2 },
      { q: "29. Which linking word is used to show contrast between two ideas?", options: ["Furthermore", "Therefore", "However", "In addition"], answer: 2 },
      { q: "30. Choose the correctly punctuated sentence:", options: ["My favorite subjects are Mathematics Physics and English.", "My favorite subjects are Mathematics, Physics, and English.", "My favorite subjects are, Mathematics, Physics and English.", "My favorite subjects are Mathematics; Physics; and English."], answer: 1 }

    ]
  },
  {
    id: "physics",
    title: "Physics (ፊዚክስ)",
    desc: "Vectors, motion, forces, work, energy and waves.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9Physics",
    chapters: [
      { title: "Unit 1: Physics and Human Society", note: "Branches of physics, scientific method, and careers in physics." },
      { title: "Unit 2: Physical Quantities", note: "Scalar vs. Vector quantities, SI units, and measurement accuracy." }
    ],
    quiz: [
            // Unit 1: Physics and Human Society
      { q: "1. Which branch of physics deals with the behavior and properties of light, including its interactions with matter?", options: ["Acoustics", "Optics", "Thermodynamics", "Mechanics"], answer: 1 },
      { q: "2. Who formulated the laws of electromagnetic induction that led to the invention of electric generators?", options: ["Isaac Newton", "Michael Faraday", "James Prescott Joule", "Albert Einstein"], answer: 1 },
      { q: "3. Which interdisciplinary field applies physics principles and methods to study biological systems and medical imaging like MRI?", options: ["Geophysics", "Astrophysics", "Biophysics", "Chemical Physics"], answer: 2 },

      // Unit 2: Physical Quantities
      { q: "4. How many significant figures are present in the measurement 0.004050 kg?", options: ["3", "4", "6", "7"], answer: 1 },
      { q: "5. Which of the following prefixes represents a factor of 10⁻⁹?", options: ["Micro (μ)", "Nano (n)", "Pico (p)", "Mega (M)"], answer: 1 },
      { q: "6. Which of the following pairs consists ONLY of derived vector quantities?", options: ["Force and Momentum", "Speed and Acceleration", "Mass and Displacement", "Work and Power"], answer: 0 },
      { q: "7. Express a distance of 4.5 × 10⁶ micrometers (μm) in meters (m):", options: ["0.45 m", "4.5 m", "45 m", "450 m"], answer: 1 },
      { q: "8. What is the result of adding a displacement of 6 m East and 8 m North?", options: ["14 m", "2 m", "10 m", "48 m"], answer: 2 },

      // Unit 3: Motion in a Straight Line
      { q: "9. A student walks 40 m East and then 30 m West in 35 seconds. What is the student's average velocity?", options: ["2 m/s East", "0.29 m/s East", "2 m/s West", "1.14 m/s East"], answer: 1 },
      { q: "10. What does the area under a velocity-time graph represent?", options: ["Acceleration", "Instantaneous speed", "Displacement", "Net force"], answer: 2 },
      { q: "11. A bus accelerates uniformly from 10 m/s to 25 m/s in 5 seconds. What distance does it cover during this time?", options: ["75 m", "87.5 m", "125 m", "175 m"], answer: 1 },
      { q: "12. A stone is dropped freely from a cliff and hits the ground after 3 seconds. What is the height of the cliff? (Use g = 10 m/s²)", options: ["15 m", "30 m", "45 m", "90 m"], answer: 2 },
      { q: "13. On a position-time (s-t) graph, a horizontal straight line parallel to the time axis indicates that the object is:", options: ["Moving with constant velocity", "Accelerating uniformly", "At rest (stationary)", "Moving backward"], answer: 2 },

      // Unit 4: Force, Work, Energy, and Power
      { q: "14. A 15 kg wooden box rests on a horizontal floor where the coefficient of static friction is 0.4. What minimum horizontal force is needed to start moving the box? (g = 10 m/s²)", options: ["6 N", "37.5 N", "60 N", "150 N"], answer: 2 },
      { q: "15. Why does a passenger lurch forward when a fast-moving bus suddenly stops?", options: ["Newton's Third Law", "Inertia of motion", "Gravitational pull", "Centripetal force"], answer: 1 },
      { q: "16. A force of 50 N pulls a cart at an angle of 60° above the horizontal over a distance of 10 m. How much work is done by the force? (cos 60° = 0.5)", options: ["500 J", "250 J", "433 J", "50 J"], answer: 1 },
      { q: "17. A 4 kg object is lifted vertically to a height of 5 m above the ground. If it falls freely, what is its kinetic energy just before hitting the ground? (g = 10 m/s²)", options: ["20 J", "100 J", "200 J", "400 J"], answer: 2 },
      { q: "18. A water pump lifts 120 kg of water to a tank 15 m high in 1 minute. What is the power output of the pump? (g = 10 m/s²)", options: ["30 W", "300 W", "1800 W", "18,000 W"], answer: 1 },

      // Unit 5: Simple Machines
      { q: "19. A machine uses an effort of 100 N to lift a load of 450 N. If the Velocity Ratio (VR) of the machine is 5, what is its efficiency?", options: ["45%", "80%", "90%", "111%"], answer: 2 },
      { q: "20. In which class of lever is the load located between the fulcrum and the effort (such as in a wheelbarrow)?", options: ["First-class lever", "Second-class lever", "Third-class lever", "Compound lever"], answer: 1 },
      { q: "21. A block and tackle pulley system has 4 supporting ropes. If its efficiency is 75%, what is its Actual Mechanical Advantage (AMA)?", options: ["3", "4", "5.3", "12"], answer: 0 },
      { q: "22. An inclined plane is 6 m long and 1.5 m high. What is its Ideal Mechanical Advantage (Velocity Ratio)?", options: ["0.25", "4", "7.5", "9"], answer: 1 },

      // Unit 6: Mechanical Oscillation and Sound Wave
      { q: "23. A simple pendulum completes 40 oscillations in 20 seconds. What are its frequency and period respectively?", options: ["0.5 Hz and 2 s", "2 Hz and 0.5 s", "20 Hz and 40 s", "40 Hz and 20 s"], answer: 1 },
      { q: "24. Which of the following best describes a sound wave traveling through air?", options: ["Transverse electromagnetic wave", "Longitudinal mechanical wave", "Transverse mechanical wave", "Longitudinal electromagnetic wave"], answer: 1 },
      { q: "25. A girl claps her hands near a cliff and hears the echo 1.6 seconds later. If the speed of sound in air is 340 m/s, how far away is the cliff?", options: ["136 m", "212.5 m", "272 m", "544 m"], answer: 2 },
      { q: "26. Which characteristic of a sound wave determines its loudness?", options: ["Frequency", "Wavelength", "Amplitude", "Speed"], answer: 2 },

      // Unit 7: Temperature and Thermometry
      { q: "27. Which thermometric property is utilized in a clinical mercury-in-glass thermometer?", options: ["Change in electrical resistance", "Thermal expansion of a liquid", "Change in gas pressure at constant volume", "Thermoelectric voltage"], answer: 1 },
      { q: "28. At what temperature do the Celsius and Fahrenheit scales read the exact same numerical value?", options: ["0°", "-40°", "32°", "100°"], answer: 1 },
      { q: "29. Normal human body temperature is 37°C. What is this temperature on the Fahrenheit scale?", options: ["66.6°F", "98.6°F", "100.4°F", "310°F"], answer: 1 },
      { q: "30. Why is a small gap left between consecutive steel rails when constructing a railway track?", options: ["To reduce friction with train wheels", "To allow for thermal expansion during hot weather", "To make the track lighter", "To prevent rusting"], answer: 1 }

    ]
  },
  {
    id: "chemistry",
    title: "Chemistry (ኬሚስትሪ)",
    desc: "Matter, atomic structure, periodic table and chemical bonding.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9Chemistry",
    chapters: [
      { title: "Unit 1: Chemistry and Its Importance", note: "Definition of chemistry, branches, and role in agriculture and medicine." },
      { title: "Unit 3: Structure of the Atom", note: "Protons, neutrons, electrons, atomic number, mass number, and isotopes." }
    ],
    quiz: [
          // Unit 1: Chemistry and Its Importance
      { q: "1. Which branch of chemistry focuses on the study of carbon-containing compounds and their reactions?", options: ["Inorganic Chemistry", "Organic Chemistry", "Analytical Chemistry", "Physical Chemistry"], answer: 1 },
      { q: "2. What is the correct sequence of steps in the scientific method?", options: ["Hypothesis → Observation → Experiment → Conclusion", "Observation → Hypothesis → Experiment → Conclusion", "Experiment → Hypothesis → Observation → Conclusion", "Observation → Experiment → Conclusion → Hypothesis"], answer: 1 },
      { q: "3. Which major Ethiopian chemical industry located in Muger and Derba produces Portland cement?", options: ["Pharmaceutical industry", "Cement manufacturing industry", "Tannery industry", "Sugar industry"], answer: 1 },
      { q: "4. Which of the following is an example of a chemical change?", options: ["Melting of butter", "Dissolving sugar in water", "Rusting of an iron nail", "Boiling of ethanol"], answer: 2 },

      // Unit 2: Measurements and Scientific Methods
      { q: "5. Which laboratory apparatus is most accurate for measuring a fixed, exact volume of a liquid during titration?", options: ["Beaker", "Graduated cylinder", "Pipette", "Erlenmeyer flask"], answer: 2 },
      { q: "6. A student measures the density of aluminum three times and gets 2.31 g/cm³, 2.32 g/cm³, and 2.30 g/cm³. If the true value is 2.70 g/cm³, these measurements are:", options: ["Both accurate and precise", "Accurate but not precise", "Precise but not accurate", "Neither accurate nor precise"], answer: 2 },
      { q: "7. Calculate the result of (4.20 cm × 2.1 cm) rounded to the correct number of significant figures:", options: ["8.82 cm²", "8.8 cm²", "9 cm²", "8.820 cm²"], answer: 1 },
      { q: "8. What does a skull and crossbones hazard symbol on a chemical reagent bottle indicate?", options: ["Flammable substance", "Corrosive acid", "Toxic or poisonous substance", "Radioactive material"], answer: 2 },

      // Unit 3: Structure of the Atom
      { q: "9. Which scientist discovered the nucleus of an atom using the gold foil alpha-scattering experiment?", options: ["J.J. Thomson", "John Dalton", "Ernest Rutherford", "Niels Bohr"], answer: 2 },
      { q: "10. An atom has an atomic number of 17 and a mass number of 35. How many protons, neutrons, and electrons does its neutral atom have?", options: ["17 protons, 35 neutrons, 17 electrons", "17 protons, 18 neutrons, 17 electrons", "18 protons, 17 neutrons, 18 electrons", "17 protons, 18 neutrons, 18 electrons"], answer: 1 },
      { q: "11. Isotopes of the same element always have the same number of:", options: ["Neutrons", "Mass number", "Protons", "Nucleons"], answer: 2 },
      { q: "12. Naturally occurring chlorine consists of 75% Cl-35 and 25% Cl-37. What is the average atomic mass of chlorine?", options: ["35.0 amu", "35.5 amu", "36.0 amu", "36.5 amu"], answer: 1 },
      { q: "13. According to Bohr's atomic model, what is the maximum number of electrons that can occupy the third main energy level (M-shell, n = 3)?", options: ["2", "8", "18", "32"], answer: 2 },
      { q: "14. What is the main shell electron configuration of an aluminum atom (Atomic Number = 13)?", options: ["2, 8, 3", "2, 3, 8", "2, 8, 2, 1", "2, 10, 1"], answer: 0 },

      // Unit 4: Periodic Classification of Elements
      { q: "15. According to the Modern Periodic Law, the physical and chemical properties of elements are periodic functions of their:", options: ["Atomic masses", "Atomic numbers", "Number of neutrons", "Atomic radii"], answer: 1 },
      { q: "16. An element has the electron configuration 2, 8, 6. To which period and group of the periodic table does it belong?", options: ["Period 6, Group IIIA", "Period 3, Group VIA", "Period 3, Group VIIIA", "Period 2, Group VIA"], answer: 1 },
      { q: "17. Which of the following elements belongs to the Alkaline Earth Metals (Group IIA)?", options: ["Sodium (Na)", "Magnesium (Mg)", "Aluminum (Al)", "Potassium (K)"], answer: 1 },
      { q: "18. How does atomic radius generally change as you move from left to right across a period in the periodic table?", options: ["It increases due to added shells", "It decreases due to increasing effective nuclear charge", "It remains constant", "It first decreases and then increases sharply"], answer: 1 },
      { q: "19. Which element in Period 3 has the highest first ionization energy?", options: ["Sodium (Na)", "Magnesium (Mg)", "Chlorine (Cl)", "Argon (Ar)"], answer: 3 },
      { q: "20. Which element is the most electronegative element in the periodic table?", options: ["Oxygen (O)", "Chlorine (Cl)", "Fluorine (F)", "Nitrogen (N)"], answer: 2 },
      { q: "21. Elements in Group VIIA (Halogens) are highly reactive non-metals because they:", options: ["Have a completely filled outer shell", "Need to gain only one electron to achieve an octet", "Easily lose seven valence electrons", "Have very large atomic radii"], answer: 1 },

      // Unit 5: Chemical Bonding
      { q: "22. Which type of chemical bond is formed by the complete transfer of valence electrons from a metal atom to a non-metal atom?", options: ["Covalent bond", "Ionic (electrovalent) bond", "Metallic bond", "Hydrogen bond"], answer: 1 },
      { q: "23. What is the correct chemical formula of the ionic compound formed between Calcium (Ca²⁺) and Nitride (N³⁻) ions?", options: ["CaN", "Ca₂N₃", "Ca₃N₂", "Ca₃N"], answer: 2 },
      { q: "24. Which of the following compounds is held together primarily by covalent bonds?", options: ["Sodium chloride (NaCl)", "Magnesium oxide (MgO)", "Carbon dioxide (CO₂)", "Potassium bromide (KBr)"], answer: 2 },
      { q: "25. How many pairs of electrons are shared between the two nitrogen atoms in a nitrogen molecule (N₂)?", options: ["1 pair (single bond)", "2 pairs (double bond)", "3 pairs (triple bond)", "4 pairs"], answer: 2 },
      { q: "26. Which of the following molecules contains a polar covalent bond?", options: ["H₂", "Cl₂", "HCl", "O₂"], answer: 2 },
      { q: "27. Why do ionic compounds conduct electricity when melted or dissolved in water, but NOT in the solid state?", options: ["They contain free-moving electrons in water", "Their ions are fixed in a crystal lattice when solid, but become mobile when molten or aqueous", "Water breaks them into neutral atoms", "They have low melting points"], answer: 1 },
      { q: "28. Which property of metals is explained by the 'sea of delocalized electrons' in metallic bonding?", options: ["Brittleness when hammered", "High electrical and thermal conductivity", "Low boiling points", "Inability to reflect light"], answer: 1 },
      { q: "29. Which of the following substances has a giant covalent network structure and is extremely hard?", options: ["Dry ice (CO₂)", "Diamond", "Sodium metal", "Table salt (NaCl)"], answer: 1 },
      { q: "30. In the Lewis dot structure of a water molecule (H₂O), how many lone pairs of electrons are on the central oxygen atom?", options: ["0", "1", "2", "4"], answer: 2 }

    ]
  },
  {
    id: "biology",
    title: "Biology (ባዮሎጂ)",
    desc: "Cells, classification of organisms, human health and nature.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9Biology",
    chapters: [
      { title: "Unit 1: Introduction to Biology", note: "Characteristics of living things, microscope parts, and Ethiopian biologists." },
      { title: "Unit 3: Cells", note: "Prokaryotic vs. Eukaryotic cells, plant vs. animal cell organelles." }
    ],
    quiz: [
           // Unit 1: Introduction to Biology
      { q: "1. Which branch of biology deals with the study of fungi?", options: ["Botany", "Zoology", "Mycology", "Microbiology"], answer: 2 },
      { q: "2. Renowned Ethiopian biologist Dr. Tewolde Berhan Gebre Egziabher was internationally recognized for his work in:", options: ["Developing vaccines for schistosomiasis", "Environmental protection and biodiversity conservation", "Discovering new malaria treatments", "Mapping human genetics"], answer: 1 },
      { q: "3. Which Ethiopian scientist discovered the molluscicidal properties of the Endod (Phytolacca dodecandra) plant to control bilharzia?", options: ["Prof. Tilahun Yilma", "Dr. Aklilu Lemma", "Prof. Gebissa Ejeta", "Dr. Melaku Worede"], answer: 1 },
      { q: "4. Which part of a compound light microscope regulates the amount of light passing through the specimen?", options: ["Objective lens", "Coarse adjustment knob", "Iris diaphragm", "Ocular lens"], answer: 2 },
      { q: "5. If a microscope has an ocular lens magnification of 10x and an objective lens magnification of 40x, what is the total magnification?", options: ["50x", "400x", "4000x", "4x"], answer: 1 },

      // Unit 2: Characteristics and Classification of Organisms
      { q: "6. Which characteristic of living organisms refers to the sum of all chemical reactions occurring inside cells?", options: ["Homeostasis", "Metabolism", "Irritability", "Excretion"], answer: 1 },
      { q: "7. In the binomial nomenclature system, how is the scientific name of human beings correctly written?", options: ["homo sapiens", "Homo Sapiens", "Homo sapiens (italicized)", "HOMO SAPIENS"], answer: 2 },
      { q: "8. Which taxonomic rank comes immediately below Phylum and immediately above Order?", options: ["Family", "Genus", "Class", "Kingdom"], answer: 2 },
      { q: "9. Organisms in Kingdom Monera differ from those in Kingdoms Protista, Fungi, Plantae, and Animalia because Monerans are:", options: ["Multicellular heterotrophs", "Prokaryotic (lack a membrane-bound nucleus)", "Eukaryotic autotrophs", "Strictly parasitic"], answer: 1 },
      { q: "10. Which of the following endemic mammals is found exclusively in the Afroalpine highlands of Ethiopia, such as the Bale Mountains?", options: ["African Elephant", "Ethiopian Wolf (Canis simensis)", "Cheetah", "Reticulated Giraffe"], answer: 1 },

      // Unit 3: Cells
      { q: "11. Which organelle is responsible for cellular respiration and ATP energy production in eukaryotic cells?", options: ["Ribosome", "Golgi apparatus", "Mitochondrion", "Lysosome"], answer: 2 },
      { q: "12. Which two structures are present in plant cells but absent in animal cells?", options: ["Cell membrane and cytoplasm", "Cell wall and chloroplasts", "Nucleus and mitochondria", "Ribosomes and endoplasmic reticulum"], answer: 1 },
      { q: "13. According to the fluid mosaic model, the plasma membrane is primarily composed of a:", options: ["Cellulose layer with embedded sugars", "Phospholipid bilayer with embedded proteins", "Single layer of triglycerides", "Rigid network of keratin fibers"], answer: 1 },
      { q: "14. What happens to an animal cell (such as a red blood cell) when placed in a hypotonic (pure water) solution?", options: ["It shrinks (crenates)", "It swells and may burst (lysis)", "It becomes plasmolyzed", "It remains completely unchanged"], answer: 1 },
      { q: "15. Active transport differs from simple diffusion because active transport:", options: ["Moves molecules down a concentration gradient", "Requires cellular energy (ATP) and carrier proteins", "Occurs only in dead cells", "Does not involve the cell membrane"], answer: 1 },

      // Unit 4: Reproduction
      { q: "16. Which type of asexual reproduction occurs in yeast when a small outgrowth forms on the parent cell and detaches?", options: ["Binary fission", "Budding", "Spore formation", "Fragmentation"], answer: 1 },
      { q: "17. In flowering plants, where are pollen grains produced?", options: ["Stigma", "Ovary", "Anther", "Sepal"], answer: 2 },
      { q: "18. Which structure in the human male reproductive system stores sperm while they mature and gain motility?", options: ["Seminal vesicle", "Epididymis", "Prostate gland", "Urethra"], answer: 1 },
      { q: "19. Where does fertilization normally take place in the human female reproductive system?", options: ["Ovary", "Uterus", "Fallopian tube (oviduct)", "Cervix"], answer: 2 },
      { q: "20. Which hormone surges around day 14 of a 28-day menstrual cycle to trigger ovulation?", options: ["Progesterone", "Luteinizing Hormone (LH)", "Testosterone", "Oxytocin"], answer: 1 },

      // Unit 5: Human Health, Nutrition, and Disease
      { q: "21. Which class of nutrients serves as the primary and immediate source of energy for the human body?", options: ["Proteins", "Carbohydrates", "Vitamins", "Minerals"], answer: 1 },
      { q: "22. Deficiency of Vitamin C (ascorbic acid) in the diet leads to which deficiency disease?", options: ["Rickets", "Scurvy", "Beriberi", "Goiter"], answer: 1 },
      { q: "23. Kwashiorkor in young children is primarily caused by a severe dietary deficiency of:", options: ["Iron", "Protein", "Vitamin D", "Dietary fiber"], answer: 1 },
      { q: "24. Which vector transmits the protozoan parasite Plasmodium that causes malaria?", options: ["Tsetse fly", "Female Anopheles mosquito", "Housefly", "Sandfly"], answer: 1 },
      { q: "25. How does HIV primarily weaken the human immune system?", options: ["By destroying red blood cells", "By attacking and destroying CD4+ T-helper lymphocytes", "By blocking blood vessels in the heart", "By paralyzing skeletal muscles"], answer: 1 },

      // Unit 6: Ecology and Conservation of Natural Resources
      { q: "26. Which of the following represents an abiotic factor in an ecosystem?", options: ["Decomposers", "Soil pH and temperature", "Primary consumers", "Parasitic bacteria"], answer: 1 },
      { q: "27. In a food chain (Grass → Grasshopper → Frog → Snake), which organism occupies the third trophic level?", options: ["Grass", "Grasshopper", "Frog", "Snake"], answer: 2 },
      { q: "28. Approximately what percentage of energy is transferred from one trophic level to the next in an ecological energy pyramid?", options: ["1%", "10%", "50%", "90%"], answer: 1 },
      { q: "29. Which bacteria convert atmospheric nitrogen (N₂) into ammonia usable by leguminous plants?", options: ["Denitrifying bacteria", "Nitrogen-fixing bacteria (e.g., Rhizobium)", "Putrefying fungi", "Photosynthetic algae"], answer: 1 },
      { q: "30. Which conservation strategy protects endangered species within their natural habitats, such as Simien Mountains National Park?", options: ["Ex-situ conservation", "In-situ conservation", "Captive breeding in zoos", "Seed banking"], answer: 1 }

    ]
  },
  {
    id: "history",
    title: "History (ታሪክ)",
    desc: "Ethiopian and world civilizations and historical events.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9History",
    chapters: [
      { title: "Unit 1: The Discipline of History", note: "Meaning of history, primary vs. secondary sources, and dating." },
      { title: "Unit 2: Ancient World Civilizations", note: "Mesopotamia, Ancient Egypt, and Aksumite Kingdom." }
    ],
    quiz: [
           // Unit 1: The Discipline of History and Human Evolution
      { q: "1. Who is widely regarded as the 'Father of History' for his systematic investigation of the Greco-Persian Wars?", options: ["Thucydides", "Herodotus", "Leopold von Ranke", "Aristotle"], answer: 1 },
      { q: "2. Which type of historical source includes artifacts, coins, monuments, and oral traditions rather than written documents?", options: ["Secondary written sources", "Primary non-written sources", "Chronicles", "Autobiographies"], answer: 1 },
      { q: "3. Which early hominid species was the first to master the use of fire and migrate out of Africa into Asia and Europe?", options: ["Australopithecus afarensis", "Homo habilis", "Homo erectus", "Homo sapiens"], answer: 2 },
      { q: "4. What major shift characterized the Neolithic Revolution around 10,000 years ago?", options: ["Discovery of bronze smelting", "Transition from hunting-gathering to food production (domestication of plants and animals)", "Invention of the printing press", "Construction of pyramids"], answer: 1 },
      { q: "5. Which of the following indigenous crops were domesticated in the Ethiopian region during the Neolithic period?", options: ["Maize, potato, and cassava", "Teff, enset, dagussa, and nug", "Rice, soybean, and sugarcane", "Wheat, rye, and oats"], answer: 1 },

      // Unit 2: Ancient World Civilizations up to c. 500 AD
      { q: "6. What was the ancient Egyptian system of picture writing called?", options: ["Cuneiform", "Hieroglyphics", "Sanskrit", "Logograms"], answer: 1 },
      { q: "7. Which ancient Mesopotamian ruler is famous for compiling one of the earliest written legal codes?", options: ["Nebuchadnezzar", "Hammurabi", "Sargon of Akkad", "Cyrus the Great"], answer: 1 },
      { q: "8. After the Assyrian invasion of Egypt in 671 BC, the Kingdom of Kush shifted its capital southward from Napata to:", options: ["Axum", "Meroe", "Alexandria", "Thebes"], answer: 1 },
      { q: "9. Which ancient Greek city-state is known as the birthplace of direct democracy?", options: ["Sparta", "Athens", "Corinth", "Macedonia"], answer: 1 },
      { q: "10. Which Roman Emperor issued the Edict of Milan in 313 AD, granting religious tolerance to Christians in the Roman Empire?", options: ["Nero", "Julius Caesar", "Constantine the Great", "Augustus"], answer: 2 },

      // Unit 3: Peoples and States in Ethiopia and the Horn to the End of the 13th Century
      { q: "11. Which language family in Ethiopia and the Horn includes Afaan Oromo, Somali, Afar, and Sidama?", options: ["Semitic", "Cushitic", "Omotic", "Nilo-Saharan"], answer: 1 },
      { q: "12. What was the major Red Sea port of the Aksumite Kingdom that connected Ethiopia to international trade?", options: ["Zeila", "Massawa", "Adulis", "Berbera"], answer: 2 },
      { q: "13. Under which Aksumite king was Christianity officially adopted as the state religion around 330 AD?", options: ["King Kaleb", "King Ezana", "King Zoscales", "King Armah"], answer: 1 },
      { q: "14. Who were the group of Syrian monks who came to Aksum in the late 5th century and translated the Bible into Ge'ez?", options: ["The Jesuits", "The Nine Saints", "The Coptic Patriarchs", "The Franciscans"], answer: 1 },
      { q: "15. Which Zagwe ruler is renowned for commissioning the construction of the eleven monolithic rock-hewn churches at Roha (Lalibela)?", options: ["Mara Takla Haymanot", "King Lalibela", "Yimrehana Krestos", "Na'akueto La'ab"], answer: 1 },

      // Unit 4: The Middle Ages and Early Modern World, c. 500 to 1750s
      { q: "16. What was the capital city of the Eastern Roman (Byzantine) Empire?", options: ["Rome", "Constantinople", "Antioch", "Ravenna"], answer: 1 },
      { q: "17. In European feudal society, what was the land granted by a lord to a vassal in exchange for military service called?", options: ["Manor", "Fief", "Guild", "Serfdom"], answer: 1 },
      { q: "18. The Renaissance, meaning 'rebirth' of classical Greek and Roman learning, first began in which European country?", options: ["England", "France", "Italy", "Germany"], answer: 2 },
      { q: "19. Who initiated the Protestant Reformation in 1517 by posting his Ninety-Five Theses in Wittenberg, Germany?", options: ["John Calvin", "Martin Luther", "Henry VIII", "Erasmus"], answer: 1 },
      { q: "20. Which Portuguese navigator was the first European to reach India by sailing around the southern tip of Africa in 1498?", options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Bartholomeu Dias"], answer: 2 },

      // Unit 5: Peoples and States of Africa to 1500
      { q: "21. The wealth and power of the ancient West African empires of Ghana, Mali, and Songhai depended heavily on:", options: ["Trans-Atlantic slave trade", "Trans-Saharan trade in gold and salt", "Indian Ocean spice trade", "Copper mining in Katanga"], answer: 1 },
      { q: "22. Which ruler of the Mali Empire made a famous pilgrimage to Mecca in 1324 and turned Timbuktu into a center of Islamic scholarship?", options: ["Sundiata Keita", "Mansa Musa", "Askia Muhammad", "Sonni Ali"], answer: 1 },
      { q: "23. Along the East African coast, the blending of Bantu and Arab cultures gave rise to which distinct language and trading civilization?", options: ["Hausa", "Swahili", "Zulu", "Berber"], answer: 1 },
      { q: "24. Great Zimbabwe, famous for its massive mortarless stone enclosures, prospered primarily through trade in gold and ivory with:", options: ["West African kingdoms", "Swahili coastal city-states like Kilwa and Sofala", "Mediterranean Europe", "Ancient Egypt"], answer: 1 },

      // Unit 6: Africa and the Outside World: 1500–1880s
      { q: "25. In the Triangular Trade across the Atlantic, what was the brutal middle leg carrying enslaved Africans to the Americas called?", options: ["The Silk Road", "The Middle Passage", "The Cape Route", "The Great Trek"], answer: 1 },
      { q: "26. Which Dutch East India Company settlement established in 1652 became the starting point of European colonization in South Africa?", options: ["Natal", "Transvaal", "Cape Colony", "Orange Free State"], answer: 2 },
      { q: "27. Which European country was the first to officially abolish the slave trade in 1807 and later campaigned to suppress it at sea?", options: ["Portugal", "Spain", "Great Britain", "France"], answer: 2 },

      // Unit 7: States, Principalities, Population Movements in Ethiopia, 13th to Mid-16th Century
      { q: "28. Who overthrew the Zagwe dynasty in 1270 and restored the so-called 'Solomonic' dynasty?", options: ["Amda Seyon", "Yekuno Amlak", "Zara Yaqob", "Dawit I"], answer: 1 },
      { q: "29. What was the mobile royal court system used by medieval Ethiopian emperors instead of a permanent capital city?", options: ["Gult system", "Roving (mobile) capitals", "Zemene Mesafint", "Ketema system"], answer: 1 },
      { q: "30. What was the primary underlying cause of the conflicts between the Christian Highland Kingdom and the Muslim Sultanates (Ifat and Adal)?", options: ["Disputes over grazing land in Tigray", "Rivalry over control of the lucrative Zeila trade routes", "Alliance with the Portuguese", "Conflicts with the Ottoman Empire"], answer: 1 },
      { q: "31. Which leader of the Sultanate of Adal defeated Emperor Lebna Dengel at the Battle of Shimbra Kure in 1529?", options: ["Sultan Badlay", "Imam Ahmad ibn Ibrahim al-Ghazi (Ahmad Gragn)", "Emir Nur ibn Mujahid", "Mahfuz"], answer: 1 },
      { q: "32. In the traditional Oromo Gadaa system, how many years does each generation grade (Luba) remain in power before transferring authority?", options: ["4 years", "5 years", "8 years", "12 years"], answer: 2 },

      // Unit 8: Political, Social and Economic Processes in Ethiopia, Mid-16th to Mid-19th Century
      { q: "33. Which Ethiopian emperor converted to Catholicism in 1622 under Jesuit influence, sparking a bloody civil war before abdicating in 1632?", options: ["Emperor Gelawdewos", "Emperor Susenyos", "Emperor Minas", "Emperor Iyasu I"], answer: 1 },
      { q: "34. Emperor Fasiladas established Gondar as a permanent capital in 1636 and adopted which foreign policy toward Europeans?", options: ["Open alliance with Spain", "Closed-door policy after expelling the Jesuits", "Military pact with Portugal", "Free trade agreement with Britain"], answer: 1 },
      { q: "35. Which period in Ethiopian history (1769–1855) was characterized by the weakening of central imperial authority and rivalry among regional warlords?", options: ["The Gondarine Golden Age", "Zemene Mesafint (Era of the Princes)", "The Zagwe Period", "The Aksumite Decline"], answer: 1 },
      { q: "36. Which powerful southern Ethiopian kingdom was ruled by kings bearing the title 'Tato' and was protected by deep defensive trenches?", options: ["Kingdom of Wolaita", "Kingdom of Kafa", "Kingdom of Jimma", "Sultanate of Harar"], answer: 1 },

      // Unit 9: The Age of Revolutions, 1750s to 1815
      { q: "37. In which country did the Industrial Revolution begin in the mid-18th century due to abundant coal, iron, capital, and colonial markets?", options: ["France", "Germany", "Great Britain", "United States"], answer: 2 },
      { q: "38. Who drafted the American Declaration of Independence adopted on July 4, 1776?", options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln"], answer: 1 },
      { q: "39. Which event on July 14, 1789 marked the symbolic beginning of the French Revolution?", options: ["The Tennis Court Oath", "The Storming of the Bastille", "The Execution of Louis XVI", "The Battle of Waterloo"], answer: 1 },

    ]
  },
  {
    id: "geography",
    title: "Geography (ጂኦግራፊ)",
    desc: "The Earth, climate, landforms and Ethiopia's environment.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9Geography",
    chapters: [
      { title: "Unit 1: Geological History & Topography of Ethiopia", note: "Location, size, shape, and major landforms of Ethiopia." },
      { title: "Unit 2: Climate of Ethiopia", note: "Agro-climatic zones (Dega, Woina Dega, Kolla)." }
    ],
    quiz: [
          // Unit 1: Geological History and Topography of Ethiopia
      { q: "1. During which geological era were the Basement Complex rocks (the oldest rocks in Ethiopia) formed?", options: ["Paleozoic Era", "Mesozoic Era", "Precambrian Era", "Cenozoic Era"], answer: 2 },
      { q: "2. Which major geological event occurred during the Cenozoic Era and shaped the present-day topography of Ethiopia?", options: ["Marine transgression and regression", "Formation of the Great East African Rift Valley and Trappean lava series", "Denudation and peneplanation", "Formation of coal deposits"], answer: 1 },
      { q: "3. What is the highest peak in Ethiopia, located in the Simien Mountains?", options: ["Mount Batu", "Mount Tullu Dimtu", "Mount Ras Dashen", "Mount Guna"], answer: 2 },
      { q: "4. Which part of Ethiopia is the lowest depression, lying about 125 meters below sea level?", options: ["Ogaden Basin", "Dallol (Afar) Depression", "Gambella Lowlands", "Borena Lowlands"], answer: 1 },
      { q: "5. Which major river drainage system in Ethiopia drains westward into the Mediterranean Sea via Sudan and Egypt?", options: ["The Rift Valley Drainage System", "The Southeastern Drainage System", "The Western (Mediterranean) Drainage System", "The Awash Inland Basin"], answer: 2 },

      // Unit 2: Climate of Ethiopia
      { q: "6. Which traditional agro-climatic zone of Ethiopia lies between 1,500 m and 2,300 m above sea level and supports the majority of the population and crop production?", options: ["Kolla", "Woina Dega", "Dega", "Wurch"], answer: 1 },
      { q: "7. Which factor is the primary control of temperature distribution across different parts of Ethiopia?", options: ["Distance from the sea", "Altitude (elevation)", "Ocean currents", "Longitude"], answer: 1 },
      { q: "8. Which wind system brings the main summer (Kiremt) rainfall to most parts of Ethiopia?", options: ["Northeast Trade Winds", "Equatorial Westerlies (Guinea Monsoon)", "Southeast Monsoon", "Polar Easterlies"], answer: 1 },
      { q: "9. Which region of Ethiopia receives year-round rainfall with no distinct dry season?", options: ["The Afar Lowlands", "The Southwestern Highlands (e.g., Gore, Mizan Teferi)", "The Tigray Plateau", "The Ogaden Region"], answer: 1 },
      { q: "10. What does the acronym 'ITCZ' stand for in climatology?", options: ["International Tropical Climate Zone", "Inter-Tropical Convergence Zone", "Internal Temperature Control Zone", "Inter-Continental Thermal Current"], answer: 1 },

      // Unit 3: Natural Resource Base of Ethiopia
      { q: "11. Which major soil type of Ethiopia is characterized by high clay content, shrinks and cracks when dry, and becomes sticky and waterlogged when wet?", options: ["Nitosols", "Vertisols", "Fluvisols", "Yermosols"], answer: 1 },
      { q: "12. Which river is the most extensively utilized for irrigation and hydroelectric power generation within Ethiopia's Rift Valley?", options: ["Abay River", "Awash River", "Baro River", "Tekeze River"], answer: 1 },
      { q: "13. Which Ethiopian lake is the largest in terms of surface area and serves as the source of the Blue Nile (Abay)?", options: ["Lake Ziway", "Lake Abaya", "Lake Tana", "Lake Chamo"], answer: 2 },
      { q: "14. Which national park in Ethiopia is famous for protecting endemic Afroalpine species such as the Walia Ibex and Gelada Baboon?", options: ["Awash National Park", "Simien Mountains National Park", "Nechisar National Park", "Omo National Park"], answer: 1 },
      { q: "15. Why are Ethiopia's rivers often referred to as the 'Water Tower of Northeast Africa'?", options: ["Because they are all navigable year-round", "Because major rivers originate in the Ethiopian highlands and flow to neighboring countries", "Because Ethiopia has the largest number of artificial reservoirs", "Because rainfall is uniform across all lowlands"], answer: 1 },

      // Unit 4: Population and Demographic Characteristics of Ethiopia
      { q: "16. What does a broad-based population pyramid for Ethiopia indicate?", options: ["A declining population with a large elderly group", "A high birth rate and a very large proportion of young dependents", "Zero population growth", "More males than females in older age groups"], answer: 1 },
      { q: "17. How is the 'Crude Birth Rate (CBR)' defined?", options: ["Total births divided by women of childbearing age", "Number of live births per 1,000 people in a given year", "Difference between births and deaths", "Total number of children a woman bears in her lifetime"], answer: 1 },
      { q: "18. Which region of Ethiopia has the highest population density?", options: ["Afar Region", "Somali Region", "Central and Southern Highlands (e.g., Sidama, Central Ethiopia)", "Benishangul-Gumuz Region"], answer: 2 },
      { q: "19. What is the primary cause of rapid rural-to-urban migration in Ethiopia?", options: ["Excessive job opportunities in rural areas", "Push factors like land shortage in rural areas and pull factors like jobs and services in cities", "Government laws forcing farmers to move", "Decline in urban populations"], answer: 1 },
      { q: "20. Which demographic measure indicates the number of non-working dependents (ages 0–14 and 65+) supported by every 100 working-age people (15–64)?", options: ["Sex ratio", "Age dependency ratio", "Fertility rate", "Life expectancy"], answer: 1 },

      // Unit 5: Major Economic and Cultural Activities in Ethiopia
      { q: "21. Which economic sector employs the largest percentage of Ethiopia's labor force and contributes significantly to export earnings?", options: ["Heavy manufacturing", "Agriculture", "Mining", "Information technology"], answer: 1 },
      { q: "22. Which Ethiopian export commodity is the leading source of foreign exchange earnings?", options: ["Gold", "Coffee", "Textiles", "Cut flowers"], answer: 1 },
      { q: "23. Which mode of transport is most dominant for moving passengers and freight internally across Ethiopia?", options: ["Water transport", "Road transport", "Pipeline transport", "Rail transport"], answer: 1 },
      { q: "24. Which of the following is a UNESCO World Heritage cultural site in Ethiopia?", options: ["Bale Mountains", "Rock-Hewn Churches of Lalibela", "Lake Langano", "Sof Omar Caves"], answer: 1 },

      // Unit 6 & 7: Map Reading, GIS, and Contemporary Geographic Issues
      { q: "25. On a topographic map, what do closely spaced contour lines indicate?", options: ["A flat plain", "A steep slope", "A gentle slope", "A deep lake"], answer: 1 },
      { q: "26. If the scale of a map is 1:50,000, what actual ground distance is represented by 4 cm on the map?", options: ["0.5 km", "2 km", "20 km", "200 km"], answer: 1 },
      { q: "27. What does the acronym 'GIS' stand for in modern geography?", options: ["Global Internet System", "Geographic Information System", "Geological Investigation Survey", "General Index Scale"], answer: 1 },
      { q: "28. Which major environmental issue in the Ethiopian highlands is accelerated by deforestation and overgrazing on steep slopes?", options: ["Salinization", "Severe soil erosion and land degradation", "Acid rain", "Tsunamis"], answer: 1 },
      { q: "29. Which renewable energy source accounts for over 90% of Ethiopia's electricity generation?", options: ["Coal power", "Hydroelectric power", "Nuclear energy", "Natural gas"], answer: 1 },
      { q: "30. Which soil conservation practice involves building stepped horizontal embankments across hilly farmland to slow down water runoff?", options: ["Monocropping", "Terracing", "Slash-and-burn farming", "Overcultivation"], answer: 1 }

    ]
  },
  {
    id: "it",
    title: "Information Technology (IT)",
    desc: "Computer systems, digital logic, networking and programming.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9IT",
    chapters: [
      { title: "Unit 1: Organization of Files & Computer Systems", note: "Hardware components, software types, and analog vs. digital systems." },
      { title: "Unit 2: Computer Networks", note: "LAN, MAN, WAN, network topologies, and internet security." }
    ],
    quiz: [
           // Unit 1: Organization of Files
      { q: "1. Which of the following best defines a computer file?", options: ["A physical storage drive inside the CPU", "A collection of related data or information stored under a single name on a storage device", "An operating system utility program", "A hardware cable connecting the monitor"], answer: 1 },
      { q: "2. What is the main purpose of file extensions such as .docx, .xlsx, and .mp4?", options: ["To encrypt the file with a password", "To identify the file format and associate it with the appropriate application software", "To compress the file size automatically", "To show the date the file was deleted"], answer: 1 },
      { q: "3. Which file management operation moves a file from its original folder to a new folder without leaving a duplicate in the original location?", options: ["Copy and Paste", "Cut and Paste", "Save As", "Rename"], answer: 1 },
      { q: "4. Which file system is standard for modern Windows operating systems and supports large file sizes and file-level security permissions?", options: ["FAT16", "NTFS", "ISO 9660", "CDFS"], answer: 1 },
      { q: "5. What happens to a file when you delete it using 'Shift + Delete' in Windows?", options: ["It is moved to the Recycle Bin", "It is permanently deleted without going to the Recycle Bin", "It is hidden from view", "It is compressed into a ZIP archive"], answer: 1 },

      // Unit 2: Computer Network
      { q: "6. Which type of computer network connects devices within a single building, school, or office?", options: ["WAN (Wide Area Network)", "MAN (Metropolitan Area Network)", "LAN (Local Area Network)", "PAN (Personal Area Network)"], answer: 2 },
      { q: "7. Which networking device forwards data packets between different computer networks (such as connecting a home LAN to the Internet)?", options: ["Hub", "Repeater", "Router", "Modem"], answer: 2 },
      { q: "8. Which guided transmission medium uses pulses of light to transmit data at very high speeds over long distances with minimal interference?", options: ["Twisted-pair cable", "Coaxial cable", "Fiber-optic cable", "Bluetooth"], answer: 2 },
      { q: "9. In which network topology are all devices connected to a single central switch or hub?", options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"], answer: 2 },
      { q: "10. What does the acronym 'IP' stand for in IP address?", options: ["Internal Program", "Internet Protocol", "Interface Port", "Information Packet"], answer: 1 },

      // Unit 3: Application Software
      { q: "11. Which feature in a Word Processor allows you to automatically generate personalized letters or labels for a list of recipients?", options: ["Track Changes", "Mail Merge", "Word Count", "Page Break"], answer: 1 },
      { q: "12. In a Spreadsheet (such as Microsoft Excel), every formula must begin with which symbol?", options: ["#", "@", "=", "&"], answer: 2 },
      { q: "13. Which spreadsheet function calculates the arithmetic mean of numbers in cells A1 through A10?", options: ["=SUM(A1:A10)", "=AVERAGE(A1:A10)", "=COUNT(A1:A10)", "=MEAN(A1:A10)"], answer: 1 },
      { q: "14. In a Spreadsheet, what does the cell reference '$B$2' represent?", options: ["Relative cell reference", "Absolute cell reference", "Mixed cell reference", "External worksheet link"], answer: 1 },
      { q: "15. Which feature in Presentation software (such as PowerPoint) controls the visual effect when moving from one slide to the next?", options: ["Slide Animation", "Slide Transition", "Slide Master", "Notes Pane"], answer: 1 },

      // Unit 4: Image Processing and Multimedia
      { q: "16. What is the smallest single point or picture element that makes up a digital raster image?", options: ["Vector", "Pixel", "Frame", "Byte"], answer: 1 },
      { q: "17. How do vector graphics differ from raster (bitmap) graphics?", options: ["Vector graphics use pixels and lose quality when zoomed in", "Vector graphics use mathematical paths and can be scaled infinitely without losing sharpness", "Vector graphics are only used for photographs", "Vector graphics cannot store color information"], answer: 1 },
      { q: "18. Which image file format supports transparent backgrounds and lossless compression?", options: ["JPEG (.jpg)", "PNG (.png)", "BMP (.bmp)", "RAW (.raw)"], answer: 1 },
      { q: "19. What does 'Multimedia' refer to in Information Technology?", options: ["Using multiple computer monitors at once", "The integration of text, audio, images, animation, and video into a single digital presentation", "Connecting multiple printers to one network", "Running multiple operating systems"], answer: 1 },
      { q: "20. In digital video, what does 'FPS' stand for?", options: ["Files Per Second", "Frames Per Second", "Formats Per Screen", "Frequency Per Signal"], answer: 1 },

      // Unit 5: Information and Computer Security
      { q: "21. Which of the following is NOT one of the three core principles of the CIA Triad in information security?", options: ["Confidentiality", "Integrity", "Availability", "Accessibility"], answer: 3 },
      { q: "22. What type of malicious software disguises itself as a legitimate, useful program to trick users into installing it?", options: ["Worm", "Trojan Horse", "Spyware", "Adware"], answer: 1 },
      { q: "23. What is 'Phishing' in cybersecurity?", options: ["Scanning a network for open ports", "Sending fraudulent emails or messages pretending to be from reputable sources to steal sensitive data", "Encrypting a user's files and demanding payment", "Overloading a server with traffic"], answer: 1 },
      { q: "24. Which security practice requires a user to provide two or more verification factors (such as a password plus an SMS code) to access an account?", options: ["Data Encryption", "Two-Factor Authentication (2FA)", "Disk Defragmentation", "Firewall Filtering"], answer: 1 },
      { q: "25. What is the primary role of a Firewall in a computer network?", options: ["To cool down the processor", "To monitor and control incoming and outgoing network traffic based on predetermined security rules", "To speed up internet download rates", "To remove duplicate files from the hard drive"], answer: 1 },

      // Unit 6: Fundamentals of Programming
      { q: "26. What is an 'Algorithm' in computer programming?", options: ["A programming language like Python", "A step-by-step finite set of instructions designed to solve a specific problem", "A syntax error in source code", "A computer hardware component"], answer: 1 },
      { q: "27. In a flowchart, which geometric symbol is used to represent a decision (Yes/No or True/False condition)?", options: ["Oval (Terminal)", "Rectangle (Process)", "Diamond", "Parallelogram (Input/Output)"], answer: 2 },
      { q: "28. What is 'Pseudocode'?", options: ["Machine code written in binary (0s and 1s)", "An informal, plain-language description of the steps in an algorithm that resembles programming logic", "A virus disguised as code", "Compiled executable software"], answer: 1 },
      { q: "29. Which program translator converts the entire high-level source code into machine code at once before execution?", options: ["Interpreter", "Compiler", "Assembler", "Debugger"], answer: 1 },
      { q: "30. In programming, which control structure repeats a block of code multiple times as long as a specified condition remains true?", options: ["Sequence structure", "Selection (If-Else) structure", "Iteration (Loop) structure", "Variable declaration"], answer: 2 }

    ]
  },
  {
    id: "citizenship",
    title: "Citizenship (የዜግነት ትምህርት)",
    desc: "Ethical values, democracy, human rights and responsibilities.",
    pdfUrl: "https://google.com",
    roomName: "FasikawTechGrade9Citizenship",
    chapters: [
      { title: "Unit 1: Ethical Values", note: "Honesty, integrity, fairness, empathy, and civic responsibility." },
      { title: "Unit 2: Digital Technology Culture", note: "Digital etiquette, online privacy, and responsible social media use." }
    ],
    quiz: [
          // Unit 1: Ethical Values
      { q: "1. Which of the following best defines 'ethics'?", options: ["Government laws enforced by the police", "Moral principles and standards that govern right and wrong human conduct", "Traditional dances and cultural festivals", "Economic rules for international trade"], answer: 1 },
      { q: "2. What does the ethical value of 'integrity' require a citizen to do?", options: ["Change principles depending on who is watching", "Consistently uphold honesty and strong moral principles even when no one is watching", "Prioritize personal gain over public interest", "Follow peer pressure without questioning"], answer: 1 },
      { q: "3. Which ethical value involves treating all individuals fairly and giving each person what they deserve without bias?", options: ["Nepotism", "Fairness (Justice)", "Selfishness", "Intolerance"], answer: 1 },
      { q: "4. Keeping promises, arriving on time, and fulfilling assigned duties demonstrate which moral virtue?", options: ["Reliability and Responsibility", "Arrogance", "Negligence", "Complacency"], answer: 0 },

      // Unit 2: The Culture of Using Digital Technology
      { q: "5. What is 'digital citizenship'?", options: ["Buying the most expensive smartphone", "The responsible, ethical, and safe use of technology and the internet", "Creating fake social media accounts", "Using the internet only for gaming"], answer: 1 },
      { q: "6. Which behavior is an example of cyberbullying?", options: ["Sharing verified educational articles online", "Sending repeated threatening, insulting, or humiliating messages through digital platforms", "Reporting a hacked account to administrators", "Using strong passwords for email protection"], answer: 1 },
      { q: "7. Why is it important to verify information on social media before sharing it?", options: ["To gain more followers quickly", "To prevent the spread of misinformation, fake news, and social conflict", "Because all online posts are automatically true", "To use up mobile data faster"], answer: 1 },
      { q: "8. Copying someone else's digital work, article, or research without giving proper credit is known as:", options: ["Encryption", "Plagiarism (Copyright infringement)", "Cybersecurity", "Digital literacy"], answer: 1 },

      // Unit 3: Constitution and Constitutionalism
      { q: "9. What is a 'constitution'?", options: ["A temporary speech given by a mayor", "The supreme fundamental law of a state that defines government powers and citizens' rights", "A list of school rules for students", "An international trade contract"], answer: 1 },
      { q: "10. How does 'constitutionalism' differ from merely having a written constitution?", options: ["Constitutionalism means the government actually obeys and is limited by the constitution in practice", "Constitutionalism allows leaders to ignore the law during elections", "They have no connection to each other", "Constitutionalism applies only to non-democratic states"], answer: 0 },
      { q: "11. A constitution whose provisions are compiled into a single, formal legal document is classified as:", options: ["Unwritten constitution", "Written (codified) constitution", "Flexible custom", "Oral tradition"], answer: 1 },
      { q: "12. Which principle ensures that no single branch of government (legislative, executive, judiciary) becomes too powerful?", options: ["Absolute monarchy", "Separation of powers and checks and balances", "One-party rule", "Centralized dictatorship"], answer: 1 },

      // Unit 4: Understanding Indigenous Knowledge
      { q: "13. Which statement best describes 'indigenous knowledge'?", options: ["Knowledge imported exclusively from foreign laboratories", "Local, traditional knowledge developed by communities over generations through interaction with their environment", "Modern computer programming languages", "Rules written by international organizations"], answer: 1 },
      { q: "14. Which indigenous Ethiopian institution among the Gurage people is widely known for resolving disputes and maintaining community order?", options: ["Iqub", "Yajoka (Gordanna)", "Iddir", "Debo"], answer: 1 },
      { q: "15. How does the Konso people's indigenous terracing system contribute to sustainable development?", options: ["It accelerates soil erosion", "It conserves soil and water on steep slopes for sustainable agriculture", "It destroys local biodiversity", "It replaces all modern farming tools"], answer: 1 },
      { q: "16. What is the primary role of traditional mutual-aid associations like 'Iddir' and 'Iqub' in Ethiopian society?", options: ["Political campaigning", "Social solidarity, financial support, and community welfare", "Exporting agricultural goods", "Enforcing criminal court sentences"], answer: 1 },

      // Unit 5: Multiculturalism in Ethiopia
      { q: "17. What does 'multiculturalism' promote in a diverse society like Ethiopia?", options: ["Forcing all groups to adopt a single culture and language", "Mutual respect, recognition, and peaceful coexistence among diverse cultural, linguistic, and religious groups", "Isolating different communities from one another", "Judging other cultures as inferior"], answer: 1 },
      { q: "18. Judging another person's culture solely by the values and standards of one's own culture is called:", options: ["Cultural relativism", "Ethnocentrism", "Tolerance", "Inclusiveness"], answer: 1 },
      { q: "19. Which attitude is essential for building 'unity in diversity'?", options: ["Prejudice and stereotyping", "Tolerance, dialogue, and mutual respect", "Discrimination based on background", "Cultural assimilation by force"], answer: 1 },

      // Unit 6: National Unity through Diversity
      { q: "20. What is the foundation of sustainable national unity in a diverse country?", options: ["Suppressing minority languages", "Equality, shared civic values, justice, and respect for diversity", "Economic dominance of one region", "Eliminating regional identities"], answer: 1 },
      { q: "21. Which of the following is a civic duty that strengthens national unity?", options: ["Evading taxes", "Respecting the national flag, obeying constitutional laws, and participating in community development", "Spreading divisive rumors", "Damaging public infrastructure"], answer: 1 },

      // Unit 7: Problem-Solving Skills
      { q: "22. What is the very first step in effective problem-solving?", options: ["Implementing a random solution immediately", "Identifying and clearly defining the root cause of the problem", "Blaming others for the issue", "Ignoring the problem until it disappears"], answer: 1 },
      { q: "23. Which skill involves analyzing information objectively, questioning assumptions, and evaluating evidence before making a decision?", options: ["Blind obedience", "Critical thinking", "Emotional reaction", "Guesswork"], answer: 1 },
      { q: "24. During group problem-solving, what is the purpose of 'brainstorming'?", options: ["Criticizing every idea immediately", "Generating a wide range of possible solutions freely before evaluating them", "Allowing only one person to speak", "Avoiding any new ideas"], answer: 1 },
      { q: "25. After implementing a chosen solution to a community problem, what should be the final step?", options: ["Forgetting about the project", "Evaluating the outcome to see if the problem was effectively resolved", "Refusing to accept feedback", "Starting a new conflict"], answer: 1 },

      // Unit 8: Ethiopia's Foreign Relations in East Africa
      { q: "26. What is the primary goal of Ethiopia's foreign policy toward neighboring East African countries?", options: ["Territorial expansion through war", "Mutual peace, regional security, economic integration, and good neighborliness", "Isolating itself from regional organizations", "Controlling all neighboring ports by force"], answer: 1 },
      { q: "27. Which regional intergovernmental organization headquartered in Djibouti works on peace, security, and development in the Horn of Africa?", options: ["ECOWAS", "IGAD (Intergovernmental Authority on Development)", "SADC", "ASEAN"], answer: 1 },
      { q: "28. Why is Addis Ababa often referred to as the 'Diplomatic Capital of Africa'?", options: ["Because it has the largest seaport in Africa", "Because it hosts the headquarters of the African Union (AU) and UNECA", "Because it is the oldest city in the world", "Because all African currencies are printed there"], answer: 1 },
      { q: "29. How do cross-border infrastructure projects (such as electric power grids and railways between Ethiopia, Djibouti, and Kenya) benefit East Africa?", options: ["They increase trade barriers", "They promote regional economic integration, trade, and shared prosperity", "They weaken diplomatic ties", "They reduce energy access"], answer: 1 },
      { q: "30. Which peaceful method of resolving international disputes involves a neutral third party helping conflicting states reach a voluntary agreement?", options: ["Economic blockade", "Mediation and diplomacy", "Armed intervention", "Propaganda campaigns"], answer: 1 }

    ]
  }
];

let currentSubject = null;
let completedSubjects = JSON.parse(localStorage.getItem("grade9_completed")) || [];
function copyInviteLink() {
 const siteLink = "https://fasikawwubet27-bit." + "github.io/grade9/";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(siteLink).then(function () {
      alert("የመማሪያ ክፍሉ ሊንክ ኮፒ ሆኗል!");
    });
  } else {
    prompt("ይህንን ሊንክ ኮፒ አድርገህ ላክላቸው፦", siteLink);
  }
}

function joinLiveSlot(slotNum) {
  if (!currentSubject) return;
  const slotEl = document.getElementById("slot-" + slotNum);
  if (slotEl) slotEl.style.display = "none";
  const liveFrame = document.getElementById("live-class-frame");
  if (liveFrame) {
    liveFrame.src = ["https:", "", "vdo." + "ninja", "?room=" + currentSubject.roomName + "&wc&grid&autostart"].join("/");
  }
}


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

  if (typeof updateProgressBar === "function") updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}
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

  if (typeof updateProgressBar === "function") updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}
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

  if (typeof updateProgressBar === "function") updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}
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

  if (typeof updateProgressBar === "function") updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}
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

  if (typeof updateProgressBar === "function") updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}
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

  if (typeof updateProgressBar === "function") updateProgressBar();
}

function filterSubjects() {
  const query = document.getElementById("subject-search").value.toLowerCase();
  const filtered = subjectsData.filter(function (s) {
    return s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
  });
  renderSubjects(filtered);
}
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

  if (typeof updateProgressBar === "function") updateProgressBar();
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

  const pdfMap = {
    math: "1AvFMyOefgvJiGI1Oku8-JlSOBkTrlSDh",
    english: "1xUcLOKFcR2SWly_VpufZU6raQQ2pRPy1",
    physics: "1c6DzqiYrjTErZvKLh3Z2X2vWyTIwAU7p",
    chemistry: "1L0Cb36Y5jf-7KKxiv3m5pUINI0lB0dY5",
    biology: "1Pu6QzwQGYLdMld9ZCXxxfP40FEvEJfF4",
    history: "1Fp-eCjICHa42ucHH_7wvetv6x5fLS90S",
    geography: "1A712d6fF8lOmaVP4NdTqDlUp2FvVGdxS",
    it: "1lc1oJpN5o7D1SNodIn-AbY3OIE4EtBQT",
    citizenship: "1RBDpChEa8rjcGOF_q0-UkQE4D2KcWDGZ"
  };

  const fileId = pdfMap[currentSubject.id];
  const pdfLink = ["https:", "", "drive." + "google." + "com", "file", "d", fileId, "preview"].join("/");
  const meetUrl = ["https:", "", "meet." + "google." + "com", "new"].join("/");
  const chatUrl = "https://vdo." + "ninja/?room=" + currentSubject.roomName + "&wc&autostart";

  const badge = document.getElementById("modal-badge");
  if (badge) badge.textContent = "Grade 9 Live Classroom";

  const title = document.getElementById("modal-title");
  if (title) title.textContent = currentSubject.title;

  const splitPdf = document.getElementById("split-pdf-frame");
  if (splitPdf) splitPdf.src = pdfLink;

  const fullPdf = document.getElementById("full-pdf-frame");
  if (fullPdf) fullPdf.src = pdfLink;

  const openTab = document.getElementById("pdf-open-tab");
  if (openTab) openTab.href = pdfLink;

  const meetLink = document.getElementById("subject-meet-link");
  if (meetLink) meetLink.href = meetUrl;

  const chatLink = document.getElementById("subject-chat-link");
  if (chatLink) chatLink.href = chatUrl;
const textChat = document.getElementById("live-text-chat");
if (textChat) {
  textChat.src = ["https:", "", "tlk." + "io", currentSubject.roomName].join("/");
}

  const liveLink = document.getElementById("subject-live-link");
  if (liveLink) liveLink.href = chatUrl;

  const liveFrame = document.getElementById("live-class-frame");
  if (liveFrame) liveFrame.src = chatUrl;
  const textChat = document.getElementById("live-text-chat");
if (textChat) textChat.src = "https://tlk.io" + currentSubject.roomName;

  document.getElementById("lesson-modal").classList.add("active");
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
