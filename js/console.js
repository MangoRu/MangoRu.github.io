// 控制台自定义输出样式
var now1 = new Date();

function createtime1() {
    var grt = new Date("11/11/2022 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到我の世界!`,
        `    

███╗   ███╗ █████╗ ███╗   ██╗ ██████╗  ██████╗     ██████╗ ██╗   ██╗
████╗ ████║██╔══██╗████╗  ██║██╔════╝ ██╔═══██╗    ██╔══██╗██║   ██║
██╔████╔██║███████║██╔██╗ ██║██║  ███╗██║   ██║    ██████╔╝██║   ██║
██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║██║   ██║    ██╔══██╗██║   ██║
██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝    ██║  ██║╚██████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝     ╚═╝  ╚═╝ ╚═════╝                                           
`,
        "本站已运行",
        dnum,
        "天 ",
        "©2022 By Mango Ru",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#e19448",
            "color: #0368df",
            "color:#05b4c5",
            "color:#e19448",
            "",
            "color:#6a8759",
            ""
        )
    );
}

createtime1();

// 重写console方法
// console.log = function () { };
// console.error = function () { };
// console.warn = function () { };