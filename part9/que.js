let like = 0
const likeButton = document.getElementById("btn-like");
const reset = document.getElementById("reset");
likeButton.addEventListener('click', function (){
    const likes = document.getElementById("like");
    like++;
    likes.textContent = `❤️${like}`;
    
})
reset.addEventListener('click', function (){
const likes = document.getElementById("like");
    like = 0;
    likes.textContent = `💔 ${like}`;
})