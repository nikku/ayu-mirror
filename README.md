# ayu-mirror

[![CI](https://github.com/nikku/ayu-mirror/actions/workflows/CI.yml/badge.svg)](https://github.com/nikku/ayu-mirror/actions/workflows/CI.yml)

The [Ayu theme](https://ayutheme.com/) for the [CodeMirror code editor](https://codemirror.net/).


## Usage

```javascript
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';

import { ayuLight } from 'ayu-mirror';

// use as a codemirror extension
const view = new EditorView({
  state: EditorState.create({
    extensions: [
      ...,
      ayuLight
    ]
  })
});
```


## License

MIT