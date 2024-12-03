import * as React from 'react';
import invariant from 'tiny-invariant';

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  id: number | string;
  type?: 'standard' | 'appleNews';
}

export const DianomiContextFeed = (
  props: Props = { type: 'standard', id: '' }
) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    const src = `https://${
      process.env.NODE_ENV === 'production' ? 'www' : 'dev'
    }.dianomi.com/js/contextfeed${
      props.type === 'appleNews' ? '/apple-news' : ''
    }.js`;
    script.src = src;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  invariant(props.id, 'DianomiContextFeedReact: id is required');

  return (
    <div
      className="dianomi_context"
      {...props}
      id={props.id.toString()}
      data-dianomi-context-id={props.id}
    />
  );
};
