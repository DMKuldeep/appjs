import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState({});
  const [fetchData, setFetchData] = useState([]);
  console.log(data);
  console.log(fetchData);

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (input.sign ==='') {
      alert("fill the feald");
    } else if (input.name==='') {
      alert("fill the feald");
    } else if (input.day ==='') {
      alert("fill the feald");
    } else {
      setData(input);
    }
  };

  useEffect(() => {
    fetch(
      `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${input.sign}&day=${input.day}`
    )
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, [input]);

  return (
    <div className="App">
      <input
        tye="text"
        value={input.sign || ""}
        name="sign"
        onChange={handelChange}
        required
      />
      <input
        tye="text"
        value={input.name || ""}
        name="name"
        onChange={handelChange} required
      />
      <select name="day" onChange={handelChange}>
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
        <option value="Yesterday">Yesterday</option>
      </select>
      <input
        type="email"
        value={input.email || ""}
        name="email"
        onChange={handelChange} required
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default App;
