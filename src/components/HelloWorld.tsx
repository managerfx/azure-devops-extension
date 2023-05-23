import * as React from 'react';

export interface IHelloWorldProps {
  name: string;
}

export const HelloWorld: React.FunctionComponent<IHelloWorldProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
