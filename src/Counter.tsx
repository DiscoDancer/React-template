import * as React from "react";

class Counter extends React.Component<{}, { count: number }> {
    public interval: number;

    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    public componentDidMount() {
        this.interval = window.setInterval(
            () => this.setState((prevState) => ({ count: prevState.count + 1 })),
            200,
        );
    }

    public generateString1() {
        // you can update this method, and it will work
        return "1";
    }

    public generateString2 = () => {
        // this one will not
        return "1";
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        return (<span>{this.state.count} - {this.generateString1()} - {this.generateString2()}</span>);
    }
}

export default Counter;
