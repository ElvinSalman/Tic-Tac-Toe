let count = 1;
let M=[];
let x="X";
let o="O";

let x_count=0;
let y_count=0;

let xCount=document.getElementById("x-count");
let yCount=document.getElementById("y-count");




onload = function() {
    Arr();
    Tbl();


    document.getElementById("x-name").innerHTML=prompt("X-name");
    document.getElementById("y-name").innerHTML=prompt("Y-name");

            
    
}


function Arr(){
    for(let i=0;i<3;i++){
        M[i]=[];
    }
}




function Tbl(){




    let tbl="";

    for(let i=0;i<3;i++){
        tbl+="<tr>";
        for(let j=0;j<3;j++){
            M[i][j] = M[i][j]==undefined ? "" : M[i][j];
            tbl+=`<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl+="</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML=tbl;

}


function Click(i,j){

    if(M[i][j]==""){
        if(count%2==0){        
          M[i][j] = o;         
    } else{          
        M[i][j] = x;      
    }
    count++;
    Tbl();
    setTimeout(Check,100);
    } 


    
    
    
    
  
    
}


function Check(){



    for(let i=0;i<3;i++){
        if(M[i][0]==M[i][1] && M[i][0]==M[i][2] && M[i][0]!=""){
            alert(M[i][0] + " Win"); 
            if(M[i][0] === "X"){
                ++x_count; 
             } else{
                 ++y_count;
             }
            Restart();
           
        }
    }

    for(let j=0;j<3;j++){
        if(M[0][j]==M[1][j] && M[0][j]==M[2][j] && M[0][j]!=""){
            alert(M[0][j] + " Win");
            if(M[0][j] === "X"){
                ++x_count; 
             } else{
                 ++y_count;
             }
            Restart();
        }
    }


            if(M[0][0]==M[1][1] && M[0][0]==M[2][2] && M[0][0]!=""){
                alert(M[0][0] + " Win")
                if(M[0][0] === "X"){
                    ++x_count; 
                 } else{
                     ++y_count;
                 }
                Restart();
               
            }
        
            if(M[0][2]==M[1][1] && M[0][2]==M[2][0] && M[0][2]!="" ){
                alert(M[0][2] + " Win");
                if(M[0][2] === "X"){
                    ++x_count; 
                 } else{
                     ++y_count;
                 }
                Restart();
            }


            xCount.innerHTML=x_count;
            yCount.innerHTML=y_count;

}


function Restart(){
  
    count=1;
    Arr();
    Tbl();
  
}


