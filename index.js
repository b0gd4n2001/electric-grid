const N1 = 10;
const k1 = 2;
// 1 reprezinta casele cu restrictii iar 0 reprezinta casele fara restrictii
const hr1 = [1, 0, 0, 0, 1, 0, 0, 1, 1, 0];

function gridPoles(N, k, hr) {
    let poles = 0;
    let i = k + 1;
    while (true) {
        if (hr[i] == undefined) {
            break;
        };
        if (hr[i] == 0) {
            poles++;
            i += k + 1;
        } else {
            i--;
        };
    };
    return poles;
}

console.log(gridPoles(N1, k1, hr1));