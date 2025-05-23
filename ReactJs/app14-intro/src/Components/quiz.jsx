function QuizApp() {
  // Do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    { 
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = questions[currentIndex];
 
  const handleSubmit = () => {
    if (!selectedOption) {
      setFeedback('Please select an option.');
      return;
    }

    const isCorrect = selectedOption === currentQuestion.correct;
    setFeedback(isCorrect ? 'Correct!' : Incorrect. The correct answer is ${currentQuestion.correct}.);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedOption('');
    setFeedback('');
    setIsSubmitted(false);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {currentQuestion.question}
      </div>
      <div style={style.options}>
        {currentQuestion.options.map((opt) => (
          <div key={opt}>
            <label>
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selectedOption === opt}
                onChange={() => setSelectedOption(opt)}
              />
              {' '}{opt}
            </label>
          </div>
        ))}
      </div>
      {!isSubmitted ? (
        <button style={style.button} id="submitBtn" onClick={handleSubmit}>
          Submit
        </button>
      ) : currentIndex < questions.length - 1 ? (
        <button style={style.button} onClick={handleNext}>
          Next
        </button>
      ) : (
        <div style={style.feedback}>Quiz completed!</div>
      )}
      <div id="feedback" style={style.feedback}>{feedback}</div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<QuizApp />);