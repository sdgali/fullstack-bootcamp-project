const TrialContainer = () => {
  return (
    <>
      <div className="position-relative">
        <div className="container my-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* متن */}
            <div className="col-md-3 text-center text-md-start">
              <h1>ALL-IN-ONE BUSINESS DASHBOARDS</h1>
              <p>
                Monitor and visualize your business on one easy-to-use,
                real-time dashboard. Social media, analytics, marketing, sales,
                support – all of your data together.
              </p>
              <button className="btn btn-primary btn-lg">
                Start Free Trial
              </button>
            </div>

            <div className="col-md-9">
              <img
                src="cyfe_new_hero_image-min-1024x592.png.webp"
                alt="Dashboard Preview"
                className="img-fluid shadow-lg rounded"
              />
            </div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="position-absolute top-0 start-0 w-100"
          style={{ zIndex: 1 }}
        >
          <path
            fill="#00cba9"
            fillOpacity="1"
            d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,224C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default TrialContainer;
