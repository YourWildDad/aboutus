function TextInput(message, id) {
    var self = this;
    self.message = message || [];
    var l = message.length - 1;
    self.j = 0;
    self.id = id;
    self.ct = function(text) {
        var p = document.createElement('p');
        var span = document.createElement('span');
        var udline = document.createElement('span');
        udline.innerText = '_';
        var con = document.getElementById(self.id);
        con.appendChild(p);
        p.appendChild(span);
        p.appendChild(udline);
        var tl = text.length - 1;
        var i = 0;
        var interval = setInterval(function() {
            if (i === tl) {
                clearInterval(interval);
                p.removeChild(udline);
                self.j < l ? self.ct(message[++self.j]) : 0;
            }
            span.innerText += text[i++];
        }, 75, tl);
    };
}
TextInput.prototype.start = function() {
    document.getElementById(this.id).innerHTML = '';
    this.j = 0;
    this.ct(this.message[0]);
};
TextInput.prototype.getDelay = function() {
    var l = this.message.length;
    var delay = 0;
    for (var i = 0; i < l; ++i) {
        delay += this.message[i].length;
    }
    return delay * 75;
};
(function() {
    var message = [];
    message.push('欢迎来到小升初复读班小队的主页!');
    message.push('欢迎来到小升初复读班小队的主页!');
    message.push('欢迎来到小升初复读班小队的主页!');
    message.push('欢迎来到小升初复读班小队的主页!');
    message.push('欢迎来到小升初复读班小队的主页!');
    var textInput = new TextInput(message, 'text-container');
    textInput.start();
    setTimeout(function() {
    }, textInput.getDelay());
    var ywdmsg = ['写个代码改变世界', '前端小能手', '求大神带飞~'];
    var ywd = new TextInput(ywdmsg, 'ywd');
    var ywdlis = document.getElementById('ywd-listener');
    ywdlis.onmouseover ? ywdlis.onmouseover = function() {
        setTimeout(function() {
            ywd.start();
        }, 1000);
    } : ywdlis.addEventListener('mouseover', function() {
        setTimeout(function() {
            ywd.start();
        }, 1000);
    });
})();