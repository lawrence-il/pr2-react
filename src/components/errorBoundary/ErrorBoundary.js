import { Component } from "react/cjs/react.production.min";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <ErrorMessage/>
                    <h2 style={{textAlign: "center"}}>error</h2>
                </>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary;