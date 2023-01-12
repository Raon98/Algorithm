#### 완주하지 못한 선수 : Level 1

**문제설명** <br>

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

**제한 사항** <br>
 - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
 - completion의 길이는 participant의 길이보다 1 작습니다.
 - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
 - 참가자 중에는 동명이인이 있을 수 있습니다.

**입출력 예** <br>
<table>
<tr>
    <td colspan="2" align="center">participant</td>
    <td colspan="2" align="center">completion</td>
    <td colspan="2" align="center">return</td>
</tr>
<tr>
    <td colspan="2">["leo", "kiki", "eden"]</td>
    <td colspan="2">["eden", "kiki"]</td>
    <td colspan="2">"leo"</td>
</tr>
<tr>
    <td colspan="2">["marina", "josipa", "nikola", "vinko", "filipa"]</td>
    <td colspan="2">["josipa", "filipa", "marina", "nikola"]</td>
    <td colspan="2">"vinko"</td>
</tr>
<tr>
    <td colspan="2">["mislav", "stanko", "mislav", "ana"]</td>
    <td colspan="2">["stanko", "ana", "mislav"]</td>
    <td colspan="2">"mislav"</td>
</tr>
</table>

**입출력 예 설명** <br>

입출력 예 #1
- "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

입출력 예 #2
- "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

입출력 예 #3
- "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

**JS 프로그래밍**
```javascript
   function solution(participant, completion) {
        let part = participant.sort()
        let comp = completion.sort()
    
        for(let i=0; i<participant.length; i++){
            if(part[i] !== comp[i]){
                return part[i];
            }
        }
    }
```
***
**코드 설명**

1. part와 comp는 명단목록과 완주자목록을 sort()를 이용해서 오름차순 정렬시킨다.
2. 명단자배열의 길이만큼 반복문을 이용해 참가자명단이랑 완주자목록을 순서대로([i]) 비교한다.
3. 여기서 명단이랑 같지않다면 그 사람을 리턴시킨다.
***
**새로 배운 스킬**

### Array.sort()
- 배열을 오름차순 또는 내림차순으로 정렬할 수 있다.
  - sort() of sort((a,b) => a-b) :오름차순 정렬
  - sort((a,b) => b-a ) 내림차순정렬
***





