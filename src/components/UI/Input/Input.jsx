import classes from './Input.module.css'

const Input = props =>{
    return(
       <>
       <div className={classes['Input']}>
            <img alt='поиск' src='/icons/search.svg'/>
            <input placeholder={props.placeholder} onChange={props.onChange}/>
       </div>
       </>
     )
}
export default Input