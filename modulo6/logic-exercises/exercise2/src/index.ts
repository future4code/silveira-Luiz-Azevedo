//coming soon
class Padawan {
  constructor(midchlorians) {

    this.midchlorians = midchlorians;

    this.midchloriansCount = function () {

      console.log("I have " + this.midchlorians + " midchlorians");

    };

  }
} 

class SithLord {
  constructor(title:string) {

    this.title = function () {

      console.log("I'm a Sith Lord");

    };

  }
}

class JediMaster {
  constructor() {

    this.title = function () {

      console.log("I'm a Jedi Master");

    };

  }
}


Padawan.prototype = new SithLord();

Padawan.prototype = new JediMaster();

anakin = new Padawan(27700);



anakin.title();