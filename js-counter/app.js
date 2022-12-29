let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")) {
      count--;
    } else if(styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if(count < 0) {
      value.style.color = "#DC143C";
    } else if(count > 0) {
      value.style.color = "#228B22";
    } else {
      value.style.color = "#000";
    }
  })
})