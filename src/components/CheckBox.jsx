export default function CheckBox({label,name,onChange,value}){
    return (
        <p className="flex flex-col gap-2">
 <label className="text-white ">{label}</label>
 <select required className="rounded-md h-10 p-2 outline-none" onChange={onChange} name={name} value={value}>
    <option value="">Select a position</option>
    <option value="developer">Developer</option>
    <option value="Designer">Designer</option>
    <option value="Sales & Marketing">Sales & Marketing</option>
    <option value="HR Executive">HR Executive</option> 
  </select>
        </p>    
    )
}