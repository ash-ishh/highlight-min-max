var table = document.getElementById("rounded-corner");
var end_row = 6;
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
    table.rows[i].cells[16].style.backgroundColor = "#0000FF";
}
