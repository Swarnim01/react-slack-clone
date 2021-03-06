import React from 'react';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="user-profile">
        <div className="avatar">
          <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" />
        </div>
        <div>Swarnim</div>
        <div style={{ marginLeft: 20, marginTop: 8, cursor: 'pointer' }}>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2150/2150480.svg"
            height="25"
          />
        </div>
      </div>
      <hr className="sidebar-spacer" />

      <div className="channels">
        <div className="header">Channels</div>
        <ul className="channel-list">
          <li></li>
        </ul>
      </div>

      <div className="directmessage"></div>
    </div>
  );
};

export default Sidebar;
