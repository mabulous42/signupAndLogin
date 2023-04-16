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
            // viewLiked();
        } else {
            saveLikedPost.unshift(displayPost[index]);
            localStorage.setItem("liked", JSON.stringify(saveLikedPost));
            // viewLiked();
        }
    } else {
        likeBtn.innerHTML = "Like";

    }

}

function unlike(index) {
    removeItems(viewLikedPost, saveLikedPost, index);
    localStorage.setItem("liked", JSON.stringify(saveLikedPost));
    viewLiked();
}

function viewLiked() {
    viewLikedPost.style.display = 'block';
    createPostSection.style.display = 'none';
    document.getElementById('vp').innerHTML = "View Posts";
    // displayMyContent(saveLikedPost, viewLikedPost);

    viewLikedPost.innerHTML = `<h1>Liked Posts</h1>`;
    saveLikedPost.forEach((ele, index) => {
        viewLikedPost.innerHTML += `
        <div class='post-view-div mb-4'>
            <h3 class='title'>${ele.title}</h3>
            <p class='my-content'>${ele.content}</p>
            <p>Author: ${ele.author}</p>
            <p>Time: ${ele.time}</p>
            <button id='like' class="remove btn btn-primary" type="submit" onclick="unlike(${index})">Unlike</button>
        </div>
        `
    });

}

function createPost() {
    createPostSection.style.display = 'block';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "View Posts"

}

function removeItems(theHTMLTag, arrayElement, index) {
    theHTMLTag.innerHTML = "";
    arrayElement.splice(index, 1)
}

function del(index) {
    displayPost.forEach((ele) => {
        let foundInLikePost = saveLikedPost.find((element) => element.content === ele.content);
        // console.log(foundInLikePost);

        if (foundInLikePost) {
            removeItems(viewPosts, displayPost, index);
            localStorage.setItem("Post", JSON.stringify(displayPost));
            displayMyContent(displayPost, viewPosts);

            removeItems(viewLikedPost, saveLikedPost, index);
            localStorage.setItem("liked", JSON.stringify(saveLikedPost));
            // viewLiked();
        } else {
            removeItems(viewPosts, displayPost, index);
            localStorage.setItem("Post", JSON.stringify(displayPost));
            displayMyContent(displayPost, viewPosts);
        }
    })

    // console.log(foundInLikePost);

}
let v = document.getElementById("vp");
let delButton = document.getElementById('remove');
// if (!loggedInUser) {
//     delButton.disabled = true;
//     // v.disabled = true;
// }

console.log(loggedInUser.fullname);

displayPost.forEach(element => {    
    console.log(element.author);

    if (loggedInUser.fullname === element.author) {
        delButton.disabled = false;
    } else {
        delButton.disabled = true;
    }

    console.log(loggedInUser.fullname !== element.author);
})























// v.disabled = true;

