import '../App.css';
import anime from 'animejs/lib/anime.es.js';

// anime({
//   targets: 'div',
//   translateX: 250,
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 800
// });

function Eyes() {
  return (
    <div className="eye-container">
      <div className="left eye"></div>
      <div className="right eye"></div>
    </div>
  );
}

export default Eyes;