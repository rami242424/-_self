// dom에서 path 찾기
const path = document.querySelector('#path');

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
console.log(pathLength) // 2507.61328125


// dash 의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;


function scrollHandler() {
  // 현재 스크롤의 위치

  console.log(document.documentElement.scrollTop);
}
window.addEventListener('scroll', scrollHandler)
