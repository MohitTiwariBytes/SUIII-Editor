require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('container'), {
        value: [
            'function helloWorld() {',
            '\tconsole.log("Hello to whoever reading this, Welcome to a very ugly looking editor Suiiii Editor, It uses Monaco Editor, and also Created by Mohit Tiwari Dev!");',
            '}'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark',
        fontSize: 14,
        lineNumbers: true,
        minimap: { enabled: true },
        automaticLayout: true
    });

    monaco.editor.defineTheme('custom-theme', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ token: 'comment', foreground: '00FF00' }],
        colors: { 'editor.foreground': '#FFFFFF' }
    });
    monaco.editor.setTheme('custom-theme');

    
});
