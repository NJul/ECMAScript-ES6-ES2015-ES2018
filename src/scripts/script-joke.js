import oneLinerJoke from 'one-liner-joke';

window.onload = function () {
  const getRandomJoke = oneLinerJoke.getRandomJoke();
  // console.log(getRandomJoke);
  document.getElementById('joke').innerHTML = (getRandomJoke.body + '<br><br>');

  let tags = getRandomJoke.tags;
  document.getElementById('tags').innerHTML = tags.join(", ");
}