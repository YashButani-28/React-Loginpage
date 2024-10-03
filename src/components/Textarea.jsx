export default function Textarea({label,name,placeholder,inputValue,onChange}){
    return (

        <p className="flex flex-col gap-2">
 <label className="text-white ">{label}</label>
 <textarea className="rounded-md h-10 p-2 outline-none" name={name} placeholder={placeholder} value={inputValue} onChange={onChange}></textarea>
        </p>
    )
}