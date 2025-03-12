import "./css/Usercard.css"

const UserData = [
    {name:"Santhosh Kumar",
        city:"Chennai",
        description:"Fullstack Developer",
        skills:["html","css","Bootstrap", "Javascript", "React", "Python", "Sql"],
        online: false,
        profile :"image/1.jpg"

    },

    {name:"Sanjay Kumar",
        city:"Chennai",
        description:"Business man",
        skills:["Trading","Team Captain","Cricketer", "Footballer", "Helping mind", "Card Player", "Good person"],
        online: true,
        profile :"image/2.jpeg"

    },

    {name:"Jai Vignesh",
        city:"Chennai",
        description:"UI/UX Designer",
        skills:["UI/UX","PowerPoint","Cricketer", "Excell", "Little mental", "Talented", "Good person"],
        online: false,
        profile :"image/3.jpeg"

    }
]


function User(props){
return (
    <div className="container">
        <span className={props.online ? "pro online":"pro offline"}>{props.online? "ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="User" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="Button">
            <button className="message" onClick={()=> alert("hello world")}>message</button>
            <button className="Following">
                following
            </button>
        </div>
        <div className="skill">
            <h6>
                Skills
            </h6>
            <ul>
              {props.skills.map((skill,index) => (<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
)
}

export const UserCard = () => {
  return (
    
      <>
      {UserData.map((user,index)=>(<User key={index} 
      name={user.name}
      city ={user.city}
      description={user.description}
      skills={user.skills}
      online ={user.online}
      profile={user.profile}/>))} 
      </>  // <User name="Santhosh kumar" city ="Chennai" description ="Full stack Developer" skills={["html","css","Bootstrap", "Javascript", "React", "Python", "Sql"]} online= {true} profile="image/1.jpg">
   
  )
}
