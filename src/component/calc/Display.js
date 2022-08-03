import React,{useState,useEffect}  from "react";
import axios from "axios";
import "./styles/Display.css";

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };


  // const [doctor, setDoctor] = useState({
  //   id: ''
  // })

  // const changeHandler = (e)=> {
  //     setDoctor({...doctor, [e.target.name]: e.target.value})
  // }


  // const [prod, setProd] = useState([])
  // useEffect(async () =>{
  //     const res = await axios.get('http://localhost:5000/doctor')
  //     setProd(res.data)
  //     console.log(prod)
  // },[])

  return (
    <>
      <div className="display">
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={7}
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="value"
              value={input}
              placeholder="0"
              maxLength={7}
              disabled
            />
            <input
              type="text"
              name="value"
              className="input"
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;