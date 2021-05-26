const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city"/>
        <button>Get weather</button>
    </form>
);

export default Form;