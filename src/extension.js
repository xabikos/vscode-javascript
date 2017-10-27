'use strict';

const vscode = require('vscode');

const resolveSnippets = require('./snippets');

const EXTENSION_ID = 'snippets-javascript';

const languageSelector = [
  'javascript', // language identifier
  'typescript',
  'javascriptreact',
  'typescriptreact',
  'html'
];
let registeredSnippetProvider = undefined;

class SnippetItem extends vscode.CompletionItem {
  constructor(snippet) {
    super(snippet.prefix, vscode.CompletionItemKind.Snippet);

    this.insertText = new vscode.SnippetString(snippet.body);
    this.detail = snippet.description;
  }
}

class SnippetProvider {
  constructor(snippets) {
    this.snippets = snippets;
  }

  provideCompletionItems() {
    return Object.keys(this.snippets).map(
      name => new SnippetItem(this.snippets[name])
    );
  }
}

/** Activates extension on an emitted event. Invoked only once. */
exports.activate = context => {
  let configuration = vscode.workspace.getConfiguration(EXTENSION_ID);
  const semi = configuration.get('semi');

  registeredSnippetProvider = registerSnippetProvider(semi);

  const changedConfigurationListener = vscode.workspace.onDidChangeConfiguration(
    () => {
      const previousConfiguration = configuration;
      configuration = handleChangedConfiguration(previousConfiguration);
    }
  );

  context.subscriptions.push(
    registeredSnippetProvider,
    changedConfigurationListener
  );
};

function handleChangedConfiguration(previousConfiguration) {
  const configuration = vscode.workspace.getConfiguration(EXTENSION_ID);
  const semi = configuration.get('semi');

  if (previousConfiguration.get('semi') !== semi) {
    registeredSnippetProvider = registerSnippetProvider(semi);
  }

  return configuration;
}

function registerSnippetProvider(semi) {
  if (registeredSnippetProvider) {
    registeredSnippetProvider.dispose();
  }

  const snippets = resolveSnippets(semi);
  const provider = vscode.languages.registerCompletionItemProvider(
    languageSelector,
    new SnippetProvider(snippets),
    '*'
  );

  return provider;
}
