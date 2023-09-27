//사용자가 입력한 input값(데이터값)을 여기서 저장하고 관리한다.

class TextManager {
    constructor() {
        this.value = { data: "Hello Lions!" };
    }


    // this.value값을 가져오기위해 만듬
    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value.data = newValue;
    }
}