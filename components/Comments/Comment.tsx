import CommentCards from './CommentCards'
function Comment() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="text-xl text-yellow-300 font-semibold pb-4 lg:mx-20 mx-3 ">
        Comments
      </div>
      <CommentCards />
    </section>
  )
}

export default Comment
