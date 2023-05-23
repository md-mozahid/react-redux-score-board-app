import React from 'react'

const Footer = ({ onChange }) => {
  return (
    <div className="add_match">
      <button className="btn lws-addMatch addBtn" onChange={onChange}>
        Add Another Match
      </button>
      <button className="lws-reset">
        <svg
          fill="none"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        <span className="resetBtn">Reset</span>
      </button>
    </div>
  )
}

export default Footer
