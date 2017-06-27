class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verb = verb || 'says';
  }

  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
  }
}

class Shouter extends Speaker {
  consructor(name) {
    super.constructor(name);
  }

  get verb() {
  	return this.verb = 'shouts';
  }

  speak(text) {
    super.speak(text.toUpperCase());
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")
