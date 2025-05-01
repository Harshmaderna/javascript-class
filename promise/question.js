// q1 Use Promise.all to fetch data from multiple APIs and process results only if all succeed.
// // Simulate API calls
// const fetchUser = () => Promise.resolve("User data");
// const fetchPosts = () => Promise.resolve("Post data");
// const fetchComments = () => Promise.resolve("Comment data");

// const fetchUser = () => Promise.resolve("User data");
// const fetchPosts = () => Promise.resolve("Post data");
// const fetchComments = () => Promise.resolve("Comment data");

//    Promise.all([fetchUser(), fetchPosts(), fetchComments()])
//    .then(([x, y, z]) => {
//     console.log(x,y,z)
//    })

//    .catch((error) => {
//     console.log("error fetched", error)
//    })

// const fetchUser = () => Promise.resolve("User data");
// const fetchPosts = () => Promise.resolve("Post data");
// const fetchComments = () => Promise.resolve("Comment data");
// const fetchAllData = async () => {
//     try {
//         const [user, post, comments] = await Promise.all([
//             fetchUser(),
//             fetchPosts(),
//             fetchComments()

//         ]);
//         console.log(user)
//         console.log(post)
//         console.log(comments)
//     } catch (error) {
//         console.log("error fetching", error)
//     }
// }

// fetchAllData();

const fetchUser = () => Promise.resolve("User")
const fetchPost = () => Promise.resolve("Post")
const fetchComment = () => Promise.resolve("Comment")

const fetchAllData = async () => {
    try {
        const [user, post, comment] = await Promise.all([
            fetchUser(),
            fetchPost(),
            fetchComment()
        ])
        console.log("data fetching...")
        setTimeout(() => {
            console.log(user,"data")
        },2000);
        setTimeout(() => {
            console.log(post,"data")
        },3000);
        setTimeout(() => {
            console.log(comment,"data")
        },4000);
        setTimeout(() => {
            console.log("data fetched successfully!")
        },5000)
    } catch (error) {
      console.log(error)  
    }
}

fetchAllData()


// q2   Use Promise.allSettled to log the result of all API calls regardless of success or failure.
// const p1 = Promise.resolve("A resolved");
// const p2 = Promise.reject("B failed");
// const p3 = Promise.resolve("C resolved");

// const p1 = Promise.resolve("A resolved");
// const p2 = Promise.reject("B failed");
// const p3 = Promise.resolve("C resolved");

// const data = Promise.allSettled([p1, p2, p3])
// data.then((data) => {
//     console.log(data)
// })

//q3 Use Promise.race and Promise.any to handle timeouts and partial success.
// const fast = new Promise(res => setTimeout(() => res("Fast success"), 100));
// const slow = new Promise(res => setTimeout(() => res("Slow success"), 500));
// const error = new Promise((_, rej) => setTimeout(() => rej("Error!"), 200));

// const fast = new Promise(res => setTimeout(() => res("Fast success"), 100));
// const slow = new Promise(res => setTimeout(() => res("Slow success"), 500));
// const error = new Promise((_, rej) => setTimeout(() => rej("Error!"), 200));

// const ans = Promise.any([fast, slow, error])
// ans.then((data) => {
//     console.log(data)
// })

// const datas = Promise.race([fast, slow, error])
// datas.then((res) => {
//     console.log(res)
// })

// function doSomething() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Other things to do before completion of the promise
//         console.log("Did something");
//         // The fulfillment value of the promise
//         resolve("https://example.com/");
//       }, 200);
//     });
//   }



