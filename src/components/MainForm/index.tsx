import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {
  const [colorButton, setColorButton] = useState<"green" | "red">("green");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleButtonClick = () => {
    setColorButton((prevColor) => (prevColor === "green" ? "red" : "green"));
  }

  const buttonIcon = {
    green: <PlayCircleIcon />,
    red: <StopCircleIcon />,
  }
  
  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="Tarefa"
          placeholder="Digite sua tarefa"
        />
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={buttonIcon[colorButton]} color={colorButton} onClick={handleButtonClick} />
      </div>
    </form>
  );
}
