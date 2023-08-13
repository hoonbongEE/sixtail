// signup
function signup() {
  const data = {
    loginId: $('#signloginId').val(),
    password: $('#signpassword').val(),
    passwordConfirm: $('#signpasswordConfirm').val(),
    nickname: $('#signnickname').val(),
  };
  console.log(data);
  axios
    .post('http://localhost:3000/api/signup', data)
    .then((response) => {
      console.log(data);
      alert('회원가입 완료!');
      location.href = '../index.html';
    })
    .catch((error) => {
      alert('회원가입 실패!'); // 로그인 실패 시 얼럿 메시지 표시
    });
    console.log(data);
}
