// problem: why does Ralph only bark once?
// fix it to make Ralph bark twice!

var dog = function( name ) {
  this.name = name;
}

dog.prototype.bark = function() {
  console.log( this.name );
}

// make a new instance of a Dog
var ralph = new dog('Ralph');

// make Ralph bark once immediately
ralph.bark();

// in 1 second we want Ralph to bark again
setTimeout( ralph.bark() , 1000 );
