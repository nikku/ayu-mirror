import { expect } from 'chai';

import { feel } from 'lang-feel';
import { basicSetup } from 'codemirror';

import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';

import { ayuLight } from 'ayu-mirror';


type EnvWindow = {
  __env__?: {
    SINGLE_START?: string
  }
};

const singleStart = (window as EnvWindow).__env__?.SINGLE_START === '1';


describe('basic', function() {

  let parent: HTMLDivElement;

  beforeEach(function() {

    parent = document.createElement('div');
    parent.setAttribute('style', 'width: 600px; border: solid 1px #CCC');

    document.body.appendChild(parent);
  });


  (singleStart ? it.only : it)('should configure editor', function() {
    const doc = `{
  add: function(fruit, vegetable) [ fruit, vegetable ],
  woo: every a in b satisfies a > b,
  "oop": if size(foo[> 10]) then "woop" else [ 1..20 ],
  sa: [ true, false, 100.12, @"abc-def", date and time("abc-def") ],
  result: (
    for
      fruit in [ "apple", "bananas" ],
      vegetable in vegetables
    return
      // return something special here
      {
        ingredients: add(fruit, vegetable)
      }
  )
}.result.aa(asd)`;

    const view = new EditorView({
      state: EditorState.create({
        doc,
        extensions: [
          basicSetup,
          ayuLight,
          feel({ dialect: 'expression' })
        ]
      }),
      parent
    });

    view.focus();

    // then
    expect(view).to.exist;
  });

});