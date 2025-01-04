import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ShowsPage.scss'

function ShowsPage() {
  const { id } = useParams();
  console.log(id)
  return (
    <section>
      <h1>shows</h1>
    </section>
  )
}

export default ShowsPage