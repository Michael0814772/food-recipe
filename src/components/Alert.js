const Alert = ({error}) => {
    return (
        <div className="alert">
            {error && <h3>No data found</h3>}
        </div>
    );
}
 
export default Alert;
