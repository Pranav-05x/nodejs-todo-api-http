const http=require('http')
const url=require('url')

let todos=[]
let currentId=0
const server=http.createServer((req,res)=>{
     const parsedUrl=url.parse(req.url,true)
     const path=parsedUrl.pathname
     const method=req.method
     const query=parsedUrl.query
    
     if(path==='/create/todo'&& method==='POST'){
          let body=''
          req.on('data',(chunk)=>{
              body+=chunk
          })

          req.on('end',()=>{
             const todo=JSON.parse(body)
             todos.push({
                id:currentId++,
                title:todo.title,
                description:todo.description
             })
               res.writeHead(200,{'Content-Type':'application/json'})
               res.end(JSON.stringify(todos))
          })
     }

     if(path==='/todos' && method==='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(todos))
     }

     if(path==='/todo' && method==='GET'){
        const id=query.id
        let todo=todos.find(todo=>todo.id==id)

        if(!todo){
            res.writeHead(404,{'Content-Type':'application/json'})
            return res.end(JSON.stringify({
                message:'Todo not found'
            }))
        }
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(todo))
          
     }

     if(path==='/todo' && method==='DELETE'){
         let id=query.id
         let todo=todos.find(todo=>todo.id==id)

            if(!todo){
                res.writeHead(404,{'Content-Type':'application/json'})
                return res.end(JSON.stringify({
                    message:'Todo not found'
                }))
            }
            todos=todos.filter(todo=>todo.id!=id)
            res.writeHead(200,{'Content-Type':'application/json'})
             return res.end(JSON.stringify({
                    message:'Todo deleted succesfully'
             }))
     }
})

server.listen(3000)