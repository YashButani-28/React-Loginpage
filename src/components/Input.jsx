import { useState } from "react"



export default function Input(){

    const[inputValue,setInputValue]=useState(null);


    function handleValueChange(event){
        setInputValue(event.target.value)
    }
    function handleEmailValueChange(event){
        setInputValue(event.target.value)
    }


    return (
        <div className="mt-8 flex flex-col gap-6 justify-center">
              <h1 className="text-white text-3xl">Please Enter Candidate details</h1>
        <p className="flex flex-col gap-2">
 <label className="text-white ">Full Name:</label>
 <input type="text" placeholder="Name"  required value={inputValue} onChange={handleFullNameValueChange} className="  rounded-md h-10 p-2 outline-none"/>
        </p>

        <p className="flex flex-col gap-2">
 <label className="text-white ">Email:</label>
 <input type="email" placeholder="Email" required value={inputValue} onChange={handleEmailValueChange}   className=" rounded-md h-10 p-2 outline-none"/>
        </p>

        <p className="flex flex-col gap-2">
 <label className="text-white">Contact Number:</label>
 <input type="tel" placeholder="Contact Number"  value={inputValue} required className="  rounded-md h-10 p-2 outline-none"/>
        </p>

        
        <p className="flex flex-col gap-2">
 <label className="text-white ">Education:</label>
 <textarea className="  rounded-md h-10 p-2 outline-none"  value={inputValue} name="education" id="education" placeholder="Degree, Institution, Year"></textarea>
        </p>


        <p className="flex flex-col gap-2">
 <label className="text-white ">Position Applied For:</label>
 <select id="position" name="position" required  value={inputValue} className="  rounded-md h-10 p-2 outline-none">
    <option value="">Select a position</option>
    <option value="developer">Developer</option>
    <option value="Designer">Designer</option>
    <option value="Sales & Marketing">Sales & Marketing</option>
    <option value="HR Executive">HR Executive</option> 
  </select>
        </p>    

        
        <p className="flex flex-col gap-2">
 <label className="text-white ">Skills:</label>
 <textarea className="  rounded-md h-10 p-2 outline-none" value={inputValue} name="skills" id="skills" placeholder="Skills"></textarea>
        </p>

        <p className="flex flex-col gap-2">
 <label className="text-white ">Years of Experience:</label>
 <input type="number" required min={0} placeholder="Experience" value={inputValue} className="  rounded-md h-10 p-2 outline-none"/>
        </p>


        
        <p className="flex flex-col gap-2">
 <label className="text-white">Expected Salary:</label>
 <input type="number" placeholder="Expected Salary (Monthly)" value={inputValue} required className=" rounded-md h-10 p-2 outline-none"/>
        </p>

        <p className="flex flex-col gap-2">
 <label className="text-white">Upload Resume:</label>
 <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx,.txt" className=" rounded-md h-10 p-2 outline-none text-white"/>
        </p>

        
<p className="max-w-28 p-2 text-center bg-[#43b27f] rounded-md">
<button type="submit">Submit</button>
</p>


        </div> 
       
    )
}