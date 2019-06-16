const kFormatter = num => {
  if (num > 999 && num < 100000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 99999) {
    return (num / 1000).toFixed(0) + "K";
  } else {
    return num + "";
  }
  // return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};

export { kFormatter };
