import { Card } from 'react-bootstrap'
import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';

type ErrorHandlerProps = Readonly<PropsWithChildren<{
  location?: typeof window.location;
  console?: typeof window.console;
}>>;

type ErrorHandlerState = {
  hasError: boolean;
};

class ErrorHandler extends Component<ErrorHandlerProps, ErrorHandlerState> {
  public constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): ErrorHandlerState {
    return { hasError: true };
  }

  public componentDidCatch(e: Error): void {
    const { console = globalThis.console } = this.props;
    console.error(e);
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    const { location = globalThis.location } = this.props;

    if (hasError) {
      return (
        <div className="home">
          <Card className="p-4" border="danger" body={true}>
            <Card.Title>Well fuck...this is awkward... 😖</Card.Title>
            <Card.Body>
              <p>It seems that something got fucked up. Try refreshing the page or just click this button.</p>
              <br />
            </Card.Body>
            <Card.Footer>
              <Button outline color="primary" onClick={() => location.reload()}>Take me back</Button>
            </Card.Footer>
          </Card>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}


export default class ErrorHandlerRoute extends Component<ErrorHandlerProps, ErrorHandlerState> {
  public constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = { hasError: false };
  }
  public render(): ReactNode {
    return <ErrorHandler {...this.props} />;
  }
}