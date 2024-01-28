import React from 'react'

export default function Footer() {
  let footerstyle = {
    // position: "relative",
    // top: "93vh",
    width: "100%"
  };
  return (
    <footer className='bg-dark text-light py-2' style={footerstyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
