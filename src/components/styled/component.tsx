import * as Case from 'case';
import * as classnames from 'classnames';
import * as React from 'react';

type Colors = 'black' | 'grey';
type FontFamilies = 'sans' | 'mono';
type FontSizes = -1 | 0 | 1 | 2 | 3 | 4 | 5;
type FontWeights = 'medium' | 'bold';

type TailwindProps = {
  [propName: string]: any;
  textColor?: Colors;
  fontFamily?: FontFamilies;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  width?: 0 | 'screen';
  height?: 0 | 'screen';
  padding?: 0 | 1 | 2 | 3 | 4| 5 | 6;
};

interface Props {
  children?: React.ReactNode;
  properties?: TailwindProps;
}

interface State {}

class StyledComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const classes: any = [];

    if (!this.props.properties) {
      return <div />;
    }

    Object.keys(this.props.properties).map((key) => {
      let prefix: string;

      switch (key) {
        case 'padding': prefix = 'p'; break;
        case 'textColor': prefix = 'text'; break;
        case 'fontSize': prefix = 'text'; break;
        case 'fontWeight': prefix = 'font'; break;
        default: prefix = Case.kebab(key);
      }

      if (this.props.properties && this.props.properties[key]) {
        classes[`${prefix}-${this.props.properties[key]}`] = true;
      }

    });

    return (
      <div className={classnames(classes)}>{this.props.children}</div>
    );
  }
}

export const Styled = StyledComponent;
