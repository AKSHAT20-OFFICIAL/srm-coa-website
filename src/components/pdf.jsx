import {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'

const MyComponent = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/pdftron_about.pdf',
      },
      viewer.current,
    ).then((instance) => {
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
};
 export default MyComponent;