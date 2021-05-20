import React from "react";

import data from "./Data";

const Reminders = () => {
  const [originalData, setData] = React.useState(data);

  const clearAllElements = () => {
		setData([])
	};

  return (
    <div className="container">
      {originalData.map((people) => {
        const { id, name, jd, profile, reminder } = people;
        return (
          <div className="innerContainer">
            <div className="reminder-count"></div>
            <div className="profileContainer">
              <img src={profile} alt="profile" className="profile" />
            </div>
            <div className="profile-data">
              <h3>{name}</h3>
              <p className="jd">{jd}</p>
              <p className="reminder">{reminder}</p>
            </div>
          </div>
        );
      })}
      <div className="btn-container">
        <button className="btn" onClick={clearAllElements}>
          Clear All Reminders
        </button>
      </div>
    </div>
  );
};

export default Reminders;
