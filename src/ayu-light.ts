import { tags as t } from '@lezer/highlight';
import createTheme from './create-theme.js';

export const ayuLight = createTheme({
  variant: 'light',
  settings: {
    background: '#FCFCFC',
    foreground: '#5C6166',
    caret: '#FFAA33',
    selection: '#035BD612',
    selectionActive: '#035BD626',
    gutterBackground: '#FCFCFC',
    gutterForeground: '#828E9F66',
    lineHighlight: '#828E9F1A',
    gutterHighlight: '#828E9FCC',
    selectionMatch: '#FFE294',
    searchMatch: '#FFE294',
    searchMatchSelected: '#FFE294'
  },
  styles: [
    {
      tag: t.comment,
      color: '#ADAEB1',
    },
    {
      tag: t.string,
      color: '#86b300',
    },
    {
      tag: t.regexp,
      color: '#4cbf99',
    },
    {
      tag: [ t.number, t.bool, t.null ],
      color: '#ffaa33',
    },
    {
      tag: t.variableName,
      color: '#5C6166',
    },
    {
      tag: t.function(t.definition(t.variableName)),
      color: '#A37ACC'
    },
    {
      tag: [ t.definitionKeyword, t.modifier ],
      color: '#FA8532',
    },
    {
      tag: [ t.keyword, t.special(t.brace) ],
      color: '#FA8532',
    },
    {
      tag: t.operator,
      color: '#F2A191',
    },
    {
      tag: [ t.punctuation ],
      color: '#5C6166',
    },
    {
      tag: [ t.function(t.variableName) ],
      color: '#EBA400',
    },
    {
      tag: t.derefOperator,
      color: '#F2A191'
    },
    {
      tag: [ t.className, t.definition(t.typeName) ],
      color: '#22a4e6',
    },
    {
      tag: [ t.tagName, t.typeName, t.self, t.labelName ],
      color: '#55b4d4',
    },
    {
      tag: t.angleBracket,
      color: '#55b4d480',
    },
    {
      tag: t.attributeName,
      color: '#EBA400',
    },
  ],
});