const ProfileCard = () => {
    const name = 'Akhmetov Andrey';
    const bio = '3d sculptor and music artist';
    const imageUrl = 'https://avatars.mds.yandex.net/i?id=f31470a9cd4f3c646532ab9096b09a5a_l-5213696-images-thumbs&n=13'

    const cardStyle = {
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        textAlign: "center" as const,
        fontFamily: "Arial",
    };


    const imageStyle = {
        width: '150px',
        borderRadius: '50%',
        marginBottom:'10px',
    };

    const buttonStyle = {
        marginTop: '10px',
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
    };

    return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Profile" style={imageStyle} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <button style={buttonStyle}>Follow</button>
    </div>
  );
};

export default ProfileCard