import React, { useState } from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Quiz() {

  const [resultPath, setResultPath] = useState(''); // Add this line

  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateResult = () => {
    const { q1, q2, q3, q4, q5 } = answers;
    const tally = { A: 0, B: 0, C: 0 };

    [q1, q2, q3, q4, q5].forEach((answer) => {
      tally[answer]++;
    });

    if (tally.A >= tally.B && tally.A >= tally.C) {
      setResult('Your taste leans towards R&B!');
      setResultPath('/rb');
    } else if (tally.B >= tally.A && tally.B >= tally.C) {
      setResult('Your taste leans towards Folk!');
      setResultPath('/folk');
    } else {
      setResult('Your taste leans towards Country!');
      setResultPath('/country');
    }
  };

  return (
  <div className = "quiz-title">
    <div> 
 <h1>Music Taste Quiz</h1>
 <p> Find out what music genre fits you!</p>
  </div>  
    <div className="quiz">
     
      <form>
        <div className="question">
          <p>1. Which lyrics resonate with you the most?</p>
          <label>
            <input
              type="radio"
              name="q1"
              value="A"
              onChange={handleChange}
            />{' '}
            A) "I don’t see nobody but you."
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="B"
              onChange={handleChange}
            />{' '}
            B) "Take me home, country roads."
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="C"
              onChange={handleChange}
            />{' '}
            C) "You belong among the wildflowers."
          </label>
        </div>

        <div className="question">
          <p>2. Which instrument do you enjoy the most in a song?</p>
          <label>
            <input
              type="radio"
              name="q2"
              value="A"
              onChange={handleChange}
            />{' '}
            A) Smooth, soulful bass.
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="B"
              onChange={handleChange}
            />{' '}
            B) Gentle acoustic guitar.
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="C"
              onChange={handleChange}
            />{' '}
            C) Twangy banjo or steel guitar.
          </label>
        </div>

        <div className="question">
          <p>3. What's your ideal setting to listen to music?</p>
          <label>
            <input
              type="radio"
              name="q3"
              value="A"
              onChange={handleChange}
            />{' '}
            A) A dimly lit lounge or at home with candles.
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="B"
              onChange={handleChange}
            />{' '}
            B) Around a campfire with friends.
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="C"
              onChange={handleChange}
            />{' '}
            C) Driving down a country road with the windows down.
          </label>
        </div>

        <div className="question">
          <p>4. Which of these songs do you most enjoy?</p>
          <label>
            <input
              type="radio"
              name="q4"
              value="A"
              onChange={handleChange}
            />{' '}
            A) "Adorn" by Miguel
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="B"
              onChange={handleChange}
            />{' '}
            B) "The Times They Are A-Changin'" by Bob Dylan
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="C"
              onChange={handleChange}
            />{' '}
            C) "Jolene" by Dolly Parton
          </label>
        </div>

        <div className="question">
          <p>5. Which themes do you relate to the most in songs?</p>
          <label>
            <input
              type="radio"
              name="q5"
              value="A"
              onChange={handleChange}
            />{' '}
            A) Love, relationships, and emotion.
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="B"
              onChange={handleChange}
            />{' '}
            B) Storytelling, personal journeys, and introspection.
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="C"
              onChange={handleChange}
            />{' '}
            C) Home, family, and life in the countryside.
          </label>
        </div>

        <button type="button" onClick={calculateResult}>
          See Your Result
        </button>
      </form>
      {result && (
  <div className="result">
    <h2 className="result">{result}</h2>
    <Link to={resultPath} className="result-link">
      <span className="explore-text">Explore</span>
      <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
    </Link>
  </div>
)}

    </div>
    </div>
  );
}

export default Quiz;
