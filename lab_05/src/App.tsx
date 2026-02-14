import UserCard from "./UserCard";
import SkillList from "./SkillList";
import SearchApp from "./SearchApp";
import type { Skill } from "./types";
import type { User } from "./types";

const user: User = {
  name: "John Doe", 
  email: "John@mail.com",
  age: 28,
};

const skills: Skill[] = [
  { id: 1, name: "React", level: "Expert" },
  { id: 2, name: "TypeScript", level: "Intermediate" },
  { id: 3, name: "CSS", level: "Beginner" },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
    <SearchApp />  

      <hr style={{ margin: "30px 0" }} />
      <UserCard user={user} isActive>
        <p> Status: Available for work </p>
      </UserCard>

      <h3> Skills </h3>
      <SkillList skills={skills} />
    </div>
  );
}

export default App;