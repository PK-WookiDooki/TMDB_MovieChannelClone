export const getHrsFromMins = (runTime) => {
  let hr;
  let mins;

  if (runTime > 60) {
    hr = (runTime / 60).toFixed(0);
    mins = runTime % 60;
  }

  return { hr, mins };
};

export const getFormattedRating = (rating) => {
  const ratingPercentage = rating.toFixed(1) * 10;

  return ratingPercentage;
};
