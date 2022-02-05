module.exports = {


    posts: [
        {id: 'kfis',
    title:'Teste do Mural',
    description:'descrição teste'},
    
    ],

getAll(){return this.posts;},
//retorna todos os posts

newPost(title,description){
    this.posts.push({id: generateID(),title,description})
},

deletePost(idPexclusao){
this.posts = this.posts.filter((itemDentroDoArray)=>{
    return itemDentroDoArray.id !== idPexclusao
})
},



editPost(title, newTitle){
    this.posts.filter((itemDentroDoArray)=>{
       
        if(itemDentroDoArray.title == title){itemDentroDoArray.title = newTitle;
        }
        
    })

},
}
function generateID(){
    return Math.random().toString(36).substr(2,9) /* 36 = ter letras e numeros*/
}
 