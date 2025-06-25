fetch('https://example.com/api/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data); // 실제로 받아온 글 목록 확인
  })
  .catch(error => {
    console.error('에러 발생:', error);
  });
