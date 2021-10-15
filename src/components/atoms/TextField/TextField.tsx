import React, { HTMLInputTypeAttribute, useState } from "react";

export const TextField: React.FunctionComponent<TextFiledProps> = (props) => {

    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="input" className="text-white text-xl mb-3">{props.title}</label>
            <input type={props.type} 
                id="input" 
                className="rounded-xl px-3 py-2" 
                placeholder={props.placeholder}
                value={value}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

type TextFiledProps = {
    placeholder: string,
    value: string,
    title: string,
    type: HTMLInputTypeAttribute
}


