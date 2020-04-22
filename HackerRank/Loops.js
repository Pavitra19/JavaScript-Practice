function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonents = '';

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonents += s[i] + '\n';
        }
    }
    console.log(consonents);
}
