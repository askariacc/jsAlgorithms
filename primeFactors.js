function primeFactors(n){
    let nn = n
    let factors = []

    for (let factor = 2; factor <= Math.sqrt(nn); factor += 1){
        while(nn % factor === 0){
            nn /= factor
            factors.push(factor)
        }
    }

    if(nn !== 1){
        factors.push(nn)
    }

    return factors
}







