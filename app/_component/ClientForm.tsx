"use client";

import { Input } from "./Input";
import { serverAction } from "./serverAction";
import { useState, useTransition } from 'react'

type ClientFormProps = {
  name: string;
  handle: string;
};

export function ClientForm({ handle, name }: ClientFormProps) {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState("")
  const [isError, setIsError] = useState(false)

  function validate() {
    return (input === name)
  }

  function submit() {
    if (validate()) {
      startTransition(() => serverAction(input))
    } else {
      setIsError(true)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        handle is {handle} and name is {name}
      </div>

      {/* <Input onChange={e => {
        setIsError(false)
        setInput(e.target.value)
      }} /> */}
      <input
        value={input}
        onChange={e => {
          setIsError(false)
          setInput(e.target.value)
        }}
        className="bg-gray-800"
        placeholder="what is the name?"
      />

      <button
        type="button"
        className="bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 active:bg-blue-400"
        onClick={submit}
      >{isPending ? "Submitting" : "Submit"}</button>

      {isError ?
        <div className="text-red-400">validation error</div>
        : null}
    </div>
  );
}
