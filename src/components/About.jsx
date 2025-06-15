import UserClass from "./UserClass"
import User from "./User"
const About = () => {
    return (
    <div>
      <h1> About Page</h1> 
      <User name="vishal" location="delhi" contact="vishalawana117@gmail.com"/>
      <br/>
      <UserClass name="akash" location="karnal" contact="akashrana@117@gmail.com"/>
      <UserClass name="shekhar" location="bartha" contact="shekhar@117@gmail.com"/>
    </div>
    )
}
export default About;