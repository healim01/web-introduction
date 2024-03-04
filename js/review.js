const reviewButton = document.getElementsByClassName("submit_button")[0];

function addReview(event) {
  event.preventDefault();

  const reviewName = document.querySelector(".review_name").value;
  console.log("이름:", reviewName);

  const checkedMovies = [];
  const checkboxes = document.querySelectorAll(
    ".review_items input[type='checkbox']:checked"
  );

  checkboxes.forEach((checkbox) => {
    checkedMovies.push(checkbox.value);
  });
  console.log("선택된 영화:", checkedMovies);

  alert(`${reviewName}님, 저와 ${checkedMovies.length}개의 취향이 같으시네요!`);
}

reviewButton.addEventListener("click", function (event) {
  addReview(event);
});
