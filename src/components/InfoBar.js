function InfoBar() {
  return (
    <div className="hero">
      <div className="info">
        <div className="business-time">
          <span>
            <i className="fa-regular fa-clock icon"></i>
          </span>
          <div className="details">
            <h3>Opening Hours</h3>
            <p>Sat 01:00 pm - 11-30 pm</p>
          </div>
        </div>
        <div className="business-time">
          <span>
            <i className="fa-solid fa-location-dot icon"></i>
          </span>
          <div className="details">
            <h3>Address</h3>
            <p>Intellectual Village, Spring</p>
          </div>
        </div>
        <div className="business-time">
          <span>
            <i className="fa-solid fa-phone-volume icon"></i>
          </span>
          <div className="details">
            <h3>Contact</h3>
            <p>+92 334 1118287</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
