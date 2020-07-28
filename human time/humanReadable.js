function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = Math.abs(
    seconds - (seconds - hours * 3600) - (seconds - minutes * 60)
  );

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secString = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${hoursString}:${minString}:${secString}`;
}

console.log(humanReadable("86399"));
