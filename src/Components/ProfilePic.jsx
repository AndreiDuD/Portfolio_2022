function ProfilePic() {
  return (
    <div className="fixed mt-20">
      <img
        src="./profile.jpg"
        alt="profile image"
        className="h-screen object-cover"
      />
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/70 rounded-xl z-10
            "
      />
    </div>
  );
}

export default ProfilePic;
