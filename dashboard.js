let userName = document.getElementById('user-name');
let createPostSection = document.getElementById('publish-post');
let postTitle = document.getElementById('post-title');
let postContent = document.getElementById('post-content');
let viewPosts = document.getElementById('homepage');


createPostSection.style.display = 'none';

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
        displayPost.push(myBlog);
        localStorage.setItem("Post", JSON.stringify(displayPost));
    } else {
        displayPost.push(myBlog);
        localStorage.setItem("Post", JSON.stringify(displayPost));
    }

}

function showAllPosts() {
    createPostSection.style.display = 'none';
    displayPost.forEach((element, index) => {
        viewPosts.innerHTML += `
        <div class='post-view-div mb-4'>
            <h3 class='title'>${element.title}</h3>
            <p class='my-content'>${element.content}</p>
            <p>Author: ${element.author}</p>
            <p>Time: ${element.time}</p>
            <button id='remove' class="btn btn-primary" type="submit" onclick="del(${index})">Delete Post</button>
        </div>
        `
    });

}

function createPost() {
    createPostSection.style.display = 'block';

}

function del(index) {
    viewPosts.innerHTML = "";
    displayPost.splice(index, 1)
    localStorage.setItem("Post", JSON.stringify(displayPost));
    showAllPosts();
}

let delButton = document.getElementById('remove');
if (!loggedInUser) {
    
}

