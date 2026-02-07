import RegistrationForm from "./components/RegistrationForm";
import ArticleManager from "./components/ArticleManager";

function App() {
  return (
    <div style={{ justifyContent:"center", alignItems:"center" }}>
      <RegistrationForm />
      <hr />
      <ArticleManager />
    </div>
  );
}

export default App;
