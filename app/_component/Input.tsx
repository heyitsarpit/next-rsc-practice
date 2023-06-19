import { ChangeEvent } from "react";

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export function Input({ onChange }: InputProps) {
    return (<input
        onChange={onChange}
        className="bg-gray-800"
        placeholder="what is the name?"
    />)

}