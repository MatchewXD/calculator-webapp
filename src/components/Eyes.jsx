import '../App.css';

function Eyes({ onClick }) {
  return (
    <div className="eye-container">
      <div className="left eye">
        <div className="leftlid"></div>
      </div>
      <div className="right eye"></div>
    </div>
  );
}

export default Eyes;