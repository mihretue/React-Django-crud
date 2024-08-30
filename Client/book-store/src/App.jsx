import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ books, setBook] = useState([])
  const [title, setTitle]= useState("")
  const [releaseYear, setReleaseYear] = useState(0)


  useEffect(
    () => {
      fetchBooks()
      },[]
  )
  const fetchBooks = async ()=>{
    try{
      const response = await fetch('http://127.0.0.1:8000/api/book/')
      const data = await response.json()
      setBook(data)
    } catch(err){
      console.log(err)
    }

  }


const createBook = async (e)=>{
  e.preventDefault()
  //creating object for the input data
  const bookData ={
    title:title,
    received_date:releaseYear
  }
  
        const response = await fetch('http://127.0.0.1:8000/api/book/create/',
          {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(bookData)
          }
        )
        if(response.ok){
          const data = await response.json()
          console.log(data)

          //to authomatically fetching the created data
          setBook((prev)=>[...prev, data])
        }
        else{
          console.log("Error")
          }
}
  return (
    <>
      <div>
        <input type='text' placeholder='Book Title'  onChange={(e)=>setTitle(e.target.value)} />
        <input typep='text' placeholder='Book Received Date' onChange={(e)=>setReleaseYear(e.target.value)}/>
        <button onClick={createBook}>Submit</button>
      </div>
      
        {books.map((book)=>(  
          <div>
            <p >{book.title}</p>
            <p>{book.received_date}</p>
          </div>
        ))}
    </>
  )
}

export default App
