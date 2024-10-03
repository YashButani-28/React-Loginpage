export default function UploadFile({accept=".pdf,.doc,.docx,.txt"}){

return(

    <p className="flex flex-col gap-2">
 <label className="text-white">Upload Resume:</label>
 <input type="file" accept={accept} className=" rounded-md h-10 p-2 outline-none text-white"/>
        </p>
)
}