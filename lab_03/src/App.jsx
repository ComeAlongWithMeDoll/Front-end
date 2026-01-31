import CounterApp from "./components/CounterApp";
import UserProfileApp from "./components/UserProfileApp";

function App() {
  return (
    <div>
      <h1>Lab 03: React Components and Hooks</h1>

      {/* Компонент props + state */}
      <CounterApp />

      <hr />

      {/* Компонент useEffect и загрузка данных */}
      <UserProfileApp />
    </div>
  );
}

export default App;
