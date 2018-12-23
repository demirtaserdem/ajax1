
console.log("elma")
document.getElementById("btn").addEventListener("click",function(){
    //XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

    // xhr.onprogress = function(){
    //     console.log("Process İşleniyor", this.readyState);
    // }

    // console.log(xhr);
    // xhr.onreadystatechange = function(){
    //     // console.log(this.readyState);
    //     // console.log(this.status);
    //     if(this.status == 200 && this.readyState == 4){
    //         //Response Hazır
    //         console.log(this.responseText);
    //     }
    // }


    xhr.open("GET","example.txt",true);
    xhr.send();

});