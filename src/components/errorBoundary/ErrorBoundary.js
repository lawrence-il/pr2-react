import { Component } from "react/cjs/react.production.min";

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
            return <h2 style={{textAlign: "center"}}>error</h2>
        } else if (!this.props.children) {
            return null;
        }

        return this.props.children
    }
}

export default ErrorBoundary;