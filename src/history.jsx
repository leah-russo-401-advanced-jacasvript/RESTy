//need to be able to display what was entered into the form
// need to repopulate the form from this history



function History ( {stored} ) {
  
   // let items = 'No History';


  return (
    <ul>
      {stored.map(item=> <li key={Math.random()}>{item.method}, {item.url}</li>)}
    </ul>
  )

}

export default History;