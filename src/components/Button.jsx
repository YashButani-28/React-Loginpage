export default function Button({type,label,onSubmit}){
    return(
        <p className="max-w-28 p-2 text-center bg-[#43b27f] rounded-md text-white hover:bg-[#369b6c]">
<button type={type} onSubmit={onSubmit}>{label}</button>
</p>

    )
}