// Dvdlist.jsx
import React, { useState, useEffect } from "react";

const Dvdlist = (props) => {
  const [dvdData, setDvdData] = useState(null);
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setDvdData(response));
  }, [props]);
  return (
    <div>
      <ul>
        {
          // このあたり編集
          dvdData === null ? (
            <p>now loading...</p>
          ) : (
            dvdData.data.items.map((x, index) => (
              <li key={index}>{x.volumeInfo.title}</li>
            ))
          )
        }
      </ul>
    </div>
  );
};
export default Dvdlist;