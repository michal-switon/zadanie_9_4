function drawTree (heightTree) {
    for (var i = 0; i <= heightTree; i++) {
        var star = "";
        for (var j = 0; j < (heightTree - i); j++) {
            star += " ";
        }
            for (var k = 0; k <= i*2; k++) {
                star += "*";
            }
        
        console.log(star);
    }
}

drawTree(10);