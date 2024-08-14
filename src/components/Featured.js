import "../styles/Featured.css";

function Featured() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const currDate = month[d.getMonth()] + " " + d.getFullYear();
  return (
    <div className="featured-wrapper">
      <h3 className="section-title">Featured Project - {currDate}</h3>
      <p>
        Site Data Scraper{" "}
        <a
          className="app-link"
          href="https://sitescraper.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          sitescraper.netlify.app
        </a>
      </p>
      <p>
        Technologies used: JavaScript, React.js, Express.js, Playwright,
        Netlify, CSS
      </p>
      <p className="featured__app-description">
        Site Data Scraper allows users to scrape textual data from a user
        defined URL. Users can label the data and pass in the selectors of the
        elements containing the data to be scraped. Once the data has been
        scraped, results are displayed to the user.
      </p>
    </div>
  );
}

export default Featured;
