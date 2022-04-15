
var ct1="<iframe src='blog.html' width='100%' height='100%'>",
    ct2="<iframe src='info.html' width='100%' height='100%'>",
    ct3="<iframe src='collect.html' width='100%' height='100%'>",
    ct4="<iframe src='comments.html' width='100%' height='100%'>";

var app = new Vue({
    el: '#div1',
    data() {
        return {
            Istrue: 1,
            hrefs: {
                blog: {src:'javascript:show(ct1,"div2")',txt:'MyBlog'},
                info: {src:'javascript:show(ct2,"div2")',txt:'个人资料'},
                collect: {src:'javascript:show(ct3,"div2")',txt:'个人收藏'},
                comment: {src:'javascript:show(ct4,"div2")',txt:'留言评论'}
            }
        }
    }
})

var app3 = new Vue({
    el: '#img',
    data() {
        return {
            Istrue: 0,
            IsUp: 0
        }
    },
    methods: {
        change(Istrue,IsUp) {
            var img=document.getElementById("img");
            var cloud=document.getElementById("cloud");
            var width=window.screen.width;
            var height=window.screen.height;
            var ul=document.getElementById("ul");
            var div2=document.getElementById("div2");

            if (Istrue === 0) {
                if (width<height) {
                    img.style.animation='change1 1.5s';
                    this.Istrue = 1;
                    ul.style.top='55px';
                    ul.style.backgroundColor='rgb(0, 0, 0, 0.3)'
                }
                else {
                    img.style.animation='change 1.5s';
                    this.Istrue = 0;
                    img.style.transition='0.5s';
                    ul.style.display='block';
                }
            
                img.style.animationFillMode='forwards';
                img.style.animationTimingFunction='liner';
            
                cloud.style.animation='cloud_change 5s';
                cloud.style.animationFillMode='forwards';
                cloud.style.animationTimingFunction='liner';
            }
            else {
                console.log("change");
                $(ul).stop().slideToggle(400,"linear");
                if (IsUp==0) {
                    div2.style.animation='paddingTop 0.6s forwards';
                    div2.style.animationTimingFunction='liner';
                    this.IsUp = 1;
                }
                else {  
                    div2.style.animation='paddingTop1 0.6s backwards';
                    div2.style.animationTimingFunction='liner';
                    this.IsUp = 0;
                }
            }
        },
        change1(Istrue) {
            var div2=document.getElementById("div2");
            if (Istrue != 0) {
                console.log("change1");
                $(ul).stop().slideUp(400,"linear");
                div2.style.animation='paddingTop1 0.6s backwards';
                div2.style.animationTimingFunction='liner';
                this.IsUp = 0;
            }
        }
    },
})

function show(content,show) {
    document.getElementById(show).innerHTML=content;
}
