import React from 'react'

function Button({children, color}) {
	return (
		<button style={{ background: color, color: 'white'}}>{children}</button>
	)
}

export default Button