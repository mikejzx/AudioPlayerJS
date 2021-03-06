
// Allows changing the pseudo style of an element
(function() {
    a = {
        _b: 0,
        c: function() {
            this._b++;
            return this.b;
        }
    };
    HTMLElement.prototype.pseudoStyle = function(d, e, f) {
        var g = "pseudoStyles";
        var h = document.head || document.getElementsByTagName('head')[0];
        var i = document.getElementById(g) || document.createElement('style');
        i.id = g;
        var j = "pseudoStyle" + a.c();
        if (!this.classList.contains(j)) {
            this.className += " " + j;
        }
        i.innerHTML += " ." + j + ":" + d + "{" + e + ":" + f + "}";
        h.appendChild(i);
        return this;
    };
})();