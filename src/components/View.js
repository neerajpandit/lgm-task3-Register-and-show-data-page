import React from 'react'

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.isbn}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
           
            
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
            
            </td>           
        </tr>            
    
))
}
