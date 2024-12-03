import * as React from 'react';
import invariant from 'tiny-invariant';

export interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  /**
   * @required
   */
  id: number | string;
  /**
   * @default 'standard'
   */
  type?: 'standard' | 'appleNews';
}

export const DianomiContextFeed = (props: Props) => {
  const type = props.type || 'standard';
  React.useEffect(() => {
    const script = document.createElement('script');
    const src = `https://${
      process.env.NODE_ENV === 'production' ? 'www' : 'dev'
    }.dianomi.com/js/contextfeed${
      type === 'appleNews' ? '/apple-news' : ''
    }.js`;
    script.src = src;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [type, props.id]);
  invariant(props.id, 'DianomiContextFeedReact: id is required');

  return (
    <div
      key={props.id + type}
      className="dianomi_context"
      {...props}
      id={props.id.toString()}
      data-dianomi-context-id={props.id}
    />
  );
};
