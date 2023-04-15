let userName = document.getElementById('user-name');
let createPostSection = document.getElementById('publish-post');
let postTitle = document.getElementById('post-title');
let postContent = document.getElementById('post-content');
let viewPosts = document.getElementById('homepage');
let viewLikedPost = document.getElementById('view-liked-post');


createPostSection.style.display = 'none';
viewLikedPost.style.display = 'none';

let loggedInUser = JSON.parse(localStorage.getItem("CU"));
console.log(loggedInUser);

userName.innerHTML = loggedInUser.fullname;

console.log(!loggedInUser);



setInterval(() => {
    if (!loggedInUser) {
        window.location.href = "index.html";
    }
}, 1000);

function logOut() {
    localStorage.removeItem("CU");
    window.location.href = "index.html";
}


let date = new Date();
let displayPost = JSON.parse(localStorage.getItem("Post"));

function publishPost() {
    createPostSection.style.display = 'none';
    myBlog = {
        title: postTitle.value,
        content: postContent.value,
        author: loggedInUser.fullname,
        time: date
    }

    if (displayPost == null) {
        displayPost = [];
        displayPost.unshift(myBlog);
        localStorage.setItem("Post", JSON.stringify(displayPost));
    } else {
        displayPost.unshift(myBlog);
        localStorage.setItem("Post", JSON.stringify(displayPost));
    }
    displayMyContent(displayPost, viewPosts);
}

function displayMyContent(arrayName, theHTMLTag) {
    theHTMLTag.innerHTML = "";
    arrayName.forEach((element, index) => {
        theHTMLTag.innerHTML += `
        <div class='post-view-div mb-4'>
            <h3 class='title'>${element.title}</h3>
            <p class='my-content'>${element.content}</p>
            <p>Author: ${element.author}</p>
            <p>Time: ${element.time}</p>
            <button id='remove' class="remove btn btn-primary" type="submit" onclick="del(${index})">Delete Post</button>
            <button id='like' class="remove btn btn-primary" type="submit" onclick="like(${index})">Like</button>
        </div>
        `
    });
}

displayMyContent(displayPost, viewPosts);

function showAllPosts() {
    createPostSection.style.display = 'none';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "All Posts"
    // displayMyContent(displayPost, viewPosts);
    
}

let saveLikedPost = JSON.parse(localStorage.getItem("liked"));
let likeBtn = document.getElementById('like');

function like(index) {
    console.log(likeBtn.innerHTML);
    if (likeBtn.innerHTML === "Like") {
        likeBtn.innerHTML = "Unlike";
        if (saveLikedPost == null) {
            saveLikedPost = [];
            saveLikedPost.unshift(displayPost[index]);
            localStorage.setItem("liked", JSON.stringify(saveLikedPost));
        } else {
            saveLikedPost.unshift(displayPost[index]);
            localStorage.setItem("liked", JSON.stringify(saveLikedPost));
        }
    } else {
        likeBtn.innerHTML = "Like";
        
    }
    
}

function viewLiked() {
    viewLikedPost.style.display = 'block';
    createPostSection.style.display = 'none';
    document.getElementById('vp').innerHTML = "View Posts";
    displayMyContent(saveLikedPost, viewLikedPost);

}

function createPost() {
    createPostSection.style.display = 'block';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "View Posts"

}

function del(index) {
    viewPosts.innerHTML = "";
    displayPost.splice(index, 1)
    localStorage.setItem("Post", JSON.stringify(displayPost));
    displayMyContent(displayPost, viewPosts);
}



















let delButton = document.getElementsByClassName('remove');


// let v = document.getElementById("v");
// v.disabled = true;

