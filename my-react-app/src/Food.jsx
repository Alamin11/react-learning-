function Food() {
    const food1 = 'Egg';
    const food2 = 'date';
    return (
        <ul>
            <li>Honey</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food