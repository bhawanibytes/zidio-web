import  Header  from "../../components/header"
import Stats from "./component/stats"

export default function About() {
    return (
      <div>
        <Header/>
        About page
        <div className="flex">
          {/* component example  */}
        <Stats heading={"card 1"} text={'texxt 1'}/>
        <Stats  heading={"card 2"} text={'texxt 2'}/>
        <Stats  heading={"card 3"} text={'texxt 3'}/>
        <Stats  heading={"card 4"} text={'texxt 4'}/>
        </div>
      </div>
    )
}