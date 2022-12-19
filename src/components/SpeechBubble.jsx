import '../App.css';

function SpeechBubble({ cText }) {
  var textOptions = [
    'Good Morning',
    'Good Night',
    '...',
    'Forget how to math?',
    "I Don't feel like it",
    'Go find another calculator to bother',
    'You can leave now',
    'Where did you learn how to math?',
    'Go back to Elementary School',
    'Having fun?',
    'This is boring',
    'Stop pressing my buttons!',
    "Don't be rude",
    'Are you done yet?'
  ];

  return (
    <div className="speech-bubble-container">
      <div className="speech-tail tail1"></div>
      <div className="speech-tail tail2"></div>
      <div className="speech-bubble">
        <p className="bubble-text">{textOptions[cText]}</p>
      </div>
    </div>
  );
}

export default SpeechBubble;




