window.addEventListener("load", function () {
    let header_right = document.querySelector(".header-right");

    let qrcode_app = document.querySelector(".qrcode-app");

    header_right.addEventListener("mouseenter", function () {
        qrcode_app.style.display = "block";
    });

    header_right.addEventListener("mouseleave", function () {
        qrcode_app.style.display = "none";
    });

    let middle_nav_ul = document.querySelector(".middle-nav ul");

    let middle_nav_lis = document.querySelectorAll(".middle-nav ul li");

    let middle_brands = document.querySelectorAll(".middle-brand");

    let middle_brands_imgs = document.querySelectorAll(".middle-brand img");

    let index = 0;
    for (let i = 0; i < middle_nav_lis.length; i++) {
        middle_nav_lis[i].setAttribute("index", index);
        index++;
    }

    for (let i = 0; i < middle_brands.length; i++) {
        middle_brands[i].addEventListener("mouseover", function (e) {
            if (e.target && e.target.nodeName == "IMG") {
                e.target.style.opacity = 1;
            }
        });

        middle_brands[i].addEventListener("mouseout", function (e) {
            if (e.target && e.target.nodeName == "IMG") {
                e.target.style.opacity = 0.7;
            }
        });
    }

    // 只显示第一个middle_brands
    middle_brands[0].style.display = "flex";

    // 选项卡li绑定点击事件
    // for (let i = 0; i < middle_nav_lis.length; i++) {
    //     middle_nav_lis[i].addEventListener("click", function () {
    //         // 改变其它li的颜色和背景
    //         for (let i = 0; i < middle_nav_lis.length; i++) {
    //             middle_nav_lis[i].className = "";
    //         }
    //         this.className = "selected";

    //         for (let i = 0; i < middle_brands.length; i++) {
    //             middle_brands[i].style.display = "none";
    //         }
    //         middle_brands[i].style.display = "flex";
    //     });
    // };

    middle_nav_ul.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI") {
            for (let i = 0; i < middle_nav_lis.length; i++) {
                middle_nav_lis[i].className = "";
            }
            e.target.className = "selected";

            for (let i = 0; i < middle_brands.length; i++) {
                middle_brands[i].style.display = "none";
            }
            middle_brands[e.target.getAttribute("index")].style.display =
                "flex";
        }
    });
});
