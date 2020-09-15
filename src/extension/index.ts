import * as vscode from 'vscode';
import { frSchemaGenProvider } from './frSchemaGen';
import { frSchemaEditProvider } from './frSchemaEdit';
import { frSchemaEditorProvider } from './frSchemaEditor';

export function activate(context: vscode.ExtensionContext) {
  // Register our custom editor providers
  context.subscriptions.push(frSchemaGenProvider.register());
  context.subscriptions.push(frSchemaEditProvider.register());
  context.subscriptions.push(frSchemaEditorProvider.register(context));
}
