import React from 'react'
import { TbError404Off } from "react-icons/tb"
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="stylesError">
        <h1 >¡Page Not Found: Error 404!</h1>
        <TbError404Off fontSize="25em" color="red" />
    </div>
  )
}

export default ErrorPage