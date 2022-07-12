import "./ProgressBar.css"

const ProgressBar = ({value,max}) =>{
return(
    <progress  value={value}  max={max}/>
)
}
ProgressBar.defaultProps = {
    max : 100,
}

export  default ProgressBar ;