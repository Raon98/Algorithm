'use strict';

function solution() {
    let i = '(a+b[a])+[{(b*e)/(a+q)}]'
    let ans =[...i.replace(/[a-z\+\/\-\*]/g,'')].sort().reduce((a,c,i)=> {if (c in a) {a[c]++;}else {a[c] = 1;}return a;}, {})
    return ans['(']===ans[')'] && ans['{']===ans['}'] &&ans['[']===ans[']'] ? "정상" : "비정상"
}

function solution() {
    let a = 'O O X O O'
    let b = 2

    let left = a.split(' ').slice(0,b).filter(v=> v==='O').length
    let right = a.split(' ').slice(b-1,a.split(' ').length).filter(v=> v==='O').length
    return left === right ? '동일' : left > right ? '왼쪽' : '오른쪽'
}

function solution() {
    let a = '2,4'
    let b = '4,8'
    let [a1,a2] = a.split(',')
    let [b1,b2] = b.split(',')
    let arr1 = Array(+a2+1).fill(Math.abs(a2/2-a1)).map((v,i)=>v+i)
    let arr2 = Array(+b2+1).fill(Math.abs(b2/2-b1)).map((v,i)=>v+i)
    let dupli = arr1.filter(v=> arr2.includes(v)).length-1

    return dupli > 0 ? dupli : 0
}

function solution() {
    const signal1 = {'a':'n','b ':'d','c':'a','d':'b','e':'e','f':'l','g':'j','h':'o','i':'z','j':'u','k':'y','l':'v','m':'w','n':'q','o':'x','p':'r','q':'p','r':'f','s':'g','t':'t','u':'m','v':'h','w':'i','x':'c','y':'k','z':'s'}
    const signal2 = {'a':'z','b ':'y','c':'x','d':'w','e':'v','f':'u','g':'t','h':'s','i':'r','j':'q','k':'p','l':'o','m':'n','n':'m','o':'l','p':'k','q':'j','r':'i','s':'h','t':'g','u':'f','v':'e','w':'d','x':'c','y':'b','z':'a'}

    let code = '01011 eowxvqp'
    let [binary,cipher] = code.split(' ')

    return [...binary].map((v,i)=> v==='0' ? signal1[cipher[i]]:signal2[cipher[i]]).join('')
}
/*
공부하면서 배운거
1. reduce로 객체만들기
    const food = input.reduce((acc,cur,i) => {
        return {...acc, [cur]: [1000,2000,3000][i]};
    }, {});
2. reduce로 배열속 객체만들기
    function solution(numlist, n) {
    let ans = numlist.reduce((a, c,i) => {return[...a,  {[c]:i} ];
    }, []);
    return ans
}
3. reduce로 2차원 배열만들기
    function solution(numlist, n) {
    let ans = numlist.reduce((a,c,i) => { a.push([i])
            return a;
          }, [])
    return ans
    }
*/
function solution() {
    let input = ['솜사탕','물떡','떡볶이']
    const food = input.reduce((acc,cur,i) => {
        return {...acc, [cur]: [1000,2000,3000][i]};
    }, {});

    return input.reduce((acc,cur) => drink[cur]+acc,0)
}

function solution() {
    var str = 'abcddaba'
    var result = ''
        for(let i=0; i< str.length/2; i++){
          result += [...str][i] === [...str].reverse()[i] ? "SAME" : "DIFF"
          if (i+1< str.length/2) result += '\n'
         }
    return result
}

function solution() {
    let num = 8
    let star = "*"
    let arr = []

    for(let i = 1; i<= num; i++){
        if(i >5){
            arr.push(star.repeat(5))
        }else{
            arr.push(star.repeat(i))
        }
    }
    return arr.join('\n')
}

function solution() {
    let num = 8
    let star = "*"
    let str = ''
    let cnt =0 // i 값으로 컨트롤하기위해서 cnt 생성
    for(let i = 0; i< num; i++){
        if(cnt > 4) {cnt = 4} //cnt로 5이상일경우 cnt값 5고정 0부터시작이니 4가 5랑 같음
        for(let j=0; j<= cnt; j++){
            str += "*"
        }
        cnt++   // cnt값증가
        if(i+1<num) str += "\n"    //혹시모를 마지막 \n 제거
    }
    return str
}

function solution(){
    let input = 114
    let arr = []
    for(let i=2; i<input; i++ ){
        if(input%i ===0) {
            arr.push(i)
        }
    }
    return arr.filter(v => [2,3,5,7].includes(v)).map(v=>v+"배수입니다.").join('\n')
}

function solution(){
    let input = 10
    let arr = []
    for(let i=2; i<input; i++){
        if(input%i ===0) {
            if(i ===2 || i ===3 || i === 5 || i === 7){
                arr.push(i+"의 배수입니다.")
            }
        }
    }
    return arr.join('\n')
}

// 0,1,4 제외 숫자 배열출력
function solution() {
    let input = 'asd223a4b57'
    const fav = [2,3,5,6,7,8,9]
    let arr = [...input].filter(v => fav.includes(v))
    return arr.length > 5 ? arr.slice(0,5) : arr
}



function solution() {
    let a = 2
    let b = 100
    let star = "*"
    let arr = []
    if(a > b || a === b || a >= 15) {
        return "오류"
    }else{
        if(b >=15){
            b = 15
        }
        for(let i = a; i<=b; i++){
            arr.push(star.repeat(i))
        }
    }
    return arr.join("\n");
}

function solution() {
    let a = 2
    let b = 100
    let star = "*"
    let arr = []
    if(a > b || a === b || a >= 15) {
        return "오류"
    }else{
        if(b >=15){
            b = 15
        }
        for(let i = a; i<=b; i++){
            arr.push(star.repeat(i))
        }
    }
    return arr.join("\n");
}
