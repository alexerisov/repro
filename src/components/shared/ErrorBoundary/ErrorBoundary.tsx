import React from "react";

import log from "loglevel";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    log.error({ error, errorInfo });
    this.setState(
      {
        error: error,
        errorInfo: errorInfo
      },
      () => {
        if (process?.env?.NODE_ENV !== "development") {
          this.props.router.push({
            pathname: "/500",
            query: {
              error: JSON.stringify(error),
              errorInfo: JSON.stringify(errorInfo)
            }
          });
        }
      }
    );
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
