import React from 'react'
import { useSelector } from 'react-redux';

const Box = () => {
	const count = useSelector(state =>state.count)
	const id = useSelector(state => state.id)
	const password = useSelector(state => state.password)
  return (
	<div>
		<div>
		  Box:{count}
		</div>
		<div>id: {id}</div>
		<div>password: {password}</div>
	</div>)
}

export default Box
