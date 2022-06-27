function reverseString(s) {
    try {
            s = s.split('');
            s = s.reverse();
            s = s.join('');
    } 
    catch(e) {
        console.log(e.message);
    }
    console.log(s);
}