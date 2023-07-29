import Link from "next/link";

export interface ButtonProp {
  label: string;
  variant: ButtonVariant;
  link?: string;
  type?: ButtonType;
}

enum ButtonType {
  button = "button",
  submit = "submit",
}
export enum ButtonVariant {
  primary = "flex w-[146px] h-[48px] rounded-full bg-secondary text-primary items-center justify-center text-base font-semibold  ",
  secondary = "flex w-[146px] h-[48px] rounded-full bg-primary text-secondary items-center justify-center font-semibold ",
}
export const PrimaryButton = ({ label, variant, type, link }: ButtonProp) => {
  return (
    <Link className={variant} href={link || ""}>
      {label}
    </Link>
  );
};
