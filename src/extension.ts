import * as vscode from 'vscode';
import { ConverterFunction } from './converter_function';
import uppercase from "./case/uppercase";
import lowercase from "./case/lowercase";

export function activate(context: vscode.ExtensionContext) {
  const applyConverter = (convert: ConverterFunction) => {
    const editor = vscode.window.activeTextEditor;
    const selections = editor?.selections;
    if (!selections) {
      return;
    }
    editor?.edit(builder => {
      for (const selection of selections) {
        let text = editor?.document.getText(selection);
        if (text) {
          text = convert(text);
          builder.replace(selection, text);
        }
      }
    });
  };

  const registerCommand = (command: string, converter: ConverterFunction) => {
    let disposable = vscode.commands.registerCommand(command, () => {
      applyConverter(converter);
      vscode.window.showInformationMessage('vscode-convert exected');
    });
    context.subscriptions.push(disposable);
  };

  registerCommand('vscode-convert.uppercase', uppercase);
  registerCommand('vscode-convert.lowercase', lowercase);
}

// this method is called when your extension is deactivated
export function deactivate() {}
