const allQuestions = [
/* ================================== */
/* 🔹 CHAPTER 1: THE LIVING WORLD     */
/* ================================== */

// --- MORNING SHIFT (Quest 1-25) ---
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Which of the following is a defining characteristic of living organisms?",
  options: ["Growth", "Reproduction", "Response to external stimuli", "Ability to move"],
  answer: "C",
  explanation: "Growth aur reproduction non-living mein bhi ho sakte hain, par consciousness har living cell mein bina exception ke hoti hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "In binomial nomenclature, the first and second names represent respectively:",
  options: ["Genus and Species", "Order and Family", "Species and Genus", "Class and Order"],
  answer: "A",
  explanation: "ICBN ke rules ke mutabik pehla word Genus (Capital letter) aur dusra word Species (Small letter) hota hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "The label of a herbarium sheet does NOT carry information on:",
  options: ["Date of collection", "Name of collector", "Local names", "Height of the plant"],
  answer: "D",
  explanation: "Herbarium label par date, place, names (English/Local/Botanical), family aur collector ka naam hota hai, height nahi."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Which taxonomic category contains the least number of common characters?",
  options: ["Species", "Genus", "Family", "Kingdom"],
  answer: "D",
  explanation: "Jaise-jaise hum Species se Kingdom ki taraf badhte hain, common characteristics kam hoti jati hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Match the following: (i) Family - (a) Tuberosum, (ii) Kingdom - (b) Solanaceae, (iii) Species - (c) Plantae.",
  options: ["i-b, ii-c, iii-a", "i-a, ii-b, iii-c", "i-c, ii-a, iii-b", "i-b, ii-a, iii-c"],
  answer: "A",
  explanation: "Solanaceae family hai, Plantae kingdom aur tuberosum species (potato) hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Systematics refers to the:",
  options: ["Identification and classification", "Diversity of organisms and their relationship", "Taxonomy and nomenclature", "External morphology"],
  answer: "B",
  explanation: "Systematics mein identification aur nomenclature ke saath evolutionary relationships (phylogeny) ki study bhi hoti hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Genus represents:",
  options: ["An individual plant or animal", "A collection of plants or animals", "A group of closely related species", "None of these"],
  answer: "C",
  explanation: "Genus ek taxonomic group hai jisme ek ya ek se zyada related species hoti hain jinke characters common hon."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "The correctly written scientific name of Mango according to binomial nomenclature is:",
  options: ["Mangifera Indica", "Mangifera indica Car. Linn.", "Mangifera indica", "Mangifera Indica Linn."],
  answer: "C",
  explanation: "Scientific name italics mein hona chahiye, genus capital aur species small letter se start hona chahiye."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Taxon is the unit of a group of:",
  options: ["Order", "Taxonomy", "Species", "Genes"],
  answer: "B",
  explanation: "Taxon taxonomic hierarchy ki kisi bhi rank ya level (Species, Genus etc.) ko represent karta hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Which of the following is NOT a correct statement about Botanical Gardens?",
  options: ["Living plants collection", "Identification purposes", "Labels with scientific names", "In-situ conservation"],
  answer: "D",
  explanation: "Botanical gardens Ex-situ conservation hain kyunki plants ko natural habitat se bahar laya jata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "The taxonomic aid used for identification based on similarities and dissimilarities is:",
  options: ["Flora", "Keys", "Monographs", "Catalogues"],
  answer: "B",
  explanation: "Keys contrasting characters (couplets) ka use karti hain identification ke liye. Iski har statement 'Lead' kehlati hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "As we go from species to kingdom in a taxonomic hierarchy, the number of common characteristics:",
  options: ["Will decrease", "Will increase", "Remain same", "May increase or decrease"],
  answer: "A",
  explanation: "Higher categories broad hoti hain. Species mein sabse zyada specific traits hote hain, Kingdom level par bohot kam."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Which of the following 'suffixes' indicates a taxonomic category of 'family' in plants?",
  options: ["-ales", "-onae", "-aceae", "-ae"],
  answer: "C",
  explanation: "Plant taxonomy mein '-aceae' family ke liye (Solanaceae) aur '-ales' order ke liye use hota hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "The term 'New Systematics' was introduced by:",
  options: ["Bentham and Hooker", "Linnaeus", "Julian Huxley", "A.P. de Candolle"],
  answer: "C",
  explanation: "Julian Huxley ne 1940 mein New Systematics diya jo evolutionary aur cytological data ko bhi consider karta hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "An analytical taxonomic aid that uses a pair of contrasting characters is called:",
  options: ["Couplet", "Lead", "Monograph", "Manual"],
  answer: "A",
  explanation: "Key mein contrasting characters ke pair ko Couplet kehte hain, jisme se ek choose karna hota hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "ICZN stands for:",
  options: ["International Code of Zoological Nomenclature", "International Code of Zeolite Nomenclature", "International Council of Zoological Nomenclature", "Indian Code of Zoological Nomenclature"],
  answer: "A",
  explanation: "Animals ki naming ke globally accepted rules ko International Code of Zoological Nomenclature kehte hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Metabolism is defined as:",
  options: ["Only anabolic reactions", "Only catabolic reactions", "Sum total of all chemical reactions", "Growth of cells"],
  answer: "C",
  explanation: "Body mein hone wali saari anabolic aur catabolic reactions ka total sum hi metabolism hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Select the correct sequence of taxonomic categories (ascending):",
  options: ["S -> G -> O -> F -> C -> P -> K", "S -> G -> F -> O -> C -> P -> K", "K -> P -> O -> C -> F -> G -> S", "K -> C -> P -> O -> F -> G -> S"],
  answer: "B",
  explanation: "Sahi sequence hai: Species, Genus, Family, Order, Class, Phylum/Division, Kingdom."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "A group of related Genera with still less number of similarities as compared to species is:",
  options: ["Order", "Class", "Family", "Division"],
  answer: "C",
  explanation: "Genus ke baad higher category Family hoti hai jisme related genera aate hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Which of the following is a Housefly's family?",
  options: ["Musca", "Muscidae", "Diptera", "Insecta"],
  answer: "B",
  explanation: "Housefly (Musca domestica) ka genus Musca hai aur Family Muscidae hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Monographs contain information on:",
  options: ["Any one taxon", "Any one region", "Entire kingdom", "Only species"],
  answer: "A",
  explanation: "Monograph ek aisi taxonomic aid hai jo sirf kisi ek particular taxon (e.g. ek family) ki poori info deti hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "Isolated metabolic reactions in-vitro are:",
  options: ["Living things", "Non-living things", "Living reactions but not living things", "Neither living nor non-living"],
  answer: "C",
  explanation: "Test tube reactions life processes ko mimic karti hain par cellular organization na hone ki wajah se wo sirf 'living reactions' hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "For plants, scientific names are based on criteria provided in:",
  options: ["ICZN", "ICBN", "ICPN", "ICN"],
  answer: "B",
  explanation: "Plants ki naming International Code for Botanical Nomenclature (ICBN) ke rules se hoti hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "'Key' is which type of taxonomic aid?",
  options: ["Descriptive", "Analytical", "Visual", "Physical"],
  answer: "B",
  explanation: "Keys analytical hoti hain kyunki isme logical choices karke identification kiya jata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Morning",
  question: "The place where dried, pressed and preserved plant specimens are kept is:",
  options: ["Museum", "Herbarium", "Botanical Garden", "Zoo"],
  answer: "B",
  explanation: "Herbarium mein sheets par plants ko press aur dry karke system ke mutabik rakha jata hai."
},

// --- NIGHT SHIFT (Quest 26-50) ---
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Biodiversity refers to:",
  options: ["Number of humans", "Number and types of organisms", "Variety of non-living things", "Total biomass"],
  answer: "B",
  explanation: "Dharti par maujood alag-alag tarah ke organisms (1.7-1.8 million species) ko biodiversity kehte hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "What is the primary aim of nomenclature?",
  options: ["To give a name", "One name for one organism globally", "To describe habitat", "To identify collector"],
  answer: "B",
  explanation: "Nomenclature ka maksad hai ki har organism ka poori duniya mein ek hi unique scientific name ho."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Which of the following is the correct order for Humans?",
  options: ["Primata", "Hominidae", "Mammalia", "Chordata"],
  answer: "A",
  explanation: "Humans (Homo sapiens) ki Family Hominidae hai aur Order Primata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Reproduction cannot be an all-inclusive defining characteristic because:",
  options: ["All living things reproduce", "Mules/sterile bees do not reproduce", "Non-living can reproduce", "Only in multicellular"],
  answer: "B",
  explanation: "Mules aur sterile worker bees living hain par reproduce nahi karte, isliye ye absolute defining feature nahi hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Taxonomic hierarchy refers to:",
  options: ["Step-wise arrangement of all categories", "Group of taxonomists", "List of botanists", "Classification by genes"],
  answer: "A",
  explanation: "Ye ek framework hai jisme categories ko specific ascending ya descending order mein arrange kiya jata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Museums have collections of:",
  options: ["Living plants", "Living animals", "Preserved plant and animal specimens", "Only fossils"],
  answer: "C",
  explanation: "Museums mein preserved specimens ko jars ya dry forms mein study ke liye rakha jata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Identification of an organism is possible only when it is:",
  options: ["Dead", "Correctly described", "Named", "Photographed"],
  answer: "B",
  explanation: "Jab tak kisi organism ka description sahi nahi hoga, hum use identify aur name nahi kar sakte."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "The contrasting characteristics in a key are generally in a pair called:",
  options: ["Doublet", "Couplet", "Lead", "Alternate"],
  answer: "B",
  explanation: "Key ke do opposing statements ke jode ko Couplet kaha jata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Flora contains:",
  options: ["Names of animals", "Actual account of habitat and distribution of plants", "Info on one taxon", "Alphabetical list"],
  answer: "B",
  explanation: "Flora kisi specific area ke plants ka habitat aur distribution ka index hota hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Species is considered as:",
  options: ["Real basic unit of classification", "Highest unit", "Artificial unit", "None of these"],
  answer: "A",
  explanation: "Species sabse basic unit hai jisme organisms aapas mein interbreed kar sakte hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Which of the following includes Families like Convolvulaceae and Solanaceae?",
  options: ["Polymoniales", "Sapindales", "Poales", "Diptera"],
  answer: "A",
  explanation: "Floral characters ke basis par in families ko Order Polymoniales mein rakha gaya hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Felidae and Canidae are families of:",
  options: ["Cat and Dog respectively", "Dog and Cat respectively", "Lion and Tiger only", "Insects"],
  answer: "A",
  explanation: "Felidae cat family hai aur Canidae dog family hai, dono Carnivora order mein aate hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "The binomial name of Wheat is:",
  options: ["Triticum aestivum", "Mangifera indica", "Musca domestica", "Solanum tuberosum"],
  answer: "A",
  explanation: "Wheat ka scientific name Triticum aestivum hai, iska family Poaceae hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Biological names are generally written in which language?",
  options: ["English", "Latin", "Sanskrit", "German"],
  answer: "B",
  explanation: "Latin ek dead language hai, isliye meanings change nahi hote aur ye universally accept kiya gaya hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Increase in mass and increase in number of individuals are twin characteristics of:",
  options: ["Metabolism", "Growth", "Consciousness", "Organization"],
  answer: "B",
  explanation: "Living things mein mass badhna aur cells ka divide hokar number badhna dono Growth ke features hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Manuals are useful in providing information for:",
  options: ["Identification of species in an area", "Evolutionary history", "Only one genus", "Internal anatomy"],
  answer: "A",
  explanation: "Manuals kisi area mein payi jaane wali species ke names identify karne mein help karte hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Which of the following is the 'Order' of Wheat?",
  options: ["Poaceae", "Poales", "Monocotyledonae", "Angiospermae"],
  answer: "B",
  explanation: "Wheat ka Order Poales hai aur Family Poaceae hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "The sum total of chemical reactions represents:",
  options: ["Growth", "Metabolism", "Organization", "Irritability"],
  answer: "B",
  explanation: "Cell ke andar hone wali har chemical activity metabolism ke andar aati hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "'Triticum aestivum' comes under which Class?",
  options: ["Dicotyledonae", "Monocotyledonae", "Gymnospermae", "Mammalia"],
  answer: "B",
  explanation: "Wheat ek monocot plant hai, isliye iski class Monocotyledonae hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "In animals, growth is seen:",
  options: ["Throughout life", "Only up to a certain age", "Only in summers", "Never"],
  answer: "B",
  explanation: "Plants ke ulat, animals sirf ek fix age tak hi grow karte hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Who is known as the 'Darwin of the 20th century'?",
  options: ["Ernst Mayr", "Linnaeus", "Whittaker", "Diener"],
  answer: "A",
  explanation: "Ernst Mayr ko unki evolutionary biology mein contributions ki wajah se ye title diya gaya hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "What is common between Solanum, Panthera, and Homo?",
  options: ["They are all families", "They are all generic names", "They are all species", "Same order"],
  answer: "B",
  explanation: "Solanum, Panthera aur Homo teeno Genus (Generic) names hain."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Classification is necessary because:",
  options: ["Easy and organized study", "Helps in naming", "Shows height", "Helps in travel"],
  answer: "A",
  explanation: "Millions of species ko bina classification ke systematically padhna namumkin hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "A 'Lead' in a taxonomic key is:",
  options: ["A pair of statements", "Each statement in the key", "The final answer", "The name of the plant"],
  answer: "B",
  explanation: "Key ki har ek single statement ko 'Lead' kaha jata hai."
},
{
  class: "11",
  subject: "Biology",
  chapter: "The Living World",
  shift: "Night",
  question: "Which of the following is a 'Class' of Housefly?",
  options: ["Insecta", "Arthropoda", "Diptera", "Muscidae"],
  answer: "A",
  explanation: "Housefly ka Phylum Arthropoda hai aur Class Insecta hai."
},

/* 🔚 ===== CHAPTER 1 END ===== */
/* ================================== */
/* 🔹 CHAPTER 2: BIOLOGICAL CLASSIFICATION */
/* ================================== */

