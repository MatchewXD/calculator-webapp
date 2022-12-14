import '../App.css';

function SpeechBubble({ cText }) {
  var textOptions = [
    'Good Morning',
    'Good Night',
    'Forget how to math?',
    "Don't feel like it"
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




