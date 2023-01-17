#### 최빈값구하기 : Level 0 

**문제설명** <br>

최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

**제한 사항** <br>
 - 0 < array의 길이 < 100
 - 0 ≤ array의 원소 < 1000

**입출력 예** <br>
-  입출력 예 #1
 <br> [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
-  입출력 예 #2
 <br> [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
-  입출력 예 #3
 <br> [1]에는 1만 있으므로 최빈값은 1입니다.

**JS 프로그래밍**
```javascript
    function solution(array) {
        let m = new Map();
        for (let n of array){
                m.set(n, (m.get(n) || 0)+1);
        }
        
        m = [...m].sort((a,b)=>b[1]-a[1]);
        
        return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
    }
```
***
**코드 설명**

1. 새로운 Map을 생성한다.
2. for of 문을 이용해 파라미터인 array를 반복한다
3. map.set을 이용해 array의 n값을 key로 설정한다
4. 이제 value을 설정해야되는데 map.get을 이용하는데 n값이 없으면 null값이 들어가므로 0 + 1 즉 m(1,1) 로 들어가게된다
5. 반대로 이미 n 값이 있을경우 m.get(m)을 했을시 이미 m(1) = 1 이기때문에 1+1 즉 2개 들어가게된다.
6. 반복을 마친 m배열을 sort()를 이용하여 내림차순으로 정렬을 시키면 [3,3][1,1][2,1]... 등 빈도수가 높은순으로 정렬이 된다.
7. 조건에서 m의 길이가 1일경우는 그값이 최빈값이기때문에 예외처리후 값이있으면 맨 배열의 첫번째 값을 리턴시키고 첫번째 배열과 두번째 배열의 빈도수가 같다면 -1를 리턴 시킨다 .
***
**새로 배운 스킬**

### 대괄호 표기법(square bracket notation)
1. 처음에 배열의 첫번째 값 'a'가 들어오면,result[x], 즉, result.a는 undefined 입니다.
    result.a가 undefined이므로 result에 a 속성을 추가하고, 0+1, 즉, 1을 세팅합니다.<br>
2. 배열의 두번째 값 'b'가 들어와도 마찬가지로 result에 b 속성을 추가하고, 1을 세팅합니다.<br>
3. 배열의 세번째 값 'a'가 들어오면, 이번에는 result.a의 값이 1로 세팅되어 있으므로
    result.a의 값을 result.a + 1, 즉, 1+1, 2로 세팅합니다.

- **result[x] = (result[x] || 0) + 1;**
```javascript
    if(result[x])	{
        result[x] = result[x] + 1;
    }else {
        result[x] = 0 + 1;
    }
 ```
- 또다른 맵 맵핑법 
```javascript
     function solution(s) {
         const m = new Map();
            [...s].forEach(e=>m.set(e, m.get(e)+1||1));
        return [...m].filter(e=>e[1]===1).map(e=>e[0]).sort().join("");
    // e === [a,1] [b,2] [c,1] 상태라면 e[0] = abc / e[1] = 121 임
     }
```
[참조 : 네이버블로그](https://hianna.tistory.com/459)
***





