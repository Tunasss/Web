function move(elm) {
    elm.style.possiton = 'absolute'
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%'
    elm.style.left = Math.floor(Math.random()* 90 + 5 ) + '%'
}
var btn = document.querySelector('#no');
btn.addEventListener('mouseover', function(e) { 
    move(e.target)
})

var btn = document.querySelector('#yes');
btn.addEventListener('click', function() {
    alert("Dù học với thầy cô vài tháng, nhưng chúng em đã học rất vui, dù có ngày lớp quậy, lớp sôi nổi, lớp trầm, nhưng dù chỉ học qua màn ảnh nhỏ, bọn em vẫn rất yêu quý thầy cô, chúc thầy cô luôn mạnh khỏe, để có thể dìu dắt chúng em hết 3 năm cấp 3 này ạ, from 10 Tin with love <3")
})
