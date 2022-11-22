import React from 'react';
// import { Link } from 'react-router-dom';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      github: "https://github.com/MatchewXD",
      linkedin: "https://www.linkedin.com/in/matthew-seagren/"
    }

    // this.renderView = this.renderView.bind(this)
  }
  render() {
    return <div className="webpage">
      <div className="business-card">
        <div className="matchewxd">MatchewXD</div>
        <div className="job-disc">Software Engineer<br></br>"Live Better Together"<br></br>GitHub<br></br>LinkedIn</div>
        {/* <div className="linx">GitHub<br></br>LinkedIn</div> */}
      </div>
      <div className="calc-container">
        <div className="speech-bubble"></div>
        <div className="eye-container">
          <div className="left eye"></div>
          <div className="right eye"></div>
        </div>
        <div className="calc"></div>
      </div>
    </div >;
  }
}

export default Calculator