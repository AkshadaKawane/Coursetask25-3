import { useState } from "react";
import React from "react";
import "./Style.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import './inputfield.css';


function CourseField() {

    const [inputList, setInputList] = useState([{ course: "", topic: "", duration: "", fees: "", subtopic: "" }]);
    const [oNe, setoNe] = useState([{ subtopic: "" }])

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { course: "", topic: "", duration: "", fees: "", subtopic: "" }]);
    };

    // 
    const handleAdd = () => {
        // setoNe([...oNe], { subtopic: "" })
        const values = [...oNe];
        values.push({ value: null });
        setoNe(values);
    }
    const handleRemove = (index) => {
        const list1 = [...oNe];
        list1.splice(index, 1);
        setInputList(list1);
        
    }

    return (
        <div className="app overflow-hidden">
            <div className="  mt-10 mx-20 border-2 border-teal-700 p-3">
                <TextField id="outlined-basic" fullWidth type="text" name="course" label="Enter Course" variant="outlined"
                // value={x.course} onChange={e => handleInputChange(e, i)}
                />
            </div>
            {inputList.map((x, i) => {
                return (

                    <div className="maindiv border-2 md:m-20 border-gray-700   overflow-hidden  ">


                        <div className="container2-3 border-2 border-teal-700 md:m-9  ">
                            <div className="Container2 grid md:grid-cols-3 gap-4 min-w-[50%]  p-3">
                                <TextField id="outlined-basic" type="text" name="topic" label="Enter Topic" variant="outlined" value={x.topic} onChange={e => handleInputChange(e, i)} />
                                <TextField id="outlined-basic" type="text" name="duration" label="Enter Duration" variant="outlined" value={x.duration} onChange={e => handleInputChange(e, i)} />
                                <TextField id="outlined-basic" type="text" name="fees" label="Enter Fees" variant="outlined" value={x.fees} onChange={e => handleInputChange(e, i)} />
                            </div>

                            <div className="Container3  p-3 flex items-center ">
                                <TextField id="outlined-basic" fullWidth type="text" name="subtopic" label="Enter SubTopic" variant="outlined" value={x.subtopic} onChange={e => handleInputChange(e, i)} />
                                <div className="btn  m-8 flex gap-5  p-2">
                                    <Button className="w-20" variant="outlined" color="error" onClick={() => handleRemove()}>-</Button>
                                    <Button className="w-20" variant="outlined" onClick={handleAdd}>+</Button>
                                </div>
                            </div>
                        </div>

                        <div className="btn border-2 border-teal-700  m-9 flex gap-3  p-5">
                            {inputList.length !== 1 && <Button className="p-2 px-3 border w-56" variant="outlined" color="error" onClick={() => handleRemoveClick(i)}>Remove</Button>}
                            {inputList.length - 1 === i && <Button className="w-56" variant="outlined" onClick={handleAddClick}>Add</Button>}
                        </div>

                    </div>
                );
            })}

            
            <div className="border-2 border-teal-700 m-20 p-2">
                <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
            </div>
            
      </div>
    );
}

export default CourseField;


// The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

// method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// useState Hook are use to pass initial state to fun & return a vairable with current state value.

// spread operator use to copy all data of an existing array or obj into another array or obj.