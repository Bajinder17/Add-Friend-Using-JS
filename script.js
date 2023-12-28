var istatus = document.querySelector("h5");
var button = document.querySelector(".add");
var check = 0;

button.addEventListener("click", () => {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    button.innerHTML="Remove Friend"

    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    button.innerHTML="Add Friend"

    check = 0;
  }
});
