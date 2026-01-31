const Greeting = () => {
    const currentHour = new Date().getHours();

    let greeting = '';
    let color = '';

    if (currentHour >= 6 && currentHour < 12) {
        greeting = 'Good Morning';
        color = 'orange';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting= 'Good Afternoon';
        color = 'green';
    } else {
        greeting = 'Good Evening';
        color = 'blue';
    }

    const textStyle = {
        color: color,
        fontSize: '24px',
        fontWeight: 'bold',
    };

    return <h1 style={textStyle}>{greeting}</h1>;
};

export default Greeting;