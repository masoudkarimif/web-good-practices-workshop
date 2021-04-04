import React, { useState } from "react"
import {
  BadPracticeHeader,
  GoodPracticeHeader,
} from "./good-bad-practice-headers"

export default () => {
  const [loading, setLoading] = useState(false)
  const [badResult, setBadResult] = useState("")
  const [goodResult, setGoodResult] = useState("")
  const buttonTitle = "Fetch Data"
  const result = "Fetched Data"

  const sendReq = () => {
    fetch("http://someendpoint.com/movies.json")
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const someProcess = (withLoading = true) => {
    sendReq()
    if (withLoading) {
      setLoading(true)
      setGoodResult("")
    } else {
      setBadResult("")
    }
    setTimeout(() => {
      setLoading(false)
      withLoading ? setGoodResult(result) : setBadResult(result)
    }, 5000)
  }
  return (
    <section>
      <BadPracticeHeader />
      <p>
        <button className="button" onClick={() => someProcess(false)}>
          {buttonTitle}
        </button>
        <span>{badResult}</span>
      </p>
      <GoodPracticeHeader />
      <p>
        <button
          disabled={loading}
          className={`button ${loading ? "loading" : ""}`}
          onClick={someProcess}
        >
          {loading ? "Fetching..." : buttonTitle}
        </button>
        <span>{goodResult}</span>
      </p>
    </section>
  )
}
