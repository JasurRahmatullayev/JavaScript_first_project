let count = 0;
const numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let con = 1;
function row_win (){
    for(let c=0; c<9; c=c+3){
        if(numbers[c]===numbers[c+1] && numbers[c]===numbers[c+2] && numbers[c]!=1){
            if(numbers[c]===2){
                document.getElementById("win").textContent = "X yutdi";
            }else {
                document.getElementById("win").textContent = "O yutdi";
            }
            con=0;
        }
    }
}
function col_win (){
    for(let c=0; c<3; c++){
        if(numbers[c]===numbers[c+3] && numbers[c]===numbers[c+6] && numbers[c]!=1){
            if(numbers[c]===2){
                document.getElementById("win").textContent = "X yutdi";
            }else {
                document.getElementById("win").textContent = "O yutdi";
            }
            con=0;
        }
    }
}
function diagonal_win (){
    if(numbers[0]===numbers[4] && numbers[0]===numbers[8] && numbers[0]!=1){
        if(numbers[0]===2){
            document.getElementById("win").textContent = "X yutdi";
        }else {
            document.getElementById("win").textContent = "O yutdi";
        }
        con=0;
    } else if (numbers[2]===numbers[4] && numbers[2]===numbers[6] && numbers[2]!=1){
        if(numbers[2]===2){
            document.getElementById("win").textContent = "X yutdi";
        }else {
            document.getElementById("win").textContent = "O yutdi";
        }
        con=0;
    }
}
function write_x(index){
    const button = document.getElementById(index);
    if (button.childNodes.length === 0 && con==1){
        if (count%2===0){
            button.innerHTML = "<p>x</p>";
            numbers[index-1]=2;
        } else {
            button.innerHTML = "<p>0</p>";
            numbers[index-1]=0;
        }
        row_win();
        col_win();
        diagonal_win();
        count++;
    }  
}
