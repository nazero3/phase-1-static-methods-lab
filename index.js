class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^a-z0-9 ''-]/gi, '');
  }
  static titleize(str) {
    let words = str.split(" ");
    const notAllowed = [ "the", "a", "an", "but", "of", "and", "for", "at", "by",  "from"];
    return words.map((w,index) => {
      //console.log(notAllowed.includes(w.toLowerCase()) || (w === 'a' && index !== 0),w);
      if (!(notAllowed.includes(w.toLowerCase()) &&  index !== 0)) {
        //console.log(w);
        return w[0].toUpperCase() + w.slice(1).split().map((c) => c.toLowerCase())
      }
      else
      return w[0].toLowerCase() + w.slice(1).split().map((c) => c.toLowerCase())

    }
      // a, an, but, of, and, for, at, by, and from


    ).join(" ");
  }

}
console.log(Formatter.titleize('Where The Wild Things Are'));
console.log(Formatter.titleize('a Tale of Two Cities'));
