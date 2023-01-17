#### 진료순서 정하기 : Level 0 

**문제설명** <br>

외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

**제한 사항** <br>
 - 중복된 원소는 없습니다.
 - 1 ≤ emergency의 길이 ≤ 10
 - 1 ≤ emergency의 원소 ≤ 100

**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">emergency</td>
    <td colspan="1" align="center">result</td>
</tr>
<tr>
    <td colspan="1">[3, 76, 24]</td>
    <td colspan="1">[3, 1, 2]</td>
</tr>
<tr>
    <td colspan="1">[1, 2, 3, 4, 5, 6, 7]</td>
    <td colspan="1">[7, 6, 5, 4, 3, 2, 1]</td>
</tr>
<tr>
    <td colspan="1">[30, 10, 23, 6, 100]</td>
    <td colspan="1">[2, 4, 3, 5, 1]</td>
</tr>
</table>

**입출력 예 설명** <br>

-  입출력 예 #1
 <br> `emergency`가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
-  입출력 예 #2
 <br> `emergency`가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
-  입출력 예 #3
<br> `emergency`가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.

**JS 프로그래밍**
```javascript
 function solution(emergency) {
    return emergency.map(v=>[...emergency].sort((a,b)=>b-a).indexOf(v)+1);
 }
```
***
**코드 설명**

1. map을 이용해서 새로운 배열을 작성하는데
2. [...emergency] 즉 기존 배열을 복사한후에 내림차순으로 정렬한다.
3. 그 값에 map으로 받는 value값을 찾아 + 1 한다.
***
**새로 배운 스킬**
### string.indexOf(searchvalue, position)
- indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고,
  검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴
***





