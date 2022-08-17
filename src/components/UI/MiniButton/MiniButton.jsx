import classes from './MiniButton.module.scss'

const MiniButton = props =>{
    return(
        <div className={props.className ? classes[props.className]: classes['Mini-button']} onClick={props.onClick}>
            <img src={props.img} alt={''} />
        </div>
       
    )
}
export default MiniButton