// --- MORNING SHIFT ---
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Five kingdom system of classification suggested by R.H. Whittaker is NOT based on:",
  "options": ["Presence or absence of a well-defined nucleus", "Mode of reproduction", "Mode of nutrition", "Complexity of body organisation"],
  "answer": "A",
  "explanation": "Whittaker ne cell structure, body organization, nutrition, reproduction aur phylogenetic relationships ko base banaya tha. 'Well-defined nucleus' cell structure ka hissa hai, par akela base nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Maximum nutritional diversity is found in the group:",
  "options": ["Fungi", "Animalia", "Monera", "Plantae"],
  "answer": "C",
  "explanation": "Bacteria (Monera) sabse zyada metabolic variation dikhate hain. Ye autotrophic (photo/chemo) aur heterotrophic dono ho sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Organisms called Methanogens are most abundant in a:",
  "options": ["Hot spring", "Sulphur rock", "Cattle yard", "Polluted stream"],
  "answer": "C",
  "explanation": "Methanogens ruminate animals (cow/buffalo) ke gut mein paaye jaate hain aur cattle yards mein methane gas produce karte hain."
},
{
  "class": "11",
  "subject": "Biological Classification",
  "shift": "Morning",
  "question": "Which of the following are found in extreme saline conditions?",
  "options": ["Eubacteria", "Cyanobacteria", "Mycobacteria", "Archaebacteria"],
  "answer": "D",
  "explanation": "Archaebacteria (Halophiles) apni unique cell wall structure ki wajah se extreme namak wali jagahon par survive kar sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "The cyanobacteria are also referred to as:",
  "options": ["Protists", "Golden algae", "Slime moulds", "Blue-green algae"],
  "answer": "D",
  "explanation": "Cyanobacteria photosynthetic prokaryotes hain jinhe Blue-green algae kaha jata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which among the following are the smallest living cells, known without a definite cell wall?",
  "options": ["Bacillus", "Pseudomonas", "Mycoplasma", "Nostoc"],
  "answer": "C",
  "explanation": "Mycoplasma sabse chhote organisms hain jinme cell wall nahi hoti aur ye oxygen ke bina reh sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which of the following components provides sticky character to the bacterial cell?",
  "options": ["Nuclear membrane", "Plasma membrane", "Glycocalyx", "Cell wall"],
  "answer": "C",
  "explanation": "Glycocalyx outermost layer hoti hai jo capsule ya slime layer ke roop mein stickiness deti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "DNA replication in bacteria occurs:",
  "options": ["Within nucleolus", "Prior to fission", "Just before transcription", "During S phase"],
  "answer": "B",
  "explanation": "Prokaryotes mein typical cell cycle nahi hota; DNA replication binary fission se thik pehle hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which of the following organisms are known as chief producers in the oceans?",
  "options": ["Dinoflagellates", "Diatoms", "Cyanobacteria", "Euglenoids"],
  "answer": "B",
  "explanation": "Diatoms samundar ke main producers hain aur inki walls mein silica hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Ciliates differ from all other protozoans in:",
  "options": ["Using flagella for locomotion", "Having a contractile vacuole", "Using pseudopodia for capturing prey", "Having two types of nuclei"],
  "answer": "D",
  "explanation": "Paramecium jaise ciliates mein do nuclei hote hain: Macronucleus (vegetative) aur Micronucleus (reproductive)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Chrysophytes, Euglenoids, Dinoflagellates and Slime moulds are included in the kingdom:",
  "options": ["Fungi", "Animalia", "Monera", "Protista"],
  "answer": "D",
  "explanation": "Saare unicellular eukaryotes Kingdom Protista ke andar aate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which of the following is correct about Viroids?",
  "options": ["They have free RNA without protein coat.", "They have DNA with protein coat.", "They have free DNA without protein coat.", "They have RNA with protein coat."],
  "answer": "A",
  "explanation": "Viroids (T.O. Diener) sirf low molecular weight RNA hote hain, inme protein coat (capsid) nahi hota."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Mad cow disease in cattle is caused by an organism which has:",
  "options": ["Free DNA", "Free RNA", "Abnormally folded protein", "Both DNA and RNA"],
  "answer": "C",
  "explanation": "Prions infectious proteins hote hain jo abnormal folding ki wajah se neurological diseases failate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "The imperfect fungi which are decomposers of litter and help in mineral cycling belong to:",
  "options": ["Phycomycetes", "Ascomycetes", "Deuteromycetes", "Basidiomycetes"],
  "answer": "C",
  "explanation": "Deuteromycetes ko 'Fungi Imperfecti' kehte hain kyunki inki sexual stage unknown hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Choose the wrong statement:",
  "options": ["Morels and truffles are poisonous mushrooms.", "Yeast is unicellular and useful in fermentation.", "Penicillium is multicellular and produces antibiotics.", "Neurospora is used in biochemical genetics."],
  "answer": "A",
  "explanation": "Morels aur truffles edible (khane layak) delicacies hain, ye poisonous nahi hote."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which one of the following statements is wrong for viruses?",
  "options": ["All of them have a helical symmetry.", "They have the ability to synthesize nucleic acids and proteins.", "Antibiotics have no effect on them.", "All are parasites."],
  "answer": "A",
  "explanation": "Viruses ki shapes alag hoti hain (helical, polyhedral, complex); sab ek jaise nahi hote."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "One of the major components of cell wall of most fungi is:",
  "options": ["Cellulose", "Hemicellulose", "Chitin", "Peptidoglycan"],
  "answer": "C",
  "explanation": "Fungi ki cell wall Chitin (N-acetylglucosamine polymer) se bani hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which of the following is wrong for fungi?",
  "options": ["They are eukaryotic.", "All fungi possess a purely cellulosic cell wall.", "They are heterotrophic.", "They are both unicellular and multicellular."],
  "answer": "B",
  "explanation": "Fungi ki wall chitin se bani hoti hai, cellulose plants mein hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Methanogens belong to:",
  "options": ["Eubacteria", "Archaebacteria", "Dinoflagellates", "Slime moulds"],
  "answer": "B",
  "explanation": "Methanogens ancient Archaebacteria hain jo anaerobic conditions mein rehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Select the wrong statement:",
  "options": ["The walls of diatoms are easily destructible.", "'Diatomaceous earth' is formed by the cell walls of diatoms.", "Diatoms are chief producers in the oceans.", "Diatoms are microscopic and float passively in water."],
  "answer": "A",
  "explanation": "Diatoms ki walls silica ki wajah se indestructible hoti hain, ye asani se khatam nahi hoti."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "The association between algae and fungi in lichens is called:",
  "options": ["Parasitism", "Mutualism", "Saprophytism", "Commensalism"],
  "answer": "B",
  "explanation": "Lichen ek mutualistic (symbiotic) relationship hai jahan dono partners ek dusre ki madad karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Which of the following is a flagellated protozoan causing sleeping sickness?",
  "options": ["Amoeba", "Plasmodium", "Trypanosoma", "Paramecium"],
  "answer": "C",
  "explanation": "Trypanosoma ek flagellated protozoan hai jo Sleeping Sickness bimari failata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Naked cytoplasm, multinucleated and saprophytic are the characteristics of:",
  "options": ["Monerans", "Protists", "Slime moulds", "Fungi"],
  "answer": "C",
  "explanation": "Slime moulds saprophytic protists hain jo Plasmodium (multinucleated mass) banate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Genetic material for most of the plant viruses is:",
  "options": ["Single stranded RNA", "Double stranded RNA", "Single stranded DNA", "Double stranded DNA"],
  "answer": "A",
  "explanation": "Zyadatar plant viruses (jaise TMV) mein single stranded RNA (ssRNA) hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Morning",
  "question": "Black rust of wheat is caused by:",
  "options": ["Puccinia", "Ustilago", "Albugo", "Phytophthora"],
  "answer": "A",
  "explanation": "Puccinia fungus wheat rust ke liye zimmedar hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Contagium vivum fluidum was proposed by:",
  "options": ["D.J. Ivanowsky", "M.W. Beijerinck", "Stanley", "Robert Hooke"],
  "answer": "B",
  "explanation": "Beijerinck ne virus-containing extract ko 'living infectious fluid' kaha tha."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "With respect to fungal sexual cycle, choose the correct sequence of events:",
  "options": ["Karyogamy, Plasmogamy and Meiosis", "Meiosis, Plasmogamy and Karyogamy", "Plasmogamy, Karyogamy and Meiosis", "Meiosis, Karyogamy and Plasmogamy"],
  "answer": "C",
  "explanation": "Pehle cytoplasm fuse hota hai (Plasmogamy), phir nuclei (Karyogamy), aur ant mein meiosis hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Dikaryon formation is a characteristic feature of:",
  "options": ["Phycomycetes and Ascomycetes", "Ascomycetes and Basidiomycetes", "Phycomycetes and Basidiomycetes", "Phycomycetes and Deuteromycetes"],
  "answer": "B",
  "explanation": "Ascomycetes aur Basidiomycetes mein nuclei fusion delay hone ki wajah se (n+n) stage aati hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Members of Phycomycetes are found in: (i) Aquatic (ii) Decaying wood (iii) Moist places (iv) Parasites.",
  "options": ["None of these", "(i) and (iv)", "(ii) and (iii)", "All of these"],
  "answer": "D",
  "explanation": "Phycomycetes primitive fungi hain jo in saari jagahon par milte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "In Whittaker's system, the kingdom which includes only unicellular prokaryotes is:",
  "options": ["Protista", "Monera", "Fungi", "Plantae"],
  "answer": "B",
  "explanation": "Sirf Kingdom Monera mein hi saare prokaryotic organisms rakhe gaye hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Red tides in oceans are caused by rapid multiplication of:",
  "options": ["Euglena", "Gonyaulax", "Noctiluca", "Diatoms"],
  "answer": "B",
  "explanation": "Gonyaulax (dinoflagellate) ki tezi se growth samundar ko lal rang deti hai aur toxins release karti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "The protein coat of a virus is known as:",
  "options": ["Capsid", "Capsomere", "Nucleoid", "Envelope"],
  "answer": "A",
  "explanation": "Virus ki protective protein layer Capsid hoti hai jo capsomeres se bani hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Mycorrhiza is a symbiotic association between:",
  "options": ["Algae and Fungi", "Fungi and Roots of higher plants", "Algae and Roots of higher plants", "Bacteria and Roots of higher plants"],
  "answer": "B",
  "explanation": "Mycorrhiza plants ko minerals lene mein madad karta hai aur badle mein khana leta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Kingdom Protista includes organisms that are:",
  "options": ["Unicellular and Prokaryotic", "Multicellular and Eukaryotic", "Unicellular and Eukaryotic", "Multicellular and Prokaryotic"],
  "answer": "C",
  "explanation": "Protista mein wo saare organisms hain jo single-celled hain par unka nucleus well-defined (Eukaryotic) hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Which fungus is extensively used in the study of genetics?",
  "options": ["Rhizopus", "Aspergillus", "Neurospora", "Penicillium"],
  "answer": "C",
  "explanation": "Neurospora genetics aur biochemical research ke liye bahut important model organism hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Saprophytic protists are:",
  "options": ["Protozoans", "Slime moulds", "Chrysophytes", "Dinoflagellates"],
  "answer": "B",
  "explanation": "Slime moulds organic matter par crawl karke nutrition lete hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Viruses are not included in Whittaker’s Five Kingdom classification because:",
  "options": ["Monera", "Protista", "Fungi", "None of these"],
  "answer": "D",
  "explanation": "Viruses ko truly 'living' nahi mana jata host ke bahar, isliye unhe 5-kingdom mein jagah nahi mili."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Sexual reproduction is absent in:",
  "options": ["Ascomycetes", "Deuteromycetes", "Basidiomycetes", "Phycomycetes"],
  "answer": "B",
  "explanation": "Deuteromycetes mein sexual stage nahi milti, isliye inhe 'Imperfect' kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "In Amoeba, the pseudopodia are used for:",
  "options": ["Movement only", "Capturing food only", "Both movement and capturing food", "Reproduction"],
  "answer": "C",
  "explanation": "Pseudopodia ka istemal Amoeba chalne aur shikaar pakadne dono ke liye karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Which group has silica-embedded cell walls that form two thin overlapping shells?",
  "options": ["Dinoflagellates", "Chrysophytes", "Euglenoids", "Slime moulds"],
  "answer": "B",
  "explanation": "Diatoms (Chrysophytes) ki walls soapbox ki tarah overlap karti hain aur silica se bani hoti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Heterocysts are specialized cells found in:",
  "options": ["Nostoc", "Rhizobium", "Mycoplasma", "Euglena"],
  "answer": "A",
  "explanation": "Nostoc nitrogen fixation ke liye special cells 'Heterocysts' ka use karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "The spores of slime moulds are dispersed by:",
  "options": ["Water", "Air currents", "Insects", "Animals"],
  "answer": "B",
  "explanation": "Slime moulds ke spores air currents ke zariye door-door tak phailte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Pellicle is a protein-rich layer found in:",
  "options": ["Amoeba", "Euglena", "Paramecium", "Plasmodium"],
  "answer": "B",
  "explanation": "Euglena mein cell wall nahi hoti, uski jagah flexible 'Pellicle' hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Bacteria which oxidize inorganic substances like nitrates are:",
  "options": ["Photoautotrophs", "Chemoautotrophs", "Saprophytes", "Parasites"],
  "answer": "B",
  "explanation": "Chemoautotrophs chemical oxidation se apni energy banate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Potato spindle tuber disease is caused by:",
  "options": ["Virus", "Viroid", "Prion", "Fungus"],
  "answer": "B",
  "explanation": "Viroids RNA ke bane hote hain aur ye disease failate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Coenocytic mycelium is found in:",
  "options": ["Phycomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes"],
  "answer": "A",
  "explanation": "Phycomycetes mein hyphae bina kisi parde (septa) ke hote hain aur multinucleate hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Which of the following is an example of an edible Basidiomycetes?",
  "options": ["Agaricus", "Puccinia", "Ustilago", "Rhizopus"],
  "answer": "A",
  "explanation": "Agaricus button mushroom hai jo khaya jata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Bacteriophages are viruses that infect:",
  "options": ["Plants", "Animals", "Bacteria", "Fungi"],
  "answer": "C",
  "explanation": "Ye virus bacteria ko markar unhe infect karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "Lichens are very good pollution indicators because they:",
  "options": ["Grow very fast", "Do not grow in polluted areas", "Absorb pollutants", "Purify air"],
  "answer": "B",
  "explanation": "Jahan pollution (SO2) hota hai, wahan lichens khatam ho jate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Biological Classification",
  "shift": "Night",
  "question": "The Kingdom system that added 'Monera' and 'Protista' separately was:",
  "options": ["Two kingdom", "Three kingdom", "Four kingdom", "Five kingdom"],
  "answer": "D",
  "explanation": "Whittaker ke 5-kingdom system ne prokaryotes aur unicellular eukaryotes ko alag pehchan di."
},
/* 🔚 ===== CHAPTER 2 END ===== */

