export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://thisisbac.herokuapp.com/api/v1/account/626be33f2c25850bf06079c5')
    const users = await res.json()
    return {
      props: {
        users,
      },
    }
  }

const test = ({users}: any) => {
  console.log(users.namespace)
    return(
      <>
        <div>{users.namespace}</div>
      </>  
    ) 
}

export default test