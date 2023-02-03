#### 컨트롤 제트 : Level 0 

**문제설명** <br>

숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

**제한 사항** <br>
 - 1 ≤ s의 길이 ≤ 200
 - 1,000 < s의 원소 중 숫자 < 1,000
 - s는 숫자, "Z", 공백으로 이루어져 있습니다.
 - s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
 - 연속된 공백은 주어지지 않습니다.
 - 0을 제외하고는 0으로 시작하는 숫자는 없습니다.
 - s는 "Z"로 시작하지 않습니다.
 - s의 시작과 끝에는 공백이 없습니다.
 - "Z"가 연속해서 나오는 경우는 없습니다.
 
**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">s</td>
    <td colspan="1" align="center">result</td>
</tr>
<tr>
    <td colspan="1">"1 2 Z 3"</td>
    <td colspan="1">4</td>
</tr>
<tr>
    <td colspan="1">"10 20 30 40"</td>
    <td colspan="1">100</td>
</tr>
<tr>
    <td colspan="1">"10 Z 20 Z 1"</td>
    <td colspan="1">1</td>
</tr>
<tr>
    <td colspan="1">"10 Z 20 Z"</td>
    <td colspan="1">0</td>
</tr>
<tr>
    <td colspan="1">"-1 -2 -3 Z"</td>
    <td colspan="1">-3</td>
</tr>
</table>

**입출력 예 설명** <br>

- 입출력 예 #1
 <br> 본문과 동일합니다.
- 입출력 예 #2
 <br> 10 + 20 + 30 + 40 = 100을 return 합니다.
- 입출력 예 #3
<br> "10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.

**JS 프로그래밍**
```javascript
function solution(s) {
    return s.split(' ').reduce((acc,cur,i)=> cur ==='Z' ? acc-(s.split(' ')[i-1]) : acc+Number(cur),0)
}
```
***
**코드 설명**

1. s문자열으 공백 기준으로 배열을 만들고
2. reduce함수를 이용해 현재가 Z이면 자른 배열의 인덱스 -1 값을 빼주고
3. Z가 아니라고 하면 그대로 더한다
***
**새로 배운 스킬**