{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Phylogenetic system of classification is based on:",
  "options": ["Morphological features", "Chemical constituents", "Evolutionary relationships", "Floral characters"],
  "answer": "C",
  "explanation": "Phylogenetic system organisms ke purvajon (evolutionary history) par based hota hai, jisme common ancestor ko priority di jati hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Floridean starch has a structure very similar to:",
  "options": ["Starch and Cellulose", "Amylopectin and Glycogen", "Amylose and Maltose", "Chitin and Pectin"],
  "answer": "B",
  "explanation": "Red algae (Rhodophyceae) mein milne wala Floridean starch, structure mein amylopectin aur glycogen jaisa hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Which of the following is responsible for peat formation?",
  "options": ["Marchantia", "Riccia", "Funaria", "Sphagnum"],
  "answer": "D",
  "explanation": "Sphagnum (Peat Moss) dab kar peat banata hai, jo fuel aur packing material ke roop mein use hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "An example of colonial alga is:",
  "options": ["Volvox", "Ulothrix", "Spirogyra", "Chlorella"],
  "answer": "A",
  "explanation": "Volvox colonies banakar rehta hai jise Coenobium kehte hain. Baki filamentous ya unicellular hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Zygotic meiosis is characteristic of:",
  "options": ["Fucus", "Funaria", "Chlamydomonas", "Marchantia"],
  "answer": "C",
  "explanation": "Haplontic life cycle mein (jaise Chlamydomonas), meiosis zygote mein hota hai kyunki wahi akeli diploid stage hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Life cycle of Ectocarpus and Fucus respectively are:",
  "options": ["Haplontic, Diplontic", "Haplodiplontic, Diplontic", "Haplodiplontic, Haplontic", "Haplontic, Haplodiplontic"],
  "answer": "B",
  "explanation": "Ectocarpus haplo-diplontic hota hai aur Fucus (Brown alga exception) diplontic hota hai. Ye NEET ka favorite question hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Conifers are adapted to tolerate extreme environmental conditions because of:",
  "options": ["Broad hardy leaves", "Superficial stomata", "Thick cuticle", "Presence of vessels"],
  "answer": "C",
  "explanation": "Needle-like leaves, thick cuticle aur sunken stomata conifers ko pani bachane mein madad karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Select the WRONG statement:",
  "options": ["Isogetes are similar in structure and function.", "In Oomycetes, female gamete is smaller and motile.", "Chlamydomonas exhibits both isogamy and anisogamy.", "Fucus shows oogamy."],
  "answer": "B",
  "explanation": "Oogamy mein female gamete hamesha bada aur non-motile hota hai, chhota aur motile nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "In bryophytes and pteridophytes, transport of male gametes requires:",
  "options": ["Insects", "Birds", "Water", "Wind"],
  "answer": "C",
  "explanation": "Inhe 'Amphibians/Reptiles of plant kingdom' kehte hain kyunki fertilization ke liye pani ki film zaroori hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Which one is a 'Living Fossil'?",
  "options": ["Pinus", "Cycas", "Ginkgo biloba", "Selaginella"],
  "answer": "C",
  "explanation": "Ginkgo biloba ek living fossil hai kyunki ye laakhon saalon se unchanged hai aur iska koi zinda relative nahi hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Holdfast, stipe and frond constitute the plant body in case of:",
  "options": ["Volvox", "Chara", "Laminaria", "Porphyra"],
  "answer": "C",
  "explanation": "Brown algae (Laminaria) mein root-like holdfast, stem-like stipe aur leaf-like frond hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "A plant shows thallus level of organization, has rhizoids and is haploid. It belongs to:",
  "options": ["Pteridophytes", "Gymnosperms", "Monocots", "Bryophytes"],
  "answer": "D",
  "explanation": "Bryophytes ka main body haploid gametophyte hota hai jisme true roots ki jagah rhizoids hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "The giant Redwood tree (Sequoia sempervirens) is a/an:",
  "options": ["Angiosperm", "Free fern", "Pteridophyte", "Gymnosperm"],
  "answer": "D",
  "explanation": "Sequoia duniya ke sabse lambe pedon mein se ek hai aur ye ek Gymnosperm hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "In which of the following, gametophyte is NOT independent and free-living?",
  "options": ["Marchantia", "Pteris", "Pinus", "Funaria"],
  "answer": "C",
  "explanation": "Gymnosperms (Pinus) aur Angiosperms mein gametophyte reduced hota hai aur sporophyte par dependent rehta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "How many of these are correct? (i) Gametophytes free-living in moss/ferns (ii) Gymnosperms heterosporous (iii) Fucus oogamous (iv) Liverwort sporophyte elaborate than moss.",
  "options": ["Three", "Two", "One", "Four"],
  "answer": "A",
  "explanation": "(iv) galat hai kyunki mosses ka sporophyte liverworts se zyada complex/elaborate hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Male gametes are flagellated in:",
  "options": ["Polysiphonia", "Anabaena", "Ectocarpus", "Spirogyra"],
  "answer": "C",
  "explanation": "Ectocarpus (Brown algae) mein flagella hote hain. Polysiphonia (Red) aur Spirogyra mein nahi hote."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Which one of the following is heterosporous?",
  "options": ["Adiantum", "Equisetum", "Dryopteris", "Salvinia"],
  "answer": "D",
  "explanation": "Salvinia aur Selaginella do tarah ke spores (macro aur micro) banate hain, jise heterospory kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Classification given by Bentham and Hooker is:",
  "options": ["Artificial", "Natural", "Phylogenetic", "Numerical"],
  "answer": "B",
  "explanation": "Bentham aur Hooker ka system Natural tha kyunki unhone external ke saath internal characters ko bhi consider kiya."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Alginic acid (Algin) is obtained from:",
  "options": ["Red algae", "Brown algae", "Green algae", "Blue-green algae"],
  "answer": "B",
  "explanation": "Algin ek hydrocolloid hai jo Brown algae (Phaeophyceae) ki cell wall se nikala jata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Agar-agar is commercially obtained from:",
  "options": ["Gelidium and Gracilaria", "Volvox and Chlorella", "Sargassum and Fucus", "Ulothrix and Spirogyra"],
  "answer": "A",
  "explanation": "Agar-agar Gelidium aur Gracilaria (Red Algae) se milta hai jo ice-cream aur lab work mein use hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "The 'Amphibians' of the plant kingdom are:",
  "options": ["Thallophytes", "Bryophytes", "Pteridophytes", "Gymnosperms"],
  "answer": "B",
  "explanation": "Bryophytes mitti mein rehte hain par fertilization ke liye pani par depend karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "In Bryophytes, the dominant phase is:",
  "options": ["Sporophyte", "Gametophyte", "Zygote", "Spore"],
  "answer": "B",
  "explanation": "Lower plants (Bryophytes) mein main plant body haploid gametophyte hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Prothallus is:",
  "options": ["Structure in bryophytes", "Gametophyte free-living structure in pteridophytes", "Specialized leaf in gymnosperms", "Type of fruit"],
  "answer": "B",
  "explanation": "Pteridophytes ka inconspicuous, heart-shaped aur photosynthetic gametophyte prothallus kehlata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Seed habit originated in which group first?",
  "options": ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms"],
  "answer": "C",
  "explanation": "Heterospory (Selaginella mein) seed habit ki shuruat mani jati hai, jo Pteridophytes mein dikhi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Morning",
  "question": "Double fertilization is a unique feature of:",
  "options": ["Gymnosperms", "Bryophytes", "Angiosperms", "Pteridophytes"],
  "answer": "C",
  "explanation": "Angiosperms mein syngamy aur triple fusion dono hote hain, jise double fertilization kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Endosperm in Gymnosperms is:",
  "options": ["Haploid (n)", "Diploid (2n)", "Triploid (3n)", "Tetraploid (4n)"],
  "answer": "A",
  "explanation": "Gymnosperms mein endosperm fertilization se pehle banta hai, isliye ye haploid (n) hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Mycorrhizal roots are found in:",
  "options": ["Cycas", "Pinus", "Cedrus", "Sequoia"],
  "answer": "B",
  "explanation": "Pinus ki roots fungi ke saath symbiotic association (Mycorrhiza) banati hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Which class of algae has Chlorophyll a, d and Phycoerythrin?",
  "options": ["Chlorophyceae", "Phaeophyceae", "Rhodophyceae", "Cyanophyceae"],
  "answer": "C",
  "explanation": "Red algae (Rhodophyceae) mein Phycoerythrin pigment hota hai jo unhe gehre samundar mein rehne deta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Stored food in Phaeophyceae is:",
  "options": ["Starch", "Laminarin or Mannitol", "Floridean starch", "Glycogen"],
  "answer": "B",
  "explanation": "Brown algae (Phaeophyceae) apna khana Laminarin aur Mannitol ke roop mein store karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "If a moss protonema has 10 chromosomes, what will be the leaf cell and capsule cell number?",
  "options": ["10, 10", "10, 20", "20, 20", "20, 10"],
  "answer": "B",
  "explanation": "Protonema (n=10) gametophyte hai, capsule (2n=20) sporophyte ka hissa hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Presence of Pyrenoids is a characteristic of:",
  "options": ["Red Algae", "Brown Algae", "Green Algae", "Gymnosperms"],
  "answer": "C",
  "explanation": "Green algae ke chloroplast mein Pyrenoids hote hain jo protein aur starch store karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Chara is a green alga which shows:",
  "options": ["Global distribution", "Presence of sex organs (nucule and globule)", "Unicellular body", "Absence of cell wall"],
  "answer": "B",
  "explanation": "Chara multicellular hai aur isme female nucule aur male globule sex organs hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "The smallest angiosperm is:",
  "options": ["Eucalyptus", "Wolffia", "Rafflesia", "Sequoia"],
  "answer": "B",
  "explanation": "Wolffia sabse chhota flowering plant hai jo microscopic dikhta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "In Haplontic life cycle, the sporophyte generation is represented by:",
  "options": ["Spore", "Zygote", "Gametophyte", "Antheridium"],
  "answer": "B",
  "explanation": "Haplontic cycle mein sporophyte stage sirf ek cell ka zygote hota hai, koi multicellular body nahi hoti."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Winged pollen grains are found in:",
  "options": ["Cycas", "Pinus", "Mango", "Dryopteris"],
  "answer": "B",
  "explanation": "Pinus ke pollen grains mein wings hote hain jo hawa se udne (Anemophily) mein help karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Peat moss is used for trans-shipment of living material because of its:",
  "options": ["Antiseptic property", "High water holding capacity", "Presence of minerals", "Capacity to produce oxygen"],
  "answer": "B",
  "explanation": "Sphagnum pani ko bahut zyada hold kar sakta hai, isliye ye paudhon ko geela rakhne ke liye use hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "What is common to multicellular fungi, filamentous algae and protonema of mosses?",
  "options": ["Diplontic life cycle", "Presence of vascular tissues", "Multiplication by fragmentation", "Mode of nutrition"],
  "answer": "C",
  "explanation": "Ye teeno fragmentation ke zariye tezi se asexual reproduction kar sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Evolutionary, the first terrestrial plants to possess vascular tissues are:",
  "options": ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"],
  "answer": "B",
  "explanation": "Pteridophytes pehle aise zameeni paudhe the jinme Xylem aur Phloem (vascular tissue) aaya."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Archegonium is absent in:",
  "options": ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"],
  "answer": "D",
  "explanation": "Angiosperms mein archegonia nahi hote, unki jagah reduced embryo sac hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Which of the following is an example of an isogamous condition with non-flagellated gametes?",
  "options": ["Chlamydomonas", "Volvox", "Spirogyra", "Fucus"],
  "answer": "C",
  "explanation": "Spirogyra mein dono gametes same size ke hote hain par unme flagella nahi hota."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "In Cycas, specialized roots associated with N2 fixing cyanobacteria are:",
  "options": ["Tap roots", "Coralloid roots", "Adventitious roots", "Prop roots"],
  "answer": "B",
  "explanation": "Cycas ki Coralloid roots mein cyanobacteria hote hain jo nitrogen fixation karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "The sporophyte is attached to the gametophyte and derives nutrition from it in:",
  "options": ["Selaginella", "Funaria", "Pinus", "Mustard"],
  "answer": "B",
  "explanation": "Bryophytes (moss/Funaria) mein sporophyte gametophyte par dependent hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Brown algae possess which of the following pigments?",
  "options": ["Chl a, Chl c and Fucoxanthin", "Chl a, Chl d and Phycoerythrin", "Chl a and Chl b", "Chl a and Phycocyanin"],
  "answer": "A",
  "explanation": "Fucoxanthin pigment ki wajah se hi brown algae ka rang olive green ya brown hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Haplodiplontic life cycle is found in:",
  "options": ["Bryophytes and Pteridophytes", "Algae and Fungi", "Gymnosperms and Angiosperms", "All of the above"],
  "answer": "A",
  "explanation": "Bryophytes aur Pteridophytes dono mein haploid aur diploid phases multicellular hoti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Antherozoids in bryophytes are:",
  "options": ["Uniflagellate", "Biflagellate", "Quadriflagellate", "Non-flagellate"],
  "answer": "B",
  "explanation": "Zyadatar bryophytes mein male gametes biflagellated aur comma-shaped hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "The leaves of gymnosperms have sunken stomata and thick cuticle to:",
  "options": ["Lack of stomata", "Presence of large broad leaves", "Reduce water loss", "Very thin cell walls"],
  "answer": "C",
  "explanation": "Sunken stomata aur thick cuticle pani ke nuksan (transpiration) ko kam karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "In angiosperms, the functional megaspore develops into:",
  "options": ["Embryo", "Ovule", "Endosperm", "Embryo sac"],
  "answer": "D",
  "explanation": "Functional megaspore hi aage chalkar female gametophyte ya embryo sac banta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Which of the following algae contains mannitol as reserve food material?",
  "options": ["Ectocarpus", "Gracilaria", "Volvox", "Ulothrix"],
  "answer": "A",
  "explanation": "Ectocarpus ek Brown alga hai, aur Brown algae mannitol store karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Gametophytes of bryophytes are:",
  "options": ["Unicellular and parasitic", "Multicellular and photosynthetic", "Dependent on sporophyte", "Always dioecious"],
  "answer": "B",
  "explanation": "Bryophytes ka gametophyte free-living, multicellular aur photosynthetic hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Plant Kingdom",
  "shift": "Night",
  "question": "Classification based on chromosome number, structure and behavior is:",
  "options": ["Cytotaxonomy", "Chemotaxonomy", "Numerical taxonomy", "Classical taxonomy"],
  "answer": "A",
  "explanation": "Cytotaxonomy cell aur chromosome ki details par based hoti hai."
},
/* 🔚 ===== CHAPTER 3 END ===== */
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which of the following is a basic basis of classification for animals?",
  "options": ["Level of organization", "Symmetry", "Coelom formation", "All of the above"],
  "answer": "D",
  "explanation": "Animals ko classify karne ke liye unki body organization, symmetry aur coelom (body cavity) jaise features dekhe jaate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Radial symmetry is NOT found in:",
  "options": ["Coelenterata", "Ctenophora", "Adult Echinodermata", "Platyhelminthes"],
  "answer": "D",
  "explanation": "Platyhelminthes (Flatworms) bilateral symmetry dikhate hain, jabki baki options mein radial symmetry milti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Metagenesis is observed in:",
  "options": ["Hydra", "Obelia", "Adamsia", "Aurelia"],
  "answer": "B",
  "explanation": "Obelia mein polyp aur medusa stages ke beech alternation of generation hota hai, jise Metagenesis kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Body cavity lined by mesoderm is called:",
  "options": ["Pseudo-coelom", "Coelom", "Haemocoel", "Blastocoel"],
  "answer": "B",
  "explanation": "Agar body cavity puri tarah mesoderm se lined ho, toh use 'True Coelom' kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which phylum is characterized by the presence of Choanocytes (collar cells)?",
  "options": ["Coelenterata", "Porifera", "Ctenophora", "Mollusca"],
  "answer": "B",
  "explanation": "Choanocytes sirf Porifera (Sponges) mein milte hain jo water canal system mein madad karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Comb plates for locomotion are the hallmark of:",
  "options": ["Cnidaria", "Ctenophora", "Platyhelminthes", "Echinodermata"],
  "answer": "B",
  "explanation": "Ctenophores (Comb jellies) mein 8 ciliated comb plates hoti hain jo swimming mein help karti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Flame cells (Protonephridia) are the excretory structures in:",
  "options": ["Aschelminthes", "Annelida", "Platyhelminthes", "Arthropoda"],
  "answer": "C",
  "explanation": "Platyhelminthes (Flatworms) mein excretion aur osmoregulation ke liye flame cells hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which phylum shows the presence of a 'Pseudocoelom'?",
  "options": ["Annelida", "Aschelminthes", "Mollusca", "Arthropoda"],
  "answer": "B",
  "explanation": "Aschelminthes (Roundworms) mein mesoderm scattered pouches mein hota hai, isliye ise pseudocoelom kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Segmented body (Metamerism) first appeared in phylum:",
  "options": ["Arthropoda", "Chordata", "Annelida", "Mollusca"],
  "answer": "C",
  "explanation": "True segmentation sabse pehle Annelida (jaise Earthworm) mein dekha gaya tha."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which of the following is a 'living fossil' in Arthropoda?",
  "options": ["Limulus (King crab)", "Locusta (Locust)", "Apis (Honey bee)", "Bombyx (Silkworm)"],
  "answer": "A",
  "explanation": "Limulus (King crab) laakhon saalon se unchanged hai, isliye ise living fossil kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Water vascular system is the characteristic of:",
  "options": ["Porifera", "Echinodermata", "Mollusca", "Chordata"],
  "answer": "B",
  "explanation": "Echinoderms mein water vascular system locomotion aur food capture mein help karta hai. Porifera mein 'Water Canal' hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Radula, a file-like rasping organ for feeding, is found in:",
  "options": ["Echinodermata", "Mollusca", "Arthropoda", "Hemichordata"],
  "answer": "B",
  "explanation": "Mollusca mein khana khane ke liye ek file-like organ hota hai jise Radula kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which of the following is a non-chordate but possesses a stomochord?",
  "options": ["Urochordata", "Cephalochordata", "Hemichordata", "Cyclostomata"],
  "answer": "C",
  "explanation": "Hemichordates (Balanoglossus) mein ek rudimentary structure hota hai jise stomochord kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "In which group of animals is the heart three-chambered with an incomplete partition in the ventricle?",
  "options": ["Amphibians", "Crocodiles", "Reptiles (except crocodiles)", "Fishes"],
  "answer": "C",
  "explanation": "Reptiles mein 3-chambered heart hota hai par ventricle thoda divide hona shuru ho jata hai. Crocodile is 4-chambered."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Presence of pneumatic (hollow) bones is an adaptation for flight in:",
  "options": ["Mammalia", "Reptilia", "Aves", "Amphibia"],
  "answer": "C",
  "explanation": "Birds (Aves) ki haddiya khokhli (pneumatic) hoti hain taaki unka wazan udne ke liye kam rahe."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which chordate subphylum retains the notochord throughout life, extending from head to tail?",
  "options": ["Urochordata", "Cephalochordata", "Vertebrata", "Hemichordata"],
  "answer": "B",
  "explanation": "Cephalochordata (Amphioxus) mein notochord sar se poonch tak hoti hai aur poori zindagi rehti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Operculum and Air bladder are present in:",
  "options": ["Chondrichthyes", "Osteichthyes", "Cyclostomata", "Both A and B"],
  "answer": "B",
  "explanation": "Bony fishes (Osteichthyes) mein gills ke upar cover (operculum) aur tairne ke liye air bladder hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Torpedo and Trygon are examples of:",
  "options": ["Bony fishes", "Cartilaginous fishes", "Jawless fishes", "Amphibians"],
  "answer": "B",
  "explanation": "Torpedo (Electric ray) aur Trygon (Sting ray) Chondrichthyes yaani cartilaginous fishes hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Which of the following is a warm-blooded (Homeothermic) animal?",
  "options": ["Chelone (Turtle)", "Testudo (Tortoise)", "Columba (Pigeon)", "Crocodilus"],
  "answer": "C",
  "explanation": "Aves (Pigeon) aur Mammals warm-blooded hote hain, jo apna body temperature maintain kar sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Mammary glands are the unique feature of:",
  "options": ["All Chordates", "Mammals", "Aves", "Reptiles"],
  "answer": "B",
  "explanation": "Mammals ka sabse unique feature mammary glands hain jo bachon ko doodh pilane ke kaam aati hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Parapodia for swimming are found in the aquatic annelid:",
  "options": ["Pheretima", "Hirudinaria", "Nereis", "Lumbricus"],
  "answer": "C",
  "explanation": "Nereis ek aquatic annelid hai jisme tairne ke liye parapodia hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "The phylum with the highest number of species is:",
  "options": ["Mollusca", "Arthropoda", "Chordata", "Protozoa"],
  "answer": "B",
  "explanation": "Arthropoda sabse bada phylum hai, duniya ke 2/3 named species isi mein aate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Internal fertilization and Direct development are found in:",
  "options": ["Frog", "Fish", "Birds", "All of these"],
  "answer": "C",
  "explanation": "Birds aur mammals mein fertilization andar hota hai aur bachon ka seedha vikas hota hai (no larva)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "The body of a Mollusc is covered by a calcareous shell and is unsegmented with a distinct:",
  "options": ["Head, muscular foot and visceral hump", "Head, thorax and abdomen", "Proboscis, collar and trunk", "Cephalothorax and abdomen"],
  "answer": "A",
  "explanation": "Mollusca ki body head, muscular foot aur visceral hump mein divide hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Morning",
  "question": "Identify the 'Acoelomate' animal:",
  "options": ["Roundworm", "Hookworm", "Tapeworm", "Filaria worm"],
  "answer": "C",
  "explanation": "Tapeworm Platyhelminthes phylum se hai, jo acoelomate (no cavity) hote hain."
},

