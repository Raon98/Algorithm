#### 영어가 싫어요 : Level 0 

**문제설명** <br>

영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

**제한 사항** <br>
 - `numbers`는 소문자로만 구성되어 있습니다.
 - `numbers`는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
 - 1 ≤ `numbers`의 길이 ≤ 50
 - "zero"는 `numbers`의 맨 앞에 올 수 없습니다.

**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">numbers</td>
    <td colspan="1" align="center">result</td>
</tr>
<tr>
    <td colspan="1">"onetwothreefourfivesixseveneightnine"</td>
    <td colspan="1">123456789</td>
</tr>
<tr>
    <td colspan="1">"onefourzerosixseven"</td>
    <td colspan="1">14067</td>
</tr>
</table>

**입출력 예 설명** <br>

-  입출력 예 #1
 <br> "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.
-  입출력 예 #2
 <br> "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

**JS 프로그래밍**
```javascript

2
3
4
5
6
7
8
9
10
11
12
13
14
function solution(numbers) {
  let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let arr2 = []
  let str = ''
 
    for(let i =0; i< [...numbers].length; i++){
        str += [...numbers][i]
        if(arr1.includes(str)) {
          arr2.push(arr1.indexOf(str))
          str = ''
        }
    }
  return Number(arr2.join(''))
 }
```
***
**코드 설명**

1. [zero ~ nine] 까지 미리 배열을 선언해둔다.
2. 새로운 배열에 하나씩 PUSH 하면서 str값이 arr1배열안에 포함돼있으면 
3. indexOf를 이용하여 그 값의 인덱스를 새로운 배열로 푸쉬한다. 
4. 기존 str값은 있을경우 초기화 진행
5. 숫자형으로 변환후 배열 join('')을 이용하여 문자열로 변환하였다.

***
**다른 사람 풀이**
replace 이용
```javascript
  function solution(numbers) {
      const obj = {
          zero: 0, one: 1, two: 2, three: 3, four: 4,
          five: 5, six: 6, seven: 7, eight: 8, nine: 9
      };
  
      const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
          return obj[v];
      });
  
      return Number(num);
  }
```
***
reduce 이용
```javascript
var solution=n=>Number(['zero','one','two','three','four','five','six','seven','eight','nine'].reduce((t,s,i)=>t.replaceAll(s,i),n  ))
```
**새로 배운 기술**
 
- replace()의 두번째 인자값을 함수로 전달할 수 있다.
***



