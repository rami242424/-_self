
let a;
console.log(a); // undefined



if (typeof a === "undefined") {
    console.log('a에 아무것도 할당되지 않았습니다!') 
}
// a에 아무것도 할당되지 않았습니다!, (typeof a === "undefined" -> true)

if (!a) {
    console.log('a에 아무것도 할당되지 않았습니다!')
}
// a에 아무것도 할당되지 않았습니다!, (!a ->true)

//----> typeof : 변수의 데이터 타입을 반환

let y;
if (typeof y === "undefined") {
  // y가 정의되지 않은 경우에 실행
}

if (y){
	// 실행되지 않음
}