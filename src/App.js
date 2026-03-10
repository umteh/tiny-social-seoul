import React from 'react';

function App() {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    const contentUrl = new URL('./content.html', import.meta.url);

    fetch(contentUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        return response.text();
      })
      .then(setContent)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return React.createElement('div', {
    dangerouslySetInnerHTML: { __html: content }
  });
}

export default App;
