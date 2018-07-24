var categories = [
    ["img1","img3","img4","img8"],
    ["img2","img6","img7","img9"],
    ["img5"]
];

function hideCategory(categoryNumb){
var categoryId = 'category-' + categoryNumb;
//скрываем кнопку категории
document.getElementById(categoryId).style.display = "none";
//скрываем все картинки из соответствующей категории
for (var i = 0; i < categories[categoryNumb - 1].length; i++) {
    document.getElementById(categories[categoryNumb - 1][i]).style.display = "none";
}
}

function showAll(){
//показываем кнопку категории
for(var i = 0; i < categories.length; i++){
    document.getElementById('category-' + (i + 1)).style.display = "flex";
}
//показываем все картины
for(var i = 0; i < categories.length; i++){
    for(var j = 0; j < categories[i].length; j++){
        document.getElementById(categories[i][j]).style.display = "block";
    }
}
}
