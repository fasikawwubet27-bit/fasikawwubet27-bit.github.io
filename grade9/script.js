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
    pdfUrl: "pdfs/chemistry.pdf",
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
    pdfUrl: "pdfs/biology.pdf",
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
