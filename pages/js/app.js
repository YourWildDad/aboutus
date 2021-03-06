function TextInput(message, ele) {
    var self = this;
    self.message = message || [];
    var l = self.message.length - 1;
    self.j = 0;
    self.ele = ele;
    self.ct = function(text) {
        var p = document.createElement('p');
        var span = document.createElement('span');
        var udline = document.createElement('span');
        udline.innerText = '_';
        var con = self.ele;
        con.appendChild(p);
        p.appendChild(span);
        p.appendChild(udline);
        var tl = text ? text.length - 1 : 0;
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
    this.ele.innerHTML = '';
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
    var message = {
        welcome: ['欢迎来到小升初复读班小队的主页!', '团队创建于2016年3月9日，由一位专业攻城狮和四位业余前端汪组成。'],
        ywd: ['写个代码改变世界', '前端小能手', '求大神带飞~'],
        yaomsg: ['代码是体育老师教的', '啥也不会小能手', '求同学们不嫌弃'],
        stonemsg: ['一直想当个学习委员', '今天终于实现了'],
        sevenmsg: ['从小就最喜欢数学', '从今天开始我就是数学课代表啦', '同学们不要忘记交作业哦']
    };
    var textInputers = {};
    //message.push('欢迎来到小升初复读班小队的主页!');
    //message.push('团队创建于2016年3月9日，由一位专业攻城狮和四位业余前端汪组成。');
    //var textInput = new TextInput(message, 'text-container');
    //textInput.start();
    //setTimeout(function() {
    //}, textInput.getDelay());
    //var ywd = ['写个代码改变世界', '前端小能手', '求大神带飞~'];
    //var ywd = new TextInput(ywdmsg, 'ywd');
    //var ywdlis = document.getElementById('ywd-listener');
    //ywdlis.onmouseover ? ywdlis.onmouseover = function() {
    //    setTimeout(function() {
    //        ywd.start();
    //    }, 1000);
    //} : ywdlis.addEventListener('mouseover', function() {
    //    setTimeout(function() {
    //        ywd.start();
    //    }, 1000);
    //});
    //var yaomsg = ['代码是体育老师教的', '啥也不会小能手', '求同学们不嫌弃'];
    //var yao = new TextInput(yaomsg, 'yao');
    //var yaolis = document.getElementById('yao-listener');
    //yaolis.onmouseover ? yaolis.onmouseover = function() {
    //    setTimeout(function() {
    //        yao.start();
    //    }, 1000);
    //} : yaolis.addEventListener('mouseover', function() {
    //    setTimeout(function() {
    //        yao.start();
    //    }, 1000);
    //});
    //var stonemsg = ['一直想当个学习委员', '今天终于实现了'];
    //var stone = new TextInput(stonemsg, 'stone');
    //var stonelis = document.getElementById('stone-listener');
    //stonelis.onmouseover ? stonelis.onmouseover = function() {
    //    setTimeout(function() {
    //        stone.start();
    //    }, 1000);
    //} : stonelis.addEventListener('mouseover', function() {
    //    setTimeout(function() {
    //        stone.start();
    //    }, 1000);
    //});
    //var sevenmsg = ['从小就最喜欢数学', '从今天开始我就是数学课代表啦', '同学们不要忘记交作业哦'];
    //var seven = new TextInput(sevenmsg, 'seven');
    var contents = document.getElementsByClassName('content');
    for (var i = contents.length - 1; i >= 0; i--) {
        var msg = contents[i].getAttribute('data-msg');
        textInputers[msg] = new TextInput(message[msg], contents[i]);
    }
    var hovers = document.getElementsByClassName('li-hover');
    for (var i = hovers.length - 1; i >= 0; i--) {
        hovers[i].onmouseover ? hovers[i].onmouseover = function() {
            var msgId = this.getElementsByClassName('content')[0].getAttribute('data-msg');
            setTimeout(function() {
                textInputers[msgId].start();
            }, 1000);
        } : hovers[i].addEventListener('mouseover', function() {
            var msgId = this.getElementsByClassName('content')[0].getAttribute('data-msg');
            setTimeout(function() {
                textInputers[msgId].start();
            }, 1000);
        });
    }
    textInputers['welcome'].start();
})();