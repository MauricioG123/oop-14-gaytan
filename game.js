//my attempt

function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (xP) {
    this.points = this.points + xP;
        if (this.points >= 10) {
            this.lvl++;
            var x = this.points-10;
            this.points = 0 + x;
        }
}

Player.prototype.describe = function () {
    return (`Player: ${this.name}, is level: ${this.lvl}, and points are: ${this.points}`)
}