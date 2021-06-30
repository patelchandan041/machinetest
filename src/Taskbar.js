import React, { useState, useEffect } from 'react'

function Taskbar() {
    const [show,setDhow] = useState(false)
    const [fdata, setFdata] = useState([])
    const [data, setData] = useState([])
    const [user, setUser] = useState({title: "",userId: "",completed: "",});

    useEffect(() => {
        const json = localStorage.getItem("data");
        const loadedData = JSON.parse(json);
        if (loadedData) {
            setData(loadedData);
        }
    }, []);

       useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => setFdata(res))
       })
   
    

    useEffect(() => {
        const json = JSON.stringify(fdata);
        localStorage.setItem("data", json);
    }, [fdata]);
    
    let { title, userId, completed, } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) =>{
        e.preventDefault()
        const newUser = {
          id: Date.now(), title, userId, completed
        }
        setData((oldItems) => {
          return [newUser,...oldItems]
        })
    }
   
    const deleatItems = (id) => {
        console.log(id)
        var newData = data;
        newData.splice(id, 1);
        setData([...newData]);
      }
    

    console.log(data)

    return (
        <div className="taskbar">
          {show?(
            <form className="form" onSubmit={e => onSubmit(e)}>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
    
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter userId"
              name="userId"
              value={userId}
              onChange={e => onInputChange(e)}
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter true or false"
              name="completed"
              value={completed}
              onChange={e => onInputChange(e)}
            />
          <button className="btn btn-primary btn-block" >Submit Task</button>
          </form>
          ):(
            <button style={{margin:"0px 500px"}} onClick={()=>setDhow(true)}>Add task</button>
          )}
         

      <table className="table border shadow">
       
        <tbody>
          {data.map((dat, index) => (
            <tr key={dat.id}>
              <th scope="row">{index + 1}</th>
              <td>{dat.title}</td>
              <td>{dat.completed}</td>
              <td>
              <p className="btn btn-danger" onClick={deleatItems}>deleat</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


        </div>
    )
}

export default Taskbar