
function Tool({name,bike})
{
    // const name = props.name;
    // const bike = props.bike;
    return(
        <div>
            <h1>My Name is {name}.</h1>
            <p>My Favorite Bike is {bike}.</p>
        </div>
    );
}

Tool.defaultProps={
    name :"Ram",
    bike:"bajaj"
}
export default Tool