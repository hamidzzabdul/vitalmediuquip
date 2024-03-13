import { useState } from 'react';

export const useSunEditorContent = () => {
    const [editorContent, setEditorContent] = useState("");

    const setEditorValue = (value) => {
        setEditorContent(value);
    };

    return { editorContent, setEditorValue };
};
