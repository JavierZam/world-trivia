const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Data trivia
const countries = [
  {
    id: 1,
    name: "Indonesia",
    capital: "Jakarta",
    flagUrl: "https://flagcdn.com/id.svg",
    landmarkName: "Borobudur",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Borobudur-Nothwest-view.jpg/1200px-Borobudur-Nothwest-view.jpg",
  },
  {
    id: 2,
    name: "Japan",
    capital: "Tokyo",
    flagUrl: "https://flagcdn.com/jp.svg",
    landmarkName: "Mount Fuji",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg",
  },
  {
    id: 3,
    name: "France",
    capital: "Paris",
    flagUrl: "https://flagcdn.com/fr.svg",
    landmarkName: "Eiffel Tower",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/640px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
  },
  {
    id: 4,
    name: "Egypt",
    capital: "Cairo",
    flagUrl: "https://flagcdn.com/eg.svg",
    landmarkName: "Great Pyramid of Giza",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1200px-Kheops-Pyramid.jpg",
  },
  {
    id: 5,
    name: "Brazil",
    capital: "Brasília",
    flagUrl: "https://flagcdn.com/br.svg",
    landmarkName: "Christ the Redeemer",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/1200px-Christ_the_Redeemer_-_Cristo_Redentor.jpg",
  },
  {
    id: 6,
    name: "Australia",
    capital: "Canberra",
    flagUrl: "https://flagcdn.com/au.svg",
    landmarkName: "Sydney Opera House",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/1200px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
  },
  {
    id: 7,
    name: "USA",
    capital: "Washington D.C.",
    flagUrl: "https://flagcdn.com/us.svg",
    landmarkName: "Statue of Liberty",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/800px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg",
  },
  {
    id: 8,
    name: "Italy",
    capital: "Rome",
    flagUrl: "https://flagcdn.com/it.svg",
    landmarkName: "Colosseum",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
  },
  {
    id: 9,
    name: "Canada",
    capital: "Ottawa",
    flagUrl: "https://flagcdn.com/ca.svg",
    landmarkName: "CN Tower",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg/800px-Toronto_-_ON_-_Toronto_Harbourfront7.jpg",
  },
  {
    id: 10,
    name: "Mexico",
    capital: "Mexico City",
    flagUrl: "https://flagcdn.com/mx.svg",
    landmarkName: "Chichen Itza",
    landmarkUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1200px-Chichen_Itza_3.jpg",
  },
];

// API untuk mendapatkan data negara
app.get("/api/countries", (req, res) => {
  res.json(countries);
});

// API untuk trivia tebak bendera
app.get("/api/quiz/flags", (req, res) => {
  // Mengambil 4 negara secara acak untuk pilihan jawaban
  const shuffled = [...countries].sort(() => 0.5 - Math.random());
  const selections = shuffled.slice(0, 4);

  // Memilih 1 negara sebagai jawaban yang benar
  const correctAnswer =
    selections[Math.floor(Math.random() * selections.length)];

  res.json({
    question: "Bendera negara manakah ini?",
    flagUrl: correctAnswer.flagUrl,
    options: selections.map((country) => country.name),
    correctAnswer: correctAnswer.name,
  });
});

// API untuk trivia tebak landmark
app.get("/api/quiz/landmarks", (req, res) => {
  // Mengambil 4 negara secara acak untuk pilihan jawaban
  const shuffled = [...countries].sort(() => 0.5 - Math.random());
  const selections = shuffled.slice(0, 4);

  // Memilih 1 negara sebagai jawaban yang benar
  const correctAnswer =
    selections[Math.floor(Math.random() * selections.length)];

  res.json({
    question: `Landmark ini berada di negara mana? (${correctAnswer.landmarkName})`,
    imageUrl: correctAnswer.landmarkUrl,
    options: selections.map((country) => country.name),
    correctAnswer: correctAnswer.name,
  });
});

// API untuk mendapatkan daftar negara dari A-Z
app.get("/api/countries/az", (req, res) => {
  // Daftar lengkap negara dari A-Z (disederhanakan untuk contoh)
  const azCountries = {
    A: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Argentina",
      "Australia",
      "Austria",
    ],
    B: [
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
    ],
    C: [
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
    ],
    D: ["Denmark", "Djibouti", "Dominica", "Dominican Republic"],
    E: [
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
    ],
    F: ["Fiji", "Finland", "France"],
    G: [
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
    ],
    H: ["Haiti", "Honduras", "Hungary"],
    I: [
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Ivory Coast",
    ],
    J: ["Jamaica", "Japan", "Jordan"],
    K: ["Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan"],
    L: [
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
    ],
    M: [
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar",
    ],
    N: [
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "North Korea",
      "North Macedonia",
      "Norway",
    ],
    O: ["Oman"],
    P: [
      "Pakistan",
      "Palau",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
    ],
    Q: ["Qatar"],
    R: ["Romania", "Russia", "Rwanda"],
    S: [
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Korea",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Sweden",
      "Switzerland",
      "Syria",
    ],
    T: [
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
    ],
    U: [
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
    ],
    V: ["Vanuatu", "Vatican City", "Venezuela", "Vietnam"],
    W: ["Western Sahara"],
    Y: ["Yemen"],
    Z: ["Zambia", "Zimbabwe"],
  };

  res.json(azCountries);
});

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
