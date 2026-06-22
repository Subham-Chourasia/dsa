function maxNumberOfBalloons(text) {
    let b = 0, a = 0, l = 0, o = 0, n = 0;

    for (const ch of text) {
        if (ch === 'b') b++;
        else if (ch === 'a') a++;
        else if (ch === 'l') l++;
        else if (ch === 'o') o++;
        else if (ch === 'n') n++;
    }

    l = Math.floor(l / 2);
    o = Math.floor(o / 2);

    let smallest = b;
    if (a < smallest) smallest = a;
    if (l < smallest) smallest = l;
    if (o < smallest) smallest = o;
    if (n < smallest) smallest = n;

    return smallest;
}


//another way
function maxNumberOfBalloons(text) {
    let b = 0, a = 0, l = 0, o = 0, n = 0;

    for (const ch of text) {
        if (ch === 'b') b++;
        else if (ch === 'a') a++;
        else if (ch === 'l') l++;
        else if (ch === 'o') o++;
        else if (ch === 'n') n++;
    }

    return Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n);
}