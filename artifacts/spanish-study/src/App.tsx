import { useState, useEffect } from "react";

/* ─── DATA ─── */
const TOPICS = {
  unit1: {
    id: "unit1",
    title: "Unidad 1: Bienvenidos",
    subtitle: "Greetings, Alphabet, Colours & Spanish in the World",
    emoji: "👋",
    notes: [
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Greetings (Los Saludos)",
        content: [],
        table: [
          ["Hola", "Hello"],
          ["Buenos días", "Good morning"],
          ["Buenas tardes", "Good afternoon"],
          ["Buenas noches", "Good evening / Good night"],
          ["¿Cómo estás?", "How are you? (informal)"],
          ["¿Cómo está usted?", "How are you? (formal)"],
          ["Muy bien, gracias", "Very well, thank you"],
          ["Estoy bien", "I am well"],
          ["Estoy regular / así así", "I am ok / so-so"],
          ["Estoy mal", "I am not well"],
          ["Estoy fatal", "I am terrible"],
          ["Adiós", "Goodbye"],
          ["Hasta luego", "See you later"],
          ["Hasta pronto", "See you soon"],
          ["Hasta mañana", "See you tomorrow"],
          ["Me llamo…", "My name is…"],
          ["¿Cómo te llamas?", "What is your name?"],
          ["Se llama…", "His / Her name is…"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "The Alphabet (El Abecedario)",
        content: [
          "Spanish has <strong>27 letters</strong> including the special <strong>ñ</strong>.",
          "Key tricky sounds: <strong>H</strong> is always silent (hotel = o-tel). <strong>LL</strong> sounds like 'y'. <strong>Ñ</strong> sounds like 'ny' (España = Espan-ya). <strong>J</strong> sounds like a strong 'h' (Javier = Havier). <strong>V</strong> and <strong>B</strong> sound the same. <strong>Z</strong> sounds like 'th' in Spain (zapato = thapato).",
          "Spanish vowels always keep the same sound: <strong>A</strong> (ah), <strong>E</strong> (eh), <strong>I</strong> (ee), <strong>O</strong> (oh), <strong>U</strong> (oo).",
          "To spell your name: <em>¿Cómo se deletrea? = How do you spell it?</em>",
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Colours (Los Colores)",
        content: [],
        table: [
          ["rojo/a", "red"],
          ["azul", "blue"],
          ["verde", "green"],
          ["amarillo/a", "yellow"],
          ["naranja", "orange"],
          ["morado/a / violeta", "purple"],
          ["rosa", "pink"],
          ["marrón", "brown"],
          ["negro/a", "black"],
          ["blanco/a", "white"],
          ["gris", "grey"],
          ["azul marino", "navy blue"],
          ["granate", "dark red / maroon"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Punctuation: Question & Exclamation Marks",
        content: [
          "Spanish uses <em>inverted</em> punctuation marks at the beginning of sentences.",
          "<strong>¿…?</strong> — Questions start with an upside-down question mark: <em>¿Cómo te llamas?</em>",
          "<strong>¡…!</strong> — Exclamations start with an upside-down exclamation mark: <em>¡Hola!</em>",
          "This tells the reader the tone of the sentence before they begin reading it.",
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Spanish Sounds & Spellings",
        content: [
          "<strong>H</strong> → silent: <em>hotel, hola</em>",
          "<strong>Ñ</strong> → 'ny' sound: <em>España, mañana</em>",
          "<strong>LL</strong> → 'y' sound: <em>me llamo, ella</em>",
          "<strong>J / G(e,i)</strong> → strong 'h': <em>Javier, hijo, gente</em>",
          "<strong>Z / C(e,i)</strong> → 'th' in Castilian Spanish: <em>zapato, centro</em>",
          "<strong>V = B</strong> → same sound: <em>vaca, boca</em>",
          "<strong>QU</strong> → 'k' sound (u is silent): <em>queso, quién</em>",
          "<strong>GU</strong> → 'g' sound (u silent before e/i): <em>guitarra, guerra</em>",
          "<strong>R</strong> at start of word → trilled: <em>rojo, Rosa</em>; <strong>RR</strong> → strongly trilled: <em>perro</em>",
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "Spanish-Speaking Countries",
        content: [
          "Spanish is the <strong>official language of 21 countries</strong> and is spoken by over <strong>500 million people</strong> worldwide.",
          "<strong>In Europe:</strong> Spain",
          "<strong>In Central America:</strong> Mexico, Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panama",
          "<strong>In South America:</strong> Colombia, Venezuela, Ecuador, Peru, Bolivia, Chile, Argentina, Uruguay, Paraguay",
          "<strong>In the Caribbean:</strong> Cuba, Dominican Republic, Puerto Rico",
          "<strong>In Africa:</strong> Equatorial Guinea",
          "Spanish is the <strong>2nd most spoken language</strong> in the world by native speakers, after Mandarin Chinese.",
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "Fun Facts about Spain",
        content: [
          "Spain has 4 official languages: <strong>Castilian Spanish, Catalan, Galician, and Basque (Euskara)</strong>.",
          "Spain is the <strong>second largest country</strong> in the European Union by area.",
          "Famous cities include: <strong>Madrid</strong> (capital), <strong>Barcelona, Seville, Valencia, Bilbao, Salamanca, Granada, Córdoba</strong>.",
          "Spain is known for flamenco, bullfighting, paella, tapas, siestas, and La Tomatina festival.",
          "The Spanish flag is red and yellow: <span class='key-term'>La bandera española</span>.",
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "Spanish Surnames (Los Apellidos)",
        content: [
          "In Spain, people traditionally have <strong>two surnames</strong>: the first from their father and the second from their mother.",
          "<span class='example-tag'>Example</span> María García López → García (father's surname) + López (mother's surname)",
          "When a woman marries, she may keep both her surnames (unlike the Irish/English tradition).",
          "Common Spanish surnames: García, Martínez, López, Sánchez, González, Rodríguez, Fernández, Torres.",
          "Each person also has a <strong>día del santo</strong> (saint's day) — the feast day of the saint they are named after.",
        ],
      },
    ],
    flashcards: [
      { term: "¿Cómo te llamas?", def: "What is your name? (informal)" },
      { term: "Me llamo…", def: "My name is…" },
      { term: "¿Cómo estás?", def: "How are you? (informal)" },
      { term: "Estoy muy bien", def: "I am very well" },
      { term: "Estoy fatal", def: "I am terrible" },
      { term: "El abecedario", def: "The alphabet" },
      { term: "La H en español", def: "H is always silent in Spanish (e.g. hola = ola)" },
      { term: "La Ñ", def: "Sounds like 'ny' — e.g. España = Espan-ya" },
      { term: "¿Cómo se deletrea?", def: "How do you spell it?" },
      { term: "Los colores", def: "The colours" },
      { term: "Rojo / Azul / Verde", def: "Red / Blue / Green" },
      { term: "¡…! and ¿…?", def: "Inverted exclamation and question marks open every sentence in Spanish" },
      { term: "Los apellidos en España", def: "In Spain, people have two surnames — one from each parent" },
      { term: "El español en el mundo", def: "Spanish is spoken in 21 countries by over 500 million people" },
    ],
    quiz: [
      { q: "How do you say 'Good morning' in Spanish?", opts: ["Buenas noches", "Buenos días", "Buenas tardes", "Hasta luego"], ans: 1, exp: "Buenos días = Good morning. Buenas tardes = Good afternoon. Buenas noches = Good evening/night." },
      { q: "What does '¿Cómo te llamas?' mean?", opts: ["How are you?", "Where are you from?", "What is your name?", "How old are you?"], ans: 2, exp: "¿Cómo te llamas? literally means 'What do you call yourself?' = What is your name?" },
      { q: "The letter H in Spanish is always…", opts: ["Pronounced like English H", "Silent", "Pronounced like a K", "Pronounced like J"], ans: 1, exp: "H is always silent in Spanish. Hola is pronounced 'ola', hotel is pronounced 'otel'." },
      { q: "How many official countries have Spanish as their language?", opts: ["10", "15", "21", "30"], ans: 2, exp: "Spanish is an official language in 21 countries and is spoken by over 500 million people worldwide." },
      { q: "What sound does Ñ make?", opts: ["Silent", "Like English N", "Like 'ny'", "Like 'ch'"], ans: 2, exp: "Ñ makes a 'ny' sound. España is pronounced 'Espan-ya', mañana is 'man-yana'." },
      { q: "How many surnames do people traditionally have in Spain?", opts: ["One", "Two", "Three", "It varies"], ans: 1, exp: "In Spain, people have two surnames — the first from their father and the second from their mother." },
      { q: "Which punctuation mark must open every question in Spanish?", opts: [".", "¡", "¿", ","], ans: 2, exp: "Every question in Spanish must begin with an inverted question mark ¿ and end with a regular question mark ?." },
      { q: "What does 'Estoy fatal' mean?", opts: ["I am well", "I am ok", "I am terrible", "I am tired"], ans: 2, exp: "Fatal in Spanish means terrible/dreadful. Estoy fatal = I am terrible." },
      { q: "What colour is 'rojo'?", opts: ["Blue", "Green", "Yellow", "Red"], ans: 3, exp: "Rojo means red. Remember: the Spanish flag is rojo y amarillo (red and yellow)!" },
      { q: "Spain has how many official languages?", opts: ["1", "2", "3", "4"], ans: 3, exp: "Spain has 4 official languages: Castilian Spanish, Catalan, Galician, and Basque (Euskara)." },
    ],
    retrieval: [
      { category: "Vocabulary", items: ["Greetings", "Alphabet", "Colours"] },
      { category: "Grammar", items: ["Punctuation: question and exclamation marks", "Spanish sounds and spellings"] },
      { category: "Communicative Tasks", items: ["Spell out your name and surname", "Ask and say your name"] },
      { category: "Cultural Appreciation", items: ["Spanish speaking countries", "Fun facts about Spain", "Spanish surnames"] },
    ],
  },

  unit2: {
    id: "unit2",
    title: "Unidad 2: En el Aula",
    subtitle: "Classroom, School Bag, Pronouns & Verb ESTAR",
    emoji: "🎒",
    notes: [
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Items in Your School Bag (El Material Escolar)",
        content: [],
        table: [
          ["un bolígrafo / un boli", "a pen"],
          ["un lápiz", "a pencil"],
          ["una goma", "a rubber / eraser"],
          ["un sacapuntas", "a pencil sharpener"],
          ["una regla", "a ruler"],
          ["unas tijeras", "scissors"],
          ["un pegamento", "glue"],
          ["un cuaderno", "a notebook"],
          ["un libro", "a book"],
          ["una carpeta", "a folder"],
          ["una mochila", "a school bag"],
          ["un estuche", "a pencil case"],
          ["un compás", "a compass"],
          ["una calculadora", "a calculator"],
          ["una tableta", "a tablet"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Classroom Objects & Language (En el Aula)",
        content: [],
        table: [
          ["la pizarra", "the whiteboard / blackboard"],
          ["el pupitre", "the desk (pupil's)"],
          ["la mesa", "the table"],
          ["la silla", "the chair"],
          ["la puerta", "the door"],
          ["la ventana", "the window"],
          ["la estantería", "the bookshelf"],
          ["la papelera", "the bin"],
          ["la lámpara / la luz", "the lamp / the light"],
          ["el ordenador", "the computer"],
          ["el profesor / la profesora", "the teacher (m/f)"],
          ["el alumno / la alumna", "the student (m/f)"],
          ["Silencio", "Silence / Be quiet"],
          ["Abre el libro / cuaderno", "Open the book / notebook"],
          ["Cierra el libro / cuaderno", "Close the book / notebook"],
          ["Escucha", "Listen"],
          ["Escribe", "Write"],
          ["Lee el texto", "Read the text"],
          ["Completa el ejercicio", "Complete the exercise"],
          ["¿Puedo ir al servicio?", "Can I go to the toilet?"],
          ["No he hecho los deberes", "I haven't done the homework"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "The Indefinite Article (El Artículo Indeterminado)",
        content: [
          "In Spanish every noun is either <strong>masculine</strong> or <strong>feminine</strong>. The indefinite article (a / an / some) changes to match.",
          "Nouns ending in <strong>-o</strong> are usually masculine. Nouns ending in <strong>-a</strong> are usually feminine.",
        ],
        table: [
          ["", "Masculine", "Feminine"],
          ["Singular", "UN (a/an) — un libro", "UNA (a/an) — una goma"],
          ["Plural", "UNOS (some) — unos libros", "UNAS (some) — unas gomas"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Making Nouns Plural",
        content: [
          "<strong>Rule 1:</strong> Noun ends in a vowel → add <strong>-s</strong> — un libro → unos libro<strong>s</strong>",
          "<strong>Rule 2:</strong> Noun ends in a consonant → add <strong>-es</strong> — un bolígrafo<em>r</em>? No — un bolígrafo → unos bolígrafos (vowel). un profesor → unos profesore<strong>s</strong>",
          "<strong>Rule 3:</strong> Noun ends in -z → change z to c and add -es — un lápiz → unos lápi<strong>ces</strong>",
          "<span class='example-tag'>Examples</span> una silla → unas sillas | un pupitre → unos pupitres | una puerta → unas puertas",
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Subject Pronouns (Los Pronombres)",
        content: [],
        table: [
          ["Spanish", "English"],
          ["yo", "I"],
          ["tú", "you (informal singular)"],
          ["él / ella / usted", "he / she / you (formal)"],
          ["nosotros / nosotras", "we (m) / we (f)"],
          ["vosotros / vosotras", "you all (m) / you all (f) — Spain only"],
          ["ellos / ellas / ustedes", "they (m) / they (f) / you all (Latin Am.)"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Irregular Verb ESTAR (To Be — feelings/location)",
        content: [
          "<span class='key-term'>ESTAR</span> is used for feelings, emotions, and temporary states (NOT for permanent characteristics — that's SER).",
        ],
        table: [
          ["yo", "estoy — I am"],
          ["tú", "estás — you are"],
          ["él / ella", "está — he/she is"],
          ["nosotros", "estamos — we are"],
          ["vosotros", "estáis — you all are"],
          ["ellos / ellas", "están — they are"],
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "Some Spanish Cities (Ciudades de España)",
        content: [
          "<strong>Madrid</strong> — the capital city, located in the centre of Spain. Home to the Prado Museum and Real Madrid football club.",
          "<strong>Barcelona</strong> — capital of Catalonia. Famous for Gaudí's architecture: Sagrada Família, Park Güell, Casa Batlló.",
          "<strong>Seville (Sevilla)</strong> — capital of Andalusia. Famous for flamenco, the Alcázar palace, and the April Fair.",
          "<strong>Valencia</strong> — on the east coast. Birthplace of paella. Famous for the City of Arts and Sciences.",
          "<strong>Bilbao</strong> — in the Basque Country. Famous for the Guggenheim Museum.",
          "<strong>Granada</strong> — home to the stunning <strong>Alhambra</strong> palace, a UNESCO World Heritage Site.",
          "<strong>Salamanca</strong> — famous for its university, one of the oldest in Europe.",
        ],
      },
    ],
    flashcards: [
      { term: "un bolígrafo", def: "a pen" },
      { term: "una goma", def: "a rubber / eraser" },
      { term: "un sacapuntas", def: "a pencil sharpener" },
      { term: "una mochila", def: "a school bag" },
      { term: "la pizarra", def: "the whiteboard / blackboard" },
      { term: "el pupitre", def: "the (pupil's) desk" },
      { term: "UN / UNA", def: "Indefinite article — masculine / feminine singular (a/an)" },
      { term: "UNOS / UNAS", def: "Indefinite article — masculine / feminine plural (some)" },
      { term: "yo estoy", def: "I am (verb ESTAR)" },
      { term: "tú estás", def: "you are (verb ESTAR)" },
      { term: "él/ella está", def: "he/she is (verb ESTAR)" },
      { term: "¿Puedo ir al servicio?", def: "Can I go to the toilet?" },
      { term: "Abre el cuaderno", def: "Open the notebook (classroom instruction)" },
      { term: "Los pronombres", def: "yo, tú, él/ella, nosotros, vosotros, ellos/ellas" },
    ],
    quiz: [
      { q: "How do you say 'a pencil sharpener' in Spanish?", opts: ["una goma", "un sacapuntas", "un bolígrafo", "una regla"], ans: 1, exp: "Un sacapuntas = a pencil sharpener. It literally means 'point-sharpener'." },
      { q: "Which article do you use with a feminine singular noun?", opts: ["un", "unos", "una", "unas"], ans: 2, exp: "UNA is the feminine singular indefinite article. e.g. una goma, una mochila, una silla." },
      { q: "How do you make most Spanish nouns plural when they end in a vowel?", opts: ["Add -es", "Add -s", "Change the article only", "Add -ión"], ans: 1, exp: "When a noun ends in a vowel, add -s to make it plural. libro → libros, goma → gomas." },
      { q: "What is 'yo estoy' in English?", opts: ["You are", "He is", "I am", "We are"], ans: 2, exp: "Yo = I, estoy = am (verb ESTAR). Yo estoy bien = I am well." },
      { q: "ESTAR is used for…", opts: ["Permanent characteristics", "Nationality", "Feelings and temporary states", "Profession"], ans: 2, exp: "ESTAR is used for feelings, emotions, and temporary states (¿Cómo estás? — How are you?). SER is for permanent characteristics." },
      { q: "What does 'la papelera' mean?", opts: ["The paper shop", "The bin", "The bookshelf", "The whiteboard"], ans: 1, exp: "La papelera = the bin / wastepaper basket." },
      { q: "How do you say 'some books' in Spanish?", opts: ["un libro", "una libro", "unos libros", "unas libros"], ans: 2, exp: "Unos libros = some books. Libro is masculine, and the plural masculine article is unos." },
      { q: "Which pronoun means 'you all' in Spain (not Latin America)?", opts: ["ustedes", "ellos", "vosotros", "nosotros"], ans: 2, exp: "Vosotros is used in Spain for 'you all' (informal plural). In Latin America, ustedes is used for both formal and informal plural." },
      { q: "Which Spanish city is famous for Gaudí's architecture?", opts: ["Madrid", "Seville", "Barcelona", "Valencia"], ans: 2, exp: "Barcelona is famous for Antoni Gaudí's architecture including the Sagrada Família and Park Güell." },
      { q: "What does 'Abre el cuaderno' mean?", opts: ["Close the notebook", "Open the notebook", "Write in the notebook", "Read the notebook"], ans: 1, exp: "Abre = Open (from the verb abrir). El cuaderno = the notebook. So 'Abre el cuaderno' = Open the notebook." },
    ],
    retrieval: [
      { category: "Vocabulary", items: ["Items in your school bag", "Basic classroom language"] },
      { category: "Grammar", items: ["The indefinite article (a, some)", "Making nouns plural", "Subject pronouns", "Irregular verb ESTAR"] },
      { category: "Communicative Tasks", items: ["Use basic classroom phrases", "Ask and say how you are feeling"] },
      { category: "Cultural Appreciation", items: ["Some Spanish cities"] },
    ],
  },

  unit3: {
    id: "unit3",
    title: "Unidad 3: Los Números",
    subtitle: "Numbers, Dates, Months, Seasons & Verb TENER",
    emoji: "🔢",
    notes: [
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Numbers 1–30 (Los Números)",
        content: [],
        table: [
          ["1 uno", "2 dos", "3 tres", "4 cuatro", "5 cinco"],
          ["6 seis", "7 siete", "8 ocho", "9 nueve", "10 diez"],
          ["11 once", "12 doce", "13 trece", "14 catorce", "15 quince"],
          ["16 dieciséis", "17 diecisiete", "18 dieciocho", "19 diecinueve", "20 veinte"],
          ["21 veintiuno", "22 veintidós", "23 veintitrés", "24 veinticuatro", "25 veinticinco"],
          ["26 veintiséis", "27 veintisiete", "28 veintiocho", "29 veintinueve", "30 treinta"],
        ],
        wideTable: true,
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Months of the Year (Los Meses del Año)",
        content: ["Months are written in <strong>lowercase</strong> in Spanish."],
        table: [
          ["enero", "January"],
          ["febrero", "February"],
          ["marzo", "March"],
          ["abril", "April"],
          ["mayo", "May"],
          ["junio", "June"],
          ["julio", "July"],
          ["agosto", "August"],
          ["septiembre", "September"],
          ["octubre", "October"],
          ["noviembre", "November"],
          ["diciembre", "December"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Seasons (Las Estaciones)",
        content: [],
        table: [
          ["la primavera", "spring"],
          ["el verano", "summer"],
          ["el otoño", "autumn"],
          ["el invierno", "winter"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Days of the Week (Los Días de la Semana)",
        content: ["Days are also written in <strong>lowercase</strong> in Spanish. The week starts on Monday."],
        table: [
          ["lunes", "Monday"],
          ["martes", "Tuesday"],
          ["miércoles", "Wednesday"],
          ["jueves", "Thursday"],
          ["viernes", "Friday"],
          ["sábado", "Saturday"],
          ["domingo", "Sunday"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Feelings with TENER (Expresiones con TENER)",
        content: [
          "<span class='key-term'>TENER</span> (to have) is used for many feelings and physical states in Spanish.",
        ],
        table: [
          ["tener hambre", "to be hungry (lit. to have hunger)"],
          ["tener sed", "to be thirsty"],
          ["tener frío", "to be cold"],
          ["tener calor", "to be hot"],
          ["tener miedo", "to be scared / afraid"],
          ["tener sueño", "to be sleepy"],
          ["tener suerte", "to be lucky"],
          ["tener razón", "to be right"],
          ["tener … años", "to be … years old"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "The Definite Article (El Artículo Determinado)",
        content: [
          "The definite article means <strong>the</strong>. It changes depending on the gender and number of the noun.",
        ],
        table: [
          ["", "Masculine", "Feminine"],
          ["Singular", "EL — el libro", "LA — la goma"],
          ["Plural", "LOS — los libros", "LAS — las gomas"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Irregular Verb TENER (To Have)",
        content: [],
        table: [
          ["yo", "tengo — I have"],
          ["tú", "tienes — you have"],
          ["él / ella", "tiene — he/she has"],
          ["nosotros", "tenemos — we have"],
          ["vosotros", "tenéis — you all have"],
          ["ellos / ellas", "tienen — they have"],
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "Famous Spanish Festivals",
        content: [
          "<strong>La Tomatina</strong> — Buñol, Valencia (last Wednesday of August). A massive tomato-throwing festival. About 20,000 people throw 130,000 kg of tomatoes.",
          "<strong>Las Fallas</strong> — Valencia (March 15–19, culminating on 19th March — St. Joseph's Day). Huge paper-mâché sculptures are built and then burned.",
          "<strong>San Fermín / Running of the Bulls</strong> — Pamplona (July 6–14). Bulls run through the streets while people run alongside them.",
          "<strong>Semana Santa (Holy Week)</strong> — nationwide (Easter). Elaborate religious processions through city streets.",
          "<strong>La Feria de Abril</strong> — Seville (April). Week-long fair with flamenco, horses, and traditional Andalusian costumes.",
          "<strong>Carnaval</strong> — Tenerife and Cádiz (February). Colourful costumes, parades, and music.",
        ],
      },
    ],
    flashcards: [
      { term: "¿Cuántos años tienes?", def: "How old are you?" },
      { term: "Tengo … años", def: "I am … years old (lit. I have … years)" },
      { term: "¿Cuándo es tu cumpleaños?", def: "When is your birthday?" },
      { term: "Mi cumpleaños es el … de …", def: "My birthday is on the … of …" },
      { term: "¿Cuál es tu número de teléfono?", def: "What is your phone number?" },
      { term: "¿Qué día es hoy?", def: "What day is today?" },
      { term: "Hoy es …", def: "Today is …" },
      { term: "EL (definite article)", def: "The — masculine singular (el libro)" },
      { term: "LA (definite article)", def: "The — feminine singular (la goma)" },
      { term: "LOS / LAS", def: "The — masculine / feminine plural" },
      { term: "Tener hambre", def: "To be hungry (lit. to have hunger)" },
      { term: "Tener frío / calor", def: "To be cold / hot" },
      { term: "La Tomatina", def: "Annual tomato-throwing festival in Buñol, Valencia (August)" },
      { term: "Tengo / tienes / tiene", def: "I have / you have / he-she has (verb TENER)" },
    ],
    quiz: [
      { q: "How do you say 'I am 14 years old' in Spanish?", opts: ["Soy 14 años", "Tengo 14 años", "Estoy 14 años", "Me llamo 14 años"], ans: 1, exp: "In Spanish you use TENER (to have) for age: Tengo 14 años = I am 14 years old (lit. I have 14 years)." },
      { q: "What is 'el verano'?", opts: ["spring", "autumn", "winter", "summer"], ans: 3, exp: "El verano = summer. La primavera = spring. El otoño = autumn. El invierno = winter." },
      { q: "Which definite article goes with a feminine singular noun?", opts: ["el", "la", "los", "las"], ans: 1, exp: "LA is the feminine singular definite article (the). e.g. la goma, la silla, la puerta." },
      { q: "How do you say 'I am hungry' in Spanish?", opts: ["Estoy hambre", "Tengo hambre", "Soy hambre", "Hay hambre"], ans: 1, exp: "Tengo hambre = I am hungry. TENER (to have) is used for many physical states in Spanish." },
      { q: "What number is 'veintitrés'?", opts: ["13", "21", "23", "33"], ans: 2, exp: "Veintitrés = 23. Veinte = 20, tres = 3. Numbers 21–29 combine veinti + the unit." },
      { q: "Which month is 'agosto'?", opts: ["June", "July", "August", "September"], ans: 2, exp: "Agosto = August. Remember: months are written in lowercase in Spanish." },
      { q: "What is 'tienes' in English?", opts: ["I have", "you have", "he has", "we have"], ans: 1, exp: "Tienes = you have (informal singular). Full conjugation: tengo, tienes, tiene, tenemos, tenéis, tienen." },
      { q: "La Tomatina festival takes place in which city?", opts: ["Madrid", "Barcelona", "Buñol (Valencia)", "Seville"], ans: 2, exp: "La Tomatina is held in Buñol, near Valencia, on the last Wednesday of August each year." },
      { q: "How do you say 'today is Thursday' in Spanish?", opts: ["Hoy es martes", "Hoy es jueves", "Hoy es viernes", "Hoy es miércoles"], ans: 1, exp: "Jueves = Thursday. ¿Qué día es hoy? — Hoy es jueves." },
      { q: "What does 'tener miedo' mean?", opts: ["to be hungry", "to be lucky", "to be cold", "to be scared / afraid"], ans: 3, exp: "Tener miedo = to be scared or afraid (lit. to have fear). ¡Tengo miedo! = I'm scared!" },
    ],
    retrieval: [
      { category: "Vocabulary", items: ["Numbers 1–30", "Months of the year and seasons", "Days of the week", "Feelings"] },
      { category: "Grammar", items: ["The definite article (the)", "Irregular verb TENER"] },
      { category: "Communicative Tasks", items: ["Ask and say your phone number", "Ask and say the day and date", "Ask and say how old you are", "Ask and say when your birthday is", "Express some feelings with verb TENER"] },
      { category: "Cultural Appreciation", items: ["Famous Spanish festivals"] },
    ],
  },

  unit4: {
    id: "unit4",
    title: "Unidad 4: Todo sobre Mí",
    subtitle: "Physical Description, Personality & Verb SER",
    emoji: "🪞",
    notes: [
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Hair Description (El pelo)",
        content: [],
        table: [
          ["Tengo el pelo…", "I have … hair"],
          ["largo", "long"],
          ["corto", "short"],
          ["liso", "straight"],
          ["rizado / ondulado", "curly / wavy"],
          ["rubio", "blond"],
          ["castaño", "brown (hair/eyes)"],
          ["moreno / negro", "dark / black"],
          ["pelirrojo", "red / ginger"],
          ["canoso / gris", "grey / white-haired"],
          ["Soy calvo/a", "I am bald"],
          ["Llevo gafas", "I wear glasses"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Eyes & Physical Description (Los ojos / La descripción física)",
        content: [],
        table: [
          ["Tengo los ojos…", "I have … eyes"],
          ["azules", "blue"],
          ["verdes", "green"],
          ["marrones", "brown"],
          ["negros", "dark/black"],
          ["grises", "grey"],
          ["alto/a", "tall"],
          ["bajo/a", "short"],
          ["delgado/a", "slim / thin"],
          ["gordo/a", "fat"],
          ["de mediana estatura", "of medium height"],
          ["guapo/a", "handsome / pretty"],
          ["feo/a", "ugly"],
          ["joven", "young"],
          ["mayor / viejo/a", "old"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Personality Adjectives (La personalidad)",
        content: [],
        table: [
          ["simpático/a", "nice / friendly"],
          ["antipático/a", "unfriendly / unpleasant"],
          ["divertido/a", "funny / fun"],
          ["aburrido/a", "boring"],
          ["inteligente", "intelligent"],
          ["tonto/a", "silly / stupid"],
          ["trabajador/a", "hard-working"],
          ["vago/a", "lazy"],
          ["serio/a", "serious"],
          ["gracioso/a", "funny / witty"],
          ["tímido/a", "shy"],
          ["hablador/a", "talkative"],
          ["generoso/a", "generous"],
          ["egoísta", "selfish"],
          ["amable", "kind"],
          ["nervioso/a", "nervous"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Interrogative Pronouns",
        content: [],
        table: [
          ["¿Qué?", "What?"],
          ["¿Quién? / ¿Quiénes?", "Who? (singular / plural)"],
          ["¿Dónde?", "Where?"],
          ["¿Cuándo?", "When?"],
          ["¿Cuánto/a?", "How much?"],
          ["¿Cuántos/as?", "How many?"],
          ["¿Cómo?", "How? / What (like)?"],
          ["¿Cuál? / ¿Cuáles?", "Which? (singular / plural)"],
          ["¿Por qué?", "Why?"],
          ["¿De dónde?", "Where from?"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Irregular Verb SER (To Be — permanent characteristics)",
        content: [
          "<span class='key-term'>SER</span> is used for permanent or defining characteristics: nationality, profession, personality, physical description, origin.",
        ],
        table: [
          ["yo", "soy — I am"],
          ["tú", "eres — you are"],
          ["él / ella", "es — he/she is"],
          ["nosotros", "somos — we are"],
          ["vosotros", "sois — you all are"],
          ["ellos / ellas", "son — they are"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Adjective Agreement: Gender & Number",
        content: [
          "In Spanish, adjectives must <strong>agree</strong> with the noun they describe in both gender (m/f) and number (singular/plural).",
          "<strong>-o/-a endings:</strong> simpático (m), simpática (f), simpáticos (m pl), simpáticas (f pl)",
          "<strong>-e endings or consonant:</strong> same for m & f, add -s or -es for plural — inteligente → inteligentes; hablador → habladora, habladores",
          "<span class='example-tag'>Examples</span> Él es alto y simpático. | Ella es alta y simpática. | Ellos son altos. | Ellas son altas.",
          "<strong>Position:</strong> Descriptive adjectives usually come <em>after</em> the noun in Spanish: un chico guapo, una chica inteligente.",
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "ME GUSTA / ME GUSTAN (I like…)",
        content: [
          "<span class='key-term'>ME GUSTA</span> = I like (+ singular noun or verb/infinitive)",
          "<span class='key-term'>ME GUSTAN</span> = I like (+ plural noun)",
          "<span class='example-tag'>Examples</span> Me gusta el fútbol. | Me gustan los gatos. | Me gusta bailar.",
          "To say you don't like something: <strong>No me gusta</strong> / <strong>No me gustan</strong>",
          "To ask: <strong>¿Te gusta…? / ¿Te gustan…?</strong> = Do you like…?",
          "Other pronouns: <strong>le gusta/n</strong> (he/she likes), <strong>nos gusta/n</strong> (we like), <strong>les gusta/n</strong> (they like).",
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "Spanish-Speaking Celebrities",
        content: [
          "<strong>Penélope Cruz</strong> (Madrid, Spain) — Oscar-winning actress.",
          "<strong>Rafael Nadal</strong> (Mallorca, Spain) — tennis champion, 22 Grand Slam titles.",
          "<strong>Shakira</strong> (Barranquilla, Colombia) — singer and songwriter.",
          "<strong>Lionel Messi</strong> (Rosario, Argentina) — considered one of the greatest footballers of all time.",
          "<strong>Rosalía</strong> (Barcelona, Spain) — flamenco-influenced pop star.",
          "<strong>Bad Bunny</strong> (Puerto Rico) — reggaeton and Latin trap artist.",
          "<strong>Javier Bardem</strong> (Las Palmas, Spain) — Oscar-winning actor.",
          "<strong>Jennifer Lopez</strong> (Bronx, USA — Puerto Rican heritage) — singer and actress.",
        ],
      },
    ],
    flashcards: [
      { term: "Tengo el pelo rubio", def: "I have blond hair" },
      { term: "Tengo los ojos verdes", def: "I have green eyes" },
      { term: "Es alto y delgado", def: "He is tall and slim (adjective agreement: masculine)" },
      { term: "Es alta y delgada", def: "She is tall and slim (adjective agreement: feminine)" },
      { term: "simpático / simpática", def: "nice / friendly — adjective must agree with the noun" },
      { term: "yo soy", def: "I am (verb SER — for permanent characteristics)" },
      { term: "él/ella es", def: "he/she is (verb SER)" },
      { term: "SER vs ESTAR", def: "SER = permanent (personality, nationality, appearance). ESTAR = temporary (feelings, location)." },
      { term: "Me gusta el fútbol", def: "I like football (singular noun → me GUSTA)" },
      { term: "Me gustan los gatos", def: "I like cats (plural noun → me GUSTAN)" },
      { term: "¿Cómo eres?", def: "What are you like? (asking for description)" },
      { term: "¿De dónde eres?", def: "Where are you from?" },
      { term: "Soy de…", def: "I am from… (use SER for origin)" },
      { term: "trabajador / trabajadora", def: "hard-working (adjective — note gender change for -or endings)" },
    ],
    quiz: [
      { q: "How do you say 'She is tall and slim' in Spanish?", opts: ["Ella es alto y delgado", "Ella es alta y delgada", "Ella es alto y delgada", "Ella es alta y delgado"], ans: 1, exp: "Ella (she) is feminine. Both adjectives must agree: alta (f) and delgada (f). Ella es alta y delgada." },
      { q: "Which verb do you use to describe permanent characteristics like personality?", opts: ["ESTAR", "TENER", "SER", "HACER"], ans: 2, exp: "SER is used for permanent characteristics: personality, nationality, origin, profession. ESTAR is for temporary states." },
      { q: "How do you say 'I like cats' in Spanish?", opts: ["Me gusta los gatos", "Me gustan los gatos", "Me gusta gatos", "Gusto los gatos"], ans: 1, exp: "With plural nouns, use ME GUSTAN. Me gustan los gatos. Me gusta (singular) vs. Me gustan (plural)." },
      { q: "What does 'pelirrojo' mean?", opts: ["Dark-haired", "Blond-haired", "Bald", "Red/ginger-haired"], ans: 3, exp: "Pelirrojo/a = red-haired / ginger. Pelo = hair, rojo = red." },
      { q: "Which is correct for 'they are (female friends)'?", opts: ["ellos son", "ellas son", "nosotras somos", "vosotras sois"], ans: 1, exp: "Ellas son = they are (all female). Ellos son = they are (male or mixed group)." },
      { q: "What does '¿De dónde eres?' mean?", opts: ["How are you?", "What are you like?", "Where are you from?", "When is your birthday?"], ans: 2, exp: "¿De dónde eres? = Where are you from? You answer with: Soy de + [place]." },
      { q: "How do you say 'I have curly hair' in Spanish?", opts: ["Tengo el pelo liso", "Tengo el pelo rizado", "Tengo el pelo rubio", "Tengo el pelo corto"], ans: 1, exp: "Rizado = curly. Liso = straight. Tengo el pelo rizado = I have curly hair." },
      { q: "Which adjective means 'hard-working'?", opts: ["vago", "tímido", "trabajador", "gracioso"], ans: 2, exp: "Trabajador/trabajadora = hard-working. Vago/vaga = lazy." },
      { q: "What does 'Me gusta bailar' mean?", opts: ["I like dancing", "I can dance", "I want to dance", "She likes dancing"], ans: 0, exp: "Me gusta bailar = I like dancing/to dance. When gusta is followed by a verb/infinitive, use ME GUSTA (singular form)." },
      { q: "Rafael Nadal is from which country?", opts: ["Argentina", "Colombia", "Puerto Rico", "Spain"], ans: 3, exp: "Rafael Nadal is from Mallorca, Spain. He has won 22 Grand Slam tennis titles." },
    ],
    retrieval: [
      { category: "Vocabulary", items: ["Description of hair and eyes", "Physical description adjectives", "Personality description adjectives"] },
      { category: "Grammar", items: ["Interrogative pronouns (what, where, …)", "Irregular verb SER", "Adjective agreement: gender & number", "ME GUSTA / ME GUSTAN"] },
      { category: "Communicative Tasks", items: ["Describe your physical appearance and your character", "Describe another person's physical appearance and character", "WRITE A BLOG: personal details (name, age, birthday, phone number, where you live) + physical and personality description"] },
      { category: "Cultural Appreciation", items: ["Spanish-speaking celebrities"] },
    ],
  },

  unit5: {
    id: "unit5",
    title: "Unidad 5: Mi Familia",
    subtitle: "Family Members, Pets, Numbers 31–100 & Possession",
    emoji: "👨‍👩‍👧‍👦",
    notes: [
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Family Members (Los Miembros de la Familia)",
        content: [],
        table: [
          ["el padre / el papá", "the father / dad"],
          ["la madre / la mamá", "the mother / mum"],
          ["el hermano", "the brother"],
          ["la hermana", "the sister"],
          ["el abuelo", "the grandfather"],
          ["la abuela", "the grandmother"],
          ["los abuelos", "the grandparents"],
          ["el tío", "the uncle"],
          ["la tía", "the aunt"],
          ["el primo / la prima", "the (male/female) cousin"],
          ["el hijo / la hija", "the son / daughter"],
          ["el marido / el esposo", "the husband"],
          ["la mujer / la esposa", "the wife"],
          ["el padrastro / la madrastra", "the stepfather / stepmother"],
          ["el hermanastro / la hermanastra", "the stepbrother / stepsister"],
          ["el sobrino / la sobrina", "the nephew / niece"],
          ["el nieto / la nieta", "the grandson / granddaughter"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Pets (Los Animales Domésticos)",
        content: [],
        table: [
          ["un perro", "a dog"],
          ["un gato", "a cat"],
          ["un pájaro", "a bird"],
          ["un pez / unos peces", "a fish / some fish"],
          ["un conejo", "a rabbit"],
          ["un hámster", "a hamster"],
          ["una tortuga", "a tortoise / turtle"],
          ["un caballo", "a horse"],
          ["una serpiente", "a snake"],
          ["No tengo animales", "I don't have any pets"],
        ],
      },
      {
        category: "vocab",
        label: "Vocabulary",
        heading: "Numbers 31–100",
        content: [],
        table: [
          ["30 treinta", "40 cuarenta", "50 cincuenta"],
          ["60 sesenta", "70 setenta", "80 ochenta"],
          ["90 noventa", "100 cien / ciento", ""],
          ["31 treinta y uno", "42 cuarenta y dos", "55 cincuenta y cinco"],
          ["63 sesenta y tres", "74 setenta y cuatro", "99 noventa y nueve"],
        ],
        wideTable: true,
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Expressing Possession with DE ('s)",
        content: [
          "In Spanish there is <strong>no apostrophe-s</strong>. Instead, use <strong>DE + noun</strong>.",
          "<span class='example-tag'>Compare</span> English: <em>María's dog</em> → Spanish: <em>el perro <strong>de</strong> María</em> (the dog of María)",
          "<span class='example-tag'>Examples</span>",
          "El hermano de Juan = Juan's brother",
          "La madre de Carlos = Carlos's mother",
          "El nombre del profesor = The teacher's name (DE + EL = <strong>DEL</strong>)",
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Possessive Adjectives (Los Adjetivos Posesivos)",
        content: [],
        table: [
          ["mi / mis", "my (m+f sing/pl)"],
          ["tu / tus", "your (m+f sing/pl — informal)"],
          ["su / sus", "his / her / your (formal) / their"],
          ["nuestro/a / nuestros/as", "our"],
          ["vuestro/a / vuestros/as", "your (pl — Spain)"],
          ["su / sus", "their / your (pl — Latin Am.)"],
        ],
      },
      {
        category: "grammar",
        label: "Grammar",
        heading: "Interrogative Adjective: ¿Cuántos/as?",
        content: [
          "<span class='key-term'>¿Cuántos?</span> = How many? (masculine) — ¿Cuántos hermanos tienes?",
          "<span class='key-term'>¿Cuántas?</span> = How many? (feminine) — ¿Cuántas hermanas tienes?",
          "It must agree in gender with the noun it refers to.",
          "<span class='example-tag'>Answers</span> Tengo dos hermanos y una hermana. | Tengo tres primos.",
        ],
      },
      {
        category: "cultural",
        label: "Cultural Appreciation",
        heading: "The Spanish Royal Family (La Familia Real Española)",
        content: [
          "<strong>King Felipe VI</strong> (Rey Felipe VI) became king in 2014 after his father, Juan Carlos I, abdicated.",
          "<strong>Queen Letizia</strong> (Reina Letizia) was a journalist before marrying Felipe in 2004.",
          "They have two daughters: <strong>Leonor, Princess of Asturias</strong> (heir to the throne) and <strong>Infanta Sofía</strong>.",
          "The royal residence in Madrid is the <strong>Palacio de la Zarzuela</strong>.",
          "The official royal palace, used for ceremonies, is the <strong>Palacio Real de Madrid</strong> — one of the largest palaces in Europe.",
          "Princess Leonor turned 18 in 2023 and swore allegiance to the Spanish Constitution, a major ceremony.",
        ],
      },
    ],
    flashcards: [
      { term: "el hermano / la hermana", def: "the brother / the sister" },
      { term: "los abuelos", def: "the grandparents (abuelo = grandfather, abuela = grandmother)" },
      { term: "el tío / la tía", def: "the uncle / the aunt" },
      { term: "el primo / la prima", def: "the (male) cousin / the (female) cousin" },
      { term: "un perro / un gato", def: "a dog / a cat" },
      { term: "¿Cuántos hermanos tienes?", def: "How many brothers do you have? (cuántos = m)" },
      { term: "¿Cuántas hermanas tienes?", def: "How many sisters do you have? (cuántas = f)" },
      { term: "Tengo dos hermanos", def: "I have two brothers (use TENER for family members you 'have')" },
      { term: "El perro de María", def: "María's dog — in Spanish use DE instead of apostrophe-s" },
      { term: "mi / mis", def: "my — mi madre (sing), mis padres (plural)" },
      { term: "tu / tus", def: "your (informal) — tu hermano, tus hermanas" },
      { term: "nuestro / nuestra", def: "our — nuestro padre, nuestra madre" },
      { term: "DEL = DE + EL", def: "Contraction: el nombre del profesor = the teacher's name" },
      { term: "Rey Felipe VI", def: "King Felipe VI — current King of Spain since 2014" },
    ],
    quiz: [
      { q: "How do you say 'Juan's dog' in Spanish?", opts: ["el perro 's Juan", "el perro Juan", "el perro de Juan", "Juan perro"], ans: 2, exp: "In Spanish there is no apostrophe-s. Use DE: el perro de Juan = Juan's dog." },
      { q: "What does 'los abuelos' mean?", opts: ["the parents", "the grandparents", "the cousins", "the siblings"], ans: 1, exp: "Los abuelos = the grandparents. Abuelo = grandfather, abuela = grandmother." },
      { q: "How do you say 'my sisters' in Spanish?", opts: ["mi hermanas", "mia hermanas", "mis hermanas", "su hermanas"], ans: 2, exp: "Mis = my (plural). Mi is used with singular nouns; mis with plural nouns. Mis hermanas = my sisters." },
      { q: "Which is correct: ¿Cuántos hermanas tienes? or ¿Cuántas hermanas tienes?", opts: ["¿Cuántos hermanas tienes?", "¿Cuántas hermanas tienes?"], ans: 1, exp: "Hermanas is feminine, so you must use CUÁNTAS. ¿Cuántas hermanas tienes? — How many sisters do you have?" },
      { q: "What is the number 'ochenta y cinco'?", opts: ["75", "80", "85", "95"], ans: 2, exp: "Ochenta = 80, y = and, cinco = 5. Ochenta y cinco = 85." },
      { q: "How do you say 'a rabbit' in Spanish?", opts: ["un perro", "un hámster", "un conejo", "un pájaro"], ans: 2, exp: "Un conejo = a rabbit." },
      { q: "What does 'su madre' mean?", opts: ["my mother", "your mother", "our mother", "his/her/their mother"], ans: 3, exp: "SU means his, her, their, or your (formal). It must be determined by context." },
      { q: "Who is the current King of Spain?", opts: ["Juan Carlos I", "Felipe V", "Felipe VI", "Alfonso XIII"], ans: 2, exp: "King Felipe VI became King of Spain in 2014 when his father Juan Carlos I abdicated." },
      { q: "DE + EL contracts to become…?", opts: ["DE EL", "DEEL", "DEL", "DL"], ans: 2, exp: "In Spanish, DE + EL always contracts to DEL. e.g. el nombre del profesor = the teacher's name." },
      { q: "How do you say 'I don't have any pets' in Spanish?", opts: ["No tengo mascota", "No tengo animales", "No tengo un animal", "No hay animales"], ans: 1, exp: "No tengo animales = I don't have any pets (lit. I don't have animals)." },
    ],
    retrieval: [
      { category: "Vocabulary", items: ["Family members", "Pets", "Numbers 31–100"] },
      { category: "Grammar", items: ["Expressing possession with DE ('s)", "Possessive adjectives (my, your, his, …)", "Interrogative adjectives: Cuántos/as"] },
      { category: "Communicative Tasks", items: ["Ask and say the number of people in your family", "Describe each member of your family", "Describe your pet(s)", "WRITE A BLOG: number of people in your family, description of each member and your pets (name, age, birthday, physical appearance, personality)"] },
      { category: "Cultural Appreciation", items: ["The Spanish Royal Family"] },
    ],
  },
};

type TopicKey = keyof typeof TOPICS;
type TabType = "notes" | "flashcards" | "quiz" | "retrieval";

/* ─── RETRIEVAL STATE ─── */
const RJ_TIMES = ["Notes Date", "1st time", "2nd time", "3rd time", "4th time", "5th time", "Pre-Exam"];

function RetrievalJournal({ unit }: { unit: (typeof TOPICS)[TopicKey] }) {
  const storageKey = `rj-${unit.id}`;
  const [data, setData] = useState<Record<string, Record<string, boolean | string>>>(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  });

  function update(cat: string, item: string, col: string, value: boolean | string) {
    setData((prev) => {
      const next = { ...prev, [`${cat}::${item}`]: { ...(prev[`${cat}::${item}`] || {}), [col]: value } };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  const starOptions = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];

  return (
    <div>
      <div className="rj-header-card">
        <h3>Retrieval Practice Journal — {unit.title}</h3>
        <p>Track your revision sessions. Click the stars to rate difficulty. Tick each practice session when done.</p>
      </div>
      <div className="rj-legend">
        <div className="rj-legend-item">⭐ = Difficulty level (click stars to update)</div>
        <div className="rj-legend-item">☑ = Tick when reviewed</div>
        <div className="rj-legend-item">📅 = Date of first notes</div>
      </div>
      <div className="rj-table-wrap">
        <table className="rj-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Topic</th>
              <th>Difficulty</th>
              {RJ_TIMES.map((t) => <th key={t}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {unit.retrieval.map((section) => (
              <>
                <tr key={`section-${section.category}`} className="rj-section-row">
                  <td colSpan={3 + RJ_TIMES.length}>{section.category}</td>
                </tr>
                {section.items.map((item) => {
                  const key = `${section.category}::${item}`;
                  const row = data[key] || {};
                  const stars = (row.stars as number) || 0;
                  return (
                    <tr key={key}>
                      <td>{section.category}</td>
                      <td>{item}</td>
                      <td>
                        <span
                          className="stars"
                          style={{ cursor: "pointer", fontSize: 14 }}
                          title="Click to rate difficulty"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <span
                              key={n}
                              onClick={() => update(section.category, item, "stars", n)}
                              style={{ color: n <= stars ? "#f1bf00" : "#ccc", cursor: "pointer" }}
                            >
                              ★
                            </span>
                          ))}
                        </span>
                      </td>
                      {RJ_TIMES.map((t, i) =>
                        i === 0 ? (
                          <td key={t}>
                            <input
                              type="date"
                              className="date-input"
                              value={(row[t] as string) || ""}
                              onChange={(e) => update(section.category, item, t, e.target.value)}
                            />
                          </td>
                        ) : (
                          <td key={t}>
                            <div className="checkbox-cell">
                              <input
                                type="checkbox"
                                className="rj-checkbox"
                                checked={!!row[t]}
                                onChange={(e) => update(section.category, item, t, e.target.checked)}
                              />
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  );
                })}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── NOTES ─── */
function Notes({ unit }: { unit: (typeof TOPICS)[TopicKey] }) {
  return (
    <div className="notes-grid">
      {unit.notes.map((note, i) => (
        <div key={i} className={`note-card ${note.category}`}>
          <div className={`category-badge badge-${note.category === "grammar" ? "grammar" : note.category === "cultural" ? "cultural" : note.category === "communicative" ? "comm" : "vocab"}`}>
            {note.label}
          </div>
          <h3>{note.heading}</h3>
          {note.content.map((line, j) => (
            <p key={j} style={{ marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
          {note.table && (
            <table className="table-vocab" style={{ marginTop: note.content.length ? 10 : 0 }}>
              <tbody>
                {note.table.map((row: string[], ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      ri === 0 && note.table!.some((r) => r.length === 2 && ri > 0) ? null :
                      row.length === 2
                        ? (ci === 0
                          ? <td key={ci} style={{ fontWeight: 600, color: "#c60b1e", fontStyle: "italic", width: "48%" }}>{cell}</td>
                          : <td key={ci}>{cell}</td>)
                        : row.length > 2
                          ? (ri === 0
                            ? <th key={ci}>{cell}</th>
                            : <td key={ci}>{cell}</td>)
                          : <td key={ci}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── FLASHCARDS ─── */
function Flashcards({ unit }: { unit: (typeof TOPICS)[TopicKey] }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  function go(dir: number) {
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i + dir + unit.flashcards.length) % unit.flashcards.length), 150);
  }

  const card = unit.flashcards[idx];

  return (
    <div className="flashcard-area">
      <div className="flashcard-wrap" onClick={() => setFlipped((f) => !f)}>
        <div className={`flashcard${flipped ? " flipped" : ""}`}>
          <div className="card-face card-front">
            <div className="card-label">Español — click to reveal</div>
            <div className="card-term">{card.term}</div>
            <div className="flip-hint">👆 Click to see the answer</div>
          </div>
          <div className="card-face card-back">
            <div className="card-label">English</div>
            <div className="card-term">{card.def}</div>
          </div>
        </div>
      </div>
      <div className="fc-controls">
        <button className="btn btn-secondary" onClick={() => go(-1)}>← Prev</button>
        <span className="fc-counter">{idx + 1} / {unit.flashcards.length}</span>
        <button className="btn btn-primary" onClick={() => go(1)}>Next →</button>
      </div>
    </div>
  );
}

/* ─── QUIZ ─── */
function Quiz({ unit, onScore }: { unit: (typeof TOPICS)[TopicKey]; onScore: (s: number, t: number) => void }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = unit.quiz[qi];
  const letters = ["A", "B", "C", "D"];

  function pick(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.ans;
    if (correct) setScore((s) => s + 1);
  }

  function next() {
    if (qi + 1 >= unit.quiz.length) {
      const finalScore = score + (selected === q.ans ? 0 : 0);
      const s = score + (selected === q.ans ? 1 : 0);
      onScore(s, unit.quiz.length);
      setDone(true);
    } else {
      setQi((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setQi(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const finalScore = score;
    const pct = Math.round((finalScore / unit.quiz.length) * 100);
    const grade = pct >= 85 ? "A" : pct >= 70 ? "B" : pct >= 55 ? "C" : "D";
    return (
      <div className="results-card">
        <div className="big-score">{finalScore}/{unit.quiz.length}</div>
        <div className="score-label">Questions correct</div>
        <div className={`grade grade-${grade.toLowerCase()}`}>Grade {grade} — {pct}%</div>
        <p style={{ color: "#555", marginBottom: 20, fontSize: 14 }}>
          {pct >= 85 ? "Excelente! Brilliant work!" : pct >= 70 ? "Muy bien! Good effort, keep revising!" : pct >= 55 ? "Bien! Review your notes and try again." : "Keep practising! Review the Notes and Flashcards tabs."}
        </p>
        <button className="btn btn-primary" onClick={restart}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <div className="quiz-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((qi) / unit.quiz.length) * 100}%` }} />
        </div>
        <span className="progress-text">Q{qi + 1} / {unit.quiz.length}</span>
        <span className="progress-text" style={{ color: "#2d7a4f" }}>✓ {score}</span>
      </div>
      <div className="question-card">
        <div className="question-num">Question {qi + 1}</div>
        <div className="question-text">{q.q}</div>
        <div className="options">
          {q.opts.map((opt, i) => {
            let cls = "option-btn";
            if (selected !== null) {
              if (i === q.ans) cls += " correct";
              else if (i === selected && selected !== q.ans) cls += " wrong";
            }
            return (
              <button key={i} className={cls} onClick={() => pick(i)} disabled={selected !== null}>
                <span className="option-letter">{letters[i]}</span>
                {opt}
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className={`feedback-box ${selected === q.ans ? "correct-fb" : "wrong-fb"}`}>
            <strong>{selected === q.ans ? "✓ Correcto!" : "✗ Incorrecto."}</strong> {q.exp}
          </div>
        )}
        <div className="quiz-nav">
          <span />
          <button className="btn btn-primary" onClick={next} disabled={selected === null}>
            {qi + 1 >= unit.quiz.length ? "See Results" : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [view, setView] = useState<"home" | TopicKey>("home");
  const [tab, setTab] = useState<TabType>("notes");
  const [scores, setScores] = useState<Record<string, { s: number; t: number }>>({});

  function openUnit(key: TopicKey, t: TabType = "notes") {
    setView(key);
    setTab(t);
    window.scrollTo(0, 0);
  }

  function handleScore(unitId: string, s: number, t: number) {
    setScores((prev) => ({ ...prev, [unitId]: { s, t } }));
  }

  const totalScore = Object.values(scores).reduce((a, b) => a + b.s, 0);
  const totalPossible = Object.values(scores).reduce((a, b) => a + b.t, 0);

  const unit = view !== "home" ? TOPICS[view] : null;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--cream)", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Header */}
      <div className="header">
        <div className="header-flag">🇪🇸</div>
        <div>
          <h1>Spanish Study App</h1>
          <p>1st Year · Junior Cycle · 2025–26</p>
        </div>
        <div className="score-badge">
          🏆 Quiz Score: <span>{totalScore}</span> / {totalPossible > 0 ? totalPossible : "—"}
        </div>
      </div>

      <div className="container">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-section">Start Here</div>
          <button className={`nav-btn${view === "home" ? " active" : ""}`} onClick={() => setView("home")}>
            <span className="nav-icon">🏠</span> Home
          </button>
          <div className="sidebar-section">Units (QP1)</div>
          {(Object.keys(TOPICS) as TopicKey[]).map((key) => {
            const u = TOPICS[key];
            return (
              <button key={key} className={`nav-btn${view === key ? " active" : ""}`} onClick={() => openUnit(key)}>
                <span className="nav-icon">{u.emoji}</span>
                <span style={{ fontSize: 12, lineHeight: 1.3 }}>{u.title.replace("Unidad ", "U").split(":")[0]}<br /><span style={{ opacity: 0.7, fontSize: 11 }}>{u.title.split(": ")[1]}</span></span>
              </button>
            );
          })}
        </nav>

        {/* Main */}
        <main className="main">
          {view === "home" && (
            <div>
              <div className="home-welcome">
                <h2>¡Bienvenidos a Spanish! 👋</h2>
                <p>All your 1st Year Spanish class notes are here. Use Notes to review content, Flashcards to memorise key terms and Quiz yourself to test your knowledge. Track your revision in the Retrieval Journal.</p>
              </div>
              <div className="home-grid">
                {(Object.keys(TOPICS) as TopicKey[]).map((key) => {
                  const u = TOPICS[key];
                  const sc = scores[key];
                  return (
                    <div key={key} className="topic-card" onClick={() => openUnit(key)}>
                      <div className="tc-emoji">{u.emoji}</div>
                      <h3>{u.title}</h3>
                      <p>{u.subtitle}</p>
                      <div className="tc-count">
                        {u.quiz.length} quiz questions · {u.flashcards.length} flashcards
                        {sc ? ` · Last quiz: ${sc.s}/${sc.t}` : ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {unit && (
            <div>
              <div className="topic-header" data-emoji={unit.emoji}>
                <h2>{unit.title}</h2>
                <p>{unit.subtitle}</p>
              </div>
              <div className="tabs">
                <button className={`tab-btn${tab === "notes" ? " active" : ""}`} onClick={() => setTab("notes")}>📖 Notes</button>
                <button className={`tab-btn${tab === "flashcards" ? " active" : ""}`} onClick={() => setTab("flashcards")}>🃏 Flashcards</button>
                <button className={`tab-btn${tab === "quiz" ? " active" : ""}`} onClick={() => setTab("quiz")}>✏️ Quiz</button>
                <button className={`tab-btn${tab === "retrieval" ? " active" : ""}`} onClick={() => setTab("retrieval")}>📋 Retrieval Journal</button>
              </div>
              {tab === "notes" && <Notes unit={unit} />}
              {tab === "flashcards" && <Flashcards unit={unit} />}
              {tab === "quiz" && <Quiz unit={unit} onScore={(s, t) => handleScore(unit.id, s, t)} />}
              {tab === "retrieval" && <RetrievalJournal unit={unit} />}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
