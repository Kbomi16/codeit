// fetch("https://learn.codeit.kr/api/members/3")
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// const newMember = {
//   name: 'Alice',
//   email: 'alice@codeitmall.kr',
//   department: 'marketing'
// }

// fetch("https://learn.codeit.kr/api/members/", {
//   method: 'POST',
//   body: JSON.stringify(newMember)
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

//   fetch("https://learn.codeit.kr/api/members/2", {
//   method: 'PUT',
//   body: JSON.stringify(newMember)
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// 새 직원 정보 추가한 후에 전체 직원 정보를 조회하는 코드
const newMember = {
  name: 'kimbomi',
  email: 'kimbomi2172@naver.com',
	department: 'frontend-developer'
};


fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember)
})
  .then(() => {
    fetch('https://learn.codeit.kr/api/members')
      .then((response) => response.text())
      .then((result) => {
        const members = JSON.parse(result)
        console.log(members[members.length - 1]);
      });
  });