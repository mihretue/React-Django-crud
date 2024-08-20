import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ book, setBook] = useState([])
  useEffect(
    () => {
      fetchBook()
      },[]
  )
  const fetchBook = async ()=>{
    try{
      const response = await fetch('http://127.0.0.1:8000/api/book/')
      const data = response.json()
      setBook(data)
    } catch(err){
      console.log(err)
    }

  }

  return (
    <>
      <div>
        <input type='text' placeholder='Book Title'/>
        <input typep='text' placeholder='Book Received Date'/>
        <button >Submit</button>
      </div>
      <div>
        {book.map(()=>{
          return (<>
            <div >{book.title}</div>
            <div>{book.received_date}</div>
            </>
          )

        })}
      </div>
    </>
  )
}

export default App
