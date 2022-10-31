import useFetch from "./fetch"

const Profile = () => {
   const { data, loading } = useFetch('http://localhost:8088/ownedInstrumentals')
    return <nav className="profile">
        <h1>Profile</h1>
        <div className="soundRelationship"></div>
    </nav>
}

export default Profile