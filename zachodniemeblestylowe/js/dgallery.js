console.log("dzialaczynie");
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM');


    var all = document.querySelectorAll(".dgallerycontent figure");
    console.log(all);

    var body = document.querySelector("body");
    console.log(body);




    //
    //
    for(var i=0; i<all.length; i++) {
        all[i].addEventListener('click', function(){
            var src = this.querySelector("img").getAttribute("src");
            var	newDiv	=	document.createElement("div");
            // newDiv.innerHTML='<button class="prevPicture">Poprzednie</button>'+'<button class="close">Zamkni</button>'+'<button class="nextPicture">Następnye</button>'+'<img src="./'+src+'">';
            newDiv.innerHTML='<img src="./'+src+'">';
            newDiv.classList.add("fullScreen");
            console.log(src[2]);
            body.appendChild(newDiv);

            // var next = document.querySelector(".nextPicture")
            // console.log(next+"to jest nexttttttttttttttttttttttttttt");
            //
            // var prev = document.querySelector(".prevPicture")
            // console.log(prev);

            var button = document.querySelector(".close");
            console.log(button);

            newDiv.addEventListener('click', function(){
                var toDelete = document.querySelector(".fullScreen");
                console.log(toDelete);
                toDelete.parentElement.removeChild(toDelete);
            })

            // var counter = 0;
            //
            // next.addEventListener('click', function(){
            //     console.log("click next")
            //     src[i]
            //
            //     counter++
            //     // if (counter >= all.length){
            //     //     counter = 0
            //     // }
            //     newDiv.innerHTML='<button class="prevPicture">Poprzednie</button>'+'<button class="close">Zamkni</button>'+'<button class="nextPicture">Następnye</button>'+'' +
            //         '<img src="'+src+'"/>';
            //     // all[counter].classList.add("visible");
            // })


            // newDiv.addEventListener('click', function(){
            //     var toDelete = document.querySelector(".fullScreen");
            //     console.log(toDelete);
            //     toDelete.parentElement.removeChild(toDelete);
            // })
            // klikajca w diva usowa nam dodany element
        })
    }

})