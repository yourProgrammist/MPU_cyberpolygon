// assets
//import { IconKey } from '@tabler/icons';

// constant
//const icons = {
//  IconKey
//};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

import marked from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

const MarkdownEditor = () => {
  const [text, setText] = useState('');

  const handleTextareaInput = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea id="target" value={text} onChange={handleTextareaInput} />
      <div id="dest" dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </div>
  );
};

export default MarkdownEditor;
