
//sempre que o conteudo for atualizado...

document.addEventListener('DOMContentLoaded', ()=>{updatePosts();
})
function updatePosts(){
    //(url, option)
fetch("http://192.168.1.12:3000/api/all").then(res=>{return res.json()})
.then( 
    json=>{
//JSON string
 //json
//JSON objeto (assim podendo coletar as informações)
let posts = JSON.parse(json);
console.log(posts);

let postElements = "";



posts.forEach((post)=>{
    let postElement = `
    <div class="card mb-4 text-dark" id=${post.id}>
    <div class="card-header ">
        <h5 class="card-title">${post.title} 
        <button onclick="deletePost('${post.id}')" class="btn btn-light float-right" >&times;</button>
        <button onclick="editPost('${post.title}')" class="btn btn-light float-right" >Edit</button>
        </h5>
    </div>
    <div class="card-body">
        <div class="card-text">${post.description}</div>
    </div>
</div>`

postElements += postElement;
})


document.getElementById("posts").innerHTML = postElements;
})
}
//======================================


function deletePost(id){
   

    fetch("http://192.168.1.12:3000/api/del/"+id,{method: "DELETE"} ).then(res=>{
        console.log(res);
        updatePosts();
    })

}

function editPost(title){
   
    var newTitle = document.getElementById('inputEdit').value ;
    fetch("http://192.168.1.12:3000/api/edit/"+title+"/"+newTitle,{method: "POST"} ).then(res=>{
        console.log(res);
        updatePosts();
    })
}

function newPost(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;
    
    let post = {
        title,description
    };

   

const options = {
    method:"POST",
    headers: new Headers({'content-type':'application/json'}),
    body:JSON.stringify(post)
    //precisa passar body como string
}
    fetch("http://192.168.1.12:3000/api/new", options).then(res=>{
        console.log(res);
        updatePosts();
        document.getElementById('title').value = "";
        document.getElementById('desc').value = "";
    })


}