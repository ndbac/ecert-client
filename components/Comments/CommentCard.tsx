import React, { useState } from 'react'
import Image from 'next/image'
import TeamCircle06 from '../../public/images/team-circle6.png'
import CommentInput from './CommentInput'
import { CommentCard } from '../../redux/modules/comment/interface/comment.interface'
const CommentCard: React.FC<CommentCard> = (props) => {
  const [toggle, setToggle] = useState(false)
  const [edit, setEdit] = useState(false)
  const handleToggle = () => {
    setToggle((toggle) => !toggle)
  }
  const handleEdit = () => {
    setEdit(true)
  }
  const handleOnUpdate = (text: string) => {
    setEdit(false)
    props.onUpdate(text, props.id)
  }
  return (
    <>
      <div className="mb-2 rounded-3xl overflow-hidden lg:mx-20 mx-3">
        <div className="pt-5 md:pb-1 pb-0 px-4 md:px-16 bg-white">
          <div className="flex flex-wrap items-center">
            <div className="flex items-center">
              <div className="w-14 mr-5">
                <Image
                  className="rounded-full object-cover"
                  src={TeamCircle06}
                  alt=""
                />
              </div>
              <h4 className="w-full md:w-auto text-xl font-heading font-medium truncate">
                {props.userId}
              </h4>
            </div>

            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
            <span className="mr-4 mf:text-xl text-sm font-heading font-medium">
              5.0
            </span>
            <div className="inline-flex">
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block mr-1" href="#">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
              <a className="inline-block text-gray-200" href="#">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                    fill="#FFCB00"
                  ></path>
                </svg>
              </a>
            </div>
            {props.show && (
              <div
                className="ml-auto cursor-pointer relative px-2"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
                {toggle && (
                  <div className="shadow-md absolute bg-white px-2 md:left-0 -left-10 rounded-lg">
                    <div
                      className="flex text-sm items-center py-1 justify-between hover:opacity-50"
                      onClick={props.onRemove}
                    >
                      Remove
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                    <div
                      className="flex text-sm items-center py-1 justify-between hover:opacity-50"
                      onClick={handleEdit}
                    >
                      Edit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="px-4 overflow-hidden md:px-16 pt-2 pb-4 bg-white">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <p className="md:mb-4 mb-2 max-w-2xl text-darkBlueGray-400 md:leading-loose">
                {props.text}
              </p>
            </div>
            <div className="w-full md:w-1/3 text-right">
              <p className="md:mb-4 mb-2 text-sm text-gray-500">
                {props.createdAt}
              </p>
            </div>
          </div>
          <div className="flex justify-end cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
      </div>

      {edit && (
        <CommentInput
          onSubmit={handleOnUpdate}
          comment={props.text}
          title="Update"
          cancelBtn={true}
          handleCancel={() => setEdit(false)}
        />
      )}
    </>
  )
}

export default CommentCard
