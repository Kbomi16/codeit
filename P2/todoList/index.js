const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// 여기에 코드를 작성해 주세요.
data.forEach((datas, i) => {
  const todo = document.createElement('li')
  if(datas.isClear === true) {
    todo.classList.add('item', 'done')
  } else {
    todo.classList.add('item')
  }
  todo.textContent = `${i+1}. ${datas.title}`
  list.append(todo)
})

