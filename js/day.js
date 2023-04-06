var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(1);");
}
if (m == 7 && dd == 7) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(1);");
}
if (m == 12 && dd == 13) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(1);");
}
if (m == 8 && dd == 14) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(1);");
}
