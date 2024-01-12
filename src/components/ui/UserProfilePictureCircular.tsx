
const UserProfilePictureCircular = () => {
    return (
        <div className={`w-[30px] h-[30px] relative`}>
            <img className="w-full h-full rounded-full" src="/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="user profile picture" />
            <span className="bg-green-600 h-[10px] w-[10px] rounded-full block absolute bottom-[0px] right-0 border-[1px] border-white"></span>
        </div>
    )
}

export default UserProfilePictureCircular