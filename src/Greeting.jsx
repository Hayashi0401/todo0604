import "tailwindcss"

function Greeting(props){
    console.log("Greeting")
    const {name,greet,onclick} = props
    return <p onclick={()=>onclick()}className="font-bold text-blue-500">{name}さん。{greet}</p>
}
export default Greeting