import React, { useRef } from 'react';
import { Editor, RichUtils } from 'draft-js';
import { useStyle } from './jobDescription.style';
import { EditorButton } from './editorButton';

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { tooltip: 'Blockquote', iconName: 'format_quote', style: 'blockquote' },
    { tooltip: 'Unordered list', iconName: 'format_list_bulleted', style: 'unordered-list-item' },
    { tooltip: 'Ordered list', iconName: 'format_list_numbered', style: 'ordered-list-item' },
    { tooltip: 'Code Block', iconName: 'code', style: 'code-block' },
];

const INLINE_STYLES = [
    { tooltip: 'Bold', iconName: 'format_bold', style: 'BOLD' },
    { tooltip: 'Italic', iconName: 'format_italic', style: 'ITALIC' },
    { tooltip: 'Underline', iconName: 'format_underline', style: 'UNDERLINE' },
];

const getBlockStyle = (block) => {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
};

const BlockStyleControls = (props) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) => (
                <EditorButton
                    key={type.style}
                    active={type.style === blockType}
                    tooltip={type.tooltip}
                    iconName={type.iconName}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
};

const InlineStyleControls = ({ editorState, onToggle }) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) => (
                <EditorButton
                    key={type.style}
                    active={currentStyle.has(type.style)}
                    tooltip={type.tooltip}
                    iconName={type.iconName}
                    onToggle={onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
};

export const JobDescription = ({ editorState, onChange }) => {
    const classes = useStyle();
    const editor = useRef(null);

    const handleChange = (_editorState) => {
        onChange('editorState', _editorState);
    };

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleChange(newState);
            return true;
        }
        return false;
    };

    const onTab = (e) => {
        const maxDepth = 4;
        handleChange(RichUtils.onTab(e, editorState, maxDepth));
    };

    const toggleBlockType = (blockType) => {
        handleChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    const toggleInlineStyle = (inlineStyle) => {
        handleChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
        }
    }
    return (
        <div className={classes.container}>
            <div className="RichEditor-root">
                <BlockStyleControls editorState={editorState} onToggle={(e) => toggleBlockType(e)} />
                <InlineStyleControls editorState={editorState} onToggle={(e) => toggleInlineStyle(e)} />
                <div className={className} onFocus={() => editor.current.focus()}>
                    <Editor
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        editorState={editorState}
                        handleKeyCommand={(e) => handleKeyCommand(e)}
                        onChange={(e) => handleChange(e)}
                        onTab={(e) => onTab(e)}
                        placeholder="Write a description..."
                        spellCheck
                        ref={editor}
                    />
                </div>
            </div>
        </div>
    );
};