{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Malpighian tubules are the excretory organs of:",
  "options": ["Prawn", "Cockroach", "Earthworm", "Centipede"],
  "answer": "B",
  "explanation": "Insects jaise cockroach mein Malpighian tubules nitrogenous waste hatane ke kaam aate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Which of the following is oviparous (lays eggs)?",
  "options": ["Macropus (Kangaroo)", "Pteropus (Flying fox)", "Ornithorhynchus (Platypus)", "Delphinus (Dolphin)"],
  "answer": "C",
  "explanation": "Platypus ek rare egg-laying mammal (monotreme) hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Statocysts are the sensory organs (balancing organs) in:",
  "options": ["Porifera", "Arthropoda", "Annelida", "Platyhelminthes"],
  "answer": "B",
  "explanation": "Arthropods (jaise prawns) mein balance banaye rakhne ke liye statocysts hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Poikilothermic animals are those which:",
  "options": ["Can regulate body temperature", "Lack the ability to regulate body temperature", "Are always warm", "Live only in water"],
  "answer": "B",
  "explanation": "Cold-blooded (Poikilothermic) animals apne environment ke hisab se body temperature badalte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "In Urochordata, notochord is present only in:",
  "options": ["Adult tail", "Larval tail", "Adult head", "Larval head"],
  "answer": "B",
  "explanation": "Urochordates mein notochord sirf larva ki tail mein milti hai, adult mein nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "The larval stage of Culex and Anopheles is an example of:",
  "options": ["Direct development", "Indirect development", "Metagenesis", "Parthenogenesis"],
  "answer": "B",
  "explanation": "Insects jo larval stage se guzarte hain unhe indirect development kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Sea-fan is the common name for:",
  "options": ["Pennatula", "Meandrina", "Gorgonia", "Adamsia"],
  "answer": "C",
  "explanation": "Gorgonia ko Sea-fan kehte hain, Pennatula Sea-pen hai aur Adamsia Sea anemone."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Phylum Arthropoda has an exoskeleton made of:",
  "options": ["Calcium carbonate", "Chitin", "Silica", "Spongin fibers"],
  "answer": "B",
  "explanation": "Arthropods ki bahri body chitin se bani hoti hai jo unhe protection deti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Scientific name of Starfish is:",
  "options": ["Echinus", "Antedon", "Asterias", "Cucumaria"],
  "answer": "C",
  "explanation": "Asterias Starfish hai, jabki Echinus Sea urchin hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Amphibians differ from reptiles in having:",
  "options": ["3-chambered heart", "Scale-less moist skin", "Cloaca", "Cold-blooded nature"],
  "answer": "B",
  "explanation": "Amphibians ki skin geeli aur bina scales ki hoti hai, jabki reptiles mein scales hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Which of the following is NOT a characteristic of Phylum Chordata?",
  "options": ["Ventral nerve cord", "Presence of notochord", "Pharyngeal gill slits", "Post-anal tail"],
  "answer": "A",
  "explanation": "Chordates mein nerve cord dorsal (peeth ki taraf) hoti hai, ventral nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Cyclostomes are:",
  "options": ["Marine migrate to fresh water", "Fresh water migrate to sea", "Only marine", "Only fresh water"],
  "answer": "A",
  "explanation": "Ye marine hote hain par ande dene fresh water jaate hain aur wahan mar jaate hain (Anadromous)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "The symmetry found in Ctenoplana is:",
  "options": ["Radial", "Bilateral", "Spherical", "Asymmetrical"],
  "answer": "A",
  "explanation": "Ctenoplana ek Ctenophore hai aur ye radial symmetry dikhate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Notochord is derived from:",
  "options": ["Ectoderm", "Mesoderm", "Endoderm", "None of these"],
  "answer": "B",
  "explanation": "Notochord mesoderm layer se banti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Which of the following has a water canal system (not water vascular)?",
  "options": ["Sycon", "Ophiura", "Echinus", "Antedon"],
  "answer": "A",
  "explanation": "Water canal system sirf sponges (Porifera/Sycon) mein hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Cnidoblasts are used for:",
  "options": ["Anchorage", "Defense", "Capture of prey", "All of the above"],
  "answer": "D",
  "explanation": "Cnidoblasts (stinging cells) ka use defense, hunting aur chipakne ke liye hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Roundworms belong to:",
  "options": ["Platyhelminthes", "Aschelminthes", "Annelida", "Mollusca"],
  "answer": "B",
  "explanation": "Body circular hone ki wajah se Aschelminthes ko roundworms kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Exoskeleton of scales and Internal fertilization are seen in:",
  "options": ["Amphibia", "Reptilia", "Osteichthyes", "Cyclostomata"],
  "answer": "B",
  "explanation": "Reptiles mein dry scales hote hain aur fertilization body ke andar hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "The unique character of Hippocampus is:",
  "options": ["It is a mammal", "Prehensile tail and males carry eggs", "It lacks gills", "It is an amphibian"],
  "answer": "B",
  "explanation": "Hippocampus (Sea horse) bony fish hai jisme male bachon ko brood pouch mein carry karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Bilateral symmetry and Acoelomate nature are found in:",
  "options": ["Ctenophora", "Platyhelminthes", "Aschelminthes", "Annelida"],
  "answer": "B",
  "explanation": "Flatworms bilateral hain par unme body cavity nahi hoti (acoelomate)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Which of the following is a hemichordate?",
  "options": ["Saccoglossus", "Salpa", "Doliolum", "Branchiostoma"],
  "answer": "A",
  "explanation": "Saccoglossus aur Balanoglossus Hemichordata ke examples hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Body is divided into Proboscis, Collar and Trunk in:",
  "options": ["Arthropoda", "Chordata", "Hemichordata", "Mollusca"],
  "answer": "C",
  "explanation": "Hemichordates ki body teen parts mein hoti hai: Proboscis, Collar aur Trunk."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Crocodile has a heart with how many chambers?",
  "options": ["2", "3", "4", "1"],
  "answer": "C",
  "explanation": "Reptile hone ke bawajood, crocodile mein complete 4-chambered heart hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Development is indirect in most:",
  "options": ["Mammals", "Reptiles", "Echinoderms", "Birds"],
  "answer": "C",
  "explanation": "Echinoderms mein larval stage hoti hai, isliye development indirect hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Animal Kingdom",
  "shift": "Night",
  "question": "Which of the following is a social insect?",
  "options": ["Mosquito", "Housefly", "Honey bee (Apis)", "Butterfly"],
  "answer": "C",
  "explanation": "Honey bees colony mein rehti hain aur kaam baant kar karti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Pneumatophores are found in:",
  "options": ["Rhizophora", "Banyan tree", "Maize", "Sugarcane"],
  "answer": "A",
  "explanation": "Rhizophora jaise mangrove plants mein roots zameen se bahar nikal aati hain taaki oxygen le sakein, inhe pneumatophores kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Stems modified into flat green organs performing the functions of leaves are known as:",
  "options": ["Phyllodes", "Phylloclades", "Cladodes", "Scales"],
  "answer": "B",
  "explanation": "Opuntia mein stem chapti (flat) aur hari ho jati hai taaki photosynthesis kar sake, ise Phylloclade kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "The standard petal of a papilionaceous corolla is also called:",
  "options": ["Vexillum", "Alae", "Carina", "Pappus"],
  "answer": "A",
  "explanation": "Fabaceae family mein sabse bahar wale bade petal ko Vexillum ya Standard kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Tricarpellary, syncarpous gynoecium is found in flowers of:",
  "options": ["Solanaceae", "Fabaceae", "Liliaceae", "Poaceae"],
  "answer": "C",
  "explanation": "Liliaceae (Lily family) ka khas feature hai 3 fused carpels (tricarpellary syncarpous) aur superior ovary."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Which of the following is NOT a stem modification?",
  "options": ["Tendrils of cucumber", "Flattened structures of Opuntia", "Pitcher of Nepenthes", "Thorns of Citrus"],
  "answer": "C",
  "explanation": "Pitcher plant (Nepenthes) mein pitcher leaf ka modification hota hai, stem ka nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Proximal end of the filament of stamen is attached to the:",
  "options": ["Connective", "Placenta", "Thalamus or petal", "Anther"],
  "answer": "C",
  "explanation": "Stamen ka filament niche se (proximal end) thalamus ya petals se juda hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "In a cymose inflorescence, the main axis:",
  "options": ["Terminates in a flower", "Has unlimited growth", "Bears a solitary flower", "Bears flowers in acropetal succession"],
  "answer": "A",
  "explanation": "Cymose mein main axis ek phool par khatam ho jati hai, isliye growth limited hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "The technical term used for the androecium in a flower of China rose (Hibiscus) is:",
  "options": ["Monadelphous", "Diadelphous", "Polyadelphous", "Polyandrous"],
  "answer": "A",
  "explanation": "China rose mein saare stamens ek hi guchhe (tube) mein jude hote hain, ise monadelphous kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Placentation in which ovules develop on the inner wall of the ovary or in peripheral part is:",
  "options": ["Free central", "Basal", "Axile", "Parietal"],
  "answer": "D",
  "explanation": "Parietal placentation (Mustard/Argemone) mein ovules ovary ki inner wall par lagte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Which plant among the following has a 'marginal placentation'?",
  "options": ["Mustard", "Pea", "Lemon", "Dianthus"],
  "answer": "B",
  "explanation": "Pea (matar) mein ovules ek ridge par do rows mein lage hote hain, ise marginal placentation kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Radial symmetry is found in the flowers of:",
  "options": ["Cassia", "Brassica", "Gulmohur", "Bean"],
  "answer": "B",
  "explanation": "Brassica (Mustard) mein actinomorphic (radial) symmetry milti hai. Gulmohur aur Bean zygomorphic hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Free-central placentation is found in:",
  "options": ["Dianthus", "Argemone", "Brassica", "Citrus"],
  "answer": "A",
  "explanation": "Dianthus aur Primrose mein septa nahi hote aur ovules central axis par hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "The wheat grain has an embryo with one large, shield-shaped cotyledon known as:",
  "options": ["Coleoptile", "Scutellum", "Coleorhiza", "Epiblast"],
  "answer": "B",
  "explanation": "Monocots (Wheat/Maize) ke bade shield-shaped cotyledon ko Scutellum kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Coconut fruit is a:",
  "options": ["Berry", "Nut", "Capsule", "Drupe"],
  "answer": "D",
  "explanation": "Coconut ek drupe fruit hai jisme mesocarp fibrous hota hai aur endocarp stony hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Axile placentation is observed in:",
  "options": ["Mustard", "Tomato", "Dianthus", "Argemone"],
  "answer": "B",
  "explanation": "Tomato aur Lemon mein multilocular ovary hoti hai aur placenta central axis par hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Thorns are modified stems that are found in:",
  "options": ["Citrus and Bougainvillea", "Cucumber and Pumpkin", "Opuntia and Euphorbia", "Pea and Sweet pea"],
  "answer": "A",
  "explanation": "Citrus aur Bougainvillea mein axillary buds kanto (thorns) mein badal jati hain protection ke liye."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "In 'Vexillary aestivation,' the largest petal overlaps the lateral ones. It is seen in:",
  "options": ["Solanaceae", "Fabaceae", "Liliaceae", "Brassicaceae"],
  "answer": "B",
  "explanation": "Ye 'butterfly' arrangement Fabaceae (Pea family) ka khas nishaan hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "When the ovary is situated on the thalamus and other parts are below it, the flower is:",
  "options": ["Perigynous", "Epigynous", "Hypogynous", "Half-inferior"],
  "answer": "C",
  "explanation": "Hypogynous flower mein ovary sabse upar (superior) hoti hai, jaise Mustard mein."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Roots that develop from parts of the plant other than the radicle are called:",
  "options": ["Tap roots", "Adventitious roots", "Fibrous roots", "Nodulated roots"],
  "answer": "B",
  "explanation": "Agar root radicle ke bajaye kisi aur part se nikle, toh use adventitious kehte hain (jaise Banyan ki jaden)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "The 'Eye' of the potato tuber is a:",
  "options": ["Root", "Axillary bud", "Flower", "Fruit"],
  "answer": "B",
  "explanation": "Potato stem tuber hai, aur uski 'eyes' asal mein axillary buds hain jo naya pauda bana sakti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Aestivation where petals or sepals overlap one another in a specific direction is:",
  "options": ["Valvate", "Twisted", "Imbricate", "Vexillary"],
  "answer": "B",
  "explanation": "Twisted aestivation mein ek petal ka kinara dusre ko overlap karta hai (jaise Cotton mein)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Which of the following plants has an 'inferior ovary'?",
  "options": ["Mustard", "Guava", "Peach", "Brinjal"],
  "answer": "B",
  "explanation": "Guava aur Cucumber epigynous hote hain, jisme ovary baki floral parts ke niche hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "The edible part of Mango is:",
  "options": ["Epicarp", "Mesocarp", "Endocarp", "Seed"],
  "answer": "B",
  "explanation": "Aam (Mango) ka rasila aur khane wala hissa mesocarp hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Non-albuminous (non-endospermic) seeds are found in:",
  "options": ["Wheat", "Maize", "Pea", "Castor"],
  "answer": "C",
  "explanation": "Dicot seeds jaise Pea aur Gram mein endosperm nahi bachta, jabki Castor (dicot) mein endosperm hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Morning",
  "question": "Keel is the characteristic feature of the flower of:",
  "options": ["Indigofera", "Aloe", "Tomato", "Tulip"],
  "answer": "A",
  "explanation": "Indigofera Fabaceae se hai, aur isme do andar wale petals judkar 'Keel' banate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Perianth is the condition when:",
  "options": ["Calyx and Corolla are similar", "Androecium and Gynoecium are fused", "Sepals and Petals are absent", "Ovary is half-inferior"],
  "answer": "A",
  "explanation": "Jab sepals aur petals alag-alag nahi hote (tepals), toh use Perianth kehte hain (Liliaceae)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Stilt roots are found in:",
  "options": ["Banyan tree", "Sugarcane", "Rhizophora", "Carrot"],
  "answer": "B",
  "explanation": "Sugarcane aur Maize mein lower stem nodes se support ke liye stilt roots nikalti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Which part of the leaf is modified into spines in Opuntia?",
  "options": ["Stipules", "Petiole", "Lamina", "Entire leaf"],
  "answer": "D",
  "explanation": "Opuntia mein transpiration kam karne ke liye puri patti kante (spine) mein badal jati hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Syncarpous means:",
  "options": ["Free carpels", "Fused carpels", "Single carpel", "Absence of carpels"],
  "answer": "B",
  "explanation": "Jab ek se zyada carpels jude hue hon, toh use Syncarpous kehte hain (Tomato)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Scutellum is a term used for:",
  "options": ["Endosperm of maize", "Cotyledon of monocots", "Seed coat of pea", "Protective covering of radicle"],
  "answer": "B",
  "explanation": "Grass family (monocots) ke single cotyledon ko Scutellum kaha jata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Which of the following is a 'medicinal plant' from the Fabaceae family?",
  "options": ["Muliathi", "Ashwagandha", "Aloe", "Belladonna"],
  "answer": "A",
  "explanation": "Muliathi Fabaceae family ka medicinal plant hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "An example of a 'drupe' where the mesocarp is fibrous is:",
  "options": ["Mango", "Coconut", "Almond", "Peach"],
  "answer": "B",
  "explanation": "Coconut mein mesocarp fibrous hota hai jisse rassi (coir) banti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "The floral formula ⊕ K(5) C(5) A5 G(2) represents:",
  "options": ["Fabaceae", "Solanaceae", "Liliaceae", "Brassicaceae"],
  "answer": "B",
  "explanation": "Ye formula Solanaceae (Potato family) ka hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "In which aestivation do margins of sepals/petals overlap without any particular direction?",
  "options": ["Valvate", "Twisted", "Imbricate", "Vexillary"],
  "answer": "C",
  "explanation": "Imbricate aestivation mein overlap ka koi fixed pattern nahi hota (Gulmohur)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "The region of the root responsible for the growth in length is:",
  "options": ["Region of maturation", "Region of elongation", "Region of meristematic activity", "Root cap"],
  "answer": "B",
  "explanation": "Region of elongation ki cells tezi se badi hoti hain aur root ki lambai badhati hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Epipetalous stamens are found in:",
  "options": ["Lily", "Brinjal", "Pea", "Mustard"],
  "answer": "B",
  "explanation": "Solanaceae family (Brinjal) mein stamens petals se jude hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Seed coat is not thin and membranes in:",
  "options": ["Maize", "Coconut", "Pea", "Gram"],
  "answer": "B",
  "explanation": "Coconut jaise drupes mein seed coat stony endocarp ka hissa hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Ray florets of Sunflower have:",
  "options": ["Superior ovary", "Inferior ovary", "Half-inferior ovary", "No ovary"],
  "answer": "B",
  "explanation": "Sunflower ke ray florets epigynous hote hain yaani ovary inferior hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "The placenta is attached to the base of the ovary in:",
  "options": ["Basal placentation", "Axile placentation", "Parietal placentation", "Marginal placentation"],
  "answer": "A",
  "explanation": "Basal placentation (Sunflower/Marigold) mein single ovule ovary ke base par hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Coleorhiza is a protective sheath covering the:",
  "options": ["Plumule", "Radicle", "Cotyledon", "Endosperm"],
  "answer": "B",
  "explanation": "Monocot seeds mein radicle Coleorhiza ke andar hota hai, aur plumule Coleoptile ke andar."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "The small leaf-like structures at the base of the petiole are called:",
  "options": ["Pulvinus", "Stipules", "Lamina", "Bracts"],
  "answer": "B",
  "explanation": "Patti ke base par lage chote structures ko Stipules kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Which of the following is a 'modified adventitious root' for storage?",
  "options": ["Carrot", "Turnip", "Sweet potato", "Radish"],
  "answer": "C",
  "explanation": "Sweet potato adventitious root ka modification hai, baki teenon tap roots hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "In a 'polyadelphous' condition, stamens are:",
  "options": ["United in one bunch", "United in two bunches", "United in more than two bunches", "Free"],
  "answer": "C",
  "explanation": "Polyadelphous (Citrus) mein filaments kayi guchhon mein jude hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "The scar on the seed coat where it was attached to fruit is:",
  "options": ["Micropyle", "Hilum", "Tegmen", "Testa"],
  "answer": "B",
  "explanation": "Hilum woh nishaan hai jahan se seed phal (fruit) se juda hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Venation is the arrangement of:",
  "options": ["Flowers on the axis", "Veins and veinlets in the lamina", "Leaves on the stem", "Ovules in the ovary"],
  "answer": "B",
  "explanation": "Patti ke lamina mein veins ke arrangement ko venation kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Identify the mismatch:",
  "options": ["Opposite - Calotropis", "Alternate - China rose", "Whorled - Alstonia", "Alternate - Guava"],
  "answer": "D",
  "explanation": "Guava mein opposite phyllotaxy hoti hai, alternate nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Petiole modified into a leaf-like photosynthetic organ is:",
  "options": ["Phylloclade", "Phyllode", "Cladode", "Bulbil"],
  "answer": "B",
  "explanation": "Australian Acacia mein petiole bada aur hara hokar phyllode banata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "When petals just touch each other without overlapping, it is:",
  "options": ["Twisted", "Imbricate", "Valvate", "Vexillary"],
  "answer": "C",
  "explanation": "Valvate aestivation (Calotropis) mein petals sirf ek dusre ko touch karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "A flower divided into two halves in only one vertical plane is:",
  "options": ["Actinomorphic", "Zygomorphic", "Asymmetric", "Cyclic"],
  "answer": "B",
  "explanation": "Zygomorphic (bilateral) flowers sirf ek hi plane se do hisson mein kat sakte hain (Pea)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Morphology of Flowering Plants",
  "shift": "Night",
  "question": "Which family has superior, monocarpous ovary and marginal placentation?",
  "options": ["Solanaceae", "Fabaceae", "Liliaceae", "Asteraceae"],
  "answer": "B",
  "explanation": "Fabaceae family mein single carpel, superior ovary aur marginal placentation hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The ciliated columnar epithelial cells in humans are known to occur in:",
  "options": ["Eustachian tube and stomach lining", "Bronchioles and Fallopian tubes", "Bile duct and oesophagus", "Fallopian tubes and urethra"],
  "answer": "B",
  "explanation": "Cilia particles ko ek direction mein move karte hain. Ye bronchioles aur fallopian tubes ki inner lining mein milte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Which of the following is a 'Fluid Connective Tissue'?",
  "options": ["Areolar tissue", "Adipose tissue", "Blood", "Cartilage"],
  "answer": "C",
  "explanation": "Blood ek specialized connective tissue hai jisme plasma aur cells (RBC, WBC, Platelets) hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The type of epithelial tissue found in the lining of ducts of glands and tubular parts of nephrons is:",
  "options": ["Squamous", "Cuboidal", "Columnar", "Stratified"],
  "answer": "B",
  "explanation": "Cuboidal epithelium secretion aur absorption ke liye specialized hota hai, isliye ye glands aur nephrons mein milta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Tight junctions help to:",
  "options": ["Facilitate communication", "Stop substances from leaking", "Cement neighbouring cells", "All of the above"],
  "answer": "B",
  "explanation": "Tight junctions tissues se substances ko leak hone se rokte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Which of the following is NOT a characteristic of 'Areolar Tissue'?",
  "options": ["Support framework for epithelium", "Contains fibroblasts and mast cells", "It is a dense regular connective tissue", "It is found beneath the skin"],
  "answer": "C",
  "explanation": "Areolar tissue ek 'Loose' connective tissue hai, dense nahi."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Collagen fibres are secreted by:",
  "options": ["Mast cells", "Macrophages", "Fibroblasts", "Histiocytes"],
  "answer": "C",
  "explanation": "Fibroblasts connective tissue ki main cells hain jo collagen aur elastin fibres banati hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Ligaments join:",
  "options": ["Muscle to Bone", "Bone to Bone", "Muscle to Muscle", "Skin to Muscle"],
  "answer": "B",
  "explanation": "Ligaments haddi ko haddi (Bone to Bone) se jodte hain, jabki Tendons muscle ko bone se."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The Matrix of bone is rich in:",
  "options": ["Sodium and Potassium", "Calcium salts and Collagen fibres", "Iron and Phosphorus", "Only Elastin"],
  "answer": "B",
  "explanation": "Bone ki matrix hard hoti hai kyunki usme calcium salts aur collagen fibres hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Smooth muscles are:",
  "options": ["Involuntary, fusiform, non-striated", "Voluntary, multinucleated, cylindrical", "Involuntary, cylindrical, striated", "Voluntary, spindle-shaped, striated"],
  "answer": "A",
  "explanation": "Smooth muscles spindle-shaped (fusiform) hoti hain aur unpar striations (lines) nahi hoti."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Intercalated discs are the unique feature of:",
  "options": ["Skeletal muscles", "Smooth muscles", "Cardiac muscles", "Neural tissue"],
  "answer": "C",
  "explanation": "Cardiac (heart) muscles mein intercalated discs hote hain jo cells ko ek unit ki tarah contract karne mein madad karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "In Cockroach, the 'Mouthparts' are of which type?",
  "options": ["Piercing and Sucking", "Biting and Chewing", "Siphoning", "Sponging"],
  "answer": "B",
  "explanation": "Cockroach mein mandibles hote hain jo khane ko peesne aur kaatne (biting/chewing) ke kaam aate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The 'Exoskeleton' of Cockroach is made of hardened plates called:",
  "options": ["Ossicles", "Sclerites", "Spicules", "Scutes"],
  "answer": "B",
  "explanation": "Cockroach ka bahri dhancha (exoskeleton) chitinous plates se bana hota hai jinhe Sclerites kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "How many segments are found in the 'Abdomen' of Cockroaches?",
  "options": ["8", "9", "10", "12"],
  "answer": "C",
  "explanation": "Male aur Female dono cockroach ke abdomen mein 10 segments hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Anal styles are found only in:",
  "options": ["Female Cockroach", "Male Cockroach", "Both", "Larva"],
  "answer": "B",
  "explanation": "Male cockroach mein 9th segment par anal styles hote hain, jo female mein nahi milte."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The 'Gizzard' (Proventriculus) of Cockroach helps in:",
  "options": ["Absorption", "Secretion", "Grinding food", "Storage"],
  "answer": "C",
  "explanation": "Gizzard mein chitinous teeth hote hain jo khane ko barik peesne (grinding) ka kaam karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Hepatic caeca in Cockroach are located at the junction of:",
  "options": ["Foregut and Midgut", "Midgut and Hindgut", "Oesophagus and Crop", "Hindgut and Rectum"],
  "answer": "A",
  "explanation": "Foregut aur Midgut ke junction par 6-8 hepatic caeca hote hain jo digestive juices nikaalte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Excretory organs in Cockroach are:",
  "options": ["Nephridia", "Malpighian tubules", "Green glands", "Flame cells"],
  "answer": "B",
  "explanation": "Cockroach mein excretion ke liye Malpighian tubules hote hain jo midgut aur hindgut ke junction par milte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The Heart of Cockroach consists of how many funnel-shaped chambers?",
  "options": ["3", "4", "10", "13"],
  "answer": "D",
  "explanation": "Cockroach ka dil 13 chambers se bana hota hai jo ek lambi tube ki tarah hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "In Cockroach, respiration occurs through:",
  "options": ["Gills", "Book lungs", "Tracheal system", "Skin"],
  "answer": "C",
  "explanation": "Cockroach tracheal system (spiracles aur trachea) ke zariye saans leta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "The Ootheca of Cockroach contains about:",
  "options": ["5–10 eggs", "14–16 eggs", "50–100 eggs", "2 eggs"],
  "answer": "B",
  "explanation": "Ek ootheca (egg case) mein lagbhag 14 se 16 ande hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Compound squamous epithelium is found in:",
  "options": ["Stomach", "Intestine", "Skin (Dry surface)", "Gall bladder"],
  "answer": "C",
  "explanation": "Skin ki dry surface par multi-layered (stratified) squamous epithelium hoti hai jo protection deti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Which tissue stores 'Neutral Fats'?",
  "options": ["Areolar", "Adipose", "Bone", "Cartilage"],
  "answer": "B",
  "explanation": "Adipose tissue fat store karne ke liye specialized hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Cartilage is produced by:",
  "options": ["Osteoblasts", "Chondrocytes", "Fibroblasts", "Epithelial cells"],
  "answer": "B",
  "explanation": "Chondrocytes cartilage banane wali cells hoti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "Frog belongs to the class:",
  "options": ["Reptilia", "Amphibia", "Pisces", "Mammalia"],
  "answer": "B",
  "explanation": "Frog class Amphibia mein aata hai kyunki ye land aur water dono jagah reh sakta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Morning",
  "question": "In Frog, 'Cutaneous Respiration' refers to respiration through:",
  "options": ["Lungs", "Skin", "Gills", "Buccal cavity"],
  "answer": "B",
  "explanation": "Frog pani mein aur hibernation ke waqt apni geeli skin se saans leta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "The heart of Frog is:",
  "options": ["2-chambered", "3-chambered", "4-chambered", "Single chambered"],
  "answer": "B",
  "explanation": "Frog mein 3-chambered heart hota hai (2 atria, 1 ventricle)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Vasa efferentia in male Frog arise from:",
  "options": ["Kidneys", "Testes", "Cloaca", "Urinary bladder"],
  "answer": "B",
  "explanation": "Testes se vasa efferentia nikal kar kidneys mein jaati hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Bidder’s canal is found in:",
  "options": ["Female Frog", "Male Frog", "Female Cockroach", "Male Cockroach"],
  "answer": "B",
  "explanation": "Bidder's canal male frog ki kidney ke andar hota hai jo sperm passage mein help karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "In Frog, the 'Cloaca' is used to pass:",
  "options": ["Faecal matter", "Urine", "Sperms", "All of the above"],
  "answer": "D",
  "explanation": "Cloaca ek common exit hai digestive, urinary aur reproductive system ke liye."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Fertilization in Frog is:",
  "options": ["Internal", "External", "Absent", "Both"],
  "answer": "B",
  "explanation": "Frog mein fertilization pani mein (external) hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "The Tadpole larva undergoes metamorphosis. This is:",
  "options": ["Direct development", "Indirect development", "Asexual", "Parthenogenesis"],
  "answer": "B",
  "explanation": "Jab larval stage involved ho, toh use indirect development kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Which of the following is NOT found in a Female Cockroach?",
  "options": ["Anal cerci", "Anal styles", "Spermatheca", "Brood pouch"],
  "answer": "B",
  "explanation": "Anal styles sirf male cockroach ki pehchan hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Tegmina in Cockroach are:",
  "options": ["Hind wings", "Fore wings", "Leg segments", "Mouth parts"],
  "answer": "B",
  "explanation": "Cockroach ke dark aur leathery fore wings ko Tegmina kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "The functional unit of neural tissue is:",
  "options": ["Nephron", "Neuron", "Axon", "Dendrite"],
  "answer": "B",
  "explanation": "Neurons nervous system ki basic units hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Goblet cells are an example of:",
  "options": ["Unicellular glandular", "Multicellular glandular", "Squamous", "Connective"],
  "answer": "A",
  "explanation": "Goblet cells akele (single cell) mucus secrete karte hain, isliye ye unicellular hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Which junction facilitates transfer of ions between adjacent cells?",
  "options": ["Tight junction", "Adhering junction", "Gap junction", "Synapse"],
  "answer": "C",
  "explanation": "Gap junctions do cells ke beech fast communication aur transport ke liye rasta banate hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Mast cells secrete:",
  "options": ["Heparin", "Histamine", "Serotonin", "All of the above"],
  "answer": "D",
  "explanation": "Areolar tissue ki mast cells ye teeno chemicals allergy aur inflammation ke liye chhodti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "The structural unit of Bone is:",
  "options": ["Osteon", "Chondrocyte", "Nephron", "Neuron"],
  "answer": "A",
  "explanation": "Mammalian bones mein matrix Haversian system ya Osteon ke roop mein hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "In Frog, Vomerine teeth are found on:",
  "options": ["Lower jaw", "Upper jaw", "Tongue", "Pharynx"],
  "answer": "B",
  "explanation": "Frog ke sirf upper jaw par daant hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Tympanum in Frog represents:",
  "options": ["Eye", "Ear", "Nose", "Mouth"],
  "answer": "B",
  "explanation": "Frog mein external ear nahi hota, tympanum hi kaan ka kaam karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Male Cockroaches can be distinguished from females by:",
  "options": ["Long antennae", "Wings", "Anal styles", "Labrum"],
  "answer": "C",
  "explanation": "Anal styles dekh kar aap bata sakte hain ki cockroach male hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Spermatophores are:",
  "options": ["Individual sperms", "Bundles of sperms", "Female eggs", "Eggs of Frog"],
  "answer": "B",
  "explanation": "Cockroach mein sperms guchhon (bundles) mein hote hain jinhe spermatophores kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "The nervous system of Cockroach consists of:",
  "options": ["Brain and ventral nerve cord", "Only dorsal brain", "Heart-shaped brain", "No nerves"],
  "answer": "A",
  "explanation": "Cockroach mein ventral, double aur solid nerve cord hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Which part of the Cockroach's leg is the longest?",
  "options": ["Coxa", "Trochanter", "Tibia", "Tarsus"],
  "answer": "C",
  "explanation": "Leg segments mein Tibia sabse bada hissa hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Frogs are 'Ureotelic' because they excrete:",
  "options": ["Ammonia", "Urea", "Uric acid", "Guanine"],
  "answer": "B",
  "explanation": "Adult frogs urea nikaalte hain, isliye unhe ureotelic kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Sinus venosus in Frog heart receives blood from:",
  "options": ["Lungs", "Vena cava", "Ventricle", "Aorta"],
  "answer": "B",
  "explanation": "Sinus venosus deoxygenated blood Vena cava se receive karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "In Frog, the Tongue is:",
  "options": ["Small and fixed", "Bilobed and protrusible", "Covered with teeth", "Not present"],
  "answer": "B",
  "explanation": "Frog ki jeebh aage se judi hoti hai aur bilobed (do hisson wali) hoti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Mesorchium is a fold of peritoneum that attaches:",
  "options": ["Kidney to Body wall", "Testis to Kidney", "Ovary to Kidney", "Heart to Lungs"],
  "answer": "B",
  "explanation": "Male frog mein testes kidney se Mesorchium ke zariye judi hoti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "A Cockroach's head is formed by fusion of how many segments?",
  "options": ["3", "6", "9", "10"],
  "answer": "B",
  "explanation": "Cockroach ka sar 6 embryonic segments ke judne se banta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Structural Organisation in Animals",
  "shift": "Night",
  "question": "Which tissue acts as a 'Shock Absorber' in our joints?",
  "options": ["Bone", "Tendon", "Cartilage", "Adipose"],
  "answer": "C",
  "explanation": "Cartilage joints par friction kam karta hai aur shock absorb karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which of the following is NOT a part of the Cell Theory formulated by Schleiden and Schwann?",
  "options": ["Living organisms composed of cells", "Cell is structural unit", "New cells arise from pre-existing cells", "Animals and plants composed of cells"],
  "answer": "C",
  "explanation": "Schleiden aur Schwann ye nahi bata paaye the ki naye cells kaise bante hain. Rudolf Virchow ne 1855 mein 'Omnis cellula-e cellula' ka concept joda tha."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The 'Fluid Mosaic Model' of cell membrane was proposed by:",
  "options": ["Watson and Crick", "Singer and Nicolson", "Robert Brown", "Camillo Golgi"],
  "answer": "B",
  "explanation": "1972 mein Singer aur Nicolson ne ye model diya, jisme membrane ko 'quasifluid' bataya gaya hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The main arena of cellular activities in both plant and animal cells is:",
  "options": ["Nucleus", "Cytoplasm", "Mitochondria", "Ribosomes"],
  "answer": "B",
  "explanation": "Cytoplasm cell ka wo main area hai jahan cell ko 'living state' mein rakhne ke liye saari chemical reactions hoti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which of the following is an 'Extrachromosomal DNA' found in bacteria?",
  "options": ["Nucleoid", "Plasmid", "Mesosome", "Inclusion bodies"],
  "answer": "B",
  "explanation": "Plasmids chhote, circular aur self-replicating DNA hote hain jo bacteria ko antibiotic resistance jaise features dete hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The '9+2' arrangement of microtubules is found in:",
  "options": ["Centriole", "Cilia and Flagella", "Spindle fibres", "Cytoskeleton"],
  "answer": "B",
  "explanation": "Cilia aur Flagella ke axoneme mein 9 pairs peripheral doublets aur 2 central singlets hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which organelle is known as the 'Protein Factory' of the cell?",
  "options": ["Golgi body", "Lysosome", "Ribosome", "Endoplasmic Reticulum"],
  "answer": "C",
  "explanation": "Ribosomes protein synthesis ki main site hote hain (70S in Prokaryotes, 80S in Eukaryotes)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The 'Cis' and 'Trans' faces are associated with which organelle?",
  "options": ["Mitochondria", "Chloroplast", "Golgi apparatus", "Vacuole"],
  "answer": "C",
  "explanation": "Golgi apparatus mein forming face (Cis) aur maturing face (Trans) hote hain jo processing mein help karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which of the following is NOT a part of the 'Endomembrane System'?",
  "options": ["Endoplasmic Reticulum", "Golgi complex", "Mitochondria", "Lysosomes"],
  "answer": "C",
  "explanation": "Mitochondria, Chloroplast aur Peroxisomes endomembrane system ka hissa nahi hain kyunki inke kaam coordinated nahi hote."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Smooth Endoplasmic Reticulum (SER) is the major site for synthesis of:",
  "options": ["Proteins", "Lipids and Steroidal hormones", "Carbohydrates", "ATP"],
  "answer": "B",
  "explanation": "SER lipids aur steroid hormones banane ka main center hai, jabki RER protein banata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which organelle contains 'Hydrolytic Enzymes' (Hydrolases)?",
  "options": ["Vacuole", "Lysosome", "Peroxisome", "Ribosome"],
  "answer": "B",
  "explanation": "Lysosomes mein acidic pH par kaam karne wale enzymes (lipases, proteases) hote hain, isliye inhe suicidal bags kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Mitochondria has an inner membrane with folds called:",
  "options": ["Grana", "Thylakoids", "Cristae", "Cisternae"],
  "answer": "C",
  "explanation": "Cristae surface area badhate hain taaki zyada ATP ban sake."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which plastid is responsible for storing 'Oils and Fats'?",
  "options": ["Amyloplast", "Elaioplast", "Aleuroplast", "Chromoplast"],
  "answer": "B",
  "explanation": "Elaioplasts fats aur oils store karte hain. Amyloplast starch aur Aleuroplast protein store karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The space limited by the inner membrane of the chloroplast is:",
  "options": ["Stroma", "Lumen", "Perimitochondrial space", "Matrix"],
  "answer": "A",
  "explanation": "Chloroplast ki inner membrane ke andar ka fluid 'Stroma' kehlata hai jisme enzymes aur 70S ribosomes hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Centrioles are made up of 9 peripheral fibrils of:",
  "options": ["Tubulin protein", "Actin protein", "Myosin protein", "Flagellin protein"],
  "answer": "A",
  "explanation": "Centrioles tubulin protein ke triplets se bane hote hain jo 'Cartwheel' jaisa dikhta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Non-membranous organelles include:",
  "options": ["Ribosomes and Centrioles", "Nucleus and Chloroplast", "Lysosomes and Vacuoles", "ER and Golgi"],
  "answer": "A",
  "explanation": "Ribosomes aur Centrioles par koi membrane nahi hoti."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The Nucleolus is the site for active synthesis of:",
  "options": ["mRNA", "tRNA", "rRNA", "DNA"],
  "answer": "C",
  "explanation": "Nucleolus ribosomal RNA (rRNA) banane ka mukhya kendra hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "A 'Sub-metacentric' chromosome has:",
  "options": ["Centromere in middle", "Centromere slightly away from middle", "Centromere at end", "Centromere near end"],
  "answer": "B",
  "explanation": "Isme ek arm chhota (p) aur ek bada (q) hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Satellites in chromosomes are:",
  "options": ["Primary constrictions", "Secondary constrictions at constant location", "Terminal ends", "Centromeres"],
  "answer": "B",
  "explanation": "Ye non-staining secondary constrictions hote hain jo fragment jaisa appearance dete hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Mesosomes in bacteria help in:",
  "options": ["Cell wall formation", "DNA replication", "Respiration", "All of the above"],
  "answer": "D",
  "explanation": "Mesosomes membrane ke infoldings hain jo respiration, secretion aur replication mein help karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Polyribosomes (Polysomes) are:",
  "options": ["Multiple ribosomes on single mRNA", "Ribosomes in nucleus", "Ribosomes on ER", "Ribosomes in mitochondria"],
  "answer": "A",
  "explanation": "Jab ek hi mRNA par bohot saare ribosomes judkar protein banate hain, use polysome kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The Middle Lamella is mainly composed of:",
  "options": ["Cellulose", "Hemicellulose", "Calcium pectate", "Lignin"],
  "answer": "C",
  "explanation": "Calcium pectate do cells ko aapas mein jodne ka kaam karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Which of the following is semi-autonomous?",
  "options": ["Mitochondria and Chloroplast", "Ribosome and Golgi", "ER and Lysosome", "Vacuole and Nucleus"],
  "answer": "A",
  "explanation": "Inke paas apna DNA aur 70S ribosomes hota hai, isliye ye apne kuch protein khud bana sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Gas vacuoles are found in:",
  "options": ["Green photosynthetic bacteria", "Blue-green algae", "Purple and green bacteria", "All of the above"],
  "answer": "D",
  "explanation": "Ye vacuoles bacteria ko paani mein tairne (buoyancy) mein madad karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "The Tail of the phospholipid in the plasma membrane is:",
  "options": ["Hydrophilic and Polar", "Hydrophobic and Non-polar", "Hydrophilic and Non-polar", "Hydrophobic and Polar"],
  "answer": "B",
  "explanation": "Lipid ki tails hydrophobic hoti hain jo paani se bachne ke liye andar ki taraf rehti hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Morning",
  "question": "Na+/K+ Pump is an example of:",
  "options": ["Passive transport", "Active transport", "Facilitated diffusion", "Osmosis"],
  "answer": "B",
  "explanation": "Ye pump ATP ka use karke ions ko concentration gradient ke khilaaf move karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "The most abundant lipid in the cell membrane is:",
  "options": ["Phosphoglycerides", "Cholesterol", "Glycolipids", "Steroids"],
  "answer": "A",
  "explanation": "Cell membrane mein sabse zyada phosphoglycerides (type of phospholipid) milte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Which organelle helps in 'Photorespiration'?",
  "options": ["Lysosome", "Peroxisome", "Glyoxysome", "Sphaerosome"],
  "answer": "B",
  "explanation": "Peroxisomes photorespiration (C2 cycle) mein Mitochondria aur Chloroplast ke saath kaam karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "The Kinetochore is:",
  "options": ["Part of nucleus", "Disc-shaped structure on centromere", "End of chromosome", "Type of ribosome"],
  "answer": "B",
  "explanation": "Ye centromere par ek disc jaisi structure hai jahan spindle fibres judte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Grana are stacks of:",
  "options": ["Cristae", "Thylakoids", "Cisternae", "Oxysomes"],
  "answer": "B",
  "explanation": "Thylakoids jab sikkon ki dheri ki tarah ek ke upar ek rakhe hote hain, toh unhe Grana kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Bacterial flagella are composed of:",
  "options": ["Tubulin", "Flagellin", "Pilin", "Actin"],
  "answer": "B",
  "explanation": "Prokaryotes ka flagella flagellin protein se banta hai, jabki eukaryotes ka tubulin se."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Oxysomes (F0-F1 particles) are located on:",
  "options": ["Outer mitochondrial membrane", "Inner mitochondrial membrane", "Thylakoid membrane", "Nuclear envelope"],
  "answer": "B",
  "explanation": "Ye particles mitochondria ki inner membrane par ATP banane ka kaam karte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Which of the following is the smallest cell?",
  "options": ["Ostrich egg", "Nerve cell", "Mycoplasma", "RBC"],
  "answer": "C",
  "explanation": "Mycoplasma sabse chhota cell hai (0.3 micron)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "The Cytoskeleton is involved in:",
  "options": ["Mechanical support", "Motility", "Maintenance of cell shape", "All of the above"],
  "answer": "D",
  "explanation": "Cytoskeleton cell ko structure, support aur movement mein help karta hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Tonoplast is the membrane of:",
  "options": ["Nucleus", "Vacuole", "Lysosome", "Chloroplast"],
  "answer": "B",
  "explanation": "Plant vacuole ki membrane ko Tonoplast kehte hain jo ions ka transport control karti hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Mycoplasmas lack:",
  "options": ["Ribosomes", "Cell wall", "DNA", "Plasma membrane"],
  "answer": "B",
  "explanation": "Cell wall na hone ki wajah se ye penicillin se nahi marte aur apna shape badal sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Basal body of cilia/flagella is formed by:",
  "options": ["Centriole", "Nucleus", "ER", "Golgi"],
  "answer": "A",
  "explanation": "Cilia aur Flagella centriole jaise 'Basal body' se nikalte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Inclusion bodies in prokaryotes are:",
  "options": ["Membranous", "Non-membranous reserve materials", "Part of flagella", "Only in eukaryotes"],
  "answer": "B",
  "explanation": "Ye reserve materials hote hain (jaise glycogen granules) jin par koi membrane nahi hoti."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Which chromosome has centromere at the very tip?",
  "options": ["Acrocentric", "Telocentric", "Metacentric", "Sub-metacentric"],
  "answer": "B",
  "explanation": "Telocentric mein centromere bilkul end par hota hai (Insano mein ye nahi milta)."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "ER often has ribosomes attached to its:",
  "options": ["Luminal surface", "Extra-luminal surface", "Both", "Inner"],
  "answer": "B",
  "explanation": "Ribosomes hamesha ER ki bahri (cytoplasmic) surface par hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Golgi apparatus is involved in formation of:",
  "options": ["Glycoproteins/Glycolipids", "ATP", "DNA", "Only Lipids"],
  "answer": "A",
  "explanation": "Golgi proteins aur lipids ki glycosylation karke glycoproteins aur glycolipids banata hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Nuclear pores allow movement of:",
  "options": ["DNA only", "RNA and Proteins both ways", "Proteins in", "RNA out"],
  "answer": "B",
  "explanation": "Nuclear pores se RNA aur Proteins dono directions mein move kar sakte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Cell wall of algae is made of:",
  "options": ["Cellulose, Galactans, Mannans", "Hemicellulose and Pectin", "Chitin", "Peptidoglycan"],
  "answer": "A",
  "explanation": "Algae ki cell wall mein cellulose ke saath galactans aur mannans hote hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "'S' in ribosomes stands for:",
  "options": ["Size", "Svedberg unit", "Structure", "Speed"],
  "answer": "B",
  "explanation": "Ye sedimentation coefficient hai jo size aur density ka indirect measure hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Chromatin contains:",
  "options": ["DNA and Histones", "Non-histone proteins", "RNA", "All of the above"],
  "answer": "D",
  "explanation": "Chromatin mein DNA, histone, non-histone proteins aur RNA sab kuch hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Acrocentric chromosome centromere is:",
  "options": ["At middle", "Close to its end", "At very end", "Slightly away"],
  "answer": "B",
  "explanation": "Isme ek arm bohot chhota aur ek bohot bada hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Perinuclear space is between:",
  "options": ["ER and Golgi", "Two nuclear membranes", "Nucleus and Cytoplasm", "Mitochondria and ER"],
  "answer": "B",
  "explanation": "Do nuclear membranes ke beech ke 10-50nm space ko perinuclear space kehte hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Which of the following lacks a nucleus at maturity?",
  "options": ["Mature RBCs", "Sieve tube cells", "Both A and B", "WBCs"],
  "answer": "C",
  "explanation": "Mammalian RBCs aur plants ki Sieve tubes dono maturity par nucleus kho dete hain."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Hydrophilic head of membrane lipid faces:",
  "options": ["Inwards", "Outwards", "Towards tail", "Towards center"],
  "answer": "B",
  "explanation": "Polar head bahar ki taraf rehta hai jahan paani (aqueous environment) hota hai."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Glycocalyx in bacteria can be a loose sheath called:",
  "options": ["Capsule", "Slime layer", "Cell wall", "Mesosome"],
  "answer": "B",
  "explanation": "Loose sheath ko slime layer kehte hain, aur tough layer ko capsule."
},
{
  "class": "11",
  "subject": "Biology",
  "chapter": "Cell: The Unit of Life",
  "shift": "Night",
  "question": "Who first saw and described a 'Live Cell'?",
  "options": ["Robert Hooke", "Anton Von Leeuwenhoek", "Schleiden", "Schwann"],
  "answer": "B",
  "explanation": "Leeuwenhoek ne sabse pehle zinda cell dekha tha, Hooke ne sirf dead cork cells dekhe the."
},

