#### 진료순서 정하기 : Level 0 

**문제설명** <br>

문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

**제한 사항** <br>
 - 0 < A의 길이 = B의 길이 < 100
 - A, B는 알파벳 소문자로 이루어져 있습니다.

**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">A</td>
    <td colspan="1" align="center">B</td>
    <td colspan="1" align="center">Result</td>
</tr>
<tr>
    <td colspan="1">"hello"</td>
    <td colspan="1">"ohell"</td>
    <td colspan="1">1</td>
</tr>
<tr>
    <td colspan="1">"apple"</td>
    <td colspan="1">"elppa"</td>
    <td colspan="1">-1</td>
</tr>
<tr>
    <td colspan="1">"atat"</td>
    <td colspan="1">"tata"</td>
    <td colspan="1">1</td>
</tr>
<tr>
    <td colspan="1">"abc"</td>
    <td colspan="1">"abc"</td>
    <td colspan="1">0</td>
</tr>
</table>

**입출력 예 설명** <br>

-  입출력 예 #1
 <br> "hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.
-  입출력 예 #2
 <br> "apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.
-  입출력 예 #3
<br> "atat"는 오른쪽으로 한 칸, 세 칸을 밀면 "tata"가 되므로 최소 횟수인 1을 반환합니다.
-  입출력 예 #4
   <br> "abc"는 밀지 않아도 "abc"이므로 0을 반환합니다.

**JS 프로그래밍**
```javascript
 function solution(A, B) {
    let sol = [...A]
    let cnt = 0
    for(let i=0; i< sol.length; i++){
        if(sol.join('') !== B) {
            sol.unshift(sol.pop())
            cnt++
        }else if(sol.join('') === B){
            return cnt
        }
    }
    return -1
}
```
***
**코드 설명**

1. A의 문자열을 배열로 분해한후 sol에 저장시킨다.
2. sol.length만큼 for을 돌리는데 sol과 b가 같지않으면 맨뒤의 값을 pop 시킨후 unshift 한다 
 
 `pop과 push 이외에 사용할 시 시간복잡도(N)의 시간을 가지기때문에 시간초과가 뜰 수도 있다.`
3. Cnt를 올리면서 두 수가 같아질때 값을 리턴시킨다.
4. 배열의 길이만큼 반복문을 돌렸음에도 값이 같지않다면 -1
5. 애초에 같이 같을때도 Cnt을 0으로 초기화했기 때문에 0 리턴
***
**새로 배운 스킬**






