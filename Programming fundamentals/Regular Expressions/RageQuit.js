function solve(input) {
    const pattern = /(?<string>[^\d]+)(?<count>\d+)/g;
    let output = '';
    while(match = pattern.exec(input[0])) {
        let string = match.groups.string.toUpperCase();
        let count = match.groups.count;
        output += string.repeat(count);
    }
    const set = new Set(output.split(''));
    console.log(`Unique symbols used: ${set.size}`);
    console.log(output);
}

solve(
        [ 'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15' ]
)