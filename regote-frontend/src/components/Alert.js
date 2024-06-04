const Alert = (props) => {
    return(
        <div className={"notification is-danger" + props.className} role="alert">
            {props.message}
        </div>
    )
}

export default Alert