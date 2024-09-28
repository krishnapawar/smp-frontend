const Button =(props)=>{
    return <button 
        className={`button ${props.className || "blue"}`}
        type={props.type || 'button'}
        onClick={props.onClick ||  "" }
    >
        {props.name || "Button"}
    </button>;
}

export default Button;