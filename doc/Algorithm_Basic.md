## 알고리즘 기초
***

#### 1. var | let | const 차이

##### 먼저 변수란 ?
>변수(variable)는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙이 이름
```javascript
    const myNumber = 23
    // 변수명(식별자): myNumber
    // 해당 값의 위치(메모리 주소): 0012CCGWH80
    // 변수 값(저장된 값): 23
```
변수에 값을 저장하는 것을 `할당(assignment, 대입, 저장)`이라 하며 변수에 저장된 값을 읽어 들이는 것을 `참조(reference)`라 한다. 그리고 변수명을 자바스크립트 엔진에 알리는 것을 `선언(declaration)`이라 한다.`
###### 변수선언
- 선언 단계: 변수명을 등록하여 자바스크립트 엔진에 변수의 존재를 알린다.
- 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.
###### 변수할당
- 변수 선언과 할당은 하나의 문(statement)으로 단축 표현할 수 있지만, 두 개의 실행 시점이 다르다. 변수 선언이 호이스팅되어 런타임 이전에 실행되지만, 값의 할당은 소스코드가 순차적으로 실행되는 런타임에 실행

여기서 호이스팅이란 ? <br>
> 코드가 실행하기 전 변수선언/함수선언 이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상

여기서 스코프 란 ?
<br>
`var의 경우는 함수레벨 스코프` <br>
 - `함수 레벨 스코프 란 : 오로지 함수의 코드 블록만을 지역 스코프로 인정`

`let, const의 경우는 블록레벨 스코프` <br>
 - `모두 코드 블록(ex. 함수, if, for, while, try/catch 문 등)을 지역 스코프로 인정`

1. var
    - ES6 이전 사용하던 변수
    - 함수 레벨 스코프
    - 문제점
      - 변수 중복 선언 가능하여, 예기치 못한 값을 반환할 수 있다.
      - 함수 레벨 스코프로 인해 함수 외부에서 선언한 변수는 모두 전역 변수로 된다.
      - 변수 선언문 이전에 변수를 참조하면 언제나 undefined를 반환

2. let
    - 변수 중복 선언이 불가능하지만, 재할당은 가능하다
   ```javascript
    let name = 'kmj'
    console.log(name) // output: kmj

    let name = 'howdy' // output: Uncaught SyntaxError: Identifier 'name' has already been declared
    name = 'howdy'
    console.log(name) // output: howdy
   ```
   - 블록 레벨 스코프
   - 선언 단계와 초기화 단계가 분리되어 진행 [호이스팅]
     - 런타임 이전에 자바스크립트 엔진에 의해 선언 단계가 먼저 실행되지만, 초기화 단계가 실행되지 않았을 때 해당 변수에 접근하려고 하면 참조 에러
     - 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없는 일시적 사각지대(Temporal Dead Zone: TDZ) 구간에 존재

3. const
    - 변수 중복 선언X, 재할당 X
    - 반드시 선언과 초기화를 동시에 진행되어야 한다.
    ```javascript
   // 원시값의 재할당
    const name = 'kmj'
    name = 'howdy' // output: Uncaught TypeError: Assignment to constant variable.

    // 객체의 재할당
    const name = {
    eng: 'kmj',
    }
    name.eng = 'howdy'

    console.log(name) // output: { eng: "howdy" }
   ```
   - 블록 레벨 스코프
   - 선언 단계와 초기화 단계가 분리되어 진행 [호이스팅]
   - 선언과 초기화가 동시에 이루어져야 하지만 런타임 이전에는 실행될 수 없다.

<br>

[[참조] : 김민정 블로그 ➪ var/let/const 차이](https://www.howdy-mj.me/javascript/var-let-const)
***
#### 2. 화살표함수(Arrow) 와 일반 함수 차이
1. This
   - 일반 함수 <Br> `일반함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고,
   함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.`

   - 화살표 함수 <br>
   `화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.
   화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.(Lexical this)
   또한 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.`

```javascript
    function fun() {
      this.name = "하이";
      return {
        name: "바이",
        speak: function () {
          console.log(this.name);
        },
      };
    }

    function arrFun() {
      this.name = "하이";
      return {
        name: "바이",
        speak: () => {
          console.log(this.name);
        },
      };
    }

    const fun1 = new fun();
    fun1.speak(); // 바이

    const fun2 = new arrFun();
    fun2.speak(); // 하이
```
>일반 함수는 자신이 종속된 객체를 this로 가리키고 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.

 2. 생성자 함수로 사용 가능 여부
 <br> - 일반 함수는 생성자 함수 O
 <br> - 화살표 함수는 생성자 함수 X
```javascript
    function fun() {
      this.num = 1234;
    }
    const arrFun = () => {
      this.num = 1234;
    };

    const funA = new fun();
    console.log(funA.num); // 1234

    const funB = new arrFun(); // Error
```
3. arguments 사용 가능 여부 <br>
`arguments란, 함수에 전달되는 인수들을 배열 형태로 나타낸 객체`
    - 일반 함수 에서는 함수가 실행 될때 암묵적으로 arguments 변수가 전달되어 사용할 수 있다.
   ```javascript
    function fun() {
        console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    }

    fun(1, 2, 3);
   ```
    - 화살표 함수에서는 arguments 변수가 전달되지 않는다.
   ```javascript
   const arrFun = () => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    };

    arrFun(1, 2, 3);
   ```
<br>

[[참조] : 혜미의 개발 블로그 ➪ 화살표함수](https://hhyemi.github.io/2021/06/09/arrow.html)
***

#### 대표적인 문자표기법
카멜 표기법(Camel Case) 
- 단어의 첫문자은 대문자로 적되, 맨 앞에 있는 단어는 소문자로 표기
```javascript
 camelCase | kimSungCheol | systemUpdate ...
```
파스칼 표기법(Pascal Case)
- 단어의 첫문자마다 대문자 표시
```javascript
 CamelCase | KimSungCheol | SystemUpdate ...
```
스네이크 표기법(Snake Case)
- 단어 사이에 언더바를 넣어서 표기
```javascript
 camel_case | kim_sung_cheol | system_update ...
```

#### 왼쪽&오른쪽 시프트 연산자
비트연산자 [ << ,  >> ]
```javascript
    const b5 = 4 << 2;
    console.log(b5); //16
    //4를 2비트 왼쪽으로 이동한다.
    //0000 0100 4
    //0000 1000 8(1비트 이동)
    //0001 0000 16(2비트 이동)
```

***
<br>
<br>
<br>

