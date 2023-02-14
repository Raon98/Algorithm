#### 컨트롤 제트 : Level 0 

**문제설명** <br>

정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

**제한 사항** <br>
 - 1 ≤ n ≤ 10,000
 - 1 ≤ numlist의 원소 ≤ 10,000
 - 1 ≤ numlist의 길이 ≤ 100
 - numlist는 중복된 원소를 갖지 않습니다.
 
**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">numlist</td>
    <td colspan="1" align="center">n</td>
<td colspan="1" align="center">result</td>
</tr>
<tr>
    <td colspan="1">[1, 2, 3, 4, 5, 6]</td>
    <td colspan="1">4</td>
   <td colspan="1">[36, 40, 20, 47, 10, 6, 7000, 10000]</td>
</tr>
</table>

**입출력 예 설명** <br>

- 입출력 예 #1
 <br> 4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다. 
 <br> 3과 5는 거리가 같으므로 더 큰 5가 앞에 와야 합니다.
 <br> 2와 6은 거리가 같으므로 더 큰 6이 앞에 와야 합니다.
- 입출력 예 #2
  <br> 4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다.
  <br> 20과 40은 거리가 같으므로 더 큰 40이 앞에 와야 합니다.

**JS 프로그래밍**
```javascript
function solution(numlist, n) {
    let arr = numlist.reduce((a,c,i) => { return {...a, [c]:Math.abs(c-n) }}, {})
    let list = Object.values(arr).sort((a,b)=>a-b)
    let ans = []
    for(let i=0; i<list.length; i++){
     list[i]!==list[i-1] ? ans.push(list[i]+n) :ans.push(n-list[i])
    }
    return ans.map(v=>numlist.includes(v)? v : (n*2)-v)
}
```
***
**다른사람 풀이**

```javascript
  function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
  }
```
***
**새로 배운 스킬**
- arr.sort((a,b)=> b-a)에서 0보다 작을경우 a가 b보다 앞으로 오도록 정렬 0보다 클경우 b가 a보다 앞에 오도록 정렬





