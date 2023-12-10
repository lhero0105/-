const $item = document.querySelectorAll(".main .slide .slide-item");
const $indicator = document.querySelectorAll(".main .slide-list ul li");
let $number = 0;
let $swiper = function(){
    $number ++
    if($number == 4){
        $number = 0;
    }
    $indicator.forEach((e,i)=>{
        e.classList.remove("on");
        e.classList.remove("active");
        $item.forEach((el,index)=>{
            el.style.visibility = "hidden";
            el.style.opacity = "0";
        })
        $item[$number].style.visibility = "visible";
        $item[$number].style.opacity = "1";
    })
    $indicator[$number].classList.add("on");
    $indicator[$number].classList.add("active");
}

$item[0].classList.add("on");
$indicator[0].classList.add("on");
$indicator[0].classList.add("active");

let $interval = setInterval($swiper, 5000);



$indicator.forEach((e,i)=>{
    e.addEventListener("mouseenter", ()=>{
        clearInterval($interval);
        $indicator.forEach((el, index)=>{
            el.classList.remove("active");
        });
        $indicator.forEach((el)=>{
            el.classList.remove("on");
        });
        e.classList.add("on");
    });
    e.addEventListener("click", ()=>{
        clearInterval($interval);
        $number = i;
        $indicator[$number].classList.add("active");
        $item.forEach((e,i)=>{
            e.style.visibility = "hidden";
            e.style.opacity = "0";
        });
        $item[i].style.visibility = "visible";
        $item[i].style.opacity = "1";
    });
    e.addEventListener("mouseleave",()=>{
        e.classList.remove("on");
        $indicator[$number].classList.add("active");
        clearInterval($interval);
        $interval = setInterval($swiper, 5000);
    });
});