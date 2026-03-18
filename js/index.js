// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.querySelector("#til-date").value;
  const title = document.querySelector("#til-title").value;
  const content = document.querySelector("#til-content").value;

  if (!date || !title || !content) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  // 새 TIL 요소 생성
  const tilItem = document.createElement("article");
  tilItem.classList.add("til-item");

  tilItem.innerHTML = `
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${content}</p>
  `;

    // 목록에 추가 (최신이 위로)
    tilList.prepend(tilItem);

    // 폼 초기화
    tilForm.reset();
});
