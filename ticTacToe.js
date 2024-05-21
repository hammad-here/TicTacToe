var turn="X";
        class opt{
            constructor(state){
               this.state=state;
            }
        }
        let Iswin=false
        let num = 0;
        let one = new opt
        let two = new opt
        let three = new opt
        let four = new opt
        let five = new opt
        let six = new opt
        let seven = new opt
        let eight = new opt
        let nine = new opt
        function game(){
            num+=1;
            turn=="X"?turn="O":turn="X";
            document.getElementById("turn").innerHTML=`${turn} turn `;
            turn=="X"?turn="O":turn="X";
            function checkingWin(One,Two,Three){
               One.state==turn?(Two.state==turn?(Three.state==turn?Iswin=true:console.log()):console.log()):console.log();
                return Iswin;
            }
            if(checkingWin(one,two,three)||checkingWin(one,five,nine)||checkingWin(one,four,seven)||
               checkingWin(two,five,eight)||checkingWin(three,six,nine,)||checkingWin(three,five,seven)||
               checkingWin(four,five,six)||checkingWin(seven,eight,nine)){
            document.getElementById("turn").innerHTML=`${turn} is the winner🏆`;
               }
               turn=="X"?turn="O":turn="X";
               num==9?document.getElementById("turn").innerHTML=`game draw `:console;
              
        
        }
        
       