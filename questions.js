const allQuestions = {
    "Reproduction in Organisms": {
        "Lifespan": [
            {
                question: "Identify the CORRECT sequence of life span for the following organisms as per NCERT data:",
                options: ["Crow < Crocodile < Parrot < Tortoise", "Butterfly < Crow < Crocodile < Parrot", "Fruit fly < Rice plant < Rose < Banyan tree", "Crocodile < Horse < Parrot < Tortoise"],
                answer: "Butterfly < Crow < Crocodile < Parrot",
                explanation: "Sequence: Butterfly (1-2 weeks) < Crow (15 yrs) < Crocodile (60 yrs) < Parrot (140 yrs)."
            },
            {
                question: "Assertion (A): Reproduction is not a defining feature of living organisms. Reason (R): Mules and sterile worker bees do not reproduce, yet they have a specific life span.",
                options: ["Both A & R true, R is correct explanation", "Both true, R not explanation", "A true, R false", "A false, R true"],
                answer: "Both A & R true, R is correct explanation",
                explanation: "Reproduction continuity ke liye zaroori hai, par 'living' hone ki condition nahi (Mules zinda hain par sterile hain)."
            },
            {
                question: "Which of the following has the maximum life span?",
                options: ["Banyan Tree", "Tortoise", "Parrot", "Elephant"],
                answer: "Banyan Tree",
                explanation: "Banyan trees can live for over 200-300 years, which is more than tortoises (100-150 years) and parrots (140 years)."
            },
            {
                question: "What is the approximate life span of a Crocodile?",
                options: ["20 years", "60 years", "100 years", "150 years"],
                answer: "60 years",
                explanation: "The average life span of a crocodile is approximately 60 years as per NCERT data."
            },
            {
                question: "The period from birth to the natural death of an organism represents its:",
                options: ["Life cycle", "Biological cycle", "Life span", "Gestation period"],
                answer: "Life span",
                explanation: "Life span is defined as the period from an organism's birth until its natural death."
            },
            {
                question: "Examine Statement I: A vast number of species exist for thousands of years due to reproduction. Statement II: No individual is immortal, natural death is a certainty for all without exception.",
                options: ["I correct, II incorrect", "I incorrect, II correct", "Both correct", "Both incorrect"],
                answer: "I correct, II incorrect",
                explanation: "Statement II galat hai kyunki single-celled organisms (Amoeba) immortal hote hain."
            },
            {
                question: "Select the set of organisms that are NOT immortal but have a very long life span:",
                options: ["Amoeba, Bacteria, Euglena", "Banyan tree, Tortoise, Parrot", "Peepal tree, Amoeba, Tortoise", "Banyan tree, Parrot, Bacteria"],
                answer: "Banyan tree, Tortoise, Parrot",
                explanation: "Banyan, Tortoise aur Parrot lambi life jeete hain par unki natural death hoti hai."
            },
            {
                question: "Assertion (A): Life span is not necessarily correlated with the size of organisms. Reason (R): A mango tree has a much shorter life span as compared to a peepal tree.",
                options: ["Both A & R true, R is correct explanation", "Both true, R not explanation", "A true, R false", "A false, R true"],
                answer: "Both A & R true, R is correct explanation",
                explanation: "Mango aur Peepal ka size similar hai par life span mein bahut antar hai."
            },
            {
                question: "Match the following: (1) Rose (2) Rice (3) Cow (4) Fruit Fly with (i) 20-25y (ii) 5-7y (iii) 3-4m (iv) 30 days",
                options: ["1-ii, 2-iii, 3-i, 4-iv", "1-ii, 2-i, 3-iii, 4-iv", "1-iii, 2-ii, 3-i, 4-iv", "1-iv, 2-iii, 3-i, 4-ii"],
                answer: "1-ii, 2-iii, 3-i, 4-iv",
                explanation: "NCERT diagram data: Rose (5-7y), Rice (3-4m), Cow (20-25y), Fruit Fly (~30 days)."
            },
            {
                question: "Choose the ODD one out w.r.t. life span:",
                options: ["Parrot - 140 years", "Crocodile - 60 years", "Tortoise - 100-150 years", "Crow - 1-2 weeks"],
                answer: "Crow - 1-2 weeks",
                explanation: "Crow ki life span 15 years hoti hai, 1-2 weeks Butterfly ki hoti hai."
            },
            {
                question: "Life span of an Elephant is approximately:",
                options: ["20-30 years", "60-90 years", "100-120 years", "150-200 years"],
                answer: "60-90 years",
                explanation: "The average life span of an African or Asian elephant is 60 to 90 years."
            },
            {
                question: "Which organism has a life span of about 60 years, similar to a Crocodile?",
                options: ["Horse", "Elephant", "Parrot", "Dog"],
                answer: "Horse",
                explanation: "Horses and crocodiles both have an average life span of approximately 60 years."
            },
            {
                question: "Approximate life span of a Dog is:",
                options: ["5-10 years", "20-30 years", "40-50 years", "60-70 years"],
                answer: "20-30 years",
                explanation: "The general biological life span recorded for dogs is up to 20-30 years."
            },
            {
                question: "Identify the life span of a Butterfly:",
                options: ["1-2 days", "1-2 weeks", "1-2 months", "1-2 years"],
                answer: "1-2 weeks",
                explanation: "Butterflies have a very short adult life span of about 1 to 2 weeks."
            },
            {
                question: "The approximate life span of a Fruit fly (Drosophila) is:",
                options: ["1 week", "2 weeks", "1 month", "2 months"],
                answer: "2 weeks",
                explanation: "Drosophila completes its life cycle and lives for about 2 weeks."
            },
            {
                question: "Life span of a Banyan tree can be more than:",
                options: ["50 years", "100 years", "200 years", "500 years"],
                answer: "200 years",
                explanation: "Banyan trees are among the longest-living trees, often surviving 200-300+ years."
            },
            {
                question: "No individual is immortal, EXCEPT:",
                options: ["Single-celled organisms", "Banyan tree", "Tortoise", "Elephant"],
                answer: "Single-celled organisms",
                explanation: "Because they divide and live on as daughter cells, they have no natural death."
            },
            {
                question: "Natural death is absent in:",
                options: ["Bacteria reproducing by binary fission", "Multicellular organisms", "Perennial plants", "All of the above"],
                answer: "Bacteria reproducing by binary fission",
                explanation: "Unicellular organisms that divide by fission are considered biologically immortal."
            },
            {
                question: "Death of every individual is certain, but we say there is no natural death in single-celled organisms because:",
                options: ["They are microscopic", "They reproduce by binary fission", "Parent body is divided among offspring", "Both B and C"],
                answer: "Both B and C",
                explanation: "The division process ensures the parent material continues in the next generation."
            },
            {
                question: "The life span of a Rose plant is:",
                options: ["2-3 years", "5-7 years", "15-20 years", "50 years"],
                answer: "5-7 years",
                explanation: "As per the NCERT illustrative data, the rose plant's life span is 5-7 years."
            }
        ],
        "Asexual Reproduction": [
            {
                question: "Consider: (i) It is uniparental without exception. (ii) Clone is morphologically and genetically identical. (iii) Cell division is the mode of reproduction in Monera. (iv) It is most common in higher plants.",
                options: ["(ii) and (iii) only", "(i), (ii) and (iii)", "(ii), (iii) and (iv)", "All of the above"],
                answer: "(ii) and (iii) only",
                explanation: "(i) galat hai kyunki 'without exception' extreme hai. (iv) galat hai kyunki higher plants mein sexual common hai."
            },
            {
                question: "How many are NOT sub-aerial vegetative propagules? (Runner, Rhizome, Offset, Sucker, Tuber, Bulbil, Stolon)",
                options: ["2", "3", "4", "5"],
                answer: "3",
                explanation: "Rhizome (Underground), Tuber (Underground), aur Bulbil (Aerial) hain. Baki sub-aerial hain."
            },
            {
                question: "Binary fission is seen in which of the following organisms?",
                options: ["Amoeba and Paramecium", "Yeast and Hydra", "Hydra and Amoeba", "None of these"],
                answer: "Amoeba and Paramecium",
                explanation: "Both are unicellular organisms that reproduce by dividing into two equal halves."
            },
            {
                question: "In Yeast, the division is unequal and small extensions are produced called:",
                options: ["Spores", "Buds", "Fragments", "Zoospores"],
                answer: "Buds",
                explanation: "Yeast reproduces through budding, where a small bud remains attached initially."
            },
            {
                question: "Which of the following is a non-motile asexual spore found in Penicillium?",
                options: ["Zoospore", "Conidia", "Gemmules", "Buds"],
                answer: "Conidia",
                explanation: "Penicillium produces non-motile spores called Conidia."
            },
            {
                question: "In which of the following pairs, BOTH plants propagate through the same type of vegetative structure?",
                options: ["Agave and Oxalis", "Ginger and Banana", "Bryophyllum and Begonia", "Potato and Sweet Potato"],
                answer: "Ginger and Banana",
                explanation: "Ginger and Banana dono Rhizome se propagate karte hain."
            },
            {
                question: "Identify the correct statement regarding 'Encystation' in Amoeba:",
                options: ["Occurs during favorable conditions", "Secretes two-layered wall", "Withdraws pseudopodia before secreting wall", "Results in zoospores"],
                answer: "Withdraws pseudopodia before secreting wall",
                explanation: "Amoeba withdraws pseudopodia and secretes a three-layered hard cyst wall during unfavorable conditions."
            },
            {
                question: "Match: (P) Potato (Q) Ginger (R) Bryophyllum with (i) Adventitious buds on leaves (ii) Eyes (iii) Nodes",
                options: ["P-ii, Q-iii, R-i", "P-i, Q-ii, R-iii", "P-iii, Q-i, R-ii", "P-ii, Q-i, R-iii"],
                answer: "P-ii, Q-iii, R-i",
                explanation: "Potato-Eyes, Ginger-Nodes, Bryophyllum-Leaf buds."
            },
            {
                question: "Assertion (A): Offspring of asexual reproduction are called clones. Reason (R): Meiotic division and syngamy are completely absent.",
                options: ["Both A & R true, R is correct explanation", "Both true, R not explanation", "A true, R false", "A false, R true"],
                answer: "Both A & R true, R is correct explanation",
                explanation: "Meiosis aur fusion na hona hi identical genetic structure (clone) banne ka karan hai."
            },
            {
                question: "The 'Eyes' of the potato tuber are:",
                options: ["Root buds", "Shoot buds", "Axillary buds", "Extra-axillary buds"],
                answer: "Axillary buds",
                explanation: "Potato tuber is a modified stem, and eyes are nodes containing axillary buds."
            },
            {
                question: "Consider Eichhornia: It is a (i) plant introduced for (ii). It reproduces through (iii).",
                options: ["Marine, Flowers, Runners", "Aquatic, Flowers, Offsets", "Aquatic, Fruits, Offsets", "Terrestrial, Leaves, Rhizomes"],
                answer: "Aquatic, Flowers, Offsets",
                explanation: "It is an aquatic plant (Terror of Bengal) introduced for beautiful flowers, using offsets for propagation."
            },
            {
                question: "Internal buds produced by sponges are called:",
                options: ["Conidia", "Gemmules", "Zoospores", "Buds"],
                answer: "Gemmules",
                explanation: "Sponges produce internal asexual buds called gemmules."
            },
            {
                question: "In Protists and Monerans, the cell division itself is:",
                options: ["Growth phase", "A mode of reproduction", "Meiotic process", "None of these"],
                answer: "A mode of reproduction",
                explanation: "In single-celled organisms, division equals the creation of a new individual."
            },
            {
                question: "Vegetative propagation in Agave is:",
                options: ["Rhizome", "Bulbil", "Offset", "Sucker"],
                answer: "Bulbil",
                explanation: "Agave uses fleshy floral buds called bulbils for reproduction."
            },
            {
                question: "Fragmented organism can regenerate into a full body in:",
                options: ["Amoeba", "Hydra", "Yeast", "Penicillium"],
                answer: "Hydra",
                explanation: "Hydra shows fragmentation/regeneration where pieces grow into new organisms."
            },
            {
                question: "Which of the following is a motile asexual spore?",
                options: ["Conidia", "Zoospore", "Gemmule", "Bud"],
                answer: "Zoospore",
                explanation: "Zoospores are microscopic motile (flagellated) structures."
            },
            {
                question: "In yeast, the division is (i) and small (ii) are produced.",
                options: ["Equal, Buds", "Unequal, Buds", "Equal, Spores", "Unequal, Spores"],
                answer: "Unequal, Buds",
                explanation: "NCERT: 'In yeast, the division is unequal and small buds are produced'."
            },
            {
                question: "Under unfavorable conditions, Amoeba shows:",
                options: ["Binary fission", "Budding", "Encystation", "Fragmentation"],
                answer: "Encystation",
                explanation: "Encystation is the survival step before multiple fission (sporulation)."
            },
            {
                question: "Encysted Amoeba produces many minute amoebae or pseudopodiospores by:",
                options: ["Simple Binary Fission", "Multiple Fission", "Exogenous Budding", "Fragmentation"],
                answer: "Multiple Fission",
                explanation: "Multiple fission within the cyst produces numerous offspring."
            },
            {
                question: "Vegetative propagation in Mint occurs through:",
                options: ["Runner", "Sucker", "Rhizome", "Offset"],
                answer: "Sucker",
                explanation: "Mint (Podina) uses suckers, which are sub-aerial stem modifications."
            }
        ],
        "Sexual Reproduction": [
            {
                question: "Which of the following statements is INCORRECT regarding Strobilanthus kunthiana?",
                options: ["Perennial plant flowering once in 12y", "Belongs to monocarpic category", "Mass flowering creates blue stretch", "Shows clear-cut phases throughout 12y cycle"],
                answer: "Shows clear-cut phases throughout 12y cycle",
                explanation: "NCERT states that in perennials, vegetative/reproductive phases are not clear-cut."
            },
            {
                question: "Inter-flowering period is observed in:",
                options: ["All annual plants", "Only biennial plants", "Polycarpic perennial plants", "Monocarpic perennial plants"],
                answer: "Polycarpic perennial plants",
                explanation: "Inter-flowering occurs between two flowering seasons in plants that flower repeatedly (Mango/Apple)."
            },
            {
                question: "A plant completes vegetative phase in year 1 and flowers in year 2 before dying. This plant is:",
                options: ["Monocarpic Annual", "Monocarpic Biennial", "Polycarpic Perennial", "Polycarpic Biennial"],
                answer: "Monocarpic Biennial",
                explanation: "Biennial (2 years) + Monocarpic (Flowers once and dies)."
            },
            {
                question: "Which plant flowers only once in its lifetime, generally after 50-100 years?",
                options: ["Strobilanthus kunthiana", "Bamboo species", "Neelakurinji", "Mango tree"],
                answer: "Bamboo species",
                explanation: "Bamboo flowers once in 50-100 years and then dies."
            },
            {
                question: "Oestrus cycle is found in which of the following animals?",
                options: ["Humans", "Monkeys", "Cows and Sheep", "Apes"],
                answer: "Cows and Sheep",
                explanation: "Non-primate mammals show Oestrus; primates show Menstrual cycle."
            },
            {
                question: "The fusion of male and female gametes is called:",
                options: ["Gametogenesis", "Syngamy", "Embryogenesis", "Parthenogenesis"],
                answer: "Syngamy",
                explanation: "Syngamy is the critical fusion of haploid gametes to form a zygote."
            },
            {
                question: "Statement I: Juvenile phase is of same duration in all. Statement II: End of juvenile phase marks beginning of reproductive phase.",
                options: ["Both correct", "Both incorrect", "I correct, II incorrect", "I incorrect, II correct"],
                answer: "I incorrect, II correct",
                explanation: "Duration of juvenile phase varies across different species."
            },
            {
                question: "What is common between Bamboo and Strobilanthus kunthiana?",
                options: ["Both are annuals", "Both flower once in 12 years", "Both are monocarpic perennials", "Both show inter-flowering period"],
                answer: "Both are monocarpic perennials",
                explanation: "Both live for many years (perennial) but flower only once (monocarpic)."
            },
            {
                question: "Which of the following is the 'vital link' that ensures continuity between generations?",
                options: ["Zygote", "Gametes", "Juvenile phase", "Senescence"],
                answer: "Zygote",
                explanation: "Zygote is the single cell link between the parent and the offspring."
            },
            {
                question: "Monocarpic plants flower:",
                options: ["Once every year", "Once in their lifetime", "Twice in their lifetime", "Continuously after maturity"],
                answer: "Once in their lifetime",
                explanation: "Mono (One) Carpic (Fruit/Flower); they flower once and die."
            },
            {
                question: "Sexual reproduction involves formation of male and female gametes by:",
                options: ["Same individual only", "Different individuals only", "Same or different individuals", "None of above"],
                answer: "Same or different individuals",
                explanation: "Can be from one (bisexual) or two (unisexual) parents."
            },
            {
                question: "Compared to asexual reproduction, sexual reproduction is:",
                options: ["Elaborate, complex and slow", "Simple, quick and elaborate", "Complex, fast and simple", "Slow, simple and quick"],
                answer: "Elaborate, complex and slow",
                explanation: "NCERT core description of sexual reproduction."
            },
            {
                question: "In some plants, flowering occurs more than once. Such plants are:",
                options: ["Generally Biennials", "Polycarpic Perennials", "Monocarpic Perennials", "Ephemerals"],
                answer: "Polycarpic Perennials",
                explanation: "Plants like Mango/Apple that flower every season after reaching maturity."
            },
            {
                question: "Sexual reproduction results in offspring that are:",
                options: ["Identical to parents", "Not identical to parents or amongst themselves", "Identical to each other", "Copies of father"],
                answer: "Not identical to parents or amongst themselves",
                explanation: "Fusion of different gametes leads to genetic variation."
            },
            {
                question: "The period of growth to reach maturity in animals is called:",
                options: ["Vegetative phase", "Juvenile phase", "Senescence", "Incubation period"],
                answer: "Juvenile phase",
                explanation: "Juvenile is for animals; vegetative is the equivalent term for plants."
            },
            {
                question: "The end of reproductive phase is measured by:",
                options: ["Slowing of metabolism", "Onset of senescence", "Leaf yellowing", "All of the above"],
                answer: "All of the above",
                explanation: "These are markers of transition into the old-age/senescence phase."
            },
            {
                question: "Which of these is an 'Annual' plant?",
                options: ["Mango", "Wheat", "Carrot", "Neelakurinji"],
                answer: "Wheat",
                explanation: "Wheat completes its entire life cycle within one single season."
            },
            {
                question: "Sexual reproduction is a slow process because of:",
                options: ["Use of Mitosis", "Formation and fusion of gametes", "Absence of variations", "Uniparental nature"],
                answer: "Formation and fusion of gametes",
                explanation: "Gamete formation and syngamy are complex, time-consuming events."
            },
            {
                question: "In which of the following cases are gametes produced by mitosis?",
                options: ["Diploid organisms", "Haploid organisms", "Both", "Mitosis never produces gametes"],
                answer: "Haploid organisms",
                explanation: "Organisms that are already 'n' must use mitosis to produce 'n' gametes."
            },
            {
                question: "Which of the following is a hermaphrodite (Bisexual)?",
                options: ["Cockroach", "Earthworm", "Human", "Honey bee"],
                answer: "Earthworm",
                explanation: "Earthworms have both male and female organs in one body."
            }
        ],
        "Reproduction": [
            {
                question: "Match sexuality: (P) Marchantia (Q) Chara (R) Sweet Potato (S) Date Palm with (i) Monoecious (ii) Dioecious (iii) Bisexual (iv) Unisexual",
                options: ["P-ii, Q-i, R-iii, S-ii", "P-iv, Q-iii, R-i, S-ii", "P-ii, Q-i, R-iii, S-iv", "P-i, Q-ii, R-iv, S-iii"],
                answer: "P-ii, Q-i, R-iii, S-ii",
                explanation: "Marchantia-Dioecious, Chara-Monoecious, Sweet Potato-Bisexual flower, Date Palm-Dioecious."
            },
            {
                question: "How many have HAPLOID parental body? (Monera, Fungi, Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms)",
                options: ["3", "4", "5", "6"],
                answer: "4",
                explanation: "Monera, Fungi, Algae, and Bryophytes are haploid; others are diploid."
            },
            {
                question: "Choose INCORRECT regarding gamete transfer: (A) Water is medium for Algae (B) Pollen are carriers in seed plants (C) In many fungi, both are motile (D) Male gametes produced in high numbers.",
                options: ["A", "B", "C", "D"],
                answer: "C",
                explanation: "Only 'a few' algae/fungi have both motile gametes; usually only the male is motile."
            },
            {
                question: "Parthenogenesis is observed in:",
                options: ["Honey bees, Rotifers, Lizards", "Honey bees, Turkey, Monkeys", "Rotifers, Snakes, Alligators", "Honey bees, Rotifers, all Birds"],
                answer: "Honey bees, Rotifers, Lizards",
                explanation: "These specific groups show offspring development from unfertilized eggs."
            },
            {
                question: "Match post-fertilization: (P) Ovary (Q) Ovule (R) Ovary wall with (i) Pericarp (ii) Fruit (iii) Seed",
                options: ["P-ii, Q-iii, R-i", "P-i, Q-ii, R-iii", "P-iii, Q-ii, R-i", "P-ii, Q-i, R-iii"],
                answer: "P-ii, Q-iii, R-i",
                explanation: "Ovary becomes Fruit, Ovule becomes Seed, Wall becomes Pericarp."
            },
            {
                question: "Which of the following is NOT a vegetative propagule in plants?",
                options: ["Runner", "Rhizome", "Antherozoid", "Offset"],
                answer: "Antherozoid",
                explanation: "Antherozoids are male gametes (sexual); others are asexual propagules."
            },
            {
                question: "Development of a new organism without fertilization is called:",
                options: ["Syngamy", "Parthenogenesis", "Gametogenesis", "Pollination"],
                answer: "Parthenogenesis",
                explanation: "Development of egg into an embryo without sperm fusion."
            },
            {
                question: "Water hyacinth is also known as:",
                options: ["Gift of India", "Terror of Bengal", "Green Gold", "Miracle plant"],
                answer: "Terror of Bengal",
                explanation: "Invasive weed that drains oxygen and kills fish in Bengal water bodies."
            },
            {
                question: "In which of the following, the parent body is completely lost?",
                options: ["Unicellular organisms", "Multicellular organisms", "Both", "None"],
                answer: "Unicellular organisms",
                explanation: "Parent cell divides into two, losing its own individual identity."
            },
            {
                question: "In external fertilization, the major disadvantage is:",
                options: ["Small number of gametes", "Offspring vulnerable to predators", "Internal syngamy", "No water required"],
                answer: "Offspring vulnerable to predators",
                explanation: "Offspring outside the body are easily eaten before reaching adulthood."
            },
            {
                question: "Embryogenesis involves:",
                options: ["Mitosis only", "Differentiation only", "Both Mitosis and Differentiation", "Meiosis"],
                answer: "Both Mitosis and Differentiation",
                explanation: "Cells must both multiply (mitosis) and become specialized (differentiation)."
            },
            {
                question: "In viviparous animals, survival chances are greater due to:",
                options: ["Many offspring", "Proper care and protection", "Hard shell", "External fertilization"],
                answer: "Proper care and protection",
                explanation: "Internal development in mammals provides safety and nutrition."
            },
            {
                question: "The 'Staminate' flower represents:",
                options: ["Bisexual", "Unisexual male", "Unisexual female", "Neutral"],
                answer: "Unisexual male",
                explanation: "A flower having only stamens (male reproductive part)."
            },
            {
                question: "Choose CORRECT set of 'Monoecious' plants:",
                options: ["Papaya/Date Palm", "Cucurbits/Coconuts", "Marchantia/Chara", "Mulberry/Papaya"],
                answer: "Cucurbits/Coconuts",
                explanation: "Both produce male and female flowers on the same individual plant."
            },
            {
                question: "Ploidy of (i) Meiocyte, (ii) Gamete, (iii) Zygote, (iv) Endosperm is:",
                options: ["2n, n, 2n, 3n", "n, 2n, n, 3n", "2n, 2n, 2n, 3n", "n, n, 2n, 2n"],
                answer: "2n, n, 2n, 3n",
                explanation: "Standard ploidy levels in angiosperm reproduction."
            },
            {
                question: "In fungi/algae, zygote develops a thick wall and undergoes (i) before germination.",
                options: ["Rapid division", "Rest", "Growth", "Meiosis immediately"],
                answer: "Rest",
                explanation: "Resting period helps survive unfavorable environmental conditions."
            },
            {
                question: "Isogametes are found in:",
                options: ["Fucus", "Cladophora", "Homo sapiens", "All"],
                answer: "Cladophora",
                explanation: "Gametes are morphologically identical in Cladophora."
            },
            {
                question: "Meiocytes are cells that undergo:",
                options: ["Mitosis", "Meiosis", "Amitosis", "No division"],
                answer: "Meiosis",
                explanation: "Meiocytes are specialized diploid cells destined to become haploid gametes."
            },
            {
                question: "Ophioglossum (fern) chromosome number in meiocyte is:",
                options: ["46", "126", "630", "1260"],
                answer: "1260",
                explanation: "One of the highest recorded chromosome counts in plants."
            },
            {
                question: "The term 'Monoecious' is used to describe:",
                options: ["Unisexual", "Bisexual", "Asexual", "None"],
                answer: "Bisexual",
                explanation: "Both sex organs/flowers on the same plant body."
            }
        ]
    },

    // ==========================================================
    // CHAPTER 2: SEXUAL REPRODUCTION IN FLOWERING PLANTS (80 Qs)
    // ==========================================================
    "Sexual Reproduction in Flowering Plants": {
        "Flower Structure": [
            { question: "Which of the following is the correct sequence of layers in anther wall from outside to inside?", options: ["Epidermis, Endothecium, Tapetum, Middle layers", "Epidermis, Middle layers, Endothecium, Tapetum", "Epidermis, Endothecium, Middle layers, Tapetum", "Endothecium, Epidermis, Middle layers, Tapetum"], answer: "Epidermis, Endothecium, Middle layers, Tapetum", explanation: "NCERT sequence: Epidermis (1) -> Endothecium (1) -> Middle layers (2-3) -> Tapetum (1)." },
            { question: "Assertion (A): Tapetum is the innermost layer of microsporangium. Reason (R): Cells of tapetum possess dense cytoplasm and generally have more than one nucleus.", options: ["Both A & R correct, R is explanation", "Both A & R correct, R not explanation", "A correct, R wrong", "Both wrong"], answer: "Both A & R correct, R not explanation", explanation: "Dono statements sahi hain, par multinucleated hona innermost hone ka reason nahi hai. Reason nourishment se juda hai." },
            { question: "How many meiotic divisions are required to produce 1000 pollen grains?", options: ["1000", "500", "250", "125"], answer: "250", explanation: "1 PMC -> 4 pollen. So, 1000/4 = 250." },
            { question: "At which stage do 60% of angiosperms shed their pollen?", options: ["2-celled", "3-celled", "4-celled", "Single-celled"], answer: "2-celled", explanation: "60% mein Vegetative + Generative cell stage par dehiscence hota hai." },
            { question: "The generative cell of a pollen grain is:", options: ["Large with irregular nucleus", "Small and floats in vegetative cell cytoplasm", "Responsible for providing nutrition", "Formed after meiosis in microspore"], answer: "Small and floats in vegetative cell cytoplasm", explanation: "Generative cell spindle-shaped hota hai aur vegetative cell ke cytoplasm mein float karta hai." },
            { question: "Sporopollenin is absent in:", options: ["Exine", "Intine", "Germ pore", "Both (B) and (C)"], answer: "Both (B) and (C)", explanation: "Intine pectin-cellulose ki bani hai aur Germ pore par exine absent hoti hai." },
            { question: "Select the incorrect statement:", options: ["Pollen grains of Parthenium cause allergy", "Pollen can be stored at -196°C", "Tapetum helps in dehiscence of anther", "Exine shows fascinating patterns"], answer: "Tapetum helps in dehiscence of anther", explanation: "Dehiscence Endothecium karta hai, Tapetum nourishment deta hai." },
            { question: "What is the ploidy of PMC and Microspore respectively?", options: ["n, 2n", "2n, n", "2n, 2n", "n, n"], answer: "2n, n", explanation: "PMC diploid hai, Microspore (gametophyte) haploid hai." },
            { question: "Pollen tablets are used for:", options: ["Fertilization", "Food supplements", "Killing weeds", "Reducing allergies"], answer: "Food supplements", explanation: "Pollen nutrients mein rich hote hain, athletes inhen use karte hain." },
            { question: "The proximal end of the filament is attached to:", options: ["Anther", "Thalamus or Petal", "Connective", "Ovary"], answer: "Thalamus or Petal", explanation: "NCERT Direct Line: Proximal end thalamus ya petal se juda hota hai." }
        ],
        "Microsporogenesis": [
            { question: "The process of formation of microspores from PMC through meiosis is:", options: ["Megasporogenesis", "Microsporogenesis", "Spermatogenesis", "Microgametogenesis"], answer: "Microsporogenesis", explanation: "PMC se microspore banna microsporogenesis kehlata hai." },
            { question: "Statement 1: Each cell of sporogenous tissue is a potential PMC. Statement 2: Microspores are arranged in a triad.", options: ["Both correct", "Both wrong", "S1 correct, S2 wrong", "S1 wrong, S2 correct"], answer: "S1 correct, S2 wrong", explanation: "Microspores 'Tetrad' (4) mein arrange hote hain, triad mein nahi." },
            { question: "As anthers mature and dehydrate, the microspores:", options: ["Degenerate", "Dissociate and develop into pollen", "Undergo meiosis II", "Fuse to form zygote"], answer: "Dissociate and develop into pollen", explanation: "Dehydration se tetrad se pollen alag ho jate hain." },
            { question: "How many mitosis occur inside a pollen grain to reach 3-celled stage?", options: ["1", "2", "3", "0"], answer: "2", explanation: "1st Mitosis: Veg + Gen cell. 2nd Mitosis: Gen cell -> 2 male gametes." },
            { question: "The nucleus of the vegetative cell is:", options: ["Circular", "Large and irregular", "Spindle shaped", "Absent"], answer: "Large and irregular", explanation: "NCERT Page 23: 'Large irregularly shaped nucleus'." },
            { question: "Pollen wall 'Exine' is highly resistant because of:", options: ["Cellulose", "Lignin", "Sporopollenin", "Pectin"], answer: "Sporopollenin", explanation: "Sporopollenin duniya ka sabse resistant organic material hai." },
            { question: "In 40% angiosperms, generative cell divides to form 2 male gametes:", options: ["Before pollen is shed", "After pollination on stigma", "Inside ovary", "Inside ovule"], answer: "Before pollen is shed", explanation: "40% mein 3-celled stage par hi shedding hoti hai." },
            { question: "Which cell is bigger in a 2-celled pollen grain?", options: ["Generative cell", "Vegetative cell", "Both equal", "Male gamete"], answer: "Vegetative cell", explanation: "Vegetative cell bada hota hai aur food store karta hai." },
            { question: "Germ pores are essential for:", options: ["Oxygen entry", "Pollen tube emergence", "Water absorption", "Dehiscence"], answer: "Pollen tube emergence", explanation: "Germ pore se hi pollen tube bahar nikalti hai." },
            { question: "Pollen viability in Rosaceae members is:", options: ["30 min", "1 hour", "Several months", "1 day"], answer: "Several months", explanation: "Wheat/Rice mein 30 min, Solanaceae/Rosaceae mein months tak." }
        ],
        "Megasporogenesis": [
            { question: "In a typical anatropous ovule, the micropyle is:", options: ["In line with chalaza", "At 90 degree to hilum", "Close to hilum", "Opposite to hilum"], answer: "Close to hilum", explanation: "Inverted ovule hone ki wajah se micropyle hilum ke paas aa jata hai." },
            { question: "The basal part of the ovule is represented by:", options: ["Micropyle", "Hilum", "Chalaza", "Funicle"], answer: "Chalaza", explanation: "Chalaza basal part hai, micropyle apex part hai." },
            { question: "What is the ploidy of Nucellus and MMC?", options: ["n, n", "2n, 2n", "2n, n", "n, 2n"], answer: "2n, 2n", explanation: "Dono diploid sporophytic tissue hain." },
            { question: "How many functional megaspores are formed after meiosis in MMC?", options: ["1", "2", "3", "4"], answer: "1", explanation: "4 bante hain par 3 degenerate ho jate hain (Monosporic)." },
            { question: "The 8-nucleate stage of embryo sac is reached after:", options: ["3 meiotic divisions", "3 free-nuclear mitotic divisions", "2 mitotic divisions", "1 meiosis + 1 mitosis"], answer: "3 free-nuclear mitotic divisions", explanation: "Megaspore nucleus 3 baar divide hota hai (1->2->4->8)." },
            { question: "A mature embryo sac is:", options: ["8-nucleate, 8-celled", "7-nucleate, 7-celled", "8-nucleate, 7-celled", "7-nucleate, 8-celled"], answer: "8-nucleate, 7-celled", explanation: "6 cells + 1 central cell (jisne 2 nuclei hold kiye hain)." },
            { question: "Filiform apparatus is found in:", options: ["Egg cell", "Antipodals", "Synergids", "Central cell"], answer: "Synergids", explanation: "Synergids ke micropylar tip par filiform apparatus hota hai." },
            { question: "Antipodals are located at the:", options: ["Micropylar end", "Chalazal end", "Center", "Funicle"], answer: "Chalazal end", explanation: "3 antipodal cells chalaza end par hote hain." },
            { question: "Assertion (A): In angiosperms, female gametophyte is called embryo sac. Reason (R): It contains the egg apparatus.", options: ["Both A & R correct, R is explanation", "Both A & R correct, R not explanation", "A correct, R wrong", "Both wrong"], answer: "Both A & R correct, R is explanation", explanation: "Female gametes carry karne wala structure gametophyte hota hai." },
            { question: "The function of filiform apparatus is to:", options: ["Nourish egg", "Guide pollen tube", "Form seed coat", "Prevent self-polination"], answer: "Guide pollen tube", explanation: "Ye chemical signals se pollen tube entry guide karta hai." }
        ],
        "Pollination": [
            { question: "Transfer of pollen from anther to stigma of another flower of the SAME plant:", options: ["Autogamy", "Geitonogamy", "Xenogamy", "Cleistogamy"], answer: "Geitonogamy", explanation: "Functionally cross, genetically self." },
            { question: "Cleistogamous flowers ensure:", options: ["High genetic variation", "Guaranteed seed set even without pollinators", "Cross pollination", "Evolution"], answer: "Guaranteed seed set even without pollinators", explanation: "Closed flowers hone ki wajah se pollinators ki zarurat nahi padti." },
            { question: "Xenogamy is the only type of pollination which:", options: ["Is functionally self", "Brings genetically different pollen to stigma", "Happens in Commelina", "Requires no agent"], answer: "Brings genetically different pollen to stigma", explanation: "Isme pollen doosre plant se aata hai." },
            { question: "Which is NOT a feature of wind-pollinated flowers?", options: ["Light/non-sticky pollen", "Well exposed stamens", "Large feathery stigma", "Many ovules in each ovary"], answer: "Many ovules in each ovary", explanation: "Usually single ovule hota hai (e.g. Corn cob)." },
            { question: "In Vallisneria, pollination occurs:", options: ["Underwater", "On water surface", "By insects", "By wind"], answer: "On water surface", explanation: "Female flower lambi stalk se surface par aata hai (Epihydrophily)." },
            { question: "Pollen robbers are animals that:", options: ["Carry pollen to other plants", "Consume nectar without pollination", "Protect the flower", "Eat seeds"], answer: "Consume nectar without pollination", explanation: "Ye sirf reward lete hain, kaam (pollination) nahi karte." },
            { question: "Self-incompatibility is a:", options: ["Mechanical barrier", "Genetic mechanism", "Type of emasculation", "Parthenocarpy"], answer: "Genetic mechanism", explanation: "Apne hi pollen ki germination rokna genetic control hai." },
            { question: "Papaya is a dioecious plant, it prevents:", options: ["Autogamy only", "Both autogamy and geitonogamy", "Only xenogamy", "Nothing"], answer: "Both autogamy and geitonogamy", explanation: "Male aur Female plant hi alag hain, toh self/same plant pollination impossible hai." },
            { question: "Emasculation is required in:", options: ["Unisexual female flower", "Bisexual flower for artificial hybridization", "Male flower", "Cleistogamous flower"], answer: "Bisexual flower for artificial hybridization", explanation: "Self-pollination rokne ke liye anthers nikalna zaruri hai." },
            { question: "Bagging of flowers is done to:", options: ["Protect from wind", "Prevent unwanted pollen from reaching stigma", "Attract insects", "Increase nectar"], answer: "Prevent unwanted pollen from reaching stigma", explanation: "Stigma ko unwanted pollen se bachane ke liye bag lagate hain." }
        ],
        "Pre-fertilisation": [
            { question: "How many nuclei participate in double fertilization?", options: ["3", "4", "5", "2"], answer: "5", explanation: "2 male gametes + 1 egg + 2 polar nuclei = 5." },
            { question: "Synchrony in pollen release and stigma receptivity is a must for:", options: ["Xenogamy", "Autogamy", "Geitonogamy", "All of these"], answer: "Autogamy", explanation: "Self-pollination ke liye timing match hona zaruri hai." },
            { question: "Which of these is a biotic agent for pollination?", options: ["Wind", "Water", "Lemur", "Gravity"], answer: "Lemur", explanation: "NCERT mention karti hai primates (Lemurs) ko pollinators ke taur par." },
            { question: "The rewards for insect pollinators are usually:", options: ["Scent and Color", "Nectar and Pollen", "Protection and Home", "Water"], answer: "Nectar and Pollen", explanation: "Nectar aur Pollen hi asli 'khaana' (reward) hai." },
            { question: "Yucca and Moth relation is an example of:", options: ["Commensalism", "Obligate Mutualism", "Parasitism", "Predation"], answer: "Obligate Mutualism", explanation: "Ek doosre ke bina life cycle puri nahi kar sakte." },
            { question: "In many aquatic plants like Water Lily, pollination is by:", options: ["Water", "Wind or Insects", "Bats", "Snails"], answer: "Wind or Insects", explanation: "Phool paani ke bahar hota hai, isliye water pollination nahi hoti." },
            { question: "Pollen-pistil interaction involves:", options: ["Physical contact only", "Chemical dialogue", "No recognition", "Mechanical force"], answer: "Chemical dialogue", explanation: "Chemicals decide karte hain compatibility." },
            { question: "Artificial hybridization involves:", options: ["Bagging -> Emasculation", "Emasculation -> Bagging -> Pollination", "Pollination -> Bagging", "No bagging"], answer: "Emasculation -> Bagging -> Pollination", explanation: "Sahi sequence yahi hai taaki contamination zero rahe." },
            { question: "Intine is a:", options: ["Thin and continuous layer", "Thick and discontinuous", "Layer with germ pores", "Made of sporopollenin"], answer: "Thin and continuous layer", explanation: "Exine discontinuous hoti hai, intine continuous." },
            { question: "Tapetum is polyploid because of:", options: ["Meiosis", "Endomitosis/Free nuclear division", "Fertilization", "Mutation"], answer: "Endomitosis/Free nuclear division", explanation: "Isme nuclei divide hote hain par cell nahi." }
        ],
        "Post-fertilisation": [
            { question: "Which of the following is the first cell of the sporophytic generation?", options: ["Spore", "Gamete", "Zygote", "PEN"], answer: "Zygote", explanation: "Fertilization se bana zygote (2n) sporophyte ki shuruaat hai." },
            { question: "Double fertilization is unique to:", options: ["Gymnosperms", "Angiosperms", "Pteridophytes", "Bryophytes"], answer: "Angiosperms", explanation: "Sirf flowering plants mein hi 2 gametes ka fusion hota hai." },
            { question: "Endosperm development precedes embryo development because:", options: ["It is smaller", "To provide assured nutrition", "It is triploid", "It has no role"], answer: "To provide assured nutrition", explanation: "Nutrition pehle taiyar hona chahiye embryo ke liye." },
            { question: "The white kernel of coconut is:", options: ["Free nuclear endosperm", "Cellular endosperm", "Embryo", "Seed coat"], answer: "Cellular endosperm", explanation: "Paani free-nuclear hai, malai (kernel) cellular hai." },
            { question: "Assertion (A): In pea, seeds are non-albuminous. Reason (R): Endosperm is completely consumed.", options: ["Both A & R correct, R is explanation", "Both A & R correct, R not explanation", "A correct, R wrong", "Both wrong"], answer: "Both A & R correct, R is explanation", explanation: "Endosperm khatam ho jane par seed non-albuminous ho jata hai." },
            { question: "Perisperm is:", options: ["Part of endosperm", "Persistent nucellus", "Outer layer of seed", "Degenerated synergid"], answer: "Persistent nucellus", explanation: "Black pepper aur Beet mein nucellus bach jata hai." },
            { question: "The wall of the fruit is called:", options: ["Perisperm", "Pericarp", "Testa", "Tegmen"], answer: "Pericarp", explanation: "Ovary ki wall pericarp banti hai." },
            { question: "A false fruit is one where:", options: ["Fertilization no occur", "Thalamus contributes", "Ovary not involved", "No seeds"], answer: "Thalamus contributes", explanation: "Example: Apple, Strawberry." },
            { question: "Parthenocarpic fruits can be induced by:", options: ["Pollen", "Growth hormones (Auxins)", "Cold treatment", "Insects"], answer: "Growth hormones (Auxins)", explanation: "Hormones se bina fertilization ke fruit banta hai." },
            { question: "Integuments of ovule harden to form:", options: ["Pericarp", "Seed coat", "Endosperm", "Scutellum"], answer: "Seed coat", explanation: "Outer integument -> Testa, Inner -> Tegmen." }
        ],
        "Seed and Fruit": [
            { question: "The shield shaped cotyledon in monocots is:", options: ["Coleoptile", "Scutellum", "Coleorhiza", "Epiblast"], answer: "Scutellum", explanation: "Grass family mein single cotyledon ko scutellum kehte hain." },
            { question: "The protective sheath of radicle is:", options: ["Coleoptile", "Coleorhiza", "Testa", "Tegmen"], answer: "Coleorhiza", explanation: "Radicle -> Coleorhiza (R for R)." },
            { question: "The protective sheath of plumule is:", options: ["Coleoptile", "Coleorhiza", "Scutellum", "Pericarp"], answer: "Coleoptile", explanation: "Plumule -> Coleoptile (P for P)." },
            { question: "Dormancy in seeds is a state of:", options: ["High metabolism", "Metabolic inactivity", "Death", "Germination"], answer: "Metabolic inactivity", explanation: "Seed ka inactive state survive karne ke liye." },
            { question: "Micropyle remains in the seed as a small pore for:", options: ["Nectar release", "Entry of oxygen and water", "Pollen tube entry", "Photosynthesis"], answer: "Entry of oxygen and water", explanation: "Germination ke waqt oxygen/water yahin se jati hai." },
            { question: "The oldest viable seed Lupinus arcticus germinated after:", options: ["1000 years", "2000 years", "10,000 years", "500 years"], answer: "10,000 years", explanation: "Arctic Tundra se mila 10,000 saal purana seed." },
            { question: "Which seed showed viability of 2000 years found at Dead Sea?", options: ["Phoenix dactylifera", "Lupinus", "Wheat", "Rice"], answer: "Phoenix dactylifera", explanation: "Date palm seed found at King Herod’s palace." },
            { question: "Edible part of apple is:", options: ["Mesocarp", "Thalamus", "Endocarp", "Seed"], answer: "Thalamus", explanation: "Apple false fruit hai, thalamus khaya jata hai." },
            { question: "Banana is a:", options: ["True fruit", "False fruit", "Parthenocarpic fruit", "Drupe"], answer: "Parthenocarpic fruit", explanation: "Bina fertilization ke banta hai." },
            { question: "Seeds are advantageous for plants because:", options: ["Better dispersal", "Protection to embryo", "Dormancy", "All of these"], answer: "All of these", explanation: "Seeds evolutionarily plants ko land par survive karne mein help karte hain." }
        ],
        "Apomixis": [
            { question: "Apomixis is a form of:", options: ["Sexual reproduction", "Asexual mimicking sexual", "Parthenocarpy", "Meiosis"], answer: "Asexual mimicking sexual", explanation: "Bina fertilization ke seed banna asexual hai par mimic sexual ko karta hai." },
            { question: "In some species, diploid egg cell is formed without reduction division. This leads to:", options: ["Polyembryony", "Apomixis", "Syngamy", "Parthenogenesis"], answer: "Apomixis", explanation: "Bina meiosis ke 2n egg banna apomixis hai." },
            { question: "Occurrence of more than one embryo in a seed:", options: ["Apomixis", "Polyembryony", "Parthenocarpy", "Dichogamy"], answer: "Polyembryony", explanation: "Citrus aur Mango mein aksar hota hai." },
            { question: "Nucellar polyembryony is reported in:", options: ["Citrus", "Mango", "Both (A) and (B)", "Pea"], answer: "Both (A) and (B)", explanation: "Inme nucellar cells embryos banate hain." },
            { question: "Apomictic seeds are highly useful for:", options: ["Florists", "Hybrid seed industry", "Killing pests", "Fruit size"], answer: "Hybrid seed industry", explanation: "Farmers ko har saal hybrid seed nahi kharidna padega." },
            { question: "If a hybrid is made into apomict, there is:", options: ["No segregation of characters", "Loss of hybrid vigor", "No seed formation", "Mutation"], answer: "No segregation of characters", explanation: "Characters mix/segregate nahi honge." },
            { question: "The embryos formed from nucellar cells in polyembryony are:", options: ["Haploid", "Diploid", "Triploid", "Tetraploid"], answer: "Diploid", explanation: "Nucellus (2n) se bane hain toh diploid honge." },
            { question: "Assertion (A): Hybrids have to be produced every year. Reason (R): Seeds from hybrid plants show segregation of traits.", options: ["Both A & R correct, R is explanation", "Both A & R correct, R not explanation", "A correct, R wrong", "Both wrong"], answer: "Both A & R correct, R is explanation", explanation: "Segregation ki wajah se hybrid quality khatam ho jati hai." },
            { question: "Apomixis is seen in members of:", options: ["Asteraceae and Grasses", "Solanaceae", "Leguminosae", "Brassicaceae"], answer: "Asteraceae and Grasses", explanation: "NCERT mention karti hai Asteraceae aur Grasses ko." },
            { question: "Why are apomictic embryos genetically identical to the parent?", options: ["Fertilization", "Lack of meiosis and syngamy", "Triple fusion", "Cross pollination"], answer: "Lack of meiosis and syngamy", explanation: "Mixing na hone se copy bante hain." }
        ]
    }
};