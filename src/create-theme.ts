import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting, TagStyle } from '@codemirror/language';

type Variant = 'dark' | 'light';

type Settings = {
  background: string;
  foreground: string;
  caret: string;
  selection: string;
  selectionActive: string;
  lineHighlight: string;
  gutterHighlight: string;
  gutterBackground: string;
  gutterForeground: string;
  searchMatch: string;
  searchMatchSelected: string;
  selectionMatch: string;
};

const createTheme = ({ variant, settings, styles } : {
  variant: Variant,
  settings: Settings,
  styles: TagStyle[]
}) => {
  const theme = EditorView.theme({

    '&': {
      backgroundColor: settings.background,
      color: settings.foreground,
    },
    '.cm-content': {
      caretColor: settings.caret,
    },
    '.cm-cursor, .cm-dropCursor': {
      borderLeftColor: settings.caret,
    },
    '.cm-selectionBackground': {
      backgroundColor: settings.selection,
    },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, ::selection': {
      backgroundColor: settings.selectionActive,
    },
    '.cm-activeLine': {
      backgroundColor: settings.lineHighlight,
    },
    '.cm-gutters': {
      backgroundColor: settings.gutterBackground,
      color: settings.gutterForeground,
    },
    '.cm-activeLineGutter': {
      backgroundColor: settings.lineHighlight,
      color: settings.gutterHighlight
    },
    '.cm-searchMatch': outline({
      color: settings.searchMatch
    }),
    '.cm-searchMatch-selected': {
      backgroundColor: settings.searchMatchSelected
    },
    '.cm-selectionMatch': outline({
      color: settings.selectionMatch
    })
  }, {
    dark: variant === 'dark',
  });
  const highlightStyle = HighlightStyle.define(styles);
  const extension = [ theme, syntaxHighlighting(highlightStyle) ];
  return extension;
};

function outline({ color } : { color: string }) {
  return {
    backgroundColor: 'transparent',
    borderRadius: '2px',
    boxShadow: `0 0 0 .5px ${color}`
  };
}

export default createTheme;