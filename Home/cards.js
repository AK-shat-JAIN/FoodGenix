function renderCards(){

    for( var i = 0; i < data.length; ++i ) {
        var v = data    [i];
        h5[i].innerHTML = v.title;
        p[i].innerHTML =  v.price;
    }

    
} 