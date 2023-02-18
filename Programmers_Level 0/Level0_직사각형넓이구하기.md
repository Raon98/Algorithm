#### 직사각형 넓이구하기 : Level 0 

**문제설명** <br>

2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

**제한 사항** <br>
 - dots의 길이 = 4
 - dots의 원소의 길이 = 2
 - -256 < dots[i]의 원소 < 256
 - 잘못된 입력은 주어지지 않습니다.

 
**입출력 예** <br>
<table>
<tr>
    <td colspan="1" align="center">dots</td>
    <td colspan="1" align="center">result</td>
</tr>
<tr>
    <td colspan="1">[[1, 1], [2, 1], [2, 2], [1, 2]]</td>
    <td colspan="1">1</td>
</tr>
<tr>
    <td colspan="1">[[-1, -1], [1, 1], [1, -1], [-1, 1]]	</td>
    <td colspan="1">4</td>
</tr>
**입출력 예 설명** <br>

- 입출력 예 #1
 <br> 좌표 [[1, 1], [2, 1], [2, 2], [1, 2]] 를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 1, 1이므로 직사각형의 넓이는 1 x 1 = 1입니다.
- 입출력 예 #2
 <br> 좌표 [[-1, -1], [1, 1], [1, -1], [-1, 1]]를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 2, 2이므로 직사각형의 넓이는 2 x 2 = 4입니다.

**JS 프로그래밍**
```javascript
function solution(dots) {
 let xMax =  dots.map((v,i)=>v[0]).reduce((a,c)=>a>c?a : c)
 let xMin = dots.map((v,i)=>v[0]).reduce((a,c)=>a>c?c : a)
 let yMax =  dots.map((v,i)=>v[1]).reduce((a,c)=>a>c?a : c)
 let yMin = dots.map((v,i)=>v[1]).reduce((a,c)=>a>c?c : a)

 return (xMax-xMin)*(yMax-yMin)
}
```
***
**코드 설명**
***
**새로 배운 스킬**






