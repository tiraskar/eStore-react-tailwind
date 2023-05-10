import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTopMenu } from '../redux/actions/topMenu'

const Navbar = (props) => {
  return (
    <div className='container bg-slate-500  group '>
      <ul className='flex flex-row space-x-10 ml-20 p-2 text-xl text-white '>
        {props.state.topMenu.map((item, index) => (
          <li key={index} className='hover:text-red-500'>
            {/* <a href='#'>{item}</a> */}
            <Link to='/'>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { state }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMenu: dispatch(getTopMenu()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
