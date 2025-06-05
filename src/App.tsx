import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Ola mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptates
        sint numquam est vel in reprehenderit, laborum obcaecati recusandae
        magni voluptatem similique asperiores deleniti ut possimus alias atque
        quaerat consequuntur.
      </p>
    </>
  );
}
