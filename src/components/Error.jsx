import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <h1>OOPS</h1>
            <p>Something went wrong</p>
            <p>{err.status}: {err.statusText}</p>
        </div>
    );
}
export default Error;