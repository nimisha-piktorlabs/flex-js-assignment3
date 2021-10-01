function grow(ele){
    //  var cols = document.getElementsByClassName("col");
    //  var rows = document.getElementsByClassName("row");
    
//      var cols = document.querySelector(".col");
//      console.log(cols);
// cols.classList.remove("col-1grow");
// var rows = document.querySelector(".row");
// rows.classList.remove("col-1grow");

    // var row = document.getElementById("row1");
    // if(row)
    // row.classList.toggle("rowgrow");
    let all= document.querySelectorAll( ".col-1grow" );
    let a= all.length;
    for(let i=0;i<all.length;i++){
        all[i].classList.remove( "col-1grow" );
    }

    ele.classList.add("col-1grow");
    ele.parentElement.classList.add("col-1grow");
    
    // if(all){
    //     all.classList.remove( "col-1grow" );
    //     all.parentElement.classList.remove("col-1grow");
    // }

    // console.log(ele.parentElement.children);
    // let sib =ele.parentElement.children;

    // for(let s of sib){
    //     s.classList.remove( "col-1grow" );
    //     console.log("sib");
    //     console.log(s)
    // }

    // ele.parentElement.querySelectorAll( ".col-1grow" ).forEach( e =>
    //     ele.classList.remove( "col-1grow" ),
    //     console.log("ele"),
    //     console.log(ele)
    //      );

    

}

