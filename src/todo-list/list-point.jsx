import PropTypes from 'prop-types'
const listStyle = {
    gridTemplateColumns: '1fr 6fr',
    display: 'grid',
}
const span = {
    verticalAlign: 'middle',
}
const  ListPoint = ({no, toDo}) => {
  return(
    <>
        <li style={listStyle}>
            <span style={span}>{no}</span>
             <p>{toDo}</p>
        </li>
        
    </>
  )
}
ListPoint.propTypes = {
  no : PropTypes.number,
toDo : PropTypes.string

}

export default ListPoint;