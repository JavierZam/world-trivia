import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Komponen untuk halaman utama
function Home() {
  return (
    <div className="home-container">
      <h1>Selamat Datang di World Trivia</h1>
      <p>Uji pengetahuan kamu tentang negara-negara di dunia!</p>
      <div className="menu-container">
        <Link to="/flag-quiz" className="menu-item">
          <div className="menu-card">
            <h2>Tebak Bendera</h2>
            <p>Bisakah kamu menebak negara dari bendera yang ditampilkan?</p>
          </div>
        </Link>
        <Link to="/landmark-quiz" className="menu-item">
          <div className="menu-card">
            <h2>Tebak Landmark</h2>
            <p>Dari negara mana landmark terkenal ini berasal?</p>
          </div>
        </Link>
        <Link to="/az-countries" className="menu-item">
          <div className="menu-card">
            <h2>Negara A-Z</h2>
            <p>Jelajahi daftar negara dari A sampai Z</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Komponen untuk quiz bendera
function FlagQuiz() {
  const [quizData, setQuizData] = useState(null);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const fetchQuiz = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/quiz/flags");
      const data = await response.json();
      setQuizData(data);
      setSelected("");
      setResult("");
      setTotalQuestions((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData.correctAnswer) {
      setResult("Benar!");
      setScore((prev) => prev + 1);
    } else {
      setResult(`Salah! Jawaban yang benar adalah ${quizData.correctAnswer}`);
    }
  };

  const handleNext = () => {
    fetchQuiz();
  };

  if (!quizData) return <div className="loading">Loading...</div>;

  return (
    <div className="quiz-container">
      <h1>Tebak Bendera</h1>
      <div className="score-board">
        <p>
          Skor: {score}/{totalQuestions}
        </p>
      </div>
      <div className="question-container">
        <h2>{quizData.question}</h2>
        <img
          src={quizData.flagUrl}
          alt="Bendera negara"
          className="flag-image"
        />

        <div className="options-container">
          {quizData.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selected === option
                  ? option === quizData.correctAnswer
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => !result && handleAnswer(option)}
              disabled={!!result}
            >
              {option}
            </button>
          ))}
        </div>

        {result && (
          <div className="result-container">
            <p
              className={
                result.includes("Benar") ? "correct-text" : "wrong-text"
              }
            >
              {result}
            </p>
            <button className="next-button" onClick={handleNext}>
              Soal Berikutnya
            </button>
          </div>
        )}
      </div>
      <Link to="/" className="back-link">
        Kembali ke Menu
      </Link>
    </div>
  );
}

// Komponen untuk quiz landmark
function LandmarkQuiz() {
  const [quizData, setQuizData] = useState(null);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const fetchQuiz = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/quiz/landmarks");
      const data = await response.json();
      setQuizData(data);
      setSelected("");
      setResult("");
      setTotalQuestions((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData.correctAnswer) {
      setResult("Benar!");
      setScore((prev) => prev + 1);
    } else {
      setResult(`Salah! Jawaban yang benar adalah ${quizData.correctAnswer}`);
    }
  };

  const handleNext = () => {
    fetchQuiz();
  };

  if (!quizData) return <div className="loading">Loading...</div>;

  return (
    <div className="quiz-container">
      <h1>Tebak Landmark</h1>
      <div className="score-board">
        <p>
          Skor: {score}/{totalQuestions}
        </p>
      </div>
      <div className="question-container">
        <h2>{quizData.question}</h2>
        <img
          src={quizData.imageUrl}
          alt="Landmark"
          className="landmark-image"
        />

        <div className="options-container">
          {quizData.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selected === option
                  ? option === quizData.correctAnswer
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => !result && handleAnswer(option)}
              disabled={!!result}
            >
              {option}
            </button>
          ))}
        </div>

        {result && (
          <div className="result-container">
            <p
              className={
                result.includes("Benar") ? "correct-text" : "wrong-text"
              }
            >
              {result}
            </p>
            <button className="next-button" onClick={handleNext}>
              Soal Berikutnya
            </button>
          </div>
        )}
      </div>
      <Link to="/" className="back-link">
        Kembali ke Menu
      </Link>
    </div>
  );
}

// Komponen untuk negara A-Z
function AZCountries() {
  const [countriesData, setCountriesData] = useState(null);
  const [activeLetters, setActiveLetters] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/countries/az");
        const data = await response.json();
        setCountriesData(data);

        // Inisialisasi state untuk semua huruf (tutup semua)
        const initialActiveState = {};
        Object.keys(data).forEach((letter) => {
          initialActiveState[letter] = false;
        });
        setActiveLetters(initialActiveState);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const toggleLetter = (letter) => {
    setActiveLetters((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  if (!countriesData) return <div className="loading">Loading...</div>;

  return (
    <div className="az-container">
      <h1>Negara dari A sampai Z</h1>
      <p>
        Klik pada huruf untuk melihat negara-negara yang dimulai dengan huruf
        tersebut
      </p>

      <div className="alphabet-container">
        {Object.keys(countriesData).map((letter) => (
          <div key={letter} className="letter-section">
            <button
              className={`letter-button ${
                activeLetters[letter] ? "active" : ""
              }`}
              onClick={() => toggleLetter(letter)}
            >
              {letter}
            </button>

            {activeLetters[letter] && (
              <div className="countries-list">
                {countriesData[letter].map((country, index) => (
                  <div key={index} className="country-item">
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Link to="/" className="back-link">
        Kembali ke Menu
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flag-quiz" element={<FlagQuiz />} />
          <Route path="/landmark-quiz" element={<LandmarkQuiz />} />
          <Route path="/az-countries" element={<AZCountries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
