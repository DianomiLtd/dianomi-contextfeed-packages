import * as React from 'react';
import invariant from 'tiny-invariant';

export interface DianomiContextfeedProps
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

export const DianomiContextFeed = (props: DianomiContextfeedProps) => {
  const type = props.type || 'standard';
  React.useEffect(() => {
    const script = document.createElement('script');
    const src = `https://${
      process.env.NODE_ENV === 'production' ? 'www' : 'dev'
    }.dianomi.com/js/contextfeed${
      type === 'appleNews' ? '/apple-news' : ''
    }.js`;
    script.src = src;
    script.type = 'module';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [type, props.id]);
  invariant(props.id, 'DianomiContextFeedReact: id is required');

  return (
    <div
      key={props.id + type}
      {...props}
      className="dianomi_context"
      id={props.id.toString()}
      data-dianomi-context-id={props.id}
    />
  );
};
