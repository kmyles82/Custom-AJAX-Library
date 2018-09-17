const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

//synchronous way ES5
// function createPost() {
//     //demostration purposes - mimic server reponse time
//     setTimeout(function (post) {
//         posts.push(post)
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function () {
//         let output = '';

//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         })

//         document.body.innerHTML = output;
//     },1000)
// }

//asynchronous way ES5 using Promise
// function createPost(post) {
//     return new Promise(function (resolve, reject) {
//         //demostration purposes - mimic server reponse time
//         setTimeout(function () {
//             posts.push(post)
//             const error = false;

//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);    
//     })
    
// }

// function getPosts() {
//     setTimeout(function () {
//         let output = '';

//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         })

//         document.body.innerHTML = output;
//     },1000)
// }


// createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(function (error) {
//     console.log(error)
// });
// getPosts();




//GET request with text and json file using fetch
document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getExternal);

//get local text file
function getText() {
    fetch('test.txt').then(function (res) {
        return res.text();
    }).then(function (data) {
        document.querySelector('#output').innerHTML = data;
    }).catch(function (err) {
        console.log(err)
    });
}

//get local json file
function getJson() {
    
    fetch('post.json').then(function (res) {
        return res.json();
    }).then(function (data) {
        
        let output = '';
        
        data.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });

        document.querySelector('#output').innerHTML = output;
    }).catch(function (err) {
        console.log(err)
    });
}

//get from external API
function getExternal() {
    
    fetch('https://api.github.com/users').then(function (res) {
        return res.json();
    }).then(function (data) {
        
        let output = '';
        
        data.forEach(function (user) {
            output += `<li>${user.login}</li>`;
        });

        document.querySelector('#output').innerHTML = output;
    }).catch(function (err) {
        console.log(err)
    });
}