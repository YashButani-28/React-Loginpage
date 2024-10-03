import InputType from "./InputType.jsx";
import Textarea from "./Textarea.jsx";
import CheckBox from "./CheckBox.jsx";
import UploadFile from "./UploadFile.jsx";
import Button from "./Button.jsx";

import { useState } from "react";

export default function Login() {


  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    education: "",
    positionApplied: "",
    skills: "",
    experience: "",
    expectedSalary: "",
  });

  const [candidateDetails,setCandidateDetails]=useState([])



  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevValues) => ({
      ...prevValues,
      [name]: value,
      
    }));
  };

  function storeCandidateDetails(event){
event.preventDefault();

    setCandidateDetails((prevCandidates) => [
        ...prevCandidates,
        { ...inputValue }, ])

        console.log([
            ...candidateDetails,
            { ...inputValue },
          ]);

        
        setInputValue({
            fullName: "",
            email: "",
            contactNumber: "",
            education: "",
            positionApplied:"",
            skills: "",
            experience: "",
            expectedSalary: "",
          });
          

  }

  return (
    <div className="flex flex-col w-full items-center">
      <form onSubmit={storeCandidateDetails}  className="mt-8 flex flex-col gap-6 justify-center">
        <h1 className="text-white text-3xl">Please Enter Candidate details</h1>

        <InputType
          type="text"
          name="fullName"
          label="Full Name:"
          placeholder="Name"
          inputValue={inputValue.fullName}
          onChange={handleValueChange}
        />
        <InputType
          type="email"
          name="email"

          label="Email:"
          placeholder="Email"
          inputValue={inputValue.email}
          onChange={handleValueChange}
        />
        <InputType
          type="tel"
          name="contactNumber"
          label="Contact Number:"
          placeholder="Contact Number"
          inputValue={inputValue.contactNumber}
          onChange={handleValueChange}
        />
        <Textarea label="Education:" placeholder="Education" name="education" inputValue={inputValue.education}
          onChange={handleValueChange}/>
        <CheckBox label="Position Applied For:" name="positionApplied" value={inputValue.positionApplied} 
          onChange={handleValueChange}/>
        <Textarea label="Skills:" placeholder="Skills" name="skills" inputValue={inputValue.skills}
          onChange={handleValueChange}/>
        
        <InputType
          type="number"
          name="experience"
          label="Years of Experience:"
          placeholder="Experience"
          inputValue={inputValue.experience}
          onChange={handleValueChange}
        />
        <InputType
          type="number"
          name="expectedSalary"
          label="Expected Salary:"
          placeholder="Expected Salary (Monthly)"
          inputValue={inputValue.expectedSalary}
          onChange={handleValueChange}
        />
        <UploadFile />
        <Button type="submit" label="Submit" />


    


      </form>
    </div>
    
  );
}
