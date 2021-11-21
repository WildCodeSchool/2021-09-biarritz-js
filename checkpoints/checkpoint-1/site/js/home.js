function handleHelp(item) {
  const help = document.getElementsByClassName("help");
  const problem = document.getElementsByClassName("problem");

  help[item].classList.toggle("help-visible");
  problem[item].classList.toggle("problem-no-visible");
}
