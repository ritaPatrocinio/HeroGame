export function getCarFees(id) {

    let fee = id === 1 ? 70 : id === 2 ?  100 : id === 3 ?  130 : 0;

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fee);
        }, 200)
    })
}
