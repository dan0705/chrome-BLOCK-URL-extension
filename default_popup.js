const date = new Date();
// const time = date.toLocaleTimeString();
const hour = date.getHours();

document.querySelector(".content").addEventListener("click", () => {
  if (hour < 6 || hour > 22) {
    const code = `<img src="/bg/block.gif" alt="&#10084;" />
        <p>Sorry, Facebook is blocking!</p>`;
    document.getElementById("realTime").innerHTML = null;
    document.getElementById("realTime").insertAdjacentHTML("beforeend", code);
  }
});
