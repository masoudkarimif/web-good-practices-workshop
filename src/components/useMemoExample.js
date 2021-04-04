import React, { useMemo, useState } from "react"

const Time = ({ desc }) => {
  return <h4>{desc + ": " + new Date().getUTCMilliseconds()}</h4>
}

export default () => {
  const [unrelated, setUnrelated] = useState(0)
  const [related, setRelated] = useState(0)
  const efficientTime = useMemo(() => <Time desc="using useMemo" />, [related])

  return (
    <>
      {efficientTime}
      <Time desc="w/o useMemo" />
      <button className="button" onClick={() => setUnrelated(unrelated + 1)}>
        Change some unrelated state
      </button>
      <p>unrelated state: {unrelated}</p>
      <button className="button" onClick={() => setRelated(related + 1)}>
        Change the related state
      </button>
      <p>related state: {related}</p>
    </>
  )
}
