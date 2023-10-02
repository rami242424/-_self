class IdolModel {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    constructor(name, year, part){
        super(name, year); //IdolModel(); 이랑 같음
        this.part = part;
    }
    sayHello(){
        return `안녕하세요 ${this.name}입니다. 저는 ${this.part}를 맡고 있습니다.`
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);
//FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
//IdolModel { name: '장원영', year: 2002 }

console.log(wonYoung.sayHello());
//안녕하세요 장원영입니다.

console.log(yuJin.sayHello());
//안녕하세요 안유진입니다. 저는 보컬를 맡고 있습니다.


