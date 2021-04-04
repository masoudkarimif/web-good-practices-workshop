import React, { useReducer, useState } from "react"
import {
  BadPracticeHeader,
  GoodPracticeHeader,
} from "./good-bad-practice-headers"

const dummyProfile = {
  name: "Ingenuity",
  type: "Helicopter",
  address: "Mars",
}

const style = {
  p: {
    marginBottom: 0,
  },
}

export default () => {
  const confirmReducer = (state, action) => {
    setConfirmationInProgress(false)
    switch (action.type) {
      case "delete":
        return ""
      case "cancel":
        return state
    }
  }

  const [profile, setProfile] = useState(dummyProfile)
  const [confirmationInProgress, setConfirmationInProgress] = useState(false)

  const [goodProfile, dispatch] = useReducer(confirmReducer, dummyProfile)

  const badPractice = () => {
    setProfile("")
  }
  const goodPractice = () => {
    setConfirmationInProgress(true)
  }
  return (
    <section>
      <BadPracticeHeader />
      <p style={style.p}>{JSON.stringify(profile)}</p>
      <button onClick={badPractice} className="button button-red">
        Delete Profile
      </button>
      <GoodPracticeHeader />
      <p style={style.p}>{JSON.stringify(goodProfile)}</p>
      {!confirmationInProgress ? (
        <button onClick={goodPractice} className="button button-red">
          Delete Profile
        </button>
      ) : (
        <p>
          Are you sure? This action is irreversible!{" "}
          <button
            onClick={() => dispatch({ type: "delete" })}
            className="button button-red"
          >
            Delete anyway
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => dispatch({ type: "cancel" })}
            className="button button-blue"
          >
            Cancel
          </button>
        </p>
      )}
    </section>
  )
}
