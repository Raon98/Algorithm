'use strict';

/* 커피가격 맞추기 문제
공부하면서 배운거
1. reduce로 객체만들기
    const drink = {'아메리카노' : 4100 , '카페라떼' : 4600, '카라멜마끼아또' : 5100}
    => const drink = input.reduce((acc,cur,i) => {
        return {...acc, [cur]: [4100,4200,5100][i]};
    }, {});
    으로 만들어서 주어지는 값이
*/
function solution() {
    let input = ['아메리카노','카페라떼','카라멜마끼아또']
    //  const drink = {'아메리카노' : 4100 , '카페라떼' : 4600, '카라멜마끼아또' : 5100}
    const drink = input.reduce((acc,cur,i) => {
        return {...acc, [cur]: [4100,4200,5100][i]};
    }, {});

    return input.reduce((acc,cur) => drink[cur]+acc,0)
}


// 앞뒤로 같은 문자일경우 찾기
function solution() {
    var str = 'abcddaba'
    var result = ''
        for(let i=0; i< str.length/2; i++){
          result += [...str][i] === [...str].reverse()[i] ? "SAME" : "DIFF"
          if (i+1< str.length/2) result += '\n'
         }
    return result
}



//배열을 이용한방식
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
//이중 for문을 이용한 str 방식
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

//2,3,5,7을 포함한 배수찾기
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
