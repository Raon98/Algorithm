function solution(s){
	let result = []
	if([...s][0] === ')') return false;
	result = [...s].reduce((a,c) => {
		c==='(' ? a.push(c) : a.pop()
		return a
	},[])

	return !result[0]
}


/*효율성 테스트에서는 떨어졌지만 다른 풀이법들*/

function solution1(s){
    let result = []
    let saveCnt = 0
    let arr = [...s].map(v=>{
        return v === '(' ? 1 : -1
    })

    result = arr.reduce((a,c) => {
        saveCnt = saveCnt+c
        a.push(saveCnt)
        return a
    },[])

    return result[result.length-1] === 0 && !result.some(v=>v===-1)
}
function solution2(s) {
	let left = 0
	let right = 0

	for (let i = 0; i < [...s].length; i++) {
		if ([...s][i] === '(') { //왼쪽
			left += 1;
		} else { //오른쪽
			right += 1;
			if (left < right) return false
		}
	}
	if (left !== right) return false
	return true
}