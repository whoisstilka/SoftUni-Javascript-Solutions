function lastKNumbers(n, k) {
    let seq = [1];

    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current;
        let prevK = seq.slice(start, end);
        let sum = 0

        for (let i = 0; i < prevK.length; i++) {
            sum += prevK[i];
        }
        seq[current] = sum;
    }

    console.log(`[${seq.join(', ')}]`);
}

lastKNumbers(6, 3);
lastKNumbers(8, 2);