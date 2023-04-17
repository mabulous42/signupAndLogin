//getting some elements by id from the html
let userName = document.getElementById('user-name');
let createPostSection = document.getElementById('publish-post');
let postTitle = document.getElementById('post-title');
let postContent = document.getElementById('post-content');
let viewPosts = document.getElementById('homepage');
let viewLikedPost = document.getElementById('view-liked-post');

//displaying the create Post section off until it is needed
createPostSection.style.display = 'none';
//displaying the liked post section off until it is needed
viewLikedPost.style.display = 'none';

//getting the Current user details and saving it in as array of loggedInUser
let loggedInUser = JSON.parse(localStorage.getItem("CU"));
console.log(loggedInUser);

userName.innerHTML = loggedInUser.fullname;

// console.log(!loggedInUser);

//checking if there is no user currently on the site
if (!loggedInUser) {
    window.location.href = "index.html";
}

//log out function
function logOut() {
    localStorage.removeItem("CU");
    window.location.href = "index.html";
}

//declaring the Date function
let date = new Date();

//getting all the posts from the users and saving it in the local storage displayPost
let displayPost = JSON.parse(localStorage.getItem("Post"));

//saving all the posts inside the localstorage and displaying them
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

//this is a global function that handles display of post by being called by other fuctions that might need it
function displayMyContent(arrayName, theHTMLTag) {
    theHTMLTag.innerHTML = "";
    arrayName.forEach((element, index) => {
        theHTMLTag.innerHTML += `
        <div class='post-view-div mb-4'>
            <h3 class='title'>${element.title}</h3>
            <p class='my-content'>${element.content}</p>
            <p>Author: ${element.author}</p>
            <p>Time: ${element.time}</p>
            <div class='d-flex'>
                <button id='remove' class="remove btn btn-primary me-2" type="submit" onclick="del(${index})">Delete Post</button>            
                <div>
                    <input type="button" id='like' class="remove btn btn-primary" onclick="like(${index})" value="Like">
                    <input type="button" id='unlike' class="remove btn btn-primary" onclick="unlike(${index})" value="Unlike">
                </div>
            </div>
        </div>
        `
    });
}

//calling the global function to display all the contents in the displayPost array
displayMyContent(displayPost, viewPosts);

//this function when clicked goes back to all display post section
function showAllPosts() {
    createPostSection.style.display = 'none';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "All Posts"
    // displayMyContent(displayPost, viewPosts);

}

//getting all liked post and saving inside the saveLikedPost array
let saveLikedPost = JSON.parse(localStorage.getItem("liked"));

//getting element by id of the like and unlike buttons
let likeBtn = document.getElementById('like');
let unlikeBtn = document.getElementById('unlike');

//displaying none the unlike button until when it is needed
unlikeBtn.style.display = "none";

//the like function when clicked unshift the post to the top of the array
function like(index) {
    console.log(likeBtn.value);
    if (likeBtn.value === "Like") {
        // likeBtn.value = "Unlike";
        likeBtn.style.display = "none";
        unlikeBtn.style.display = "block";
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
        saveLikedPost.splice(index, 1);
        localStorage.setItem("liked", JSON.stringify(saveLikedPost));
    }

}

function unlike(index) {
    // if (likeBtn.value === "Unlike") {
    //     likeBtn.value = "Like"
    // } else {
    //     likeBtn.value = "Unlike"
    // }
    removeItems(viewLikedPost, saveLikedPost, index);
    localStorage.setItem("liked", JSON.stringify(saveLikedPost));
    viewLiked();
}

//displaying all the liked posts
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

//this function allow users to creates a new post
function createPost() {
    createPostSection.style.display = 'block';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "View Posts"

}

//a global function that deletes post from the array through it's index
function removeItems(theHTMLTag, arrayElement, index) {
    theHTMLTag.innerHTML = "";
    arrayElement.splice(index, 1)
}

//this function deletes from all posts by calling the removeItems which is the global function
function del(index) {
    displayPost.forEach((ele) => {
        let foundInLikePost = saveLikedPost.find((element) => element.content === ele.content);
        // console.log(foundInLikePost);

        if (foundInLikePost) {
            removeItems(viewPosts, displayPost, index);
            localStorage.setItem("Post", JSON.stringify(displayPost));
            displayMyContent(displayPost, viewPosts);

            //calling the global delete function
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

// displayPost.forEach(element => {    
//     console.log(element.author);

//     if (loggedInUser.fullname === element.author) {
//         delButton.disabled = false;
//     } else {
//         delButton.disabled = true;
//     }

//     console.log(loggedInUser.fullname !== element.author);
// })

