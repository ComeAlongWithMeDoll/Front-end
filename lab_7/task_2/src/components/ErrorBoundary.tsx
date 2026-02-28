import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStaterFroError(): State {
        return { hasError: true };
    }

    resetError = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div>
                {this.props.fallback}
                <button onClick={this.resetError}> </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;