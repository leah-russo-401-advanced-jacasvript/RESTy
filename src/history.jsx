//need to be able to display what was entered into the form
// need to repopulate the form from this history



function History (props) {
  
   // let items = 'No History';
  async function handleClick(event) {
    let method = event.target.innerText.split(',')[0]
    await props.setState({ method: method });
    let url = event.target.innerText.split(',')[1].split(' ')[1]
    await props.setState({ url: url })

  }

  return (
    <ul>
      {props.stored.map((item,i)=> <li value={item.method + item.url} onClick={handleClick} key={i}>{item.method}, {item.url}</li>)}
    </ul>
  )

}

export default History;