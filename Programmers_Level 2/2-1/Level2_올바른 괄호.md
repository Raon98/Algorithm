#### 올바른 괄호: Level 2

**문제설명** <br>
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
**제한 사항** <br>
 - 1 ≤ queue1의 길이 = queue2의 길이 ≤ 300,000
 - 1 ≤ queue1의 원소, queue2의 원소 ≤ 109
 - 주의: 언어에 따라 합 계산 과정 중 산술 오버플로우 발생 가능성이 있으므로 long type 고려가 필요합니다.

**입출력 예** <br>
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

**JS 프로그래밍**
```javascript
    function solution(queue1,queue2) {
    var answer = 0;
    let queSum1 = queue1.reduce((acc, cur) =>acc += cur, 0);
    let queSum2 = queue2.reduce((acc, cur) => acc += cur, 0);
    let res = queSum1 + queSum2;
    let que1;
    let que2;
    let [i1, i2] = [0, 0];
    let max = queue1.length * 3

    while (queSum1 !== res / 2) {
        if (queSum1 > res / 2) {
            que1 = queue1[i1]
            i1++
            queue2.push(que1);
            queSum1 = queSum1 - que1;
            answer++;
            if (queue1.length <= i1) {
                answer = -1;
                break;
            }else if (queSum1 === res/2) {
                break;
            }else if (i1 > max  && queSum1 !== res / 2){
                answer = -1;
                break;
            }
        } else if (queSum1 < res / 2) {
            que2 = queue2[i2];
            i2++
            queue1.push(que2);
            queSum1 = queSum1 +que2;
            answer++;
            if (queue2.length <= i2) {
                answer = -1;
                break;
            }
        } else if (queSum1 === res/2) {
            break;
        } else if( i2 > max && queSum1 !== res / 2){
            answer = -1;
            break;
        }
    }
    return answer;
}
```

***
**코드설명**
1. 큐의 총 합의 평균을 알기위해 각 reduce를 이용하여 각각 값을 구한뒤 합쳐 줬다.
2. while (queSum1 !== res / 2) 될 때 까지 반복을 진행하는데 
3. 큐1의 값이 총합평균(res)값 보다 크면 큐1 > 큐2 이기때문에 큐2에다 큐1의 첫번째 값을 push() 한다
4. 반대로 큐2의값이 총합평균(res)값 보다 크면 큐2의 첫번째 값을 큐1로 push() 한다.
   <br> `* 여기서 배열의Array.shift()를 사용하지않고 let [i1, i2] = [0, 0]; 사용하여 배열INDEX에 직접적이게 개입한 이유는 큐의 맨 첫번째 값을 빼낼시 시간복잡도(n)시간이 소요되고 배열의 길이가 길어지면 타임아웃이 생김`
   <br> `* 그렇기에 최대한 시간복잡도가(1)인 push를 이용해서 코드를 작성하려고 함`
5. 이후 큐가 push될때마다 answer++ 되고 최소 작업한 횟수을 찾을 수 있다.
6. let max = queue1.length * 3 을 설정한 이유는 큐1과 큐2의 배열길이는 동일하기 때문에 `#2로설정해도 오류발생은 x` Max값을 설정해서 큐의 개수가 최대 3번까지만 반복했을때 까지도 두 큐가 같은 값이 아니라면 -1를 리턴
   <br> `* 큐의 최대 반복횟수를 지정하지 않을시 무한 루프에 걸려 Error 발생! TestCase : [100,101] : [102,103]`
***
**배운점**

[Algorithm_basic(3)] : 배열의 시간복잡도 

이 코드를 작성할 때 문제였던 부분이 타임아웃 부분이였다. <br>
이 문제를 해결하기위해서 여러방면으로 검색을 하던와중 배열의 Array.shift()의 반복적인 사용이 시간복잡도(n)의 시간을 가져서 길이기 큰 배열의 경우 타임아웃이 떨어졌었다.
<br> 이를 해결하기위해서 시간복잡도가(1)인 pop과 push만으로 해결하였고 코드의 반복적인 작업속에서 시간복잡도에 따른 성능의 차이 및  중요성을 알게되었다.

***
**새로 배운 스킬**
<br>
 
### arr.REDUCE 함수
Array.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

```javascript
array.reduce((acc,cur) => ({ ...acc,
        [cur]: (acc[cur] || 0) + 1
    }), {})
```
#### arr.reduce 이용해 배열 만들기 //초기값 배열로설정
```javascript
    result = oneTwoThree.reduce((acc, cur) => {
      acc.push(cur % 2 ? '홀수' : '짝수');
      return acc;
    }, []);
    result; // ['홀수', '짝수', '홀수']
```
#### 확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기
```javascript
   // friends - an array of objects
   // where object field "books" - list of favorite books
   var friends = [{
     name: 'Anna',
     books: ['Bible', 'Harry Potter'],
     age: 21
   }, {
     name: 'Bob',
     books: ['War and peace', 'Romeo and Juliet'],
     age: 26
   }, {
     name: 'Alice',
     books: ['The Lord of the Rings', 'The Shining'],
     age: 18
   }];
   
   // allbooks - list which will contain all friends' books +
   // additional list contained in initialValue
   var allbooks = friends.reduce(function(accumulator, currentValue) {
     return [...accumulator, ...currentValue.books];
   }, ['Alphabet']);
   
   // allbooks = [
   //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
   //   'Romeo and Juliet', 'The Lord of the Rings',
   //   'The Shining'
   // ]
```
#### 중첩배열 합치기
```javascript
   var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
           function(accumulator, currentValue) {
              return accumulator.concat(currentValue);
           },
           []
   );
   // 펼친 결과: [0, 1, 2, 3, 4, 5]
```

#### 객체 내의 값 인스턴스 개수 세기 [중요]

```javascript
   function solution() {
       let i = '(a+b[a])+[{(b*e)/(a+q)}]'
       let ans =[...i.replace(/[a-z\+\/\-\*]/g,'')].sort().reduce((a,c,i)=> {if (c in a) {a[c]++;}else {a[c] = 1;}return a;}, {})
       return ans['(']===ans[')'] && ans['{']===ans['}'] &&ans['[']===ans[']'] ? "정상" : "비정상"
   }
```
```javascript
   var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
   
   var countedNames = names.reduce(function (allNames, name) {
     if (name in allNames) {
       allNames[name]++;
     }
     else {
       allNames[name] = 1;
     }
     return allNames;
   }, {});
   // countedNames is:
   // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```
#### 함수 구성을 위한 파이프 함수
```javascript
   // Building-blocks to use for composition
   const double = x => x + x;
   const triple = x => 3 * x;
   const quadruple = x => 4 * x;
   
   // Function composition enabling pipe functionality
   const pipe = (...functions) => input => functions.reduce(
       (acc, fn) => fn(acc),
       input
   );
   
   // Composed functions for multiplication of specific values
   const multiply6 = pipe(double, triple);
   const multiply9 = pipe(triple, triple);
   const multiply16 = pipe(quadruple, quadruple);
   const multiply24 = pipe(double, triple, quadruple);
   
   // Usage
   multiply6(6); // 36
   multiply9(9); // 81
   multiply16(16); // 256
   multiply24(10); // 240
```
[참고 : MDN-Reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)


#### Array.map 이용해 만들기
```javascript
completion.map(name => completion[name] = (completion[name]|0)+1) 
```
***





