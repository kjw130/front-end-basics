function DashboardPage(){
    const fakeData = {name: "John", email: "Email"}
    return(
        <div>
            <h1>
                Hi {fakeData.name}
            </h1>

            <h1>
                Your email is: {fakeData.email}
            </h1>

            <button onClick={()=>{console.log('You have been logged out.')}}>Logout</button>

        </div>
    )
}




export default DashboardPage