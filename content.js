window.onclick=(function(){
    console.log("copy content extension");
    var item=document.getElementsByTagName('body').item(0);
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = item.innerText; //save main text in it
    console.log(item.innerText);
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
    
})



    