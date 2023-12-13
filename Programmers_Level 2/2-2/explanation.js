const binaryScale = (n) => {
	let binary = n
	let res =''
	while(true){
		res += (binary%2)
		binary = ~~(binary/2)
		if(binary === 0 ){
			return [...res].reverse().join('')
			break;
		}
	}
}

function solution(s) {
	let len
	let removeCnt = 0
	let total =0
	let binary = s

	while(true){
		if(binary === '1'){
			return [total,removeCnt]
			break;
		}
		total += 1 //증가
		len = binary.replaceAll('0','').length // 0을 제외한 길이값
		removeCnt += binary.replaceAll('1','').length // 0을 제외한 길이값
		binary = binaryScale(len)//2진변환
	}
}