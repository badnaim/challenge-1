import React from "react"
import "../../styles/page.css"
import { useParams } from "react-router-dom"

export default function Page() {
  const id = useParams();
  return (
    <div className="page">
      Page {id.id}
    </div>
  )
}