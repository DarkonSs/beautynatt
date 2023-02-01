function leftScroll(ele) {
    const left = ele.parentNode.children[1]
    left.scrollBy(-270, 0);
}

function rightScroll(ele) {
    const right = ele.parentNode.children[1]
    right.scrollBy(270, 0);
}