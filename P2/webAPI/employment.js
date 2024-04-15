fetch('https://learn.codeit.kr/api/interviews/summer')
  // response 객체의 json 메소드를 호출하여 리스폰스의 바디 부분에 있는 JSON 데이터를 Deserialize해서 생긴 객체를 작업 성공 결과로 가진 Promise 객체를 리턴
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // 여기에 코드를 작성하세요.
    return newMembers
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    // 신입 직원들의 정보가 담긴 배열을 그대로 POST 리퀘스트를 보내 추가
    method: 'POST',
    // 신입 직원 배열을 그대로 serialize해서 리퀘스트의 바디에 담아 보냄
    body: JSON.stringify(newMembers)
  }))
  .then((response) => { 
    // 잘 추가되었는지 확인
    if (response.status === 200) {
      // 상태코드가 200이면 정상적으로 추가된 것으로 알고 전체 직원 정보 조회
      return fetch('https://learn.codeit.kr/api/members');
    } else {
      throw new Error('New members not added');
    }
  })
  // 리스폰스 바디에 있는 전체 직원 정보를 나타내는 JSON 데이터를 추출, deserialize해야 함
  .then((response) => response.json())
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });