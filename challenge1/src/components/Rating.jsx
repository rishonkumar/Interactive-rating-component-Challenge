import React, { useState } from "react";
import styles from "./Rating.module.css";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleFormSubmitted(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return isSubmitted ? (
    <div className={styles.thankYouPanel}>
      <img src="/illustration-thank-you.svg" />

      <p className={styles.selected}>You selected {selectedRating} out of 5</p>

      <h1 className={styles.title}>Thank You </h1>
      <p className={styles.desc}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleFormSubmitted} className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg" alt="" />
      {/* <img src="/vite.svg" className="logo" alt="Vite logo" /> */}

      <h1 className={styles.title}>How did we do</h1>
      <p className={styles.desc}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {/* {selectedRating} */}
      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>
      <button disabled={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
};

export default Rating;
