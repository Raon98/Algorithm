function solution(n) {
	let answer = 0;
	let total = 0;
	for(let i=1; i<=n/2; i++){
		total = 0
		for(let j=i; total<=n; j++){
			total += j
			if(total === n){
				answer++
			}
		}
	}
	return answer+1;
}