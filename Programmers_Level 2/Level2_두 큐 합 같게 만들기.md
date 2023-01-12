#### [2022 KAKAO TECH INTERNSHIP] : 두 큐 합 같게 만들기 : Level 2

**문제설명** <br>

길이가 같은 두 개의 큐가 주어집니다. 하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다. 이때 필요한 작업의 최소 횟수를 구하고자 합니다. 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것으로 간주합니다.
큐는 먼저 집어넣은 원소가 먼저 나오는 구조입니다. 이 문제에서는 큐를 배열로 표현하며, 원소가 배열 앞쪽에 있을수록 먼저 집어넣은 원소임을 의미합니다. 즉, pop을 하면 배열의 첫 번째 원소가 추출되며, insert를 하면 배열의 끝에 원소가 추가됩니다. 예를 들어 큐 [1, 2, 3, 4]가 주어졌을 때, pop을 하면 맨 앞에 있는 원소 1이 추출되어 [2, 3, 4]가 되며, 이어서 5를 insert하면 [2, 3, 4, 5]가 됩니다.

다음은 두 큐를 나타내는 예시입니다.
```
queue1 = [3, 2, 7, 2]
queue2 = [4, 6, 5, 1]
```
두 큐에 담긴 모든 원소의 합은 30입니다. 따라서, 각 큐의 합을 15로 만들어야 합니다. 예를 들어, 다음과 같이 2가지 방법이 있습니다.
1. queue2의 4, 6, 5를 순서대로 추출하여 queue1에 추가한 뒤, queue1의 3, 2, 7, 2를 순서대로 추출하여 queue2에 추가합니다. 그 결과 queue1은 [4, 6, 5], queue2는 [1, 3, 2, 7, 2]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 7번 수행합니다.
2. queue1에서 3을 추출하여 queue2에 추가합니다. 그리고 queue2에서 4를 추출하여 queue1에 추가합니다. 그 결과 queue1은 [2, 7, 2, 4], queue2는 [6, 5, 1, 3]가 되며, 각 큐의 원소 합은 15로 같습니다. 이 방법은 작업을 2번만 수행하며, 이보다 적은 횟수로 목표를 달성할 수 없습니다.

따라서 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수는 2입니다.

길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2가 매개변수로 주어집니다. 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수를 return 하도록 solution 함수를 완성해주세요. 단, 어떤 방법으로도 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 return 해주세요.

**제한 사항** <br>
 - 1 ≤ queue1의 길이 = queue2의 길이 ≤ 300,000
 - 1 ≤ queue1의 원소, queue2의 원소 ≤ 109
 - 주의: 언어에 따라 합 계산 과정 중 산술 오버플로우 발생 가능성이 있으므로 long type 고려가 필요합니다.

**입출력 예** <br>
<table>
<tr>
    <td colspan="2" align="center">queue1</td>
    <td colspan="2" align="center">queue2</td>
    <td colspan="2" align="center">Result</td>
</tr>
<tr>
    <td colspan="2">[3, 2, 7, 2]</td>
    <td colspan="2">[4, 6, 5, 1]</td>
    <td colspan="2">2</td>
</tr>
<tr>
    <td colspan="2">[1, 2, 1, 2]</td>
    <td colspan="2">[1, 10, 1, 2]</td>
    <td colspan="2">7</td>
</tr>
<tr>
    <td colspan="2">[1, 1]</td>
    <td colspan="2">[1, 5]</td>
    <td colspan="2">-1</td>
</tr>
</table>

**입출력 예 설명** <br>

입출력 예 #1
- 문제 예시와 같습니다.

입출력 예 #2
- 두 큐에 담긴 모든 원소의 합은 20입니다. 따라서, 각 큐의 합을 10으로 만들어야 합니다. queue2에서 1, 10을 순서대로 추출하여 queue1에 추가하고, queue1에서 1, 2, 1, 2와 1(queue2으로부터 받은 원소)을 순서대로 추출하여 queue2에 추가합니다. 그 결과 queue1은 [10], queue2는 [1, 2, 1, 2, 1, 2, 1]가 되며, 각 큐의 원소 합은 10으로 같습니다. 이때 작업 횟수는 7회이며, 이보다 적은 횟수로 목표를 달성하는 방법은 없습니다. 따라서 7를 return 합니다.

입출력 예 #3
- 어떤 방법을 쓰더라도 각 큐의 원소 합을 같게 만들 수 없습니다. 따라서 -1을 return 합니다.

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
1. 큐의 총 합의 평균을 알기위해 각 reduce를 이용하여 각각 값을 구한뒤 합쳐줬다
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
arr.reduce 이용해 배열 만들기 //초기값 배열로설정
```javascript
    result = oneTwoThree.reduce((acc, cur) => {
      acc.push(cur % 2 ? '홀수' : '짝수');
      return acc;
    }, []);
    result; // ['홀수', '짝수', '홀수']
```
***