{
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The most abundant protein in the whole of the biosphere is:",
    "options": ["Collagen", "RuBisCO", "Haemoglobin", "Insulin"],
    "answer": "B",
    "explanation": "RuBisCO biosphere mein sabse zyada milne wala protein hai, jabki Collagen sirf animal world mein sabse abundant hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Which of the following is NOT a polymer?",
    "options": ["Proteins", "Polysaccharides", "Lipids", "Nucleic acids"],
    "answer": "C",
    "explanation": "Lipids macromolecules nahi hote kyunki inka molecular weight 800 Da se kam hota hai. Ye vesicles banane ki wajah se acid-insoluble fraction mein milte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The bond formed between two amino acids is a:",
    "options": ["Glycosidic bond", "Peptide bond", "Phosphodiester bond", "Hydrogen bond"],
    "answer": "B",
    "explanation": "Ek amino acid ka -COOH group dusre ke -NH2 group se react karke water nikalta hai aur Peptide bond (-CONH-) banata hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "An example of a 'Secondary Metabolite' used as a drug is:",
    "options": ["Ricin", "Vinblastine", "Anthocyanin", "Abrin"],
    "answer": "B",
    "explanation": "Vinblastine aur Curcumin drugs hain. Ricin aur Abrin toxins hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The 'Alpha-helix' and 'Beta-pleated sheets' are examples of:",
    "options": ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"],
    "answer": "B",
    "explanation": "Secondary structure hydrogen bonding ki wajah se banti hai jo polypeptide chain ko fold karti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Which of the following is a 'Reducing Sugar'?",
    "options": ["Sucrose", "Starch", "Glucose", "Glycogen"],
    "answer": "C",
    "explanation": "Saare monosaccharides (Glucose, Fructose) reducing sugars hote hain. Sucrose ek non-reducing disaccharide hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "In a Polysaccharide (like Glycogen), the 'Right end' is called:",
    "options": ["Reducing end", "Non-reducing end", "Neutral end", "C-terminal"],
    "answer": "A",
    "explanation": "Polysaccharide chain ka right end reducing hota hai aur left end non-reducing hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "'Chitin' is a homopolymer of:",
    "options": ["Glucose", "N-acetyl glucosamine (NAG)", "Amino acids", "Fructose"],
    "answer": "B",
    "explanation": "Chitin insects ke exoskeleton aur fungi ki cell wall mein milta hai jo NAG ka polymer hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The 'Tertiary structure' of a protein is absolutely necessary for:",
    "options": ["Biological activities (Enzymatic)", "Storage of energy", "Forming cell wall", "Heat insulation"],
    "answer": "A",
    "explanation": "3D folding (Tertiary structure) se active sites banti hain jahan enzymes substrates ke saath bind karte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "A Nucleotide is composed of:",
    "options": ["Base + Sugar", "Base + Sugar + Phosphate", "Sugar + Phosphate", "Base + Phosphate"],
    "answer": "B",
    "explanation": "Agar phosphate hata dein toh wo Nucleoside ban jayega."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Which nitrogenous base is found in RNA but NOT in DNA?",
    "options": ["Adenine", "Cytosine", "Guanine", "Uracil"],
    "answer": "D",
    "explanation": "DNA mein Thymine hota hai, RNA mein uski jagah Uracil hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The most abundant element (by weight %) in the human body is:",
    "options": ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
    "answer": "C",
    "explanation": "Oxygen human body ka lagbhag 65% weight banata hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Essential amino acids are those which:",
    "options": ["Synthesized by body", "Taken in diet", "Contain sulfur", "Have complex R-group"],
    "answer": "B",
    "explanation": "Inhe hamara sharir nahi bana sakta, isliye inhe khane (diet) ke zariye lena padta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "'Inulin' is a polymer of:",
    "options": ["Glucose", "Fructose", "Galactose", "Amino acids"],
    "answer": "B",
    "explanation": "Inulin (Polysaccharide) fructose ka polymer hai. Ise Insulin (Protein) ke saath confuse mat karna."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The 'Pitch' of a B-DNA helix (one full turn) is:",
    "options": ["3.4 Å", "34 Å", "20 Å", "3.6 Å"],
    "answer": "B",
    "explanation": "Ek turn mein 10 base pairs hote hain. Do pairs ke beech ki doori 3.4 Å hoti hai, toh pure turn ki 34 Å ($3.4 \text{ nm}$) hui."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Enzymes increase the rate of reaction by:",
    "options": ["Increasing activation energy", "Lowering activation energy", "Increasing temperature", "Changing equilibrium"],
    "answer": "B",
    "explanation": "Enzymes activation energy ke pahad ko chhota kar dete hain taaki reaction jaldi ho sake."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "A 'Non-protein' constituent of an enzyme that makes it active is:",
    "options": ["Apoenzyme", "Cofactor", "Holoenzyme", "Epienzyme"],
    "answer": "B",
    "explanation": "Holoenzyme (Active) = Apoenzyme (Protein part) + Cofactor (Non-protein part)."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Zinc is a cofactor for the enzyme:",
    "options": ["Peroxidase", "Catalase", "Carboxypeptidase", "Amylase"],
    "answer": "C",
    "explanation": "Carboxypeptidase ek proteolytic enzyme hai jo zinc ion ko cofactor ki tarah use karta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Competitive inhibition of 'Succinate dehydrogenase' is caused by:",
    "options": ["Malonate", "Succinate", "Citrate", "Oxaloacetate"],
    "answer": "A",
    "explanation": "Malonate ka structure Succinate jaisa hota hai, isliye wo enzyme ki active site ke liye compete karta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Which of the following is a 'Basic Amino Acid'?",
    "options": ["Glutamic acid", "Lysine", "Valine", "Tyrosine"],
    "answer": "B",
    "explanation": "Lysine aur Arginine basic hote hain. Glutamic acid acidic aur Valine neutral hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The 'Lecithin' found in the cell membrane is a:",
    "options": ["Simple lipid", "Phospholipid", "Glycoprotein", "Steroid"],
    "answer": "B",
    "explanation": "Lecithin ek phosphorus-containing lipid hai jo cell membrane ka major hissa hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "The bond between the sugar and nitrogenous base in a nucleotide is:",
    "options": ["Phosphodiester bond", "N-glycosidic bond", "Peptide bond", "Hydrogen bond"],
    "answer": "B",
    "explanation": "Sugar ka 1' carbon aur base ka nitrogen N-glycosidic bond se judte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Adenine and Guanine are categorized as:",
    "options": ["Purines", "Pyrimidines", "Nucleosides", "Nucleotides"],
    "answer": "A",
    "explanation": "A aur G double-ringed Purines hain, jabki C, T, aur U single-ringed Pyrimidines hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Arachidonic acid has how many carbons (including carboxyl carbon)?",
    "options": ["16", "18", "20", "22"],
    "answer": "C",
    "explanation": "Palmitic acid mein 16 aur Arachidonic acid mein 20 carbons hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Morning",
    "question": "Prosthetic groups are cofactors that are:",
    "options": ["Loosely attached", "Tightly bound", "Only vitamins", "Metal ions"],
    "answer": "B",
    "explanation": "Prosthetic groups apoenzyme se bohot mazbooti se (tightly) jude hote hain, jaise peroxidase mein Heme."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Km (Michaelis constant) value is the substrate concentration at which:",
    "options": ["Velocity is max", "Velocity is half of Vmax", "Enzyme denatures", "Reaction stops"],
    "answer": "B",
    "explanation": "Km wo concentration hai jahan reaction ki speed Vmax ki aadhi ho jati hai. Kam Km matlab high affinity."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Which structure of protein provides a '3-dimensional view'?",
    "options": ["Primary", "Secondary", "Tertiary", "Quaternary"],
    "answer": "C",
    "explanation": "Tertiary structure ek hollow woolen ball jaisa dikhta hai aur enzymatic activity ke liye zaroori hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Which of the following is a 'Heteropolymer'?",
    "options": ["Starch", "Cellulose", "Protein", "Glycogen"],
    "answer": "C",
    "explanation": "Proteins alag-alag tarah ke amino acids se bante hain. Baaki teeno sirf glucose ke bane homopolymers hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Glycerol is chemically:",
    "options": ["Trihydroxy propane", "Dihydroxy acetone", "Tetrahydroxy butane", "Glyceraldehyde"],
    "answer": "A",
    "explanation": "Glycerol ka formula $CH_2OH-CHOH-CH_2OH$ hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "The bond linking 3' carbon of one sugar to 5' carbon of next is:",
    "options": ["Glycosidic", "Peptide", "Phosphodiester", "Hydrogen"],
    "answer": "C",
    "explanation": "Ye bond DNA/RNA ka backbone banata hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Which of the following is an 'Aromatic Amino Acid'?",
    "options": ["Tryptophan", "Tyrosine", "Phenylalanine", "All of the above"],
    "answer": "D",
    "explanation": "In amino acids ke R-group mein benzene ring jaisi structure hoti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "'Concanavalin A' is an example of:",
    "options": ["Alkaloid", "Lectin", "Toxin", "Drug"],
    "answer": "B",
    "explanation": "Lectins wo proteins hote hain jo carbohydrates se bind karte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Glycolysis (Glucose to Lactic acid) involves how many steps?",
    "options": ["5", "10", "2", "1"],
    "answer": "B",
    "explanation": "Ye ek 10-step metabolic pathway hai jo cytoplasm mein hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Enzymes catalyzing removal of groups leaving double bonds are:",
    "options": ["Hydrolases", "Lyases", "Ligases", "Isomerases"],
    "answer": "B",
    "explanation": "Lyases bina hydrolysis ke groups hatate hain aur double bonds banate hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Haemoglobin consists of 4 subunits. This represents its:",
    "options": ["Primary", "Secondary", "Tertiary", "Quaternary"],
    "answer": "D",
    "explanation": "Jab kayi polypeptide chains ek saath arrange hoti hain, toh use quaternary structure kehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Which of the following is found in the 'Acid-insoluble fraction'?",
    "options": ["Amino acids", "Monosaccharides", "Nucleotides", "Nucleic acids"],
    "answer": "D",
    "explanation": "High molecular weight wale molecules (Proteins, Nucleic acids) acid-insoluble pool mein rehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "'Zwitterion' is a state of amino acid where:",
    "options": ["Positive only", "Negative only", "Both charges (Net zero)", "No charge"],
    "answer": "C",
    "explanation": "Ek specific pH par amino acid mein positive aur negative dono charges hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "The catalytic core of 'Heme' is present in:",
    "options": ["Catalase", "Peroxidase", "Both A and B", "Neither"],
    "answer": "C",
    "explanation": "Heme in dono enzymes ka prosthetic group hai jo $H_2O_2$ ko todte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Cellulose is a linear polymer of:",
    "options": ["Alpha-Glucose", "Beta-Glucose", "Fructose", "Sucrose"],
    "answer": "B",
    "explanation": "Starch alpha-glucose ka hai, par cellulose beta-glucose ka polymer hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Co-enzymes like NAD and NADP contain which vitamin?",
    "options": ["Thiamine", "Niacin", "Riboflavin", "Retinol"],
    "answer": "B",
    "explanation": "NAD aur NADP mein Niacin (Vitamin B3) hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "The most common configuration of DNA in living systems is:",
    "options": ["A-DNA", "B-DNA", "Z-DNA", "C-DNA"],
    "answer": "B",
    "explanation": "B-DNA wahi right-handed helix hai jo Watson aur Crick ne bataya tha."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Transition state structure of the substrate is:",
    "options": ["Stable", "Unstable and transient", "Permanent", "Low energy"],
    "answer": "B",
    "explanation": "Ye ek high-energy aur asthayi (unstable) state hai jo product banne se pehle aati hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Exoskeleton of Arthropods (Chitin) is a:",
    "options": ["Heteropolysaccharide", "Homopolysaccharide", "Lipid", "Protein"],
    "answer": "B",
    "explanation": "Chitin sirf NAG ka bana hota hai, isliye ye homopolysaccharide hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Which of the following is a 'Nucleoside'?",
    "options": ["Adenosine", "Adenylic acid", "Adenine", "Guanine"],
    "answer": "A",
    "explanation": "Base + Sugar = Nucleoside (Adenosine). Agar phosphate jud jaye toh Nucleotide."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "The bond in DNA between two nitrogenous bases is:",
    "options": ["Covalent", "Peptide", "Hydrogen", "Ionic"],
    "answer": "C",
    "explanation": "Adenine aur Thymine ke beech 2, aur Guanine aur Cytosine ke beech 3 hydrogen bonds hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Enzymes that catalyze bonding of two compounds are:",
    "options": ["Isomerases", "Ligases", "Lyases", "Transferases"],
    "answer": "B",
    "explanation": "Ligases (e.g., DNA ligase) do molecules ko jodne ka kaam karte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Which of the following is a neutral amino acid?",
    "options": ["Lysine", "Glutamic acid", "Valine", "Arginine"],
    "answer": "C",
    "explanation": "Valine mein koi extra acidic ya basic group nahi hota, isliye ye neutral hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "In DNA, the distance between two successive base pairs is:",
    "options": ["34 Å", "0.34 nm", "20 Å", "3.6 nm"],
    "answer": "B",
    "explanation": "Do base pairs ke beech 3.4 Å ya 0.34 nm ka gap hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Protein which acts as a hormone is:",
    "options": ["Trypsin", "Insulin", "Antibody", "Collagen"],
    "answer": "B",
    "explanation": "Insulin ek peptide hormone hai jo blood sugar control karta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Biomolecules",
    "shift": "Night",
    "question": "Apoenzyme + Cofactor is equal to:",
    "options": ["Holoenzyme", "Isoenzyme", "Proenzyme", "None"],
    "answer": "A",
    "explanation": "Jab protein part aur non-protein part milte hain, tabhi enzyme fully active (Holoenzyme) banta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "In which phase of the cell cycle does actual DNA replication occur?",
    "options": ["G1 phase", "S phase", "G2 phase", "M phase"],
    "answer": "B",
    "explanation": "Synthesis (S) phase mein DNA double hota hai. Agar initial content 2C tha, toh wo 4C ho jata hai, lekin chromosome number (2n) same rehta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The 'Quiescent stage' (G0) refers to cells that:",
    "options": ["Are dead", "Have exited the cell cycle and are metabolically inactive", "Have exited the cell cycle but remain metabolically active", "Are continuously dividing"],
    "answer": "C",
    "explanation": "G0 cells (like heart cells/neurons) divide nahi karti par zinda aur active rehti hain. Zarurat padne par ye wapas enter kar sakti hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Crossing over occurs during which stage of Meiosis?",
    "options": ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    "answer": "C",
    "explanation": "Pachytene mein non-sister chromatids ke beech exchange of genetic material hota hai, jise 'Recombination' kehte hain (Enzyme: Recombinase)."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Dissolution of the synaptonemal complex occurs during:",
    "options": ["Pachytene", "Diplotene", "Diakinesis", "Zygotene"],
    "answer": "B",
    "explanation": "Diplotene mein complex toot jata hai aur chromosomes sirf 'X-shaped' structures pe jude rehte hain, jinhe Chiasmata kehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "If a cell has 24 chromosomes at G1, how many will it have after S phase?",
    "options": ["48", "12", "24", "36"],
    "answer": "C",
    "explanation": "S phase mein DNA double hota hai (C becomes 2C), par chromosome count (n) change nahi hota."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Spindle fibres attach to chromosomes at:",
    "options": ["Centromere", "Kinetochore", "Telomere", "Secondary constriction"],
    "answer": "B",
    "explanation": "Kinetochores are small disc-shaped structures on the surface of centromeres where spindle fibres attach."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Terminalisation of Chiasmata is the characteristic of:",
    "options": ["Diplotene", "Diakinesis", "Pachytene", "Metaphase I"],
    "answer": "B",
    "explanation": "Ye Prophase-I ki last stage hai jahan chiasmata move karke ends tak pahunch jate hain aur nuclear membrane gayab hone lagti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Which phase is the longest in the cell cycle?",
    "options": ["M Phase", "Interphase", "Cytokinesis", "Karyokinesis"],
    "answer": "B",
    "explanation": "Interphase cell cycle ka >95% time leta hai. M-phase toh sirf 1 ghante ka hota hai (in 24hr human cycle)."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Synapsis (pairing of homologous chromosomes) occurs during:",
    "options": ["Leptotene", "Zygotene", "Pachytene", "Diakinesis"],
    "answer": "B",
    "explanation": "Zygotene mein chromosomes pair up hote hain aur 'Synaptonemal Complex' banta hai. Inhe Bivalents ya Tetrads kehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "At which stage of Mitosis do chromosomes cluster at opposite poles and lose their individuality?",
    "options": ["Anaphase", "Metaphase", "Telophase", "Prophase"],
    "answer": "C",
    "explanation": "Telophase Mitosis ki aakhri stage hai—nuclear envelope wapas aa jati hai aur nucleolus, Golgi, ER bhi reappear hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The stage between two meiotic divisions is called:",
    "options": ["Interphase", "Interkinesis", "Generation time", "S-phase"],
    "answer": "B",
    "explanation": "Interkinesis short-lived hoti hai aur isme DNA replication NAHI hota."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "During Anaphase-I of Meiosis:",
    "options": ["Homologous chromosomes separate", "Sister chromatids separate", "DNA replicates", "Crossing over occurs"],
    "answer": "A",
    "explanation": "Anaphase-I mein Homologous separate hote hain (Reduction), aur Anaphase-II/Mitosis mein Sister chromatids separate hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The Check-point that majorly regulates the cell cycle is:",
    "options": ["G1 to S", "S to G2", "G2 to M", "Both A and C"],
    "answer": "D",
    "explanation": "Cell check karti hai ki DNA damage toh nahi ya spindle sahi se laga hai ya nahi."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Astral rays and spindle fibres are together called:",
    "options": ["Mitotic apparatus", "Centrosome", "Kinetochore", "Phragmoplast"],
    "answer": "A",
    "explanation": "Animal cells mein do asters aur spindle mil kar Mitotic apparatus banate hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "In plant cells, cytokinesis occurs by:",
    "options": ["Cell furrow formation", "Cell plate formation", "Budding", "Fragmentation"],
    "answer": "B",
    "explanation": "Plant cells mein wall rigid hoti hai, isliye centre se bahar ki taraf (Centrifugal) cell plate banti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Number of Mitotic divisions required to produce 128 cells from a single cell is:",
    "options": ["127", "7", "32", "64"],
    "answer": "B",
    "explanation": "Formula: 2^n = Total cells. 2^7 = 128. Toh 7 divisions chahiye."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Chromosomes are MOST condensed and easily studied under a microscope at:",
    "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    "answer": "B",
    "explanation": "Metaphase plate pe chromosomes line up hote hain aur unki morphology best dikhti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Recombinase enzyme is required in:",
    "options": ["Mitosis", "Meiosis I", "Meiosis II", "Binary fission"],
    "answer": "B",
    "explanation": "Pachytene stage mein recombination ke liye ye enzyme mandatory hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "A bivalent consists of:",
    "options": ["2 chromatids and 1 centromere", "4 chromatids and 2 centromeres", "2 chromatids and 2 centromeres", "4 chromatids and 4 centromeres"],
    "answer": "B",
    "explanation": "Bivalent = 2 Homologous chromosomes. Har chromosome mein 2 chromatids hote hain, toh total 4 (Tetrad)."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "In which stage of Mitosis does the centromere split?",
    "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    "answer": "C",
    "explanation": "Anaphase mein centromere split hota hai aur sister chromatids opposite poles ki taraf move karte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Centrioles duplicate during:",
    "options": ["G1 phase", "S phase (in cytoplasm)", "G2 phase", "Prophase"],
    "answer": "B",
    "explanation": "DNA replication nucleus ke andar hota hai aur centriole duplication cytoplasm mein hota hai—dono S-phase mein!"
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Small disc-shaped structures at the surface of centromeres are:",
    "options": ["Kinetochores", "Satellite", "Primary constriction", "Centrioles"],
    "answer": "A",
    "explanation": "Kinetochores are the sites where spindle fibers attach."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The separation of daughter chromosomes is called:",
    "options": ["Karyokinesis", "Cytokinesis", "Segregation", "Disjunction"],
    "answer": "D",
    "explanation": "Anaphase mein chromosomes ka door jana disjunction hai. Fail hone par use Non-disjunction kehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Which phase is characterized by 'Bouquet stage'?",
    "options": ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    "answer": "A",
    "explanation": "Leptotene mein chromosomes threads ki tarah dikhte hain aur nuclear membrane ke paas collect hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Cells that do not divide (e.g., nerve cells) remain in:",
    "options": ["S phase", "G0 phase", "G2 phase", "M phase"],
    "answer": "B",
    "explanation": "Nerve cells permanent G0 phase mein rehti hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The amount of DNA in a cell at G2 phase is 4C. What was the amount in G1?",
    "options": ["1C", "2C", "4C", "8C"],
    "answer": "B",
    "explanation": "S-phase mein DNA double hota hai. Toh G2 (4C) se pehle G1 mein wo half (2C) raha hoga."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Meiosis is also called Reductional Division because:",
    "options": ["It reduces the size of cells", "It reduces the number of chromosomes to half", "It occurs in a short time", "It reduces the DNA content to 1/4th"],
    "answer": "B",
    "explanation": "2n to n conversion ki wajah se ise reductional division kehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Colchicine is a drug that arrests cell division at:",
    "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    "answer": "B",
    "explanation": "Ye spindle formation ko rok deta hai, isliye chromosomes metaphase pe hi ruk jate hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Liquid endosperm of coconut is formed by:",
    "options": ["Karyokinesis followed by cytokinesis", "Free nuclear division", "Mitosis in diploid cells", "Meiosis"],
    "answer": "B",
    "explanation": "Jab nucleus divide hota rahe par cell wall na bane, use multinucleated condition (Syncytium) kehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "At the end of Meiosis-II, one diploid cell produces:",
    "options": ["2 Haploid cells", "4 Haploid cells", "2 Diploid cells", "4 Diploid cells"],
    "answer": "B",
    "explanation": "Meiosis-I se 2 cells banti hain, aur wo dono Meiosis-II karke total 4 haploid cells banati hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Chromosomes start pairing in:",
    "options": ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
    "answer": "B",
    "explanation": "Zygotene stage mein pairing (synapsis) shuru hoti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Shape of chromosomes (V, L, J, I) is best observed during:",
    "options": ["Metaphase", "Anaphase", "Prophase", "Telophase"],
    "answer": "B",
    "explanation": "Anaphase mein movement ke waqt centromere ki position ke basis par shapes clear dikhti hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Synaptonemal complex is visible in:",
    "options": ["Compound microscope", "Electron microscope", "Phase contrast microscope", "Naked eyes"],
    "answer": "B",
    "explanation": "Ye bohot fine protein structure hai, jo sirf EM mein dikhta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "M-phase in human cell lasts for about:",
    "options": ["23 hours", "1 hour", "90 minutes", "10 hours"],
    "answer": "B",
    "explanation": "Pure cell cycle ka sirf 5% time M-phase mein jata hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The Phragmoplast is the precursor of:",
    "options": ["Cell wall", "Cell plate", "Chloroplast", "Spindle"],
    "answer": "B",
    "explanation": "Phragmoplast plant cytokinesis ke waqt cell plate formation mein help karta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Number of chromatids in a chromosome at Anaphase is:",
    "options": ["1", "2", "4", "8"],
    "answer": "A",
    "explanation": "Anaphase mein sister chromatids alag ho jate hain, toh har daughter chromosome mein 1 chromatid hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Meiosis-II is similar to:",
    "options": ["Meiosis-I", "Mitosis", "Amitosis", "Binary fission"],
    "answer": "B",
    "explanation": "Meiosis-II ek equational division hai jo mitosis jaisa dikhta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Chiasmata are seen in:",
    "options": ["Zygotene", "Pachytene", "Diplotene", "Diakinesis"],
    "answer": "C",
    "explanation": "X-shaped chiasmata diplotene stage mein visible hote hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Protein synthesis for spindle fibres occurs in:",
    "options": ["G1 phase", "S phase", "G2 phase", "M phase"],
    "answer": "C",
    "explanation": "Tubulin protein G2 phase mein synthesize hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Significance of Meiosis is:",
    "options": ["Growth", "Conservation of chromosome number across generations", "Repair", "Asexual reproduction"],
    "answer": "B",
    "explanation": "Meiosis chromosome number half karke sexual reproduction mein balance banaye rakhta hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Yeast cell cycle takes about:",
    "options": ["24 hours", "90 minutes", "20 minutes", "1 hour"],
    "answer": "B",
    "explanation": "Yeast cell har 90 minutes mein divide hoti hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Which stage is characterized by disappearance of nucleolus and nuclear envelope?",
    "options": ["Late Prophase / Diakinesis", "Early Prophase", "Metaphase", "Anaphase"],
    "answer": "A",
    "explanation": "Prophase ke khatam hote-hote organelles gayab hone lagte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Identify the Equational Division:",
    "options": ["Meiosis I", "Mitosis", "Meiosis II", "Both B and C"],
    "answer": "D",
    "explanation": "Mitosis aur Meiosis II dono equational divisions hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "If an onion root tip cell has 16 chromosomes, how many will be in the pollen grain?",
    "options": ["16", "32", "8", "24"],
    "answer": "C",
    "explanation": "Root tip 2n=16 hai, pollen n=8 hoga."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "The most dramatic period of the cell cycle is:",
    "options": ["Interphase", "M-phase", "S-phase", "G0 phase"],
    "answer": "B",
    "explanation": "M-phase mein cell ke parts ka major reorganization hota hai."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Mitogen is a substance that:",
    "options": ["Stops mitosis", "Triggers mitosis", "Causes meiosis", "Kills the cell"],
    "answer": "B",
    "explanation": "Mitogens cells ko divide hone ke liye stimulate karte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "In Oocytes of some vertebrates, Diplotene can last for:",
    "options": ["Minutes", "Hours", "Months or Years", "Few days"],
    "answer": "C",
    "explanation": "Human females mein oocytes birth se puberty tak diplotene mein rehte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "At Metaphase, the plane of alignment of chromosomes is called:",
    "options": ["Equatorial plate", "Metaphase plate", "Both A and B", "Cell plate"],
    "answer": "C",
    "explanation": "Chromosomes equator par align ho jate hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "Centrosome starts moving to opposite poles during:",
    "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    "answer": "A",
    "explanation": "Prophase mein centrioles poles ki taraf badhna shuru karte hain."
  },
  {
    "class": "11",
    "subject": "Biology",
    "chapter": "Cell Cycle and Cell Division",
    "shift": "Morning",
    "question": "If we want to study the 'Cross-over' of genes, which stage should we pick?",
    "options": ["Zygotene", "Pachytene", "Diplotene", "Anaphase"],
    "answer": "B",
    "explanation": "Pachytene stage mein actual crossing over aur recombination hota hai."
  },


];