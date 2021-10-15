import { FunctionComponent } from "react";

export const Button: FunctionComponent<ButtonProps> = (props) => {

    return (
        <button className="rounded-lg py-3 px-2 bg-white text-gray-800 hover:bg-gray-100">
            {props.title}
        </button>
    );
}

type ButtonProps = {
    title: string
}
