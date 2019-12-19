var valueList = [];

function clearInput(e) {
    if (e.keyCode === 13 || e === 'button') {
        if(document.getElementById('typeInput').value){
            valueList.push(document.getElementById('typeInput').value);
        }
        document.getElementById('typeInput').value = '';
    }

    document.getElementById('typedValues').textContent = valueList[0] != undefined ? valueList : ' - ';
    console.log("valueList", valueList, valueList[0]);

};

function createChart() {
    console.log("create chart");
    const canvas = document.getElementById("myChart");
    let ctx = canvas.getContext("2d");
    let X = 0;
    let Y = 0;
    let width = 40;
    let height = 50;
    ctx.fillStyle = "red";

    valueList.forEach(element => {
        ctx.fillRect(X, canvas.height - element, width, element);
        X +=  width + 20;
    });
}

function resetChart() {
    console.log("reset chart") ;
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function createTable() {
    const node= document.getElementById('table');
    node.innerHTML = '';

    var tableId = document.getElementById("table"),
    tbl  = document.createElement('table');
    for(var i = 0; i < 2; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < valueList.length; j++){
                var td = tr.insertCell();

                if(i == 0){
                    td.appendChild(document.createTextNode('Value ' + (j+1)));
                }
                else{
                   td.appendChild(document.createTextNode(valueList[j]));
                }
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            
        }
    }
    tableId.appendChild(tbl);
}



