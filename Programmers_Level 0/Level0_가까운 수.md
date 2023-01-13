#### 가까운 수 : Level 0 

**문제설명** <br>

정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

**제한 사항** <br>
 - 1 ≤ array의 길이 ≤ 100
 - 1 ≤ array의 원소 ≤ 100
 - 1 ≤ n ≤ 100
 - 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">array</td>
    <td colspan="1" align="center">n</td>
    <td colspan="1" align="center">result</td>
</tr>
<tr>
    <td colspan="1">[3, 10, 28]</td>
    <td colspan="1">20</td>
    <td colspan="1">28</td>
</tr>
<tr>
    <td colspan="1">[10, 11, 12]</td>
    <td colspan="1">13</td>
    <td colspan="1">12</td>
</tr>
</table>

**입출력 예 설명** <br>

-  입출력 예 #1
 <br> 3, 10, 28 중 20과 가장 가까운 수는 28입니다
-  입출력 예 #2
 <br> 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

**JS 프로그래밍**
```javascript
    function solution(array, n) {
    return array.sort().reduce((acc,cur) =>  Math.abs(acc-n) > Math.abs(cur-n) ? cur : acc );
}
```
***
**코드 설명**

1. 배열 reduce 함수를 이용해 절대값 n-array[1] > 절대값 n-array[0]를 비교하여 누적값이 더크면 현재값을 리턴시키도록 했다.
2. 즉 [cur-n] 가 더 작은 수 일수록 더 가까운 수이기때문이다.
3. 여기서 sort() = 오름차순으로 정렬을 한 이유는 가까운 수가 여러개 일경우는 제일 작은수를 리턴해야하기때문이다. 
***
**새로 배운 스킬**

***





