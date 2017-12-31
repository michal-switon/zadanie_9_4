function drawTree (heightTree) {
    for (var i = 1; i <= heightTree; i++) {
        var star = " ";
        for (var j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}

drawTree(10);