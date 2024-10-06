export default function Stats({heading, text}){
    return (
        <div>
            <div className="h-60 w-60 bg-red-50 m-8 p-10 space-y-10 ">
                <h1>{heading}</h1>
                <p> {text} </p>
            </div>
        </div>
    )
}