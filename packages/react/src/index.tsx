import * as React from 'react';

type Props = {
  id: String | Number;
};

export const DianomiContextFeedReact = ({ id }: Props) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dev.dianomi.com/js/contextfeed.js';
    script.async = true;
    script.type = 'module'
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="dianomi_context"
      data-dianomi-context-id={id}
    />
  );
};
