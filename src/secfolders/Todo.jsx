import React, { useState } from "react";
import  './todo.css'

export default function App() {
    const [text, setText] = useState([]);
    const [newText, setnewText] = useState("");
    const [count, setcount] = useState(0);

    const addelem = () => {
        if (newText !== "") {
            const newtext = [...text, { elem: newText, completed: false }];
            setText(newtext);
            setnewText("");
            setcount(count + 1);
        }
    };

    const handleonDelete = (index) => {
        const newtext = [...text];
        if (!newtext[index].completed) {
            setcount(count - 1);
        }
        newtext.splice(index, 1);
        setText(newtext);
    };

    const handleonComplete = (index) => {
        const newtext = [...text];
        newtext[index].completed = true;
        setText(newtext);
        count>0 && setcount(count - 1 );
        
    };

    return (
        <div className="outer-main">
            <div className="main-box">
                <div>
                    <div className="task-bar">Pending Task  ({count})</div>
                    {text.map((elem, index) => (
                        <div key={index} className="task-item">
                            {elem.completed ? (
                                <s>{elem.elem}</s>
                            ) : (
                                elem.elem
                            )}
                            <button className="complete-btn" onClick={() => handleonComplete(index)}>Complete</button>
                            <button className="delete-btn" onClick={() => handleonDelete(index)}>Delete</button>
                        </div>
                    ))}
                </div>
                <div className="input_container">
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setnewText(e.target.value)}
                
                />
                <button style={{backgroundColor:'blue',borderRadius:'4px',padding:'2px 4px'}}onClick={addelem}>Add</button>
                </div>
            </div>
        </div>
    );
};