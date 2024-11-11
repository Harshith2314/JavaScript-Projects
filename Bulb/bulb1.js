
        let btn = document.querySelector('.btn');
        let body = document.querySelector('body');
        let audio = document.querySelector('#audio');
        btn.onclick = function(){
            let s=document.getElementById("id1").className;
            if(s=="off"){
                  document.getElementById("id1").className="on";
            }
            else{
                document.getElementById("id1").className="off";
            }
            audio.play();
        }