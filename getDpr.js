
//https://www.zhihu.com/question/35710806/answer/64110816

window.onload = function () {
    var nameAttr = document.createAttribute('name');
    nameAttr.value = 'viewport';
    var contentAttr = document.createAttribute('content');
    var dpr = window.devicePixelRatio || 1;
    contentAttr.value = 'width=device-width,initial-scale=' + (1 / dpr) + ',target-densitydpi=device-dpi,user-scalable=no';
    var element = document.createElement('meta');
    element.attributes.setNamedItem(nameAttr);
    element.attributes.setNamedItem(contentAttr);
    document.head.appendChild(element);
    document.getElementsByTagName('html')[0].style.fontSize = (16 * dpr) + 'px';
};