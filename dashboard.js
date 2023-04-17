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


// console.log(!loggedInUser);

//checking if there is no user currently on the site
if (!loggedInUser) {
    alert("You have to sign in before you can access this page, you will be redirected back to login page");
    window.location.href = "index.html";
} else {
    userName.innerHTML = loggedInUser.fullname;
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

if (displayPost == null) {
    displayPost = [];
}
console.log(displayPost.length);

//saving all the posts inside the localstorage and displaying them
function publishPost() {
    createPostSection.style.display = 'none';
    myBlog = {
        id: displayPost.length + 1,
        title: postTitle.value,
        content: postContent.value,
        author: loggedInUser.fullname,
        time: date,
        isLiked: false
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
    if (arrayName == null) {
        return;
    } else {
        arrayName.forEach((element, index) => {
            theHTMLTag.innerHTML += `
            <div>
                <h3 class='title'>${element.title}</h3>
                <p class='my-content'>${element.content}</p>
                <p>Author: ${element.author}</p>
                <p>Time: ${element.time}</p>                
            </div>
            `
            if (element.isLiked == true) {
                theHTMLTag.innerHTML += `
                <div class='d-flex'>
                    <button id='remove' class="remove btn btn-primary me-2" type="submit" onclick="del(${index})">Delete Post</button>            
                    <div>
                        <input type="button" id='like' class="btn btn-primary" onclick="like(${element.id})" value="Unlike">
                    </div>
                </div>
                `
            } else {
                theHTMLTag.innerHTML += `
                <div class='d-flex'>
                    <button id='remove' class="remove btn btn-primary me-2" type="submit" onclick="del(${index})">Delete Post</button>            
                    <div>
                        <input type="button" id='like' class="btn btn-primary" onclick="like(${element.id})" value="Like">
                    </div>
                </div>
                `
            }
        });
    }
}

//calling the global function to display all the contents in the displayPost array
displayMyContent(displayPost, viewPosts);

//this function when clicked goes back to all display post section
function showAllPosts() {
    createPostSection.style.display = 'none';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "All Posts";
}


//the like function when clicked unshift the post to the top of the array
function like(id) {
    let found = displayPost.find(el => el.id == id);
    if (found.isLiked == false) {
        found.isLiked = true;
        localStorage.setItem("Post", JSON.stringify(displayPost))
        displayMyContent(displayPost, viewPosts);
    } else {
        found.isLiked = false;
        localStorage.setItem("Post", JSON.stringify(displayPost))
        displayMyContent(displayPost, viewPosts);
    }
    console.log(found);
}

//getting all liked post and saving inside the saveLikedPost array
let saveLikedPost = JSON.parse(localStorage.getItem("Post"));


//displaying all the liked posts
function viewLiked() {
    viewLikedPost.style.display = 'block';
    createPostSection.style.display = 'none';
    
    saveLikedPost = displayPost.filter(el => el.isLiked == true);
    console.log(saveLikedPost);
    displayMyContent(saveLikedPost, viewLikedPost);
}

//this function allow users to creates a new post
function createPost() {
    createPostSection.style.display = 'block';
    viewLikedPost.style.display = 'none';
    document.getElementById('vp').innerHTML = "View Posts"
}

//a global function that deletes post from the array through it's index
// function removeItems(theHTMLTag, arrayElement, index) {
//     theHTMLTag.innerHTML = "";
//     arrayElement.splice(index, 1)
// }


//this function deletes from all posts
function del(index) {
    viewPosts.innerHTML = "";
    displayPost.splice(index, 1)
    localStorage.setItem("Post", JSON.stringify(displayPost));
    displayMyContent(displayPost, viewPosts);
}

