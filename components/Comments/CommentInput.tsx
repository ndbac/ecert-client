import React, { useState } from 'react'

const CommentInput: React.FC<{
  onSubmit: (text: string) => void
  comment: string
  title: string
  cancelBtn: boolean
  handleCancel?: () => void
}> = (props) => {
  const [comment, setComment] = useState(props.comment)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim().length > 0) {
      setComment(e.target.value)
    }
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!comment) return
    props.onSubmit(comment)
    setComment('')
  }

  return (
    <div className="lg:mx-20 mx-3 pb-12">
      <form className="relative">
        <div className="mb-2 rounded-3xl overflow-hidden">
          <textarea
            className="
              form-control
              outline-none
              block
              w-full
              px-8
              py-4
              text-md
              text-gray-700
              bg-white bg-clip-padding"
            placeholder="Your message"
            value={comment}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="absolute right-6 bottom-5 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <button
            className="px-5 py-2 text-sm font-semibold  bg-yellow-400 hover:bg-yellow-600 rounded-2xl transition duration-200"
            onClick={handleSubmit}
          >
            {props.title}
          </button>
          {props.cancelBtn && (
            <button
              className="px-5 py-2 ml-3 text-sm font-semibold  bg-yellow-400 hover:bg-yellow-600 rounded-2xl transition duration-200"
              onClick={props.handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default CommentInput
