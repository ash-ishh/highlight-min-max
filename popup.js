var table = document.getElementById("rounded-corner");
var end_row = 6;

var min_avg = Number(table.rows[1].cells[16].innerText);
var max_avg = min_avg;
var minavg_dom = table.rows[1].cells[16];
var maxavg_dom = minavg_dom;

for(var i=1;i<table.rows.length;i++){

    var min = Number(table.rows[i].cells[7].innerText);
    var max = min ;
    var min_dom = table.rows[i].cells[7];
    var max_dom = min_dom;


    for(var j=0;j<table.rows[i].cells.length;j++){
        if(j > end_row){
            var current = Number(table.rows[i].cells[j].innerText);
            if(current > max){
                max = current;
                max_dom = table.rows[i].cells[j];
            }
            if(current < min){
                min = current;
                min_dom = table.rows[i].cells[j];
            }
        }
    }

    max_dom.style.backgroundColor = "#FFFF00";
    min_dom.style.backgroundColor = "#00FF00";

    current_avg = Number(table.rows[i].cells[16].innerText);
    console.log(current_avg);
    if(current_avg < min_avg){
        min_avg = current_avg;
        minavg_dom = table.rows[i].cells[16];
    }

    if(current_avg > max_avg){
        max_avg = current_avg;
        maxavg_dom = table.rows[i].cells[16];
    }
}

minavg_dom.style.backgroundColor = "#80ffe5";
maxavg_dom.style.backgroundColor = "#00cca3";

