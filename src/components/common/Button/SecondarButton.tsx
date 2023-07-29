import { ButtonProp } from "./PrimaryButton";

enum ButtonType {
  button = "button",
  submit = "submit",
}

export const SecondaryButton = ({ label, variant, type }: ButtonProp) => {
  return (
    <button className={variant} type={type || ButtonType.button}>
      {label}
    </button>
  );
};
