function cal(mode) {
    var funcs = {
        'plus': function(left, right) { return left+ right},
        'minus': function(left, right) { return left-right}
    }
    return(funcs[mode]);
}

alert(cal('plus')(10,2));
alert(cal('minus')(10,2));
