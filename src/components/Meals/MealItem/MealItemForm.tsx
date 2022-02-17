import { MutableRefObject, useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import "./MealItemForm.css";

interface IMealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm = (props: IMealItemFormProps) => {
  const [amountIsvalid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef<HTMLInputElement>(null) as MutableRefObject<HTMLInputElement>;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value; //always string
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid && <small>Please enter a valid amount (1-5).</small>}
    </form>
  );
};

export default MealItemForm;
