import React from 'react';

const MainComponent = () => {
  return (
    <div id="main-container">
      <div className="about-channel">
        <div className="channel-name">#</div>
        <div className="channel-desc">Desciption</div>
      </div>

      <div className="message-list"></div>

      <div className="chat-box">
        <textarea placeholder="Type Something and press enter.."></textarea>
      </div>
    </div>
  );
};
export default MainComponent;
