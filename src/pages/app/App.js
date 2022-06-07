import "./App.css";
import { HowItWorks } from "./howItWorks/howItWorks";
import { Main } from "./main/main";
import { Header } from "./header/header";

export function App() {
  return (
    <div>
      <Header />
      <Main />
      <HowItWorks />
    </div>
  );
}
