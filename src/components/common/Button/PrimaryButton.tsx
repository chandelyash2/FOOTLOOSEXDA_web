import Link from 'next/link'
import TopArrow from '../icons/TopArrow'

export interface ButtonProp {
  label: string
  variant: ButtonVariant
  link?: string
  type?: ButtonType
  children?:React.ReactNode
}

enum ButtonType {
  button = 'button',
  submit = 'submit',
}
export enum ButtonVariant {
  primary = 'flex w-[160px] px-4 h-[50px] rounded-full bg-secondary text-primary items-center justify-center text-base font-semibold ',
  secondary = 'flex w-[146px] h-[48px] rounded-full bg-primary text-secondary items-center justify-center font-semibold ',
}
export const PrimaryButton = ({ label, variant, type, link ,children}: ButtonProp) => {
  return (
    <Link className={variant} href={link || ''}>
      {label} {children}
    </Link>
  )
}